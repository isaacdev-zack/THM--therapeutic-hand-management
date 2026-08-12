"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { careersContent } from "@/data/careers";

export function CareersHero() {
  const reduce = useReducedMotion();
  const { hero } = careersContent;

  return (
    <section className="relative flex min-h-[62vh] items-center justify-center overflow-hidden bg-thm-ink pt-[76px] lg:min-h-[68vh]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        className="object-cover object-center scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-thm-ink/75" />
      <div className="absolute inset-0 bg-thm-purple-deep/45" />

      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-5 py-16 text-center sm:px-8 lg:py-20">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="font-poppins text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-9"
        >
          <Link
            href={hero.ctaHref}
            className="inline-flex h-12 items-center rounded-full bg-thm-gold px-8 font-poppins text-base font-semibold text-thm-ink transition-transform hover:scale-[1.03] hover:bg-thm-gold-hover active:scale-[0.98]"
          >
            {hero.ctaLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
