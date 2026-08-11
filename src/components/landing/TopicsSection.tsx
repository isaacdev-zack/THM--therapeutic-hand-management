"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const topics = [
  {
    id: "hospital",
    title: "Hospitals & wards",
    hint: "Maps toward clinical support under registered nurse supervision.",
  },
  {
    id: "elder",
    title: "Elder care homes",
    hint: "Maps toward geriatric support, mobility, and dignity in aging.",
  },
  {
    id: "child",
    title: "Childcare centres",
    hint: "Maps toward safeguarding children and daily developmental care.",
  },
  {
    id: "home",
    title: "Private home care",
    hint: "Maps toward one-to-one recovery and at-risk client support.",
  },
  {
    id: "clinical",
    title: "Clinical skills focus",
    hint: "Maps toward vitals, monitoring, and therapy support units.",
  },
  {
    id: "finance",
    title: "Study Now, Pay Later",
    hint: "Maps toward CHANCEN financing for youth aged 19–35.",
  },
];

export function TopicsSection() {
  const [active, setActive] = useState(topics[0].id);
  const current = topics.find((t) => t.id === active) || topics[0];

  const href =
    current.id === "finance"
      ? "/financing"
      : current.id === "clinical"
        ? "/programs"
        : "/careers";

  return (
    <section id="path" className="bg-thm-ink px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-poppins max-w-[640px] text-[36px] font-bold leading-[1.05] text-thm-cream sm:text-[48px]">
          Where do you want to serve?
        </h2>
        <p className="font-inter mt-4 max-w-[480px] text-[16px] text-thm-cream/75">
          Pick a focus. We&apos;ll point you to the right THM pathway — training,
          careers, or financing.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const on = active === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setActive(topic.id)}
                className={`rounded-md border px-5 py-5 text-left transition-colors ${
                  on
                    ? "border-thm-gold bg-thm-gold text-thm-ink"
                    : "border-white/15 bg-transparent text-thm-cream hover:border-thm-gold/60"
                }`}
              >
                <span className="font-poppins text-[18px] font-bold">
                  {topic.title}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex flex-col gap-4 border border-white/10 bg-thm-purple p-6 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <p className="font-inter text-[16px] text-thm-cream md:text-[18px]">
            {current.hint}
          </p>
          <Link
            href={href}
            className="font-poppins inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-thm-cream px-6 text-[15px] font-bold text-thm-ink"
          >
            Continue
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
