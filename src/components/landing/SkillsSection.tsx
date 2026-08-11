"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { FadeUp } from "./Motion";

const groups = [
  {
    id: "clinical",
    name: "Clinical Basics",
    skills: [
      "Vital signs",
      "Sugar monitoring",
      "Oxygen support",
      "Catheter & perineum care",
      "Tube feeding",
      "Hot & cold therapy",
    ],
    image:
      "https://images.unsplash.com/photo-1643297654416-05795d62e39c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "support",
    name: "Patient Support",
    skills: [
      "Bed bath & grooming",
      "Bed making",
      "Back care",
      "Positioning",
      "Wheelchair transfer",
      "Assistive devices",
    ],
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "safety",
    name: "Safety & Equipment",
    skills: [
      "Hand hygiene",
      "Proper gloving",
      "Disinfection",
      "Standard precautions",
      "Transmission-based precautions",
    ],
    image:
      "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=1000&auto=format&fit=crop",
  },
];

export function SkillsSection() {
  const [active, setActive] = useState(groups[0].id);
  const current = groups.find((g) => g.id === active)!;

  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <FadeUp className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-thm-purple">
              Curriculum
            </p>
            <h2 className="mt-2 font-poppins text-[1.85rem] font-bold tracking-tight text-thm-ink sm:text-3xl">
              What you will learn
            </h2>
            <p className="mt-2 text-[15px] text-thm-muted">
              NITA skills grouped for practice — not a long bullet dump.
            </p>
          </div>
          <Link
            href="/programs"
            className="group font-poppins text-sm font-semibold text-thm-purple"
          >
            Full programs
            <span className="inline-block transition-transform group-hover:translate-x-1">
              {" "}
              →
            </span>
          </Link>
        </FadeUp>

        <FadeUp delay={0.08} className="mt-7 flex flex-wrap gap-2 border-b border-thm-ink/10 pb-3">
          {groups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g.id)}
              className={`relative px-4 py-2.5 font-poppins text-sm font-semibold transition-colors ${
                active === g.id
                  ? "bg-thm-purple text-white"
                  : "bg-thm-cream text-thm-ink hover:bg-thm-lilac"
              }`}
            >
              {g.name}
            </button>
          ))}
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 grid gap-6 lg:grid-cols-12"
          >
            <ul className="grid gap-2 sm:grid-cols-2 lg:col-span-6">
              {current.skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="flex items-start gap-2.5 border border-thm-ink/10 bg-white px-3.5 py-3 text-[15px] text-thm-ink transition-colors hover:border-thm-purple/40"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-thm-gold text-thm-ink">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {skill}
                </motion.li>
              ))}
            </ul>
            <div className="relative min-h-[240px] overflow-hidden lg:col-span-6 lg:min-h-0">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={current.image}
                  alt={`${current.name} training`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-thm-purple/30 mix-blend-multiply" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
