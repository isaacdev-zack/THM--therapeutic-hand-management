"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

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
  const reduce = !!useReducedMotion();

  const side = [
    { value: 2, suffix: "", label: "Counties — Nairobi & Kisumu" },
    { value: 20, suffix: "+", label: "Practical caregiving skills" },
    { value: 93, suffix: "%", label: "CHANCEN graduation rate" },
  ];

  return (
    <section ref={ref} className="bg-thm-purple text-white">
      <div className="mx-auto grid max-w-[1200px] lg:grid-cols-12">
        <div className="border-b border-white/15 px-6 py-16 sm:px-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:py-24 lg:pl-10 lg:pr-12">
          <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-thm-gold">
            Track record
          </p>
          <p className="font-poppins mt-6 text-[88px] font-bold leading-none tracking-[-0.05em] text-thm-gold sm:text-[120px] lg:text-[140px]">
            <AnimatedNumber
              value={150}
              suffix="+"
              active={inView}
              reduceMotion={reduce}
            />
          </p>
          <h2 className="font-poppins mt-4 max-w-md text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-[36px]">
            caregivers graduated since 2023
          </h2>
          <p className="font-inter mt-4 max-w-md text-[16px] leading-relaxed text-white/75">
            NITA-aligned training that turns motivated youth into trusted care
            professionals across Kenya.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-0 px-6 py-10 sm:px-8 lg:col-span-5 lg:py-0 lg:pr-10">
          {side.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={false}
              animate={
                reduce || inView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 16 }
              }
              transition={{ duration: 0.45, delay: inView ? 0.1 + i * 0.08 : 0 }}
              className={`border-b border-white/15 py-8 last:border-b-0 ${
                i === 0 ? "lg:pt-0" : ""
              }`}
            >
              <p className="font-poppins text-[48px] font-bold leading-none tracking-[-0.03em] text-white sm:text-[56px]">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  active={inView}
                  reduceMotion={reduce}
                />
              </p>
              <p className="font-inter mt-2 text-[15px] text-white/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
