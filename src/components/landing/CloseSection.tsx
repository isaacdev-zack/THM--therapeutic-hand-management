"use client";

import Link from "next/link";
import { FadeUp } from "./Motion";

export function CloseSection() {
  return (
    <section className="bg-thm-purple px-5 py-12 text-white sm:px-8 lg:px-10 lg:py-14">
      <FadeUp className="mx-auto flex max-w-[1120px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-poppins text-2xl font-bold tracking-tight sm:text-3xl">
            Ready for your caregiving career?
          </h2>
          <p className="mt-2 text-sm text-white/80 sm:text-base">
            Apply for Nairobi or Kisumu — flexible financing available for
            eligible students.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/apply"
            className="inline-flex h-11 items-center rounded-full bg-thm-gold px-7 font-poppins text-sm font-semibold text-thm-ink transition-transform hover:bg-thm-gold-hover hover:scale-[1.03] active:scale-[0.98]"
          >
            Apply Now
          </Link>
          <Link
            href="/financing"
            className="inline-flex h-11 items-center rounded-full border border-white/35 px-7 font-poppins text-sm font-semibold text-white transition-colors hover:border-thm-gold hover:text-thm-gold"
          >
            Financing
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
