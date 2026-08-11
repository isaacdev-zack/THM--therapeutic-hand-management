"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "./Motion";

export function PromiseSection() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
        <FadeUp className="flex flex-col justify-center lg:col-span-5">
          <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-thm-purple">
            Therapeutic Hands Management
          </p>
          <h2 className="mt-3 font-poppins text-[1.85rem] font-bold leading-tight tracking-tight text-thm-ink sm:text-3xl">
            NITA-certified caregiver training for Nairobi and Kisumu
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-thm-muted sm:text-base">
            Registered April 2023. We equip caregivers with high-quality skills
            to safeguard children and adults at risk — with empathy, love, and
            respect.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex h-11 items-center rounded-full bg-thm-purple px-6 font-poppins text-sm font-semibold text-white transition-transform hover:bg-thm-purple-dark hover:scale-[1.03] active:scale-[0.98]"
            >
              About THM
            </Link>
            <Link
              href="/programs"
              className="inline-flex h-11 items-center rounded-full border border-thm-ink/20 px-6 font-poppins text-sm font-semibold text-thm-ink transition-colors hover:border-thm-purple hover:text-thm-purple"
            >
              View programs
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.12} className="relative min-h-[280px] overflow-hidden lg:col-span-7 lg:min-h-[340px]">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?q=80&w=1400&auto=format&fit=crop"
              alt="African healthcare professional with a young patient"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-thm-purple/25 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 bg-thm-ink/90 px-5 py-4 sm:px-6">
            <p className="font-poppins text-sm font-semibold text-thm-gold">
              Westlands, Nairobi · also Kisumu
            </p>
            <p className="mt-0.5 text-sm text-white/80">
              New Waumini House, 3rd Floor — practical labs & placements
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
