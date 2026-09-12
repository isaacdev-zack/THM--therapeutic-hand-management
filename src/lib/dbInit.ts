import bcrypt from "bcryptjs";
import { db } from "./db";
import type { AdmissionFormData } from "@/types/admission";
import type {
  ApplicationPayload,
  ApplicationRecord,
  ContactMessageRecord,
  ContactPayload,
} from "./types";

let seeded = false;

export async function ensureDatabase() {
  if (!process.env.DATABASE_URL || !db) {
    throw new Error("DATABASE_URL is not configured");
  }

  await db.query(`
    CREATE TABLE IF NOT EXISTS applications (
      id TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      campus TEXT,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      data JSONB NOT NULL DEFAULT '{}'::jsonb
    );
  `);

  await db.query(`
    CREATE INDEX IF NOT EXISTS idx_applications_created_at
    ON applications (created_at DESC);
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      subject TEXT,
      message TEXT NOT NULL
    );
  `);

  await db.query(`
    CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
    ON contact_messages (created_at DESC);
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  if (seeded) return;

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.warn("ADMIN_EMAIL / ADMIN_PASSWORD not set; skipping admin seed.");
    seeded = true;
    return;
  }

  const { rows } = await db.query(
    "SELECT id FROM admin_users WHERE username = $1",
    [adminEmail],
  );
  if (rows.length === 0) {
    const passwordHash = await bcrypt.hash(adminPassword, 10);
    await db.query(
      "INSERT INTO admin_users (username, password_hash) VALUES ($1, $2)",
      [adminEmail, passwordHash],
    );
    console.log(`Admin seeded: ${adminEmail}`);
  }

  seeded = true;
}

function asAdmissionData(value: unknown): AdmissionFormData {
  return (value && typeof value === "object" ? value : {}) as AdmissionFormData;
}

export function rowToApplication(row: {
  id: string;
  created_at: Date | string;
  campus: string | null;
  full_name: string;
  email: string;
  phone: string | null;
  data: unknown;
}): ApplicationRecord {
  return {
    id: row.id,
    createdAt: new Date(row.created_at).toISOString(),
    campus: row.campus || "",
    fullName: row.full_name,
    email: row.email,
    phone: row.phone || "",
    data: asAdmissionData(row.data),
  };
}

export function rowToContact(row: {
  id: string;
  created_at: Date | string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
}): ContactMessageRecord {
  return {
    id: row.id,
    createdAt: new Date(row.created_at).toISOString(),
    name: row.name,
    email: row.email,
    phone: row.phone || "",
    subject: row.subject || "General inquiry",
    message: row.message,
  };
}

export async function saveApplication(
  payload: ApplicationPayload,
): Promise<ApplicationRecord> {
  await ensureDatabase();

  const { data } = payload;
  const fullName = [data.firstName, data.secondName, data.surname]
    .filter(Boolean)
    .join(" ")
    .trim();

  const record: ApplicationRecord = {
    id: `app_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    campus: data.preferredCampus || "",
    fullName: fullName || "Applicant",
    email: data.email.trim(),
    phone: data.phone.trim(),
    data,
  };

  await db.query(
    `INSERT INTO applications (id, created_at, campus, full_name, email, phone, data)
     VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb)`,
    [
      record.id,
      record.createdAt,
      record.campus,
      record.fullName,
      record.email,
      record.phone,
      JSON.stringify(record.data),
    ],
  );

  return record;
}

export async function listApplications(): Promise<ApplicationRecord[]> {
  await ensureDatabase();
  const { rows } = await db.query(
    `SELECT id, created_at, campus, full_name, email, phone, data
     FROM applications
     ORDER BY created_at DESC`,
  );
  return rows.map(rowToApplication);
}

export async function deleteApplication(id: string): Promise<boolean> {
  await ensureDatabase();
  const result = await db.query(
    "DELETE FROM applications WHERE id = $1 RETURNING id",
    [id],
  );
  return result.rows.length > 0;
}

export async function saveContactMessage(
  payload: ContactPayload,
): Promise<ContactMessageRecord> {
  await ensureDatabase();

  const record: ContactMessageRecord = {
    id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    subject: payload.subject.trim() || "General inquiry",
    message: payload.message.trim(),
  };

  await db.query(
    `INSERT INTO contact_messages (id, created_at, name, email, phone, subject, message)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      record.id,
      record.createdAt,
      record.name,
      record.email,
      record.phone,
      record.subject,
      record.message,
    ],
  );

  return record;
}

export async function listContactMessages(): Promise<ContactMessageRecord[]> {
  await ensureDatabase();
  const { rows } = await db.query(
    `SELECT id, created_at, name, email, phone, subject, message
     FROM contact_messages
     ORDER BY created_at DESC`,
  );
  return rows.map(rowToContact);
}

export async function deleteContactMessage(id: string): Promise<boolean> {
  await ensureDatabase();
  const result = await db.query(
    "DELETE FROM contact_messages WHERE id = $1 RETURNING id",
    [id],
  );
  return result.rows.length > 0;
}
