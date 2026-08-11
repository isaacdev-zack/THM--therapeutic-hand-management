"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    n: "1",
    title: "Enroll at THM",
    text: "Join Certificate in Caregiver training in Nairobi or Kisumu.",
  },
  {
    n: "2",
    title: "Train under NITA",
    text: "Master clinical, patient support, and safety skills in labs.",
  },
  {
    n: "3",
    title: "Graduate & serve",
    text: "Step into hospitals, care homes, childcare, or private homes.",
  },
];

export function GuideSection() {
  return (
    <section className="bg-thm-lilac px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[900px] text-center">
        <h2 className="font-poppins text-[36px] font-bold text-thm-ink sm:text-[48px]">
          Three beats. One clear path.
        </h2>
        <p className="font-inter mx-auto mt-4 max-w-[480px] text-[16px] text-thm-muted">
          From enrollment to employment — simple enough to start today.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1000px] gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white p-7"
          >
            <p className="font-poppins text-[40px] font-bold leading-none text-thm-gold">
              {step.n}
            </p>
            <h3 className="font-poppins mt-4 text-[22px] font-bold text-thm-ink">
              {step.title}
            </h3>
            <p className="font-inter mt-2 text-[15px] leading-relaxed text-thm-muted">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/contact"
          className="font-poppins inline-flex h-14 items-center rounded-md bg-thm-ink px-8 text-[16px] font-bold text-thm-cream hover:bg-thm-purple"
        >
          Start your application
        </Link>
      </div>
    </section>
  );
}
