"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-thm-purple-deep text-white">
      {/* Full-bleed photography */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"
          alt="Caregiver supporting an elderly patient with warmth and professionalism"
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        {/* Solid brand wash — no gradient */}
        <div className="absolute inset-0 bg-thm-purple-deep/82" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-[1200px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          {/* Editorial headline — oversized, overlapping photo edge feel */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.18em] text-thm-gold">
              NITA-certified · Nairobi & Kisumu
            </p>

            <h1 className="mt-4 font-poppins text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem] lg:leading-[1.02]">
              Enabling Caregivers with{" "}
              <span className="text-thm-gold">Life Saving Skills</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Therapeutic Hands Management equips caregivers with high-quality
              skills to safeguard children and adults at risk — with empathy,
              love, and respect.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#admissions"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-thm-gold px-7 font-poppins text-base font-semibold text-thm-ink transition-colors hover:bg-thm-gold-hover"
              >
                Enroll Today
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#curriculum"
                className="inline-flex h-12 items-center rounded-full border border-white/35 bg-transparent px-7 font-poppins text-base font-semibold text-white transition-colors hover:border-thm-gold hover:text-thm-gold"
              >
                Explore the Curriculum
              </Link>
            </div>
          </motion.div>

          {/* Side photo panel — asymmetric magazine layout */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="relative hidden lg:col-span-4 lg:block"
          >
            <div className="relative ml-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden border-4 border-thm-gold">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=900&auto=format&fit=crop"
                alt="Healthcare professional ready to care"
                fill
                className="object-cover"
                sizes="340px"
              />
              <div className="absolute inset-0 bg-thm-purple/35 mix-blend-multiply" />
            </div>
            <p className="mt-4 max-w-[280px] ml-auto text-right text-sm leading-relaxed text-white/70">
              Hands-on training for hospitals, elder care, childcare, and
              private home-based care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
