"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award } from "lucide-react";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop",
    caption: "Compassionate Elder Care",
    tag: "Certified Skill",
  },
  {
    src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
    caption: "Clinical Vital Signs Check",
    tag: "Practical Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    caption: "Emergency First Aid Readiness",
    tag: "NITA Standard",
  },
  {
    src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop",
    caption: "Child & Paediatric Support",
    tag: "Home & Hospital",
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    caption: "Graduate Ceremonies Nairobi",
    tag: "Class of 2025",
  },
];

export function MomentsSection() {
  return (
    <section className="relative overflow-hidden bg-thm-purple-deep px-6 py-20 lg:py-28 text-white">
      {/* Ambient Vibrant Glow Orbs */}
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[450px] w-[450px] rounded-full bg-thm-purple/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-[350px] w-[350px] rounded-full bg-thm-gold/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Header Row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 mb-3 border border-thm-gold/40">
              <Sparkles className="h-4 w-4 text-thm-gold" />
              <span className="text-xs font-semibold uppercase tracking-wider text-thm-gold">
                Real Impact in Action
              </span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
              The finish line <br />
              <span className="text-thm-gold">looks like this.</span>
            </h2>
          </div>
          <p className="font-poppins max-w-[340px] text-base leading-relaxed text-thm-cream/80 md:text-right">
            Real graduates. Certified clinical hands. Proof that compassionate training opens doors.
          </p>
        </div>

        {/* Desktop Asymmetric Editorial Grid (MyFuture style) */}
        <div className="mt-12 hidden gap-5 lg:grid lg:grid-cols-12 lg:items-stretch">
          {/* Main Feature Shot */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[500px] rounded-3xl overflow-hidden border-2 border-thm-gold/30 lg:col-span-7 group shadow-2xl"
          >
            <Image
              src={shots[0].src}
              alt={shots[0].caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-thm-purple-deep/90 via-thm-purple-deep/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="inline-block rounded-full bg-thm-gold px-3 py-1 text-xs font-bold text-thm-ink mb-2">
                  {shots[0].tag}
                </span>
                <p className="font-poppins text-2xl font-bold text-white">
                  {shots[0].caption}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-thm-gold">
                <Award className="h-6 w-6" />
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {shots.slice(1, 3).map((shot, i) => (
              <motion.div
                key={shot.caption}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative min-h-[235px] rounded-2xl overflow-hidden border border-white/15 group shadow-lg"
              >
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-thm-purple-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-poppins text-sm font-bold text-white">
                    {shot.caption}
                  </span>
                  <span className="rounded-full bg-thm-purple px-2.5 py-0.5 text-[11px] font-semibold text-thm-gold border border-thm-gold/30">
                    {shot.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Horizontal Card Strip */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shots.slice(2).map((shot, i) => (
            <motion.div
              key={shot.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative h-[220px] rounded-2xl overflow-hidden border border-white/15 group shadow-md"
            >
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-thm-purple-deep/85 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs text-thm-gold font-semibold uppercase tracking-wider block">
                  {shot.tag}
                </span>
                <p className="font-poppins text-base font-bold text-white mt-0.5">
                  {shot.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA Line */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="font-poppins max-w-[480px] text-sm leading-relaxed text-thm-cream/80">
            Every photo represents a passionate caregiver who completed the NITA curriculum — ready to deliver dignified care across Kenya and beyond.
          </p>
          <Link
            href="#admissions"
            className="group inline-flex items-center gap-2 text-base font-bold text-thm-gold transition-colors hover:text-white"
          >
            <span>Start Your Caregiver Career</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
