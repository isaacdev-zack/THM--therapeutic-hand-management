"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax Scroll Binding
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "25%"]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] w-full bg-thm-purple-deep text-white overflow-hidden flex items-center pt-24 pb-16 lg:pt-28 lg:pb-24"
    >
      {/* Radiant Glowing Gradient Blobs */}
      <div className="pointer-events-none absolute top-10 left-10 h-[450px] w-[450px] rounded-full bg-thm-purple/40 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-thm-gold/20 blur-[120px]" />

      {/* Parallax Background Image Layer */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1920&auto=format&fit=crop"
          alt="Professional caregiver holding hand of senior patient with empathy"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-thm-purple-deep/85" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Staggered Content Reveal */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Pill Header */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 w-fit border border-thm-gold/40"
            >
              <Sparkles className="h-4 w-4 text-thm-gold" />
              <span className="text-xs font-semibold uppercase tracking-wider text-thm-cream">
                NITA Approved Caregiver School Nairobi & Kisumu
              </span>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-poppins text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl tracking-tight"
            >
              Enabling Caregivers with <br className="hidden sm:inline" />
              <span className="text-thm-gold">Life Saving Skills</span>
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-thm-cream/90 max-w-[580px] leading-relaxed"
            >
              Equipping passionate individuals in Nairobi & Kisumu with high-quality caregiver expertise to safeguard children, hospital patients, and elderly adults with empathy, love, and respect.
            </motion.p>

            {/* Micro-interactive Action CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="#admissions"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-thm-gold px-8 text-base font-bold text-thm-ink shadow-xl transition-shadow hover:shadow-2xl"
                >
                  <span>Enroll Today</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="#curriculum"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-thm-purple px-8 text-base font-semibold text-white border border-thm-gold/30 transition-all hover:bg-thm-purple-dark hover:border-thm-gold"
                >
                  Explore 20+ Skills
                </Link>
              </motion.div>
            </motion.div>

            {/* Animated Numeral Counters */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-thm-purple/50 max-w-[560px]"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-thm-gold font-poppins">
                  <AnimatedCounter to={150} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm text-thm-cream/70 mt-0.5">Graduates Trained</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-thm-gold font-poppins">
                  <AnimatedCounter to={100} suffix="%" />
                </p>
                <p className="text-xs sm:text-sm text-thm-cream/70 mt-0.5">CHANCEN Financed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-thm-gold font-poppins">NITA</p>
                <p className="text-xs sm:text-sm text-thm-cream/70 mt-0.5">Approved Standard</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Duotone Image Frame */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94, y: 32 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border-4 border-thm-gold/40 shadow-2xl group"
            >
              <Image
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop"
                alt="Student caregiver performing vital signs check"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-thm-purple/40 mix-blend-multiply" />
              
              {/* Glassmorphic Badge Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-thm-purple-deep/95 backdrop-blur-md p-6 text-white border-t border-thm-gold/30">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-thm-gold flex items-center justify-center shrink-0 shadow-md">
                    <CheckCircle2 className="h-6 w-6 text-thm-ink" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-thm-cream">Study Now, Pay Later</p>
                    <p className="text-xs text-thm-cream/80">0 upfront fees for youth aged 19-35 via CHANCEN International</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
