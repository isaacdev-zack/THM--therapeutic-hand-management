"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const containerRef = React.useRef<HTMLElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, reduce]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden min-h-[562px] lg:min-h-[680px] bg-thm-purple-deep"
    >
      {/* Full-bleed video background — xBelong pattern */}
      <div className="absolute inset-0 z-0">
        {!reduce && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?q=80&w=1600&auto=format&fit=crop"
            className="h-full w-full object-cover"
          >
            {isInView && (
              <source
                src="https://cdn.coverr.co/videos/coverr-a-nurse-taking-care-of-a-patient-5584/1080p.mp4"
                type="video/mp4"
              />
            )}
          </video>
        )}
        {reduce && (
          <Image
            src="https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?q=80&w=1600&auto=format&fit=crop"
            alt="Kenyan healthcare graduate ready to care"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        {/* Solid overlays only — no gradients */}
        <div className="absolute inset-0 bg-thm-purple-deep/70" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Desktop — Belong-style split: headline + CTA left, support line right */}
      <div className="relative z-10 hidden h-[680px] w-full items-center lg:flex">
        <div className="mx-auto w-full max-w-[1200px] px-10">
          <div className="flex max-w-[980px] flex-row items-start justify-between gap-10">
            <div className="flex max-w-[620px] flex-col gap-10">
              <h1 className="font-poppins text-[64px] font-bold leading-[1.05] tracking-[-0.02em] text-white">
                Enabling Caregivers with{" "}
                <span className="text-thm-gold">Life Saving Skills</span>
              </h1>
              <Link
                href="/contact"
                className="inline-flex h-[56px] w-fit items-center justify-center gap-2 rounded-full bg-thm-gold px-8 font-poppins text-lg font-bold text-thm-ink transition-all hover:bg-thm-gold-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                Enroll Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-16 max-w-[320px] font-poppins text-xl font-normal leading-relaxed text-white/90">
              NITA-certified caregiver training in Nairobi & Kisumu — with Study
              Now, Pay Later financing.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile — centered Belong-style stack */}
      <div className="relative z-10 flex h-[562px] w-full flex-col items-center justify-center px-6 pt-16 lg:hidden">
        <div className="flex max-w-[340px] flex-col items-center gap-7 text-center">
          <h1 className="font-poppins text-[2.4rem] font-bold leading-[1.08] tracking-tight text-white">
            Enabling Caregivers with{" "}
            <span className="text-thm-gold">Life Saving Skills</span>
          </h1>
          <p className="font-poppins text-base font-medium leading-snug text-white/85">
            NITA-certified training in Nairobi & Kisumu.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-thm-gold px-6 font-poppins text-base font-semibold text-thm-ink active:scale-95"
          >
            Enroll Today
          </Link>
        </div>
      </div>
    </section>
  );
}
