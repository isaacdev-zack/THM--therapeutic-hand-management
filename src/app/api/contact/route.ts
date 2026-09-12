import { NextResponse } from "next/server";
import { saveContactMessage } from "@/lib/dbInit";
import {
  emailContactConfirmation,
  emailContactToAdmin,
} from "@/lib/email";
import { validateContactPayload } from "@/lib/validateContact";

export const maxDuration = 30;

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "We couldn't send that. Please try again." },
        { status: 400 },
      );
    }

    const parsed = validateContactPayload(body);
    if (!parsed.ok) {
      return NextResponse.json(
        { error: parsed.error, details: parsed.details },
        { status: 400 },
      );
    }

    const message = await saveContactMessage(parsed.data);

    const mailResults = await Promise.allSettled([
      emailContactToAdmin(message),
      emailContactConfirmation(message),
    ]);
    for (const result of mailResults) {
      if (result.status === "rejected") {
        console.error(
          "Contact email failed (message still saved):",
          result.reason,
        );
      }
    }

    return NextResponse.json({ ok: true, id: message.id });
  } catch (err) {
    console.error("Contact save failed:", err);
    return NextResponse.json(
      {
        error:
          "Unable to send your message. Please try again or email info@thm.co.ke.",
      },
      { status: 500 },
    );
  }
}
