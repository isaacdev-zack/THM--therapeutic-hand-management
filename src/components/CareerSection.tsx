"use client";

import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Classroom foundation",
    desc: "Build theory and clinical knowledge under the NITA curriculum with THM instructors.",
  },
  {
    num: "02",
    title: "Hands-on practice",
    desc: "Master procedures in simulation labs — vitals, hygiene, transfers, and patient support.",
  },
  {
    num: "03",
    title: "Hospital & care placement",
    desc: "Apply skills under registered nurse supervision in real healthcare environments.",
  },
  {
    num: "04",
    title: "Working graduate",
    desc: "Step into paid caregiving roles across Kenya’s care economy.",
  },
];

const workplaces = [
  {
    title: "Hospitals",
    detail: "Ward support under registered nurse supervision",
  },
  {
    title: "Elder care homes",
    detail: "Geriatric support, mobility, and dignity in aging",
  },
  {
    title: "Childcare centres",
    detail: "Safeguarding children and daily developmental care",
  },
  {
    title: "Private home care",
    detail: "One-to-one support for recovering or at-risk clients",
  },
];

export function CareerSection() {
  const reduce = useReducedMotion();

  return (
    <section id="career" className="bg-grain py-20 lg:py-28 text-thm-ink">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-poppins text-sm font-semibold uppercase tracking-[0.16em] text-thm-purple">
            Career pathways
          </p>
          <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
            From classroom to caregiving career
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-thm-muted">
            A sequential path from training to employment — with clear outcomes
            across Kenya&apos;s care economy.
          </p>
        </motion.div>

        <div className="mt-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-slate-200 py-7 sm:grid-cols-[5.5rem_1fr] sm:gap-8"
            >
              <span className="font-poppins text-3xl font-bold text-thm-purple sm:text-4xl">
                {step.num}
              </span>
              <div>
                <h3 className="font-poppins text-xl font-bold sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-thm-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 border-t border-slate-200 pt-12">
          <h3 className="font-poppins text-xl font-bold sm:text-2xl">
            Where graduates work
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {workplaces.map((w) => (
              <div
                key={w.title}
                className="border-l-4 border-thm-gold bg-white px-5 py-5"
              >
                <p className="font-poppins font-semibold text-thm-ink">
                  {w.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-thm-muted">
                  {w.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
