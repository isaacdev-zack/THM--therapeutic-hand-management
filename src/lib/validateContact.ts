import type { ContactPayload } from "./types";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(
  body: unknown,
):
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string; details?: string[] } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const raw = body as Record<string, unknown>;
  const data: ContactPayload = {
    name: asString(raw.name),
    email: asString(raw.email),
    phone: asString(raw.phone),
    subject: asString(raw.subject) || "General inquiry",
    message: asString(raw.message),
  };

  const details: string[] = [];
  if (!data.name) details.push("Name is required.");
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    details.push("A valid email is required.");
  }
  if (!data.message || data.message.length < 10) {
    details.push("Please write a short message (at least 10 characters).");
  }
  if (data.message.length > 5000) {
    details.push("Message is too long.");
  }

  if (details.length) {
    return {
      ok: false,
      error: details[0],
      details,
    };
  }

  return { ok: true, data };
}
