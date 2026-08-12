"use client";

import React from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;
    video.muted = true;
    const play = () => {
      video.play().catch(() => {});
    };
    play();
    video.addEventListener("canplay", play);
    return () => video.removeEventListener("canplay", play);
  }, [reduce]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[520px] overflow-hidden bg-thm-ink lg:min-h-[600px]"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark wash so type stays readable over motion */}
        <div className="absolute inset-0 bg-thm-ink/55" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Desktop */}
      <div className="relative z-10 hidden h-[600px] w-full items-end pb-20 lg:flex xl:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-10 xl:px-12">
          <div className="flex max-w-[920px] flex-row items-start justify-between gap-10">
            <div className="flex max-w-[520px] flex-col gap-8">
              <h1 className="font-poppins text-[42px] font-bold leading-[1.12] tracking-[-0.02em] text-thm-cream xl:text-[48px] xl:leading-[1.1]">
                Enabling Caregivers with{" "}
                <span className="text-thm-gold">Life Saving Skills</span>
              </h1>
              <Link
                href="/contact"
                className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-thm-purple px-7 font-poppins text-base font-bold text-white transition-all hover:bg-thm-purple-dark hover:scale-[1.02] active:scale-[0.98]"
              >
                Enroll Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-14 max-w-[280px] font-poppins text-lg font-normal leading-relaxed text-thm-cream/90 xl:text-xl">
              NITA-certified training in Nairobi & Kisumu — with Study Now, Pay
              Later.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative z-10 flex h-[520px] w-full flex-col items-center justify-end px-6 pb-14 pt-20 lg:hidden">
        <div className="flex max-w-[340px] flex-col items-center gap-5 text-center">
          <h1 className="font-poppins text-[32px] font-bold leading-[1.15] text-white sm:text-[36px]">
            Enabling Caregivers with{" "}
            <span className="text-thm-gold">Life Saving Skills</span>
          </h1>
          <p className="font-inter text-[15px] font-medium leading-snug text-thm-cream/90">
            NITA-certified training in Nairobi & Kisumu.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-full bg-thm-purple px-6 font-poppins text-[15px] font-semibold text-white"
          >
            Enroll Today
          </Link>
        </div>
      </div>
    </section>
  );
}
