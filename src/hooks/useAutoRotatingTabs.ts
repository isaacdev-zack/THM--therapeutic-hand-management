"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

function isCoarsePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

export function useAutoRotatingTabs<T extends string>(
  ids: readonly T[],
  intervalMs = 5500,
) {
  const reduceMotion = useReducedMotion();
  const [active, setActiveState] = useState<T>(ids[0]);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  const coarseRef = useRef(false);

  useEffect(() => {
    coarseRef.current = isCoarsePointer();
  }, []);

  const selectTab = useCallback((id: T) => {
    setActiveState(id);
    if (coarseRef.current) {
      setManualPaused(true);
    }
  }, []);

  const sectionHandlers = {
    onMouseEnter: () => setHoverPaused(true),
    onMouseLeave: () => setHoverPaused(false),
  };

  useEffect(() => {
    if (reduceMotion || hoverPaused || manualPaused) return;

    const timer = window.setInterval(() => {
      setActiveState((prev) => {
        const index = ids.indexOf(prev);
        return ids[(index + 1) % ids.length];
      });
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [reduceMotion, hoverPaused, manualPaused, ids, intervalMs]);

  return {
    active,
    selectTab,
    sectionHandlers,
    isPaused: hoverPaused || manualPaused,
  };
}
