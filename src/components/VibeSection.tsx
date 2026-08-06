"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Zap, Sparkles } from "lucide-react";

export function VibeSection() {
  return (
    <section className="relative w-full bg-slate-900 py-20 lg:py-28 overflow-hidden text-white">
      {/* Background Radial Glow Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-thm-purple/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-thm-gold/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-12 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Interactive Phone / Media Frame (xBelong style) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden border-4 border-thm-gold/40 shadow-2xl bg-thm-purple-deep">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop"
                alt="Practical caregiver patient care lab session"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-thm-purple-deep via-transparent to-transparent opacity-80" />

              {/* Floating Glass Badge Overlay */}
              <div className="absolute bottom-6 inset-x-6 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-thm-gold text-thm-ink flex items-center justify-center font-bold shrink-0">
                    <HeartHandshake className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-sm text-white">100% Practical Skill Labs</p>
                    <p className="text-xs text-thm-cream/80">Hands-on patient hygiene, vital signs & nutrition</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Vibe Content & Feature Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-thm-purple border border-thm-gold/30 px-4 py-1.5 w-fit">
                <Sparkles className="h-4 w-4 text-thm-gold" />
                <span className="text-xs font-semibold uppercase tracking-wider text-thm-gold">
                  Modern Healthcare Career
                </span>
              </div>
              <h2 className="font-poppins text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                Caregiver Training, <br />
                <span className="text-thm-gold">but make it a calling.</span>
              </h2>
            </motion.div>

            {/* Glass Feature Blocks (xBelong style) */}
            <div className="flex flex-col gap-5">
              
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-thm-gold/40 p-6 rounded-2xl transition-all duration-300 hover:bg-white/10 shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-thm-gold text-thm-ink flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-white group-hover:text-thm-gold transition-colors">
                      Zero Upfront Fees. Zero Stress.
                    </h3>
                    <p className="text-sm text-thm-cream/80 mt-1 leading-relaxed">
                      No bank loans or collateral required. Through CHANCEN International, study the full Certificate II program today and repay only after securing employment.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-thm-gold/40 p-6 rounded-2xl transition-all duration-300 hover:bg-white/10 shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-thm-purple text-thm-gold flex items-center justify-center font-bold shrink-0 border border-thm-gold/30 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-white group-hover:text-thm-gold transition-colors">
                      NITA Approved Standard
                    </h3>
                    <p className="text-sm text-thm-cream/80 mt-1 leading-relaxed">
                      Our national curriculum aligns with Ministry standards, preparing you for immediate employment in private homes, hospitals, and international care facilities.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
