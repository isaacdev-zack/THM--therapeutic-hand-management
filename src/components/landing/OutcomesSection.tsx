"use client";

import Link from "next/link";
import { FadeUp, Stagger, StaggerItem } from "./Motion";

const places = [
  {
    title: "Hospitals",
    detail: "Ward support under registered nurse supervision",
  },
  {
    title: "Elder care homes",
    detail: "Geriatric support, mobility, and dignity in aging",
  },
  {
    title: "Childcare centres",
    detail: "Safeguarding and daily developmental care",
  },
  {
    title: "Private home care",
    detail: "One-to-one support for recovering or at-risk clients",
  },
];

export function OutcomesSection() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <FadeUp className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-poppins text-[1.85rem] font-bold tracking-tight text-thm-ink sm:text-3xl">
              Where graduates work
            </h2>
          </div>
          <Link
            href="/careers"
            className="group font-poppins text-sm font-semibold text-thm-purple"
          >
            See career pathways
            <span className="inline-block transition-transform group-hover:translate-x-1">
              {" "}
              →
            </span>
          </Link>
        </FadeUp>

        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full border-l-4 border-thm-gold bg-thm-cream px-5 py-5 transition-transform hover:-translate-y-1 hover:bg-white hover:shadow-[0_8px_24px_rgba(30,19,38,0.08)]">
                <h3 className="font-poppins font-bold text-thm-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-thm-muted">
                  {p.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
