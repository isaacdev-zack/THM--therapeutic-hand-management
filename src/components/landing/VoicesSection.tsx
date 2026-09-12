"use client";

import Image from "next/image";
import { FadeUp, Stagger, StaggerItem } from "./Motion";
import { careersContent } from "@/data/careers";

export function VoicesSection() {
  const voices = careersContent.testimonials;

  return (
    <section className="border-t border-thm-ink/10 bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <FadeUp className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-poppins text-[1.85rem] font-bold tracking-tight text-thm-ink sm:text-3xl">
            Graduate voices
          </h2>
        </FadeUp>

        <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
          {voices.map((v) => (
            <StaggerItem
              key={v.name}
              className="rounded-2xl border border-thm-lilac bg-thm-cream/40 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-poppins text-sm font-bold text-thm-purple">
                    {v.name}
                  </p>
                  <p className="text-xs text-thm-muted">{v.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-thm-ink/90">
                “{v.quote}”
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
