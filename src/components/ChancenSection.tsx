"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const benefits = [
  "No upfront tuition fees to begin your studies",
  "No collateral required",
  "Repay only after finishing your studies",
  "For Kenyan youth aged 19–35",
  "Covers Certificate in Caregiver training at THM",
];

export function ChancenSection() {
  const reduce = useReducedMotion();

  return (
    <section id="chancen" className="relative bg-thm-purple py-20 text-white lg:py-28">
      {/* Solid gold accent bar — not a glow */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-thm-gold" />

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.16em] text-thm-gold">
              Financing partnership
            </p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Study Now, Pay Later with CHANCEN International
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              THM partners with CHANCEN International so less-privileged youth
              can train as caregivers without paying fees upfront — then repay
              after completing their studies.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-thm-gold text-thm-ink">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-white/90">{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#admissions"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-thm-gold px-7 font-poppins text-base font-semibold text-thm-ink transition-colors hover:bg-thm-gold-hover"
            >
              Apply for CHANCEN funding
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Ledger / progress motif — solid shapes only */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="border-2 border-thm-gold bg-thm-purple-dark p-8">
              <p className="font-poppins text-sm font-semibold uppercase tracking-[0.14em] text-thm-gold">
                CHANCEN track record
              </p>

              {/* Simple line-drawn progress/ledger graphic */}
              <svg
                viewBox="0 0 280 56"
                className="mt-6 w-full text-thm-gold"
                aria-hidden
              >
                <line x1="8" y1="28" x2="272" y2="28" stroke="currentColor" strokeWidth="2" opacity="0.35" />
                <circle cx="28" cy="28" r="10" fill="#F8BC0A" />
                <circle cx="100" cy="28" r="10" fill="#F8BC0A" />
                <circle cx="172" cy="28" r="10" fill="#F8BC0A" />
                <circle cx="244" cy="28" r="10" fill="none" stroke="#F8BC0A" strokeWidth="2" />
                <text x="28" y="52" textAnchor="middle" fill="#FAF7F2" fontSize="9" opacity="0.7">
                  Enroll
                </text>
                <text x="100" y="52" textAnchor="middle" fill="#FAF7F2" fontSize="9" opacity="0.7">
                  Train
                </text>
                <text x="172" y="52" textAnchor="middle" fill="#FAF7F2" fontSize="9" opacity="0.7">
                  Graduate
                </text>
                <text x="244" y="52" textAnchor="middle" fill="#FAF7F2" fontSize="9" opacity="0.7">
                  Repay
                </text>
              </svg>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-thm-purple p-5">
                  <p className="font-poppins text-3xl font-bold text-white">
                    <AnimatedCounter to={9000} suffix="+" />
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-thm-gold">
                    Students financed globally
                  </p>
                </div>
                <div className="bg-thm-purple p-5">
                  <p className="font-poppins text-3xl font-bold text-thm-gold">
                    <AnimatedCounter to={93} suffix="%" />
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/75">
                    Graduation rate
                  </p>
                </div>
              </div>

              <div className="mt-5 border border-thm-gold/40 bg-thm-purple p-4">
                <p className="text-sm font-semibold text-white">Eligibility</p>
                <p className="mt-1 text-sm leading-relaxed text-white/75">
                  Kenyan youth aged 19–35 admitted into THM&apos;s caregiver
                  program.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
