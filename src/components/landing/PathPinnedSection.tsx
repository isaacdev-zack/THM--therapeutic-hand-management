"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const chapters = [
  {
    title: "Start where you are",
    text: "Whether you are fresh from school or changing careers — THM meets you at enrollment.",
    src: "https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Practice with purpose",
    text: "Labs and placements turn theory into confident bedside care.",
    src: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Walk to the stage",
    text: "Graduate ready for hospitals, homes, and a life of service.",
    src: "https://images.unsplash.com/photo-1645263012675-bb72c4752882?q=80&w=1600&auto=format&fit=crop",
  },
];

export function PathPinnedSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const o0 = useTransform(scrollYProgress, [0, 0.28, 0.38], [1, 1, 0]);
  const o1 = useTransform(scrollYProgress, [0.28, 0.38, 0.62, 0.72], [0, 1, 1, 0]);
  const o2 = useTransform(scrollYProgress, [0.62, 0.72, 1], [0, 1, 1]);

  const opacities = [o0, o1, o2];

  if (reduce) {
    return (
      <section className="bg-thm-ink px-6 py-20">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3">
          {chapters.map((c) => (
            <div key={c.title}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={c.src} alt={c.title} fill className="object-cover" sizes="33vw" />
              </div>
              <h3 className="font-poppins mt-4 text-xl font-bold text-thm-cream">
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
    <section ref={ref} className="relative h-[280vh] bg-thm-ink">
      <div className="sticky top-0 h-svh overflow-hidden">
        {chapters.map((c, i) => (
          <motion.div
            key={c.title}
            style={{ opacity: opacities[i] }}
            className="absolute inset-0"
          >
            <Image
              src={c.src}
              alt={c.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-thm-ink/55" />
          </motion.div>
        ))}

        <div className="relative z-10 flex h-full items-end px-6 pb-16 md:pb-24">
          <div className="mx-auto w-full max-w-[900px]">
            {chapters.map((c, i) => (
              <motion.div
                key={c.title}
                style={{ opacity: opacities[i] }}
                className="absolute bottom-16 left-6 right-6 mx-auto max-w-[900px] md:bottom-24 md:left-auto md:right-auto"
              >
                <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.2em] text-thm-gold">
                  Chapter 0{i + 1}
                </p>
                <h2 className="font-poppins mt-3 text-[36px] font-bold leading-[1.05] text-thm-cream sm:text-[52px]">
                  {c.title}
                </h2>
                <p className="font-inter mt-4 max-w-[480px] text-[17px] text-thm-cream/80">
                  {c.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
