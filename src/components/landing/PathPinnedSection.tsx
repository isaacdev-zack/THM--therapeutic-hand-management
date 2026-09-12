"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const chapters = [
  {
    num: "01",
    title: "Arrive ready to learn",
    text: "Whether you are fresh from school or changing careers — enrollment is your first confident step.",
    src: "/gallery/instructor-with-students.jpg",
  },
  {
    num: "02",
    title: "Train with your hands",
    text: "Labs turn theory into muscle memory — vitals, hygiene, transfers, and patient dignity.",
    src: "/gallery/purple-ng-training.jpg",
  },
  {
    num: "03",
    title: "Graduate into service",
    text: "Walk into hospitals, homes, and centres prepared to safeguard lives with skill and heart.",
    src: "/gallery/childcare-students-toddler.jpg",
  },
];

export function PathPinnedSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Precompute transforms (hooks must be top-level)
  const img0 = useTransform(scrollYProgress, [0, 0.28, 0.38], [1, 1, 0]);
  const img1 = useTransform(scrollYProgress, [0.28, 0.38, 0.62, 0.72], [0, 1, 1, 0]);
  const img2 = useTransform(scrollYProgress, [0.62, 0.72, 1], [0, 1, 1]);
  const imgOps = [img0, img1, img2];

  const copy0 = useTransform(scrollYProgress, [0, 0.28, 0.38], [1, 1, 0]);
  const copy1 = useTransform(scrollYProgress, [0.28, 0.38, 0.62, 0.72], [0, 1, 1, 0]);
  const copy2 = useTransform(scrollYProgress, [0.62, 0.72, 1], [0, 1, 1]);
  const copyOps = [copy0, copy1, copy2];

  const y0 = useTransform(scrollYProgress, [0, 0.28, 0.38], [0, 0, -20]);
  const y1 = useTransform(scrollYProgress, [0.28, 0.38, 0.62, 0.72], [20, 0, -20]);
  const y2 = useTransform(scrollYProgress, [0.62, 0.72, 1], [20, 0, 0]);
  const ys = [y0, y1, y2];

  const bar0 = useTransform(scrollYProgress, [0, 0.33], [1, 0.25]);
  const bar1 = useTransform(scrollYProgress, [0.2, 0.5, 0.66], [0.25, 1, 0.25]);
  const bar2 = useTransform(scrollYProgress, [0.55, 1], [0.25, 1]);
  const bars = [bar0, bar1, bar2];

  if (reduce) {
    return (
      <section className="bg-thm-ink px-5 py-20 sm:px-6">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-3">
          {chapters.map((c) => (
            <div key={c.num}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={c.src} alt={c.title} fill className="object-cover" sizes="33vw" />
                <div className="absolute inset-0 bg-thm-purple/35 mix-blend-multiply" />
              </div>
              <p className="font-poppins mt-4 text-thm-gold">{c.num}</p>
              <h3 className="font-poppins mt-1 text-xl font-bold text-thm-cream">
                {c.title}
              </h3>
              <p className="font-inter mt-2 text-sm text-thm-cream/70">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[260vh] bg-thm-ink">
      <div className="sticky top-0 flex h-svh overflow-hidden">
        <div className="relative hidden w-[46%] lg:block">
          {chapters.map((c, i) => (
            <motion.div
              key={c.num}
              style={{ opacity: imgOps[i] }}
              className="absolute inset-0"
            >
              <Image
                src={c.src}
                alt={c.title}
                fill
                className="object-cover"
                sizes="46vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-thm-purple/30 mix-blend-multiply" />
            </motion.div>
          ))}
          <div className="absolute bottom-0 right-0 top-0 w-1.5 bg-thm-gold" />
        </div>

        <div className="relative flex w-full flex-col justify-center px-6 py-16 lg:w-[54%] lg:px-14 xl:px-20">
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            {chapters.map((c, i) => (
              <motion.div
                key={c.num}
                style={{ opacity: copyOps[i], y: ys[i] }}
                className="absolute inset-x-0 top-0"
              >
                <div className="relative mb-6 aspect-[16/10] overflow-hidden lg:hidden">
                  <Image
                    src={c.src}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-thm-purple/35 mix-blend-multiply" />
                </div>
                <span className="font-poppins text-[56px] font-bold leading-none text-thm-gold/35 sm:text-[72px]">
                  {c.num}
                </span>
                <h2 className="font-poppins mt-2 text-[32px] font-bold leading-[1.05] tracking-[-0.02em] text-thm-cream sm:text-[44px]">
                  {c.title}
                </h2>
                <p className="font-inter mt-4 max-w-md text-[17px] leading-relaxed text-thm-cream/75">
                  {c.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto flex gap-2 pt-10">
            {chapters.map((c, i) => (
              <motion.div
                key={c.num}
                style={{ opacity: bars[i] }}
                className="h-1 flex-1 bg-thm-gold"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
