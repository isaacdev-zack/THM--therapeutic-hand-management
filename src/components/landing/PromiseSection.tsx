"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "./Motion";

const intro =
  "Our Caregiver Course under the NITA Curriculum has been developed to address skills demand for people working in the healthcare industry. The Training is intended to facilitate acquisition of skills, knowledge and attitude and to enable the trainee work in both formal and informal employment and empower caregivers to pursue further training in related disciplines.";

const caregiverRole =
  "Caregiver II performs mainly routine duties in healthcare facilities with some limited autonomy in defined contexts and within established parameters. THM trains Caregivers to have basic job specific knowledge and skills to provide personal care to a client at home, facilitate patient care and management, ensure patient safety and environmental safety, and adhere to healthcare professional ethics.";

export function PromiseSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-thm-cream px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1120px]">
        <FadeUp>
          <div className="relative lg:min-h-[560px] xl:min-h-[600px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] sm:rounded-[36px] lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[64%] lg:min-h-[540px]">
              <Image
                src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?q=80&w=1400&auto=format&fit=crop"
                alt="African healthcare professional with a young patient"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 64vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-thm-purple/15" />
              <div className="absolute bottom-6 left-6 max-w-[240px] sm:bottom-8 sm:left-8 sm:max-w-xs lg:bottom-10 lg:left-10">
                <p className="font-poppins text-[1.65rem] font-bold leading-[1.05] text-white sm:text-3xl lg:text-4xl">
                  Skills that
                </p>
                <p className="font-poppins text-[1.65rem] font-bold leading-[1.05] text-thm-gold sm:text-3xl lg:text-4xl">
                  save lives.
                </p>
              </div>
            </div>

            <div className="relative z-10 mx-3 -mt-12 rounded-[28px] bg-white p-7 shadow-[0_16px_48px_rgba(30,19,38,0.08)] sm:mx-6 sm:p-9 lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[52%] lg:-translate-y-1/2 lg:rounded-[36px] lg:p-11 xl:p-12">
              <h2 className="font-poppins text-[1.75rem] font-bold leading-[1.12] tracking-tight text-thm-ink sm:text-[2rem] lg:text-[2.25rem]">
                NITA-certified caregiver training.
              </h2>

              <p className="mt-5 text-[15px] leading-relaxed text-thm-muted sm:text-base">
                {intro}
              </p>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  expanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="mt-4 text-[15px] leading-relaxed text-thm-muted sm:text-base">
                    {caregiverRole}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="mt-4 inline-flex items-center gap-1.5 font-poppins text-sm font-semibold text-thm-purple transition-colors hover:text-thm-purple-dark"
              >
                {expanded ? "Read less" : "Read more"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    expanded ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>

              <p className="mt-4 text-sm text-thm-muted">
                Westlands, Nairobi · also Kisumu — New Waumini House, 3rd Floor
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/programs"
                  className="inline-flex h-12 items-center rounded-full bg-thm-purple px-7 font-poppins text-sm font-semibold text-white transition-colors hover:bg-thm-purple-dark"
                >
                  View programs
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
