"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type LoopingCounterProps = {
  from: number;
  to: number;
  suffix?: string;
  /** Milliseconds between each +1 tick */
  stepMs?: number;
  /** Pause at peak before reset in ms */
  pause?: number;
  /** Pause at base before next cycle in ms */
  restartDelay?: number;
  className?: string;
};

export function LoopingCounter({
  from,
  to,
  suffix = "+",
  stepMs = 25,
  pause = 900,
  restartDelay = 500,
  className = "",
}: LoopingCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "-40px" });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (reduce) {
      setCount(from);
      return;
    }
    if (!inView) return;

    let interval = 0;
    let timeout = 0;
    let cancelled = false;
    let current = from;

    const runCycle = () => {
      current = from;
      setCount(from);

      interval = window.setInterval(() => {
        if (cancelled) return;
        if (current < to) {
          current += 1;
          setCount(current);
        } else {
          clearInterval(interval);
          timeout = window.setTimeout(() => {
            if (!cancelled) {
              timeout = window.setTimeout(runCycle, restartDelay);
            }
          }, pause);
        }
      }, stepMs);
    };

    runCycle();

    return () => {
      cancelled = true;
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [inView, from, to, stepMs, pause, restartDelay, reduce]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
