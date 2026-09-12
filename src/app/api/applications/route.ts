import { NextResponse } from "next/server";
import { saveApplication } from "@/lib/dbInit";
import {
  emailApplicationConfirmation,
  emailApplicationToAdmin,
} from "@/lib/email";
import { validateApplicationPayload } from "@/lib/validateApplication";

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

    const parsed = validateApplicationPayload(body);
    if (!parsed.ok) {
      return NextResponse.json(
        { error: parsed.error, details: parsed.details },
        { status: 400 },
      );
    }

    const application = await saveApplication(parsed.data);

    const mailResults = await Promise.allSettled([
      emailApplicationToAdmin(application),
      emailApplicationConfirmation(application),
    ]);
    for (const result of mailResults) {
      if (result.status === "rejected") {
        console.error(
          "Application email failed (application still saved):",
          result.reason,
        );
      }
    }

    return NextResponse.json({ ok: true, id: application.id });
  } catch (err) {
    console.error("Application save failed:", err);
    return NextResponse.json(
      {
        error:
          "Unable to save your application. Please try again or email info@thm.co.ke.",
      },
      { status: 500 },
    );
  }
}
