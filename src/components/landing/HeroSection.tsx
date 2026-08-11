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
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-[562px] overflow-hidden bg-thm-ink lg:min-h-[651px]"
    >
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
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Desktop — MyFuture / Belong split */}
      <div className="relative z-10 hidden h-[651px] w-full items-center lg:flex">
        <div className="mx-auto w-full max-w-[1440px] px-16 xl:px-[118px]">
          <div className="flex max-w-[984px] flex-row items-start justify-between gap-10">
            <div className="flex max-w-[631px] flex-col gap-12">
              <h1 className="font-poppins text-[64px] font-bold leading-[1.05] tracking-[-0.02em] text-thm-cream xl:text-[72px] xl:leading-[90px]">
                Enabling Caregivers with{" "}
                <span className="text-thm-gold">Life Saving Skills</span>
              </h1>
              <Link
                href="/contact"
                className="inline-flex h-[72px] w-fit items-center justify-center gap-2 rounded-full bg-thm-purple px-8 font-poppins text-[20px] font-bold text-white transition-all hover:bg-thm-purple-dark hover:scale-[1.02] active:scale-[0.98]"
              >
                Enroll Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-20 max-w-[340px] font-poppins text-[26px] font-normal leading-[1.25] text-thm-cream xl:text-[30px]">
              NITA-certified training in Nairobi & Kisumu — with Study Now, Pay
              Later.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative z-10 flex h-[562px] w-full flex-col items-center justify-center px-8 pt-16 lg:hidden">
        <div className="flex max-w-[320px] flex-col items-center gap-7 text-center">
          <h1 className="font-poppins text-[42px] font-bold leading-[1.05] text-white sm:text-[48px]">
            Enabling Caregivers with{" "}
            <span className="text-thm-gold">Life Saving Skills</span>
          </h1>
          <p className="font-inter text-[17px] font-medium leading-snug text-thm-cream">
            NITA-certified training in Nairobi & Kisumu.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-thm-purple px-5 font-poppins text-[16px] font-medium text-white"
          >
            Enroll Today
          </Link>
        </div>
      </div>
    </section>
  );
}
