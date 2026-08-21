"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import type { SkillItem } from "@/data/caregiverSkills";

type SkillListItemProps = {
  skill: SkillItem;
  index: number;
};

export function SkillListItem({ skill, index }: SkillListItemProps) {
  const reduce = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.32 }}
      className="group flex flex-1 flex-col justify-center border-b border-thm-ink/10 last:border-b-0"
      onMouseEnter={canHover ? () => setExpanded(true) : undefined}
      onMouseLeave={canHover ? () => setExpanded(false) : undefined}
    >
      <button
        type="button"
        aria-expanded={expanded}
        onClick={canHover ? undefined : () => setExpanded((prev) => !prev)}
        className="flex w-full items-center gap-4 py-4 text-left sm:gap-5 sm:py-5"
      >
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center transition-colors ${
            expanded
              ? "bg-thm-purple text-white"
              : "bg-thm-gold text-thm-ink group-hover:bg-thm-purple group-hover:text-white"
          }`}
        >
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
        <span className="min-w-0 flex-1">
          <span
            className={`block font-poppins text-[15px] font-semibold transition-colors sm:text-base ${
              expanded
                ? "text-thm-purple"
                : "text-thm-ink group-hover:text-thm-purple"
            }`}
          >
            {skill.title}
          </span>
          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
            }
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm leading-relaxed text-thm-muted">
              {skill.summary}
            </p>
            {skill.details && skill.details.length > 0 ? (
              <ul className="mt-2.5 space-y-1 pb-1">
                {skill.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-2 text-sm leading-relaxed text-thm-ink/75"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-thm-purple" />
                    {detail}
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.div>
        </span>
      </button>
    </motion.li>
  );
}
