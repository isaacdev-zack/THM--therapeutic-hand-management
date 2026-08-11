"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 150, suffix: "+", label: "Graduates trained since 2023" },
  { value: 2, suffix: "", label: "Counties — Nairobi & Kisumu" },
  { value: 20, suffix: "+", label: "Practical caregiving skills" },
  { value: 93, suffix: "%", label: "CHANCEN graduation rate" },
];

function AnimatedNumber({
  value,
  suffix,
  active,
  reduceMotion,
}: {
  value: number;
  suffix: string;
  active: boolean;
  reduceMotion: boolean;
}) {
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!active) {
      if (!reduceMotion) setDisplay(0);
      return;
    }
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    setDisplay(0);
    let frame = 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value, reduceMotion]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.35 });
  const reduceMotion = !!useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-thm-cream px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1100px]">
        <motion.p
          initial={false}
          animate={
            reduceMotion || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
          }
          transition={{ duration: 0.5 }}
          className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-thm-purple"
        >
          Clarity, measured
        </motion.p>
        <motion.h2
          initial={false}
          animate={
            reduceMotion || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
          }
          transition={{ duration: 0.55, delay: inView ? 0.05 : 0 }}
          className="font-poppins mt-3 max-w-[520px] text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-thm-ink sm:text-[48px]"
        >
          Numbers that mean a path — not a brochure.
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-thm-ink/10 pt-10 md:mt-16 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={false}
              animate={
                reduceMotion || inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: inView ? 0.1 + i * 0.08 : 0 }}
              className="relative"
            >
              <p className="font-poppins text-[52px] font-bold leading-none tracking-[-0.04em] text-thm-ink sm:text-[72px]">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  active={inView}
                  reduceMotion={reduceMotion}
                />
              </p>
              <p className="font-inter mt-3 max-w-[180px] text-[14px] leading-snug text-thm-muted sm:text-[15px]">
                {stat.label}
              </p>
              {i < stats.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-3 top-2 hidden h-16 w-px bg-thm-ink/10 lg:block"
                  aria-hidden
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
