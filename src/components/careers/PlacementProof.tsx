"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/landing/Motion";
import { careersContent } from "@/data/careers";

export function PlacementProof() {
  return (
    <section
      id="pathways"
      className="scroll-mt-24 bg-white px-5 py-12 sm:px-8 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeUp className="mx-auto max-w-2xl text-center" y={12}>
          <h2 className="font-poppins text-3xl font-bold tracking-tight text-thm-ink sm:text-4xl">
            Where THM graduates work
          </h2>
          <p className="mt-3 text-base text-thm-muted sm:text-lg">
            Four placement worlds. One training standard. Pick the path that
            fits the life you want to build.
          </p>
        </FadeUp>

        <div className="mt-10 space-y-12 lg:mt-12 lg:space-y-16">
          {careersContent.pathways.map((item, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <FadeUp key={item.title} delay={0.04} y={12}>
                <article className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-[24px] lg:col-span-6 ${
                      imageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div
                    className={`lg:col-span-6 ${
                      imageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <h3 className="font-poppins text-2xl font-bold tracking-tight text-thm-ink sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-thm-muted sm:text-lg">
                      {item.body}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-thm-cream px-3.5 py-1.5 text-xs font-medium text-thm-ink"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={item.href}
                      className="mt-7 inline-flex h-11 items-center rounded-full bg-thm-purple px-6 font-poppins text-sm font-semibold text-white transition-colors hover:bg-thm-purple-dark"
                    >
                      Learn more
                    </Link>
                  </div>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
