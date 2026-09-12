"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const fields = Object.fromEntries(form.entries()) as Record<string, string>;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          subject: fields.subject,
          message: fields.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "Failed to send",
        );
      }
      formEl.reset();
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "We couldn't send that. Please try again, or email info@thm.co.ke.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="flex flex-col gap-1.5 text-sm font-medium text-thm-ink">
        Full name
        <input
          name="name"
          required
          autoComplete="name"
          className="h-12 rounded-xl border border-thm-lilac bg-thm-cream/50 px-4 text-base outline-none transition focus:border-thm-purple focus:bg-white"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-thm-ink">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="h-12 rounded-xl border border-thm-lilac bg-thm-cream/50 px-4 text-base outline-none transition focus:border-thm-purple focus:bg-white"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-thm-ink">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="h-12 rounded-xl border border-thm-lilac bg-thm-cream/50 px-4 text-base outline-none transition focus:border-thm-purple focus:bg-white"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-thm-ink">
        Subject
        <input
          name="subject"
          placeholder="e.g. Financing, campuses, intake dates"
          className="h-12 rounded-xl border border-thm-lilac bg-thm-cream/50 px-4 text-base outline-none transition focus:border-thm-purple focus:bg-white"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-thm-ink">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-xl border border-thm-lilac bg-thm-cream/50 px-4 py-3 text-base outline-none transition focus:border-thm-purple focus:bg-white"
        />
      </label>
      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
      {status === "done" ? (
        <p className="text-sm font-medium text-thm-purple">
          Thanks — we received your message and will be in touch shortly.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-thm-purple px-8 font-poppins text-sm font-semibold text-white transition hover:bg-thm-purple-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
