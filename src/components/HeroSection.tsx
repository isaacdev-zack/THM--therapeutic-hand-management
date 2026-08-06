"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full bg-thm-purple-deep text-white overflow-hidden flex items-center pt-24 pb-16 lg:pt-28 lg:pb-24">
      {/* Background Image Layer with Solid Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1920&auto=format&fit=crop"
          alt="Professional caregiver holding hand of senior patient with empathy"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-thm-purple-deep/85" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Asymmetric Left Editorial Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="font-poppins text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl tracking-tight">
              Enabling Caregivers with <br className="hidden sm:inline" />
              <span className="text-thm-gold">Life Saving Skills</span>
            </h1>

            <p className="text-lg text-thm-cream/90 max-w-[580px] leading-relaxed">
              Equipping passionate individuals in Nairobi & Kisumu with high-quality caregiver expertise to safeguard children, hospital patients, and elderly adults with empathy, love, and respect.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#admissions"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-thm-gold px-8 text-base font-bold text-thm-ink shadow-lg transition-all hover:bg-thm-gold-hover hover:scale-105 active:scale-95"
              >
                <span>Enroll Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#curriculum"
                className="inline-flex h-14 items-center justify-center rounded-full bg-thm-purple px-8 text-base font-semibold text-white border border-thm-gold/30 transition-all hover:bg-thm-purple-dark"
              >
                Explore 20+ Skills
              </Link>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-thm-purple/50 max-w-[560px]">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-thm-gold font-poppins">150+</p>
                <p className="text-xs sm:text-sm text-thm-cream/70 mt-0.5">Graduates Trained</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-thm-gold font-poppins">100%</p>
                <p className="text-xs sm:text-sm text-thm-cream/70 mt-0.5">CHANCEN Financed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-thm-gold font-poppins">NITA</p>
                <p className="text-xs sm:text-sm text-thm-cream/70 mt-0.5">Approved Standard</p>
              </div>
            </div>
          </div>

          {/* Right Duotone Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border-4 border-thm-gold/40 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop"
                alt="Student caregiver performing vital signs check"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-thm-purple/40 mix-blend-multiply" />
              <div className="absolute bottom-0 inset-x-0 bg-thm-purple-deep p-6 text-white border-t border-thm-gold/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-thm-gold flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-thm-ink" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-thm-cream">Study Now, Pay Later</p>
                    <p className="text-xs text-thm-cream/80">0 upfront fees for youth aged 19-35 via CHANCEN International</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
