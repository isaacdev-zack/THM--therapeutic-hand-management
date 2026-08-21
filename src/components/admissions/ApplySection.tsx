"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { CaregiverAdmissionForm } from "./CaregiverAdmissionForm";
import { requiredDocuments } from "@/types/admission";

export function ApplySection() {
  return (
    <section className="bg-thm-purple-deep py-16 text-white lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-thm-gold">
              Caregiver II
            </p>
            <h2 className="mt-2 font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
              Student admission application
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              P.O. Box 27268–00100, Nairobi. Complete every section accurately —
              personal details in block capitals where indicated.
            </p>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="font-poppins text-sm font-bold uppercase tracking-wide text-thm-gold">
                Required documents
              </p>
              <ul className="mt-3 space-y-2.5">
                {requiredDocuments.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-2 text-sm text-white/85"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-thm-gold" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-thm-gold" />
                <span className="text-white/75">
                  New Waumini House, 3rd Floor, Westlands
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-thm-gold" />
                <span className="text-white/75">0722 590 457 / 0700 589 647</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-thm-gold" />
                <a
                  href="mailto:info@thm.co.ke"
                  className="text-white/75 transition-colors hover:text-thm-gold"
                >
                  info@thm.co.ke
                </a>
              </li>
            </ul>

            <p className="mt-8 text-xs text-white/50">
              Need help first?{" "}
              <Link href="/contact" className="text-thm-gold hover:text-white">
                Contact us
              </Link>
            </p>
          </aside>

          <div className="lg:col-span-8">
            <CaregiverAdmissionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
