"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FadeUp } from "./Motion";
import { SkillListItem } from "./SkillListItem";
import { caregiverSkillGroups } from "@/data/caregiverSkills";
import { useAutoRotatingTabs } from "@/hooks/useAutoRotatingTabs";

export function SkillsSection() {
  const tabIds = caregiverSkillGroups.map((g) => g.id);
  const { active, selectTab, sectionHandlers } = useAutoRotatingTabs(tabIds);
  const current = caregiverSkillGroups.find((g) => g.id === active)!;

  return (
    <section className="bg-thm-cream px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1120px]">
        <FadeUp className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-poppins text-[1.85rem] font-bold tracking-tight text-thm-ink sm:text-3xl">
              What you will learn
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-thm-muted sm:text-base">
              NITA skills grouped the way caregivers use them — on the ward and
              in the home.
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

        <FadeUp delay={0.06} className="mt-10" {...sectionHandlers}>
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex gap-1 overflow-x-auto border-b border-thm-ink/10"
          >
            {caregiverSkillGroups.map((g) => {
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
                      layoutId="skills-tab-line"
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
              role="tabpanel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div className="relative aspect-square overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={current.image}
                    alt={`${current.name} training at THM`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-thm-purple/20 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 bg-thm-ink/90 px-5 py-4 sm:px-6 sm:py-5">
                  <p className="font-poppins text-sm font-semibold text-thm-gold sm:text-base">
                    {current.name}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-white/85">
                    {current.blurb}
                  </p>
                </div>
              </div>

              <ul className="flex h-full min-h-0 flex-col justify-between">
                {current.skills.map((skill, i) => (
                  <SkillListItem key={skill.title} skill={skill} index={i} />
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </FadeUp>
      </div>
    </section>
  );
}
