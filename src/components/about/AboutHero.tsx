"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type AboutHeroProps = {
  headline: string;
  subhead: string;
};

export function AboutHero({ headline, subhead }: AboutHeroProps) {
  const words = headline.trim().split(/\s+/);
  const lead = words.slice(0, -1).join(" ") || headline;
  const accent = words.length > 1 ? words[words.length - 1] : "";

  return (
    <section className="relative w-full overflow-hidden bg-thm-ink">
      <div className="relative h-[min(100svh,900px)] min-h-[600px] w-full sm:min-h-[700px]">
        <Image
          src="https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?q=80&w=2000&auto=format&fit=crop"
          alt="Kenyan healthcare graduate representing THM’s caregiving mission"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-thm-ink/78" />
        <div className="absolute inset-0 bg-thm-purple-deep/45" />

        <div className="pointer-events-none relative z-10 flex h-full w-full flex-col items-center justify-center px-6 pt-[72px] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-poppins max-w-[900px] text-[44px] font-bold leading-[0.98] tracking-[-0.03em] text-thm-cream drop-shadow-2xl sm:text-[60px] md:text-[72px] lg:text-[88px]"
          >
            {lead}
            {accent ? (
              <>
                <br />
                <span className="text-thm-gold">{accent}</span>
              </>
            ) : null}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter mt-6 max-w-2xl text-[17px] font-medium text-thm-cream/55 md:text-[20px]"
          >
            {subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="font-poppins rounded-full bg-thm-gold px-8 py-4 text-[15px] font-bold text-thm-ink transition-transform hover:scale-105 active:scale-95"
            >
              Apply Now
            </Link>
            <a
              href="#about-mission"
              className="font-poppins rounded-full border border-white/20 bg-transparent px-8 py-4 text-[15px] font-bold text-thm-cream transition-colors hover:bg-white/10"
            >
              Read our mission
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
