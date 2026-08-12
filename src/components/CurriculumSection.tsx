"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useAutoRotatingTabs } from "@/hooks/useAutoRotatingTabs";

type Category = "clinical" | "support" | "safety";

const groups: {
  id: Category;
  name: string;
  blurb: string;
  skills: string[];
  image: string;
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
    image:
      "https://images.unsplash.com/photo-1643297654416-05795d62e39c?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=1200&auto=format&fit=crop",
  },
];

export function CurriculumSection() {
  const reduce = useReducedMotion();
  const tabIds = groups.map((g) => g.id);
  const { active, selectTab, sectionHandlers } = useAutoRotatingTabs(tabIds);
  const current = groups.find((g) => g.id === active)!;

  return (
    <section className="bg-thm-cream py-20 text-thm-ink lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
            NITA curriculum, organized for real practice
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-thm-muted">
            Skills are grouped the way caregivers use them on the ward and in
            the home — not as a long checklist.
          </p>
        </div>

        <div {...sectionHandlers}>
          <div
            role="tablist"
            aria-label="Curriculum categories"
            className="mt-10 flex gap-1 overflow-x-auto border-b border-thm-ink/10"
          >
            {groups.map((g) => {
              const isActive = g.id === active;
              return (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectTab(g.id)}
                  className={`relative shrink-0 px-4 py-3.5 font-poppins text-sm font-semibold transition-colors sm:px-5 ${
                    isActive
                      ? "text-thm-purple"
                      : "text-thm-muted hover:text-thm-ink"
                  }`}
                >
                  {g.name}
                  {isActive ? (
                    <motion.span
                      layoutId="curriculum-tab-line"
                      className="absolute inset-x-0 bottom-0 h-[3px] bg-thm-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12"
              role="tabpanel"
            >
            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:col-span-5 lg:min-h-[460px]">
              <Image
                src={current.image}
                alt={`${current.name} training at THM`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-thm-purple/20 mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 bg-thm-ink/85 px-5 py-4 sm:px-6">
                <p className="font-poppins text-sm font-semibold text-thm-gold">
                  {current.name}
                </p>
                <p className="mt-0.5 text-sm text-white/80">{current.blurb}</p>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:col-span-7">
              <ul className="divide-y divide-thm-ink/10">
                {current.skills.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={reduce ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.28 }}
                    className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0 sm:py-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-thm-gold text-thm-ink">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="font-poppins text-[15px] font-medium text-thm-ink sm:text-base">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
