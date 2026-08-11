"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

type Category = "clinical" | "support" | "safety";

const groups: {
  id: Category;
  name: string;
  blurb: string;
  skills: string[];
}[] = [
  {
    id: "clinical",
    name: "Clinical Basics",
    blurb: "Core clinical procedures every caregiver must perform safely.",
    skills: [
      "Vital signs measurement",
      "Blood sugar level monitoring",
      "Oxygen administration support",
      "Catheter and perineum care",
      "Tube feeding",
      "Bedpan administration",
      "Hot and cold therapy",
    ],
  },
  {
    id: "support",
    name: "Patient Support",
    blurb: "Daily living support that protects dignity and comfort.",
    skills: [
      "Bed bath and patient grooming",
      "Bed making",
      "Back care",
      "Positioning",
      "Wheelchair transfer",
      "Use of medical equipment & assistive devices",
    ],
  },
  {
    id: "safety",
    name: "Safety & Equipment",
    blurb: "Infection control and safe handling of care environments.",
    skills: [
      "Hand hygiene",
      "Proper gloving",
      "Disinfection & decontamination",
      "Standard & transmission-based precautions",
    ],
  },
];

export function CurriculumSection() {
  const [active, setActive] = useState<Category>("clinical");
  const reduce = useReducedMotion();
  const current = groups.find((g) => g.id === active)!;

  return (
    <section id="curriculum" className="bg-grain py-20 lg:py-28 text-thm-ink">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.16em] text-thm-purple">
              What you&apos;ll learn
            </p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
              NITA curriculum, organized for real practice
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-thm-muted">
              Skills are grouped the way caregivers use them on the ward and in
              the home — not as a long checklist.
            </p>
          </div>
        </div>

        {/* Tab index */}
        <div
          role="tablist"
          aria-label="Curriculum categories"
          className="mt-10 flex flex-wrap gap-2 border-b border-slate-200 pb-1"
        >
          {groups.map((g) => {
            const isActive = g.id === active;
            return (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(g.id)}
                className={`px-5 py-3 font-poppins text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-thm-purple text-white"
                    : "bg-white text-thm-ink hover:bg-thm-purple/10"
                }`}
              >
                {g.name}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid gap-8 lg:grid-cols-12"
            role="tabpanel"
          >
            <div className="lg:col-span-5">
              <h3 className="font-poppins text-2xl font-bold">{current.name}</h3>
              <p className="mt-2 text-thm-muted">{current.blurb}</p>
              <ul className="mt-6 space-y-3">
                {current.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-thm-gold text-thm-ink">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-snug text-thm-ink">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7">
              <Image
                src={
                  active === "clinical"
                    ? "https://images.unsplash.com/photo-1643297654416-05795d62e39c?q=80&w=1200&auto=format&fit=crop"
                    : active === "support"
                      ? "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=1200&auto=format&fit=crop"
                }
                alt={`${current.name} training at THM`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-thm-purple/30 mix-blend-multiply" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
