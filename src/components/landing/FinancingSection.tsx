"use client";

import Link from "next/link";
import { Check } from "lucide-react";
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
          <h2 className="font-poppins text-[1.85rem] font-bold tracking-tight sm:text-3xl">
            Study Now, Pay Later
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/85 sm:text-base">
            Remove the fee barrier. Eligible youth can train at THM without
            paying upfront — then repay after finishing studies.
          </p>
          <Stagger className="mt-6 grid gap-2 sm:grid-cols-2" stagger={0.06}>
            {points.map((p) => (
              <StaggerItem key={p}>
                <div className="flex items-start gap-2.5 text-sm text-white/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {p}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeUp>

        <FadeUp delay={0.12} className="lg:col-span-5">
          <div className="rounded-2xl bg-white/10 p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 p-5">
                <p className="font-poppins text-3xl font-bold text-white">
                  150+
                </p>
                <p className="mt-1.5 text-sm text-white/70">THM graduates</p>
              </div>
              <div className="rounded-xl bg-white/10 p-5">
                <p className="font-poppins text-3xl font-bold text-white">2</p>
                <p className="mt-1.5 text-sm text-white/70">Campus cities</p>
              </div>
            </div>
            <Link
              href="/financing"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-white font-poppins text-sm font-semibold text-thm-purple transition-colors hover:bg-thm-cream"
            >
              How financing works
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
