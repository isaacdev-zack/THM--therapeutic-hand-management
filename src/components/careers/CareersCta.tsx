"use client";

import Link from "next/link";
import { FadeUp } from "@/components/landing/Motion";

export function CareersCta() {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
      <FadeUp className="mx-auto max-w-[1200px]" y={12}>
        <div className="flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[24px] bg-thm-purple px-7 py-8 text-white sm:px-10 sm:py-10 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="font-poppins text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to take your next step in care?
            </h2>
            <p className="mt-3 text-white/80">
              Apply for Nairobi or Kisumu — flexible financing available for
              eligible students.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full bg-white px-7 font-poppins text-sm font-semibold text-thm-purple transition-colors hover:bg-thm-cream"
            >
              Apply Now
            </Link>
            <Link
              href="/financing"
              className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 font-poppins text-sm font-semibold text-white transition-colors hover:border-white"
            >
              Financing
            </Link>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
