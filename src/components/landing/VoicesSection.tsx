"use client";

import { motion, useReducedMotion } from "framer-motion";

const voices = [
  {
    quote:
      "The clinical rotations gave me confidence to take vitals and support patients under RN supervision. I was hired soon after graduation.",
    role: "Hospital caregiver · Class of 2024",
    mark: "01",
  },
  {
    quote:
      "I could not afford upfront fees. CHANCEN financed my Certificate — now I support my family through private homecare in Nairobi.",
    role: "CHANCEN beneficiary · Class of 2025",
    mark: "02",
  },
  {
    quote:
      "THM taught me that caregiving is a calling of patience and confidentiality. The NITA curriculum prepared me for real patient challenges.",
    role: "Elder caregiver · Class of 2024",
    mark: "03",
  },
];

export function VoicesSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-thm-purple">
              Graduate voices
            </p>
            <h2 className="font-poppins mt-3 text-[36px] font-bold tracking-[-0.02em] text-thm-ink sm:text-[48px]">
              Heard from the field.
            </h2>
          </div>
          <p className="max-w-xs border border-dashed border-thm-purple/40 bg-thm-cream px-3 py-2 font-inter text-sm text-thm-muted lg:text-right">
            Sample quotes — replace with verified graduate testimonials
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {voices.map((v, i) => (
            <motion.blockquote
              key={v.mark}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`flex flex-col justify-between p-7 sm:p-8 ${
                i === 1
                  ? "bg-thm-purple text-white"
                  : "border border-thm-ink/10 bg-thm-cream text-thm-ink"
              }`}
            >
              <div>
                <span
                  className={`font-poppins text-[40px] font-bold leading-none ${
                    i === 1 ? "text-thm-gold" : "text-thm-gold"
                  }`}
                >
                  {v.mark}
                </span>
                <p
                  className={`font-inter mt-5 text-[18px] leading-snug sm:text-[20px] ${
                    i === 1 ? "text-white" : "text-thm-ink"
                  }`}
                >
                  &ldquo;{v.quote}&rdquo;
                </p>
              </div>
              <cite
                className={`mt-8 block border-t pt-4 font-inter text-sm not-italic ${
                  i === 1
                    ? "border-white/20 text-white/70"
                    : "border-thm-ink/10 text-thm-muted"
                }`}
              >
                {v.role}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
