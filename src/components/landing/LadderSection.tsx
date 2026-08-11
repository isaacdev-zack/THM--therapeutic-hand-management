"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const stages = [
  {
    num: "01",
    title: "Learn the craft",
    detail:
      "NITA classroom theory with instructors who teach caregiving as both skill and calling.",
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Practice by hand",
    detail:
      "Simulation labs for vitals, hygiene, transfers, and patient support — until it feels natural.",
    src: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Serve under supervision",
    detail:
      "Clinical placement in real care settings with registered nurse oversight.",
    src: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Graduate into work",
    detail:
      "Hospitals, elder care, childcare centres, and private homes across Kenya.",
    src: "https://images.unsplash.com/photo-1645263012675-bb72c4752882?q=80&w=1200&auto=format&fit=crop",
  },
];

export function LadderSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-grain px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-thm-purple">
              From classroom to career
            </p>
            <h2 className="font-poppins mt-3 text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-thm-ink sm:text-[48px]">
              Four stages.
              <span className="text-thm-purple"> One profession.</span>
            </h2>
          </div>
          <p className="max-w-sm font-inter text-[16px] leading-relaxed text-thm-muted lg:text-right">
            A clear path — not a vague promise. Each stage is designed so you
            leave THM ready to care with confidence.
          </p>
        </div>

        <div className="mt-14 space-y-0">
          {stages.map((stage, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.article
                key={stage.num}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className={`grid items-center gap-6 border-t border-thm-ink/10 py-10 md:gap-10 lg:grid-cols-12 lg:py-14 ${
                  flip ? "" : ""
                }`}
              >
                <div
                  className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}
                >
                  <span className="font-poppins text-[64px] font-bold leading-none tracking-[-0.04em] text-thm-gold sm:text-[80px]">
                    {stage.num}
                  </span>
                  <h3 className="font-poppins mt-2 text-[28px] font-bold tracking-[-0.02em] text-thm-ink sm:text-[34px]">
                    {stage.title}
                  </h3>
                  <p className="font-inter mt-3 max-w-md text-[16px] leading-relaxed text-thm-muted">
                    {stage.detail}
                  </p>
                </div>
                <div
                  className={`relative aspect-[16/10] overflow-hidden lg:col-span-7 ${
                    flip ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={stage.src}
                    alt={stage.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-thm-purple/25 mix-blend-multiply" />
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-4 flex justify-start border-t border-thm-ink/10 pt-10">
          <Link
            href="/programs"
            className="font-poppins inline-flex h-12 items-center bg-thm-purple px-7 text-[15px] font-bold text-white transition-colors hover:bg-thm-purple-dark"
          >
            Explore the curriculum
          </Link>
        </div>
      </div>
    </section>
  );
}
