import type { AdmissionFormData } from "@/types/admission";
import type { ApplicationPayload } from "./types";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateApplicationPayload(
  body: unknown,
):
  | { ok: true; data: ApplicationPayload }
  | { ok: false; error: string; details?: string[] } {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "Invalid application payload." };
  }

  const raw = body as Record<string, unknown>;
  const data = (raw.data && typeof raw.data === "object" ? raw.data : raw) as Record<
    string,
    unknown
  >;

  const firstName = asString(data.firstName);
  const surname = asString(data.surname);
  const email = asString(data.email);
  const phone = asString(data.phone);
  const idNumber = asString(data.idNumber);
  const preferredCampus = asString(data.preferredCampus);
  const declarationAccepted = Boolean(data.declarationAccepted);

  const details: string[] = [];
  if (!firstName) details.push("First name is required");
  if (!surname) details.push("Surname is required");
  if (!email || !email.includes("@")) details.push("A valid email is required");
  if (!phone) details.push("Phone is required");
  if (!idNumber) details.push("ID / passport number is required");
  if (preferredCampus !== "nairobi" && preferredCampus !== "kisumu") {
    details.push("Preferred campus is required");
  }
  if (!declarationAccepted) details.push("Declaration must be accepted");

  if (details.length > 0) {
    return {
      ok: false,
      error: "Please complete the required fields.",
      details,
    };
  }

  return {
    ok: true,
    data: {
      data: data as unknown as AdmissionFormData,
    },
  };
}
