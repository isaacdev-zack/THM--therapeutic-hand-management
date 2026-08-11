"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const pathways = [
  {
    id: "hospital",
    title: "Hospitals & wards",
    hint: "Clinical support under registered nurse supervision in private and public facilities.",
    href: "/careers",
    src: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "elder",
    title: "Elder care homes",
    hint: "Geriatric support, mobility assistance, and dignity in aging.",
    href: "/careers",
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "child",
    title: "Childcare centres",
    hint: "Safeguarding children and daily developmental care with empathy.",
    href: "/careers",
    src: "https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "home",
    title: "Private home care",
    hint: "One-to-one recovery support for discharged or at-risk clients.",
    href: "/careers",
    src: "https://images.unsplash.com/photo-1643297654397-97b3201abc7c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "clinical",
    title: "Clinical skills focus",
    hint: "Vitals, monitoring, therapy support — the full NITA skill set.",
    href: "/programs",
    src: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "finance",
    title: "Study Now, Pay Later",
    hint: "CHANCEN financing for Kenyan youth aged 19–35 — no upfront fees.",
    href: "/financing",
    src: "https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?q=80&w=1000&auto=format&fit=crop",
  },
];

export function TopicsSection() {
  const [active, setActive] = useState(pathways[0].id);
  const current = pathways.find((p) => p.id === active) || pathways[0];
  const reduce = useReducedMotion();

  return (
    <section className="bg-thm-cream px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-thm-purple">
            Choose your direction
          </p>
          <h2 className="font-poppins mt-3 text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-thm-ink sm:text-[48px]">
            Where will your hands serve?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-1 lg:col-span-5">
            {pathways.map((p, i) => {
              const on = p.id === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActive(p.id)}
                  onMouseEnter={() => setActive(p.id)}
                  className={`group flex items-center gap-4 border-b border-thm-ink/10 py-5 text-left transition-colors ${
                    on ? "text-thm-purple" : "text-thm-ink hover:text-thm-purple"
                  }`}
                >
                  <span
                    className={`font-poppins text-sm font-bold tabular-nums ${
                      on ? "text-thm-gold" : "text-thm-ink/30"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-poppins text-[20px] font-bold tracking-tight sm:text-[22px]">
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[380px] overflow-hidden bg-thm-ink lg:col-span-7 lg:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.src}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-thm-purple/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-thm-ink/50" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                  <h3 className="font-poppins text-2xl font-bold text-white sm:text-3xl">
                    {current.title}
                  </h3>
                  <p className="font-inter mt-3 max-w-md text-[16px] leading-relaxed text-white/85">
                    {current.hint}
                  </p>
                  <Link
                    href={current.href}
                    className="mt-6 inline-flex items-center gap-2 bg-thm-gold px-6 py-3 font-poppins text-[15px] font-bold text-thm-ink transition-colors hover:bg-thm-gold-hover"
                  >
                    Explore this path
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
