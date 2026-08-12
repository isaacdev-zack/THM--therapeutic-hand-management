"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { careersContent } from "@/data/careers";

export function GraduateStories() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const stories = careersContent.testimonials;
  const current = stories[index];

  const prev = () => setIndex((i) => (i === 0 ? stories.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === stories.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-thm-purple-deep px-5 py-12 text-white sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-center font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
          What our graduates say
        </h2>

        <div className="relative mt-8 sm:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10"
            >
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:h-36 sm:w-36">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover object-top"
                  sizes="144px"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <blockquote className="font-poppins text-xl font-medium leading-relaxed text-white sm:text-2xl sm:leading-snug">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <footer className="mt-6">
                  <p className="font-poppins text-base font-semibold text-thm-gold">
                    {current.name}
                  </p>
                  <p className="mt-1 text-sm text-white/65">{current.role}</p>
                </footer>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-3 sm:justify-end">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous story"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-thm-gold text-thm-ink transition-transform hover:scale-105"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next story"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-thm-gold hover:text-thm-gold"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-white/40">
          Sample graduate voices for layout — replace with verified THM alumni
          when available.
        </p>
      </div>
    </section>
  );
}
