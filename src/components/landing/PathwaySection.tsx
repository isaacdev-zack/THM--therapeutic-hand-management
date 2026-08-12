"use client";

import Link from "next/link";
import { FadeUp, Stagger, StaggerItem } from "./Motion";

const steps = [
  {
    n: "01",
    title: "Enroll",
    text: "Apply for Certificate in Caregiver training. Ask about CHANCEN financing.",
  },
  {
    n: "02",
    title: "Train",
    text: "Classroom theory plus mandatory practical labs under NITA standards.",
  },
  {
    n: "03",
    title: "Place",
    text: "Hospital and care placements under registered nurse supervision.",
  },
  {
    n: "04",
    title: "Serve",
    text: "Graduate into hospitals, elder care, childcare, or private homes.",
  },
];

export function PathwaySection() {
  return (
    <section className="border-y border-thm-ink/10 bg-thm-cream px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <FadeUp className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-poppins text-[1.85rem] font-bold tracking-tight text-thm-ink sm:text-3xl">
              From enrollment to employment
            </h2>
          </div>
          <Link
            href="/careers"
            className="group font-poppins text-sm font-semibold text-thm-purple"
          >
            Career pathways
            <span className="inline-block transition-transform group-hover:translate-x-1">
              {" "}
              →
            </span>
          </Link>
        </FadeUp>

        <Stagger className="mt-8 grid gap-px bg-thm-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="h-full bg-thm-cream p-5 transition-colors hover:bg-white sm:p-6">
                <p className="font-poppins text-2xl font-bold text-thm-gold">
                  {s.n}
                </p>
                <h3 className="mt-2 font-poppins text-lg font-bold text-thm-ink">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-thm-muted">
                  {s.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
