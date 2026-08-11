"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, Stagger, StaggerItem } from "./Motion";

const points = [
  "No upfront tuition fees",
  "No collateral required",
  "Repay after completing studies",
  "For Kenyan youth aged 19–35",
];

export function FinancingSection() {
  return (
    <section className="bg-thm-purple px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <FadeUp className="lg:col-span-7">
          <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-thm-gold">
            Financing · CHANCEN International
          </p>
          <h2 className="mt-2 font-poppins text-[1.85rem] font-bold tracking-tight sm:text-3xl">
            Study Now, Pay Later
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/85 sm:text-base">
            Remove the fee barrier. Eligible youth can train at THM without
            paying upfront — then repay after finishing studies. CHANCEN has
            financed 9,000+ students globally with a 93% graduation rate.
          </p>
          <Stagger className="mt-6 grid gap-2 sm:grid-cols-2" stagger={0.06}>
            {points.map((p) => (
              <StaggerItem key={p}>
                <div className="flex items-start gap-2.5 text-sm text-white/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-thm-gold text-thm-ink">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {p}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeUp>

        <FadeUp delay={0.12} className="lg:col-span-5">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="border-2 border-thm-gold bg-thm-purple-dark p-6 sm:p-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-poppins text-3xl font-bold text-white">
                  9,000+
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-thm-gold">
                  Students financed
                </p>
              </div>
              <div>
                <p className="font-poppins text-3xl font-bold text-thm-gold">
                  93%
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70">
                  Graduation rate
                </p>
              </div>
            </div>
            <Link
              href="/financing"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-thm-gold font-poppins text-sm font-semibold text-thm-ink transition-transform hover:bg-thm-gold-hover hover:scale-[1.02] active:scale-[0.98]"
            >
              How financing works
            </Link>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
