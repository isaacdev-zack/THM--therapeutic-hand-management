"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Enroll",
    text: "Apply for caregiver training in Nairobi or Kisumu — ask about CHANCEN financing.",
  },
  {
    n: "02",
    title: "Train",
    text: "Master NITA clinical, support, and safety skills in labs and classrooms.",
  },
  {
    n: "03",
    title: "Place",
    text: "Complete supervised practice in hospitals and care environments.",
  },
  {
    n: "04",
    title: "Serve",
    text: "Graduate into paid roles across Kenya’s care economy.",
  },
];

export function GuideSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-thm-purple">
              How it works
            </p>
            <h2 className="font-poppins mt-3 text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-thm-ink sm:text-[48px]">
              A simple sequence.
              <span className="block text-thm-purple">A serious profession.</span>
            </h2>
          </div>
          <p className="font-inter max-w-md text-[16px] leading-relaxed text-thm-muted lg:col-span-6 lg:justify-self-end lg:text-right">
            From first inquiry to first day on the job — THM keeps the path
            visible at every step.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting rule — desktop */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-[3px] bg-thm-gold lg:block"
            aria-hidden
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center bg-thm-ink font-poppins text-[18px] font-bold text-thm-gold">
                  {step.n}
                </div>
                <h3 className="font-poppins mt-6 text-[24px] font-bold text-thm-ink">
                  {step.title}
                </h3>
                <p className="font-inter mt-2 text-[15px] leading-relaxed text-thm-muted">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center bg-thm-purple px-7 font-poppins text-[15px] font-bold text-white hover:bg-thm-purple-dark"
          >
            Start your application
          </Link>
          <Link
            href="/financing"
            className="inline-flex h-12 items-center border-2 border-thm-ink px-7 font-poppins text-[15px] font-bold text-thm-ink hover:bg-thm-ink hover:text-white"
          >
            Study Now, Pay Later
          </Link>
        </div>
      </div>
    </section>
  );
}
