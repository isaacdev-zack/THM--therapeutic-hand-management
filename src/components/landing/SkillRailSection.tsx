"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const groups = [
  {
    id: "clinical",
    label: "Clinical Basics",
    image:
      "https://images.unsplash.com/photo-1643297654416-05795d62e39c?q=80&w=1200&auto=format&fit=crop",
    skills: [
      "Vital signs measurement",
      "Blood sugar monitoring",
      "Oxygen administration support",
      "Catheter & perineum care",
      "Tube feeding",
      "Hot & cold therapy",
    ],
  },
  {
    id: "support",
    label: "Patient Support",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    skills: [
      "Bed bath & grooming",
      "Bed making",
      "Back care & positioning",
      "Wheelchair transfer",
      "Assistive devices",
      "Bedpan administration",
    ],
  },
  {
    id: "safety",
    label: "Safety & Precautions",
    image:
      "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=1200&auto=format&fit=crop",
    skills: [
      "Hand hygiene & gloving",
      "Disinfection & decontamination",
      "Standard precautions",
      "Transmission-based precautions",
    ],
  },
];

export function SkillRailSection() {
  const [active, setActive] = useState(groups[0].id);
  const reduce = useReducedMotion();
  const current = groups.find((g) => g.id === active) || groups[0];

  return (
    <section className="bg-thm-ink px-5 py-20 text-white sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-thm-gold">
              What you&apos;ll master
            </p>
            <h2 className="font-poppins mt-3 text-[36px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[48px]">
              An index of care —
              <span className="text-thm-gold"> not a bullet dump.</span>
            </h2>
            <p className="font-inter mt-4 max-w-md text-[16px] leading-relaxed text-white/70">
              Browse the NITA skill families the way caregivers actually use
              them on the ward and in the home.
            </p>

            <div className="mt-10 flex flex-col gap-2" role="tablist">
              {groups.map((g) => {
                const on = g.id === active;
                return (
                  <button
                    key={g.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(g.id)}
                    className={`flex items-center justify-between border-l-4 px-5 py-4 text-left transition-colors ${
                      on
                        ? "border-thm-gold bg-thm-purple text-white"
                        : "border-transparent bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="font-poppins text-[17px] font-bold">
                      {g.label}
                    </span>
                    <span className="font-inter text-sm text-thm-gold">
                      {g.skills.length} skills
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid gap-5"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={current.image}
                    alt={current.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-thm-purple/35 mix-blend-multiply" />
                  <div className="absolute bottom-0 left-0 right-0 bg-thm-ink/90 px-5 py-4">
                    <p className="font-poppins text-lg font-bold text-thm-gold">
                      {current.label}
                    </p>
                  </div>
                </div>

                <ul className="grid gap-2 sm:grid-cols-2">
                  {current.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-3 border border-white/10 bg-thm-purple-deep/60 px-4 py-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-thm-gold text-thm-ink">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="font-inter text-[15px] leading-snug text-white/90">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <Link
              href="/programs"
              className="mt-8 inline-flex h-12 items-center bg-thm-gold px-7 font-poppins text-[15px] font-bold text-thm-ink transition-colors hover:bg-thm-gold-hover"
            >
              Full curriculum →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
