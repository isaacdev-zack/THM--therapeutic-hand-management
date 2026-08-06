"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, Laptop, HeartPulse, GraduationCap, Users } from "lucide-react";

const momentGallery = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    caption: "Joyful Graduation Ceremony",
    tag: "Graduation",
    icon: GraduationCap,
    span: "lg:col-span-7 lg:row-span-2 min-h-[440px]",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    caption: "Practical ICT & Digital Skills Class",
    tag: "ICT Lab",
    icon: Laptop,
    span: "lg:col-span-5 min-h-[210px]",
  },
  {
    src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop",
    caption: "Clinical Nursing & Vital Signs Practical",
    tag: "Clinical Skill",
    icon: HeartPulse,
    span: "lg:col-span-5 min-h-[210px]",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
    caption: "Empowered Student Community",
    tag: "Campus Life",
    icon: Users,
    span: "lg:col-span-4 min-h-[230px]",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    caption: "First Aid & Emergency Response Training",
    tag: "Emergency Care",
    icon: HeartPulse,
    span: "lg:col-span-4 min-h-[230px]",
  },
  {
    src: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
    caption: "Hands-on Patient Simulation Lab",
    tag: "NITA Standard",
    icon: Award,
    span: "lg:col-span-4 min-h-[230px]",
  },
];

export function MomentsSection() {
  return (
    <section className="relative overflow-hidden bg-thm-purple-deep px-6 py-20 lg:py-28 text-white">
      {/* Ambient Vibrant Glow Orbs */}
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-thm-purple/45 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-[400px] w-[400px] rounded-full bg-thm-gold/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Header Row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/15 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 mb-3 border border-thm-gold/40">
              <Sparkles className="h-4 w-4 text-thm-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-thm-gold">
                Campus Vibe & Real Practical Moments
              </span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
              Energetic learning. <br />
              <span className="text-thm-gold">Certified clinical futures.</span>
            </h2>
          </div>
          <p className="font-poppins max-w-[360px] text-base leading-relaxed text-thm-cream/80 md:text-right">
            From hands-on ICT digital labs to hospital patient care & joyful graduations — explore life at THM.
          </p>
        </div>

        {/* Gallery Grid (MyFuture Editorial Spread) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {momentGallery.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.caption}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative rounded-3xl overflow-hidden border-2 border-white/15 hover:border-thm-gold/60 group shadow-xl ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Vibrant Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-thm-purple-deep/90 via-thm-purple-deep/30 to-transparent opacity-85 transition-opacity group-hover:opacity-95" />

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-thm-gold px-3 py-1 text-xs font-bold text-thm-ink mb-2 shadow-md">
                      <IconComp className="h-3.5 w-3.5" />
                      <span>{item.tag}</span>
                    </div>
                    <p className="font-poppins text-lg sm:text-xl font-bold text-white group-hover:text-thm-gold transition-colors">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-thm-gold text-thm-ink flex items-center justify-center font-bold shrink-0">
              <Award className="h-6 w-6 stroke-[2.5]" />
            </div>
            <p className="font-poppins text-sm leading-relaxed text-thm-cream/90 max-w-[500px]">
              Every student masters 20+ clinical procedures and practical ICT skills before walking to the graduation stage.
            </p>
          </div>

          <Link
            href="#admissions"
            className="group inline-flex items-center gap-2 rounded-full bg-thm-gold px-7 py-3 text-base font-bold text-thm-ink shadow-lg transition-all hover:bg-thm-gold-hover hover:scale-105 active:scale-95"
          >
            <span>Join Next Cohort</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
