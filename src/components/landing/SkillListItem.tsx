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
      transition={{ delay: index * 0.04, duration: 0.28 }}
      className="group border-b border-thm-ink/10 last:border-b-0"
      onMouseEnter={canHover ? () => setExpanded(true) : undefined}
      onMouseLeave={canHover ? () => setExpanded(false) : undefined}
    >
      <button
        type="button"
        aria-expanded={expanded}
        onClick={canHover ? undefined : () => setExpanded((prev) => !prev)}
        className="flex w-full items-start gap-4 py-3.5 text-left first:pt-0 last:pb-0 sm:py-4"
      >
        <span
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center transition-colors ${
            expanded
              ? "bg-thm-purple text-white"
              : "bg-thm-gold text-thm-ink group-hover:bg-thm-purple group-hover:text-white"
          }`}
        >
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
        <span className="min-w-0 flex-1">
          <span
            className={`block font-poppins text-[15px] font-medium transition-colors sm:text-base ${
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
            <ul className="mt-2 space-y-1.5 pb-1">
              {skill.details.map((detail) => (
                <li
                  key={detail}
                  className="text-sm leading-relaxed text-thm-muted"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </span>
      </button>
    </motion.li>
  );
}
