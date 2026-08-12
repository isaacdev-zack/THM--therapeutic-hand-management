"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/landing/Motion";
import { careersContent } from "@/data/careers";

export function CareerIntro() {
  const { about } = careersContent;
  const [main, top, bottom] = about.collage;

  return (
    <section className="bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <FadeUp className="lg:col-span-5" y={12}>
          <h2 className="font-poppins text-3xl font-bold leading-tight tracking-tight text-thm-ink sm:text-4xl lg:text-[2.6rem]">
            {about.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-thm-muted sm:text-lg">
            {about.body}
          </p>
          <Link
            href={about.ctaHref}
            className="mt-6 inline-flex h-12 items-center rounded-full bg-thm-purple px-7 font-poppins text-sm font-semibold text-white transition-colors hover:bg-thm-purple-dark"
          >
            {about.ctaLabel}
          </Link>
        </FadeUp>

        <FadeUp delay={0.06} className="lg:col-span-7" y={12}>
          <div className="grid grid-cols-12 grid-rows-2 gap-3 sm:gap-4">
            <div className="relative col-span-7 row-span-2 min-h-[240px] overflow-hidden rounded-[22px] sm:min-h-[300px] lg:min-h-[360px]">
              <Image
                src={main.src}
                alt={main.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 35vw"
                priority
              />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_8px_24px_rgba(30,19,38,0.12)]">
                <p className="font-poppins text-2xl font-bold text-thm-purple">
                  150+
                </p>
                <p className="text-xs font-medium text-thm-muted">
                  Graduates placed into care roles
                </p>
              </div>
            </div>

            <div className="relative col-span-5 min-h-[110px] overflow-hidden rounded-[22px] sm:min-h-[140px] lg:min-h-[170px]">
              <Image
                src={top.src}
                alt={top.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 22vw"
              />
            </div>

            <div className="relative col-span-5 min-h-[110px] overflow-hidden rounded-[22px] sm:min-h-[140px] lg:min-h-[170px]">
              <Image
                src={bottom.src}
                alt={bottom.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 40vw, 22vw"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
