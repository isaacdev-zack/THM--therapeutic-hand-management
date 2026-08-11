"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const skills = [
  "Vital signs",
  "Bed bath & grooming",
  "Infection control",
  "Transfers",
  "Tube feeding support",
  "Oxygen & monitoring",
];

export function SkillRailSection() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-55%"]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.08, 1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  if (reduceMotion) {
    return (
      <section className="bg-thm-lilac px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="font-poppins text-[36px] font-bold text-thm-ink sm:text-[48px]">
            Skills that employers expect.
          </h2>
          <ul className="mt-10 flex flex-wrap gap-3">
            {skills.map((s) => (
              <li
                key={s}
                className="font-poppins border border-thm-ink/15 bg-white px-5 py-3 text-[18px] font-bold text-thm-ink"
              >
                {s}
              </li>
            ))}
          </ul>
          <Link
            href="/programs"
            className="mt-10 inline-flex h-12 items-center rounded-md bg-thm-ink px-6 font-poppins text-[15px] font-bold text-thm-cream"
          >
            Explore full curriculum
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[240vh] bg-thm-lilac"
      aria-label="Skills scroll experience"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <motion.p
            style={{ opacity: hintOpacity }}
            className="font-inter text-[12px] font-semibold uppercase tracking-[0.2em] text-thm-purple"
          >
            Keep scrolling — the skills move
          </motion.p>
          <h2 className="font-poppins mt-3 max-w-[640px] text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-thm-ink sm:text-[52px]">
            Every skill has a place.
            <span className="block text-thm-purple"> Practice them in motion.</span>
          </h2>
        </div>

        <div className="relative mt-14 w-full">
          <div className="absolute left-0 right-0 top-1/2 mx-auto h-[2px] max-w-[1100px] -translate-y-1/2 px-6">
            <div className="h-full origin-left bg-thm-ink/10">
              <motion.div
                className="h-full origin-left bg-thm-gold"
                style={{ scaleX: lineScale }}
              />
            </div>
          </div>

          <motion.ul
            style={{ x }}
            className="flex w-max items-center gap-6 px-6 md:gap-10"
          >
            {skills.map((skill, i) => (
              <li
                key={skill}
                className="relative flex w-[240px] shrink-0 flex-col items-start md:w-[300px]"
              >
                <span className="mb-5 flex h-4 w-4 items-center justify-center rounded-full bg-thm-gold" />
                <span className="font-poppins text-[13px] font-bold text-thm-purple">
                  0{i + 1}
                </span>
                <span className="font-poppins mt-1 text-[28px] font-bold leading-tight tracking-[-0.02em] text-thm-ink md:text-[34px]">
                  {skill}
                </span>
              </li>
            ))}
            <li className="flex w-[220px] shrink-0 items-center md:w-[280px]">
              <Link
                href="/programs"
                className="font-poppins rounded-md bg-thm-ink px-6 py-4 text-[16px] font-bold text-thm-cream hover:bg-thm-purple"
              >
                Full curriculum →
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
