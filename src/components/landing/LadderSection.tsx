"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from "framer-motion";

const rungs = [
  {
    level: "01",
    title: "Classroom foundation",
    detail: "Build theory under the NITA curriculum with THM instructors.",
  },
  {
    level: "02",
    title: "Hands-on practice",
    detail: "Master vitals, hygiene, transfers, and patient support in labs.",
  },
  {
    level: "03",
    title: "Clinical placement",
    detail: "Apply skills under registered nurse supervision in real settings.",
  },
  {
    level: "04",
    title: "Working graduate",
    detail: "Hospitals, elder care, childcare, or private home-based care.",
  },
];

function RungItem({
  rung,
  index,
  reduceMotion,
}: {
  rung: (typeof rungs)[number];
  index: number;
  reduceMotion: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.55, margin: "-8% 0px" });

  return (
    <motion.li
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      animate={inView || reduceMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.65,
        delay: reduceMotion ? 0 : index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pb-12 last:pb-0 md:pb-14"
    >
      <span className="absolute -left-[1.95rem] top-1 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-thm-gold font-poppins text-[11px] font-bold text-thm-ink md:-left-[2.2rem] md:h-8 md:w-8 md:text-[12px]">
        {rung.level}
      </span>
      <h3 className="font-poppins text-[24px] font-bold tracking-[-0.02em] text-thm-ink md:text-[30px]">
        {rung.title}
      </h3>
      <p className="font-inter mt-2 max-w-[420px] text-[15px] leading-relaxed text-thm-muted md:text-[16px]">
        {rung.detail}
      </p>
    </motion.li>
  );
}

export function LadderSection() {
  const reduceMotion = !!useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.7", "end 0.45"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0.08, 1]);

  return (
    <section id="ladder" className="bg-thm-cream px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Overlap intro */}
        <div className="grid items-center gap-0 lg:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:col-span-7 lg:aspect-auto lg:min-h-[420px] lg:rounded-[3rem]">
            <Image
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1400&auto=format&fit=crop"
              alt="African healthcare instructor guiding practical learning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-thm-ink/35" />
          </div>
          <div className="relative z-10 bg-white p-8 shadow-[0_20px_60px_rgba(30,19,38,0.12)] sm:p-10 lg:col-span-5 lg:-ml-10 lg:rounded-none">
            <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-thm-purple">
              The caregiving path
            </p>
            <h2 className="font-poppins mt-3 text-[32px] font-bold leading-[1.05] tracking-[-0.02em] text-thm-ink sm:text-[40px]">
              Training is a ladder.
              <span className="block text-thm-purple"> Climb it with us.</span>
            </h2>
            <p className="font-inter mt-4 text-[16px] leading-relaxed text-thm-muted">
              From classroom to placement to employment — each rung builds the
              skills Kenya&apos;s care economy needs.
            </p>
            <Link
              href="/programs"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-thm-purple px-7 font-poppins text-[15px] font-bold text-white hover:bg-thm-purple-dark"
            >
              See the curriculum
            </Link>
          </div>
        </div>

        {/* Sticky media + rungs */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-thm-ink sm:rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1643297654416-05795d62e39c?q=80&w=1000&auto=format&fit=crop"
                alt="African nurse ready for professional caregiving"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-thm-ink/30" />
            </div>
          </div>

          <div ref={listRef} className="relative pl-10 md:pl-12">
            <div className="absolute bottom-4 left-[0.85rem] top-2 w-[2px] bg-thm-ink/10 md:left-[0.95rem]">
              <motion.div
                className="h-full w-full origin-top bg-thm-gold"
                style={{ scaleY: reduceMotion ? 1 : lineScale }}
              />
            </div>
            <ol>
              {rungs.map((rung, i) => (
                <RungItem
                  key={rung.level}
                  rung={rung}
                  index={i}
                  reduceMotion={reduceMotion}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
