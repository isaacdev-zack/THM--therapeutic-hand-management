"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, User, Send, CheckCircle2 } from "lucide-react";

export function AdmissionsSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admissions" className="bg-thm-purple-deep py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.16em] text-thm-gold">
              Admissions
            </p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
              Take the next step
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Apply for caregiver training in Nairobi or Kisumu. Ask about
              CHANCEN Study Now, Pay Later financing when you reach out.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-thm-gold" />
                <div>
                  <p className="font-semibold">Campus</p>
                  <p className="mt-0.5 text-sm text-white/75">
                    New Waumini House, 3rd Floor, Westlands, Nairobi
                  </p>
                  <p className="text-sm text-white/55">
                    P.O. Box 27268–00100
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-thm-gold" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="mt-0.5 text-sm text-white/75">
                    0722 590 457 / 0700 589 647
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-thm-gold" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="mt-0.5 text-sm text-white/75">info@thm.co.ke</p>
                </div>
              </li>
              <li className="flex gap-3">
                <User className="mt-0.5 h-5 w-5 shrink-0 text-thm-gold" />
                <div>
                  <p className="font-semibold">CEO</p>
                  <p className="mt-0.5 text-sm text-white/75">
                    Mrs. Janipher Aluoch Otieno
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="border-2 border-thm-gold bg-white p-7 text-thm-ink sm:p-9">
              <h3 className="font-poppins text-xl font-bold text-thm-purple sm:text-2xl">
                Program application
              </h3>
              <p className="mt-1.5 text-sm text-thm-muted">
                Submit your details and our admissions team will follow up.
              </p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center bg-thm-cream px-6 py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-thm-purple" />
                  <h4 className="mt-4 font-poppins text-xl font-bold text-thm-purple">
                    Application received
                  </h4>
                  <p className="mt-2 max-w-sm text-sm text-thm-muted">
                    Thank you. Our admissions team will contact you shortly at
                    the phone number you provided.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 h-11 rounded-full bg-thm-purple px-6 text-sm font-semibold text-white"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-thm-muted">
                      Full name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="h-12 w-full border-2 border-slate-200 px-4 text-sm outline-none focus:border-thm-purple"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-thm-muted">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="07XX XXX XXX"
                        className="h-12 w-full border-2 border-slate-200 px-4 text-sm outline-none focus:border-thm-purple"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-thm-muted">
                        Age *
                      </label>
                      <input
                        type="number"
                        min={18}
                        max={65}
                        required
                        placeholder="e.g. 24"
                        className="h-12 w-full border-2 border-slate-200 px-4 text-sm outline-none focus:border-thm-purple"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-thm-muted">
                      Preferred campus *
                    </label>
                    <select className="h-12 w-full border-2 border-slate-200 bg-white px-4 text-sm outline-none focus:border-thm-purple">
                      <option value="nairobi">Nairobi (Westlands)</option>
                      <option value="kisumu">Kisumu</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-thm-muted">
                      Financing *
                    </label>
                    <select className="h-12 w-full border-2 border-slate-200 bg-white px-4 text-sm outline-none focus:border-thm-purple">
                      <option value="chancen">
                        CHANCEN — Study Now, Pay Later
                      </option>
                      <option value="self">Self-funded</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-thm-purple font-poppins text-base font-semibold text-white transition-colors hover:bg-thm-purple-dark"
                  >
                    Submit application
                    <Send className="h-4 w-4 text-thm-gold" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
