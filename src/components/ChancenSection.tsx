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

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "THM graduates since 2023",
    counter: true,
  },
  {
    value: 2,
    suffix: "",
    label: "Campus cities",
    counter: true,
  },
];

export function ChancenSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-thm-purple py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <h2 className="font-poppins text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Study Now, Pay Later at THM
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Less-privileged youth can train as caregivers at THM without
              paying fees upfront — then repay after completing their studies.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-white/90">{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 font-poppins text-base font-semibold text-thm-purple transition-colors hover:bg-thm-cream"
            >
              Apply with financing
              <ArrowRight className="h-4 w-4" />
            </Link>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/55">
              THM financing is delivered in partnership with CHANCEN
              International.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-white/10 p-6 sm:p-8">
              <p className="font-poppins text-sm font-semibold text-white/90">
                At a glance
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white/10 p-5">
                    <p className="font-poppins text-3xl font-bold text-white">
                      <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1.5 text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-white/10 p-5">
                <p className="font-poppins text-sm font-semibold text-white">
                  How it works
                </p>
                <ol className="mt-3 space-y-2 text-sm text-white/75">
                  <li>Enroll at THM</li>
                  <li>Train without upfront fees</li>
                  <li>Graduate and start working</li>
                  <li>Repay after you finish studies</li>
                </ol>
              </div>

              <div className="mt-4 rounded-xl bg-white/10 p-5">
                <p className="font-poppins text-sm font-semibold text-white">
                  Eligibility
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/75">
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
