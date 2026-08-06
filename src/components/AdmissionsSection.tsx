"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export function AdmissionsSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-thm-purple-deep text-white relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Contact & Location Details */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-sm font-bold uppercase tracking-widest text-thm-gold">
              Admissions & Contact
            </span>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Take the Next Step Towards a Lifesaving Career
            </h2>

            <p className="text-lg text-thm-cream/90 leading-relaxed">
              Enroll today in Nairobi or Kisumu. Speak with our admissions advisors to verify your eligibility for CHANCEN International funding or schedule a campus visit.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-thm-purple border border-thm-purple-dark">
                <MapPin className="h-6 w-6 text-thm-gold shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white text-base">Campus Location</p>
                  <p className="text-sm text-thm-cream/80">New Waumini House, 3rd Floor, Westlands</p>
                  <p className="text-xs text-thm-cream/60">P.O. Box 27268 – 00100 Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-thm-purple border border-thm-purple-dark">
                <Phone className="h-6 w-6 text-thm-gold shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white text-base">Direct Phone Lines</p>
                  <p className="text-sm text-thm-cream/80">0722 590 457 / 0700 589 647</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-thm-purple border border-thm-purple-dark">
                <Mail className="h-6 w-6 text-thm-gold shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white text-base">Official Email</p>
                  <p className="text-sm text-thm-cream/80">info@thm.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-thm-purple border border-thm-purple-dark">
                <Clock className="h-6 w-6 text-thm-gold shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white text-base">Contact Person</p>
                  <p className="text-sm text-thm-cream/80">Mrs. Janipher Aluoch Otieno (CEO)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Application Form */}
          <div className="lg:col-span-6">
            <div className="bg-white text-thm-ink p-8 sm:p-10 rounded-3xl border-4 border-thm-gold shadow-2xl">
              <h3 className="font-poppins text-2xl font-bold text-thm-purple mb-2">
                Caregiver Program Application
              </h3>
              <p className="text-sm text-thm-muted mb-6">
                Fill in your details below to apply for Certificate in Caregiver II and CHANCEN funding.
              </p>

              {submitted ? (
                <div className="p-8 bg-thm-cream rounded-2xl border-2 border-thm-gold text-center flex flex-col items-center">
                  <CheckCircle2 className="h-16 w-16 text-thm-purple mb-4" />
                  <h4 className="font-poppins text-2xl font-bold text-thm-purple">Application Received!</h4>
                  <p className="text-sm text-thm-muted mt-2 max-w-[360px]">
                    Thank you for applying to THM Caregiver School. Our admissions team will call you shortly at the provided phone number.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full bg-thm-purple text-white text-sm font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-thm-muted mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Wanjiru"
                      className="w-full h-12 rounded-xl border-2 border-slate-200 px-4 text-sm outline-none focus:border-thm-purple"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-thm-muted mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="07XX XXX XXX"
                        className="w-full h-12 rounded-xl border-2 border-slate-200 px-4 text-sm outline-none focus:border-thm-purple"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-thm-muted mb-1">
                        Age *
                      </label>
                      <input
                        type="number"
                        min={18}
                        max={65}
                        required
                        placeholder="e.g. 24"
                        className="w-full h-12 rounded-xl border-2 border-slate-200 px-4 text-sm outline-none focus:border-thm-purple"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-thm-muted mb-1">
                      Preferred Training Campus *
                    </label>
                    <select className="w-full h-12 rounded-xl border-2 border-slate-200 px-4 text-sm outline-none focus:border-thm-purple bg-white">
                      <option value="nairobi">Nairobi Campus (Westlands)</option>
                      <option value="kisumu">Kisumu Campus</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-thm-muted mb-1">
                      Financing Option *
                    </label>
                    <select className="w-full h-12 rounded-xl border-2 border-slate-200 px-4 text-sm outline-none focus:border-thm-purple bg-white">
                      <option value="chancen">Apply for CHANCEN &quot;Study Now, Pay Later&quot;</option>
                      <option value="self">Self Funded / Direct Payment</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-14 rounded-full bg-thm-purple text-white font-poppins font-bold text-base shadow-lg hover:bg-thm-purple-dark transition-all flex items-center justify-center gap-2 pt-1"
                  >
                    <span>Submit Application</span>
                    <Send className="h-5 w-5 text-thm-gold" />
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
