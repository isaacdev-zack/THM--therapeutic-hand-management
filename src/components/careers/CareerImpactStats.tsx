"use client";

import { Stagger, StaggerItem } from "@/components/landing/Motion";
import { careersContent } from "@/data/careers";

export function CareerImpactStats() {
  return (
    <section className="bg-thm-purple-deep px-5 py-5 text-white sm:px-8 lg:px-10 lg:py-6">
      <Stagger
        className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-4 lg:gap-4"
        stagger={0.05}
      >
        {careersContent.stats.map((stat) => (
          <StaggerItem key={stat.label} className="text-center lg:text-left">
            <p className="font-poppins text-2xl font-bold tracking-tight sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs text-white/65 sm:text-sm">{stat.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
