"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function TrainingShowcase() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white py-20 lg:py-28 text-thm-ink">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-poppins text-sm font-semibold uppercase tracking-[0.16em] text-thm-purple">
            See the training
          </p>
          <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
            Practical labs. Real patient care skills.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-thm-muted">
            Students train in simulation wards and classroom settings — building
            confidence before hospital and home placements.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* Video / primary visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative aspect-[16/10] overflow-hidden bg-thm-purple-deep lg:col-span-7"
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1631217868264-e5b90bb7e975?q=80&w=1400&auto=format&fit=crop"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-a-nurse-taking-care-of-a-patient-5584/1080p.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-thm-purple/25 mix-blend-multiply pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 bg-thm-purple-deep/90 px-5 py-4">
              <p className="font-poppins text-sm font-semibold text-thm-gold">
                Clinical practice in motion
              </p>
              <p className="text-sm text-white/80">
                Hands-on caregiving — muted loop preview
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-5 lg:col-span-5">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative min-h-[200px] flex-1 overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
                alt="Students collaborating in a practical digital skills class"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-thm-purple/40 mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 bg-thm-ink/85 px-5 py-4">
                <p className="font-poppins font-semibold text-white">
                  Energetic classroom learning
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="relative min-h-[200px] flex-1 overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop"
                alt="Nursing student practicing patient care skills"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-thm-purple/40 mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 bg-thm-ink/85 px-5 py-4">
                <p className="font-poppins font-semibold text-white">
                  Bedside & simulation practice
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
