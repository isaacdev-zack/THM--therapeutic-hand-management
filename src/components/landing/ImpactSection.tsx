"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { LoopingCounter } from "@/components/LoopingCounter";

const stats = [
  {
    kind: "loop" as const,
    from: 150,
    to: 500,
    suffix: "+",
    label: "Graduates building careers in care",
  },
  {
    kind: "text" as const,
    display: "NITA",
    label: "Certified training employers trust",
  },
  {
    kind: "count" as const,
    value: 2,
    suffix: "",
    label: "Campuses — Nairobi & Kisumu",
  },
  {
    kind: "text" as const,
    display: "100%",
    label: "Hands-on labs & practice",
  },
];

function Count({
  to,
  suffix,
  active,
  reduce,
}: {
  to: number;
  suffix: string;
  active: boolean;
  reduce: boolean;
}) {
  const [n, setN] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setN(to);
      return;
    }
    const start = performance.now();
    let id = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1100);
      setN(Math.round((1 - Math.pow(1 - t, 3)) * to));
      if (t < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [active, to, reduce]);
  return (
    <>
      {n.toLocaleString()}
      {suffix}
    </>
  );
}

export function ImpactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = !!useReducedMotion();

  return (
    <section ref={ref} className="border-b border-thm-ink/10 bg-white">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-7 sm:px-7 sm:py-8 ${
              i % 2 === 1 ? "border-l border-thm-ink/10" : ""
            } ${i >= 2 ? "border-t border-thm-ink/10 lg:border-t-0" : ""} ${
              i >= 1 ? "lg:border-l lg:border-thm-ink/10" : ""
            }`}
          >
            <p className="font-poppins text-3xl font-bold tracking-tight text-thm-purple sm:text-4xl">
              {s.kind === "loop" ? (
                <LoopingCounter
                  from={s.from}
                  to={s.to}
                  suffix={s.suffix}
                />
              ) : s.kind === "text" ? (
                s.display
              ) : (
                <Count
                  to={s.value}
                  suffix={s.suffix ?? ""}
                  active={inView}
                  reduce={reduce}
                />
              )}
            </p>
            <p className="mt-1.5 text-sm font-medium leading-snug text-thm-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
