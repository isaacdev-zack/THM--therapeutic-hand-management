"use client";

import { FadeUp, Stagger, StaggerItem } from "./Motion";

const voices = [
  {
    quote:
      "Placeholder — replace with a real THM graduate story about clinical training or placement.",
    name: "Graduate Name",
    role: "Class of — · Role",
  },
  {
    quote:
      "Placeholder — replace with a real THM graduate story about training and placement.",
    name: "Graduate Name",
    role: "Class of — · Role",
  },
  {
    quote:
      "Placeholder — replace with a story about elder care or home-based caregiving work.",
    name: "Graduate Name",
    role: "Class of — · Role",
  },
];

export function VoicesSection() {
  return (
    <section className="border-t border-thm-ink/10 bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <FadeUp className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-poppins text-[1.85rem] font-bold tracking-tight text-thm-ink sm:text-3xl">
            Graduate voices
          </h2>
          <p className="text-xs font-medium text-thm-muted">
            Placeholders — replace with real testimonials
          </p>
        </FadeUp>

        <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
          {voices.map((v, i) => (
            <StaggerItem key={i}>
              <blockquote className="h-full border border-thm-ink/10 bg-thm-cream p-5 transition-shadow hover:shadow-[0_10px_30px_rgba(30,19,38,0.07)] sm:p-6">
                <p className="text-[15px] leading-relaxed text-thm-ink">
                  &ldquo;{v.quote}&rdquo;
                </p>
                <footer className="mt-5 border-t border-thm-ink/10 pt-3">
                  <cite className="not-italic font-poppins text-sm font-semibold text-thm-purple">
                    {v.name}
                  </cite>
                  <p className="mt-0.5 text-xs text-thm-muted">{v.role}</p>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
