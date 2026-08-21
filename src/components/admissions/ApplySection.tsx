"use client";

import Link from "next/link";
import { CaregiverAdmissionForm } from "./CaregiverAdmissionForm";

export function ApplySection() {
  return (
    <section className="bg-thm-purple-deep pb-16 pt-12 text-white sm:pb-20 sm:pt-16 lg:pb-24">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-10">
        <header className="border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-thm-gold">
            Caregiver II
          </p>
          <h1 className="mt-2 font-poppins text-2xl font-bold tracking-tight sm:text-3xl">
            Student admission application
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Use block capitals for personal details.{" "}
            <Link href="/contact" className="text-thm-gold hover:text-white">
              Contact us
            </Link>{" "}
            if you need help.
          </p>
        </header>

        <div className="mt-8">
          <CaregiverAdmissionForm />
        </div>
      </div>
    </section>
  );
}
