import { Resend } from "resend";
import type { ApplicationRecord, ContactMessageRecord } from "./types";

const ADMIN_TO = "info@thm.co.ke";
const ADMIN_CC = [
  "janipher@thm.co.ke",
  "sotieno@thm.co.ke",
  "thm-kisumu@thm.co.ke",
];

function unwrapEnv(value: string | undefined): string {
  if (!value) return "";
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function mailConfigured(): boolean {
  return Boolean(unwrapEnv(process.env.RESEND_API_KEY));
}

function fromAddress(): string {
  return (
    unwrapEnv(process.env.RESEND_FROM) ||
    unwrapEnv(process.env.SMTP_FROM) ||
    `THM Admissions <${ADMIN_TO}>`
  );
}

export function isMailConfigured() {
  return mailConfigured();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function definitionList(entries: ReadonlyArray<readonly string[]>) {
  const rows = entries.filter(
    (entry): entry is [string, string] =>
      entry.length >= 2 && Boolean(entry[0]) && Boolean(entry[1]),
  );

  if (rows.length === 0) {
    return `<p style="margin:0;color:#5e5466;">None</p>`;
  }

  return rows
    .map(
      ([key, value]) =>
        `<tr>
          <td style="padding:6px 12px 6px 0;vertical-align:top;color:#5e5466;font-size:13px;white-space:nowrap;">${escapeHtml(key)}</td>
          <td style="padding:6px 0;vertical-align:top;color:#1e1326;font-size:14px;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");
}

function brandedEmail(options: { preheader?: string; title: string; body: string }) {
  const preheader = options.preheader
    ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(options.preheader)}</div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(options.title)}</title>
  </head>
  <body style="margin:0;padding:0;background:#fcf8e6;font-family:Arial,Helvetica,sans-serif;color:#1e1326;">
    ${preheader}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fcf8e6;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #ede7f0;">
            <tr>
              <td style="background:#702f99;padding:24px 28px;">
                <p style="margin:0;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:#f8bc0a;font-weight:700;">Therapeutic Hands Management</p>
                <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;color:#fcf8e6;">${escapeHtml(options.title)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;font-size:15px;line-height:1.65;color:#1e1326;">
                ${options.body}
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 28px;font-size:12px;line-height:1.6;color:#5e5466;">
                <p style="margin:0;padding-top:16px;border-top:1px solid #ede7f0;">
                  Therapeutic Hands Management<br />
                  New Waumini House, Nairobi · Kisumu campus<br />
                  <a href="mailto:info@thm.co.ke" style="color:#702f99;">info@thm.co.ke</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendMail(options: {
  to: string | string[];
  cc?: string | string[];
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}) {
  const apiKey = unwrapEnv(process.env.RESEND_API_KEY);
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromAddress(),
    to: options.to,
    ...(options.cc ? { cc: options.cc } : {}),
    subject: options.subject,
    text: options.text,
    ...(options.html ? { html: options.html } : {}),
    ...(options.replyTo ? { replyTo: options.replyTo } : {}),
  });

  if (error) {
    throw new Error(error.message);
  }
}

function applicationRows(app: ApplicationRecord) {
  const d = app.data;
  return [
    ["Application ID", app.id],
    ["Full name", app.fullName],
    ["Email", app.email],
    ["Phone", app.phone],
    ["Preferred campus", app.campus],
    ["ID / Passport", d.idNumber],
    ["Date of birth", d.dateOfBirth],
    ["Gender", d.gender],
    ["Religion", d.religion],
    ["Nationality", d.nationality],
    ["County of origin", d.countyOfOrigin],
    ["Current residence", d.currentResidence],
    ["Medical condition", d.hasMedicalCondition],
    ["Medical details", d.medicalConditionDetails],
    ["Father", [d.fatherName, d.fatherPhone, d.fatherEmail].filter(Boolean).join(" · ")],
    ["Mother", [d.motherName, d.motherPhone, d.motherEmail].filter(Boolean).join(" · ")],
    ["Other NOK", [d.otherNokName, d.otherNokPhone, d.otherNokEmail].filter(Boolean).join(" · ")],
    ["Fee payer", d.feePayer],
    ["Education", [d.educationLevel, d.gradeAttained, d.schoolName, d.yearCompleted].filter(Boolean).join(" · ")],
    ["Referral", d.referralSource],
    ["Signature", d.signature],
  ] as const;
}

export async function emailApplicationToAdmin(app: ApplicationRecord) {
  if (!mailConfigured()) {
    console.warn("RESEND_API_KEY missing; skipping admin notification email.");
    return;
  }

  const rows = applicationRows(app);
  const text = rows.map(([k, v]) => `${k}: ${v || "—"}`).join("\n");
  const html = brandedEmail({
    preheader: `New Caregiver II application from ${app.fullName}`,
    title: "New Caregiver II application",
    body: `
      <p style="margin:0 0 16px;">A new admission application was submitted on the website.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">${definitionList(rows)}</table>
    `,
  });

  await sendMail({
    to: ADMIN_TO,
    cc: ADMIN_CC,
    subject: `New Caregiver II application — ${app.fullName} (${app.campus || "campus TBD"})`,
    text,
    html,
    replyTo: app.email || undefined,
  });
}

export async function emailApplicationConfirmation(app: ApplicationRecord) {
  if (!mailConfigured()) {
    console.warn("RESEND_API_KEY missing; skipping applicant confirmation email.");
    return;
  }

  if (!app.email) return;

  const first = app.data.firstName || "Applicant";
  const html = brandedEmail({
    preheader: "We received your Caregiver II application",
    title: "Application received",
    body: `
      <p style="margin:0 0 12px;">Dear ${escapeHtml(first)},</p>
      <p style="margin:0 0 12px;">Thank you for applying to Therapeutic Hands Management's NITA Caregiver II programme.</p>
      <p style="margin:0 0 12px;">Our admissions team will contact you at <strong>${escapeHtml(app.phone || app.email)}</strong> to confirm your application and document submission.</p>
      <p style="margin:0;">Reference: <strong>${escapeHtml(app.id)}</strong></p>
    `,
  });

  await sendMail({
    to: app.email,
    subject: "THM — We received your Caregiver II application",
    text: `Dear ${first},\n\nThank you for applying to THM Caregiver II. We will contact you soon.\nReference: ${app.id}\n`,
    html,
    replyTo: ADMIN_TO,
  });
}


function contactRows(msg: ContactMessageRecord) {
  return [
    ["Message ID", msg.id],
    ["Name", msg.name],
    ["Email", msg.email],
    ["Phone", msg.phone],
    ["Subject", msg.subject],
    ["Message", msg.message],
  ] as const;
}

export async function emailContactToAdmin(msg: ContactMessageRecord) {
  if (!mailConfigured()) {
    console.warn("RESEND_API_KEY missing; skipping contact notification email.");
    return;
  }

  const rows = contactRows(msg);
  const text = rows.map(([k, v]) => `${k}: ${v || "—"}`).join("\n");
  const html = brandedEmail({
    preheader: `New contact message from ${msg.name}`,
    title: "New contact form message",
    body: `
      <p style="margin:0 0 16px;">Someone wrote through the website contact form.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">${definitionList(rows)}</table>
    `,
  });

  await sendMail({
    to: ADMIN_TO,
    cc: ADMIN_CC,
    subject: `Contact form — ${msg.subject} (${msg.name})`,
    text,
    html,
    replyTo: msg.email || undefined,
  });
}

export async function emailContactConfirmation(msg: ContactMessageRecord) {
  if (!mailConfigured()) {
    console.warn("RESEND_API_KEY missing; skipping contact confirmation email.");
    return;
  }

  if (!msg.email) return;

  const first = msg.name.split(/\s+/)[0] || "there";
  const html = brandedEmail({
    preheader: "We received your message",
    title: "Message received",
    body: `
      <p style="margin:0 0 12px;">Dear ${escapeHtml(first)},</p>
      <p style="margin:0 0 12px;">Thank you for contacting Therapeutic Hands Management. We received your message and will reply shortly.</p>
      <p style="margin:0;">Reference: <strong>${escapeHtml(msg.id)}</strong></p>
    `,
  });

  await sendMail({
    to: msg.email,
    subject: "THM — We received your message",
    text: `Dear ${first},\n\nThank you for contacting THM. We received your message and will reply shortly.\nReference: ${msg.id}\n`,
    html,
    replyTo: ADMIN_TO,
  });
}
