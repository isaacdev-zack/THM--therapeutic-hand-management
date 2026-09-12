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
          <h2 className="font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
            Practical labs. Real patient care skills.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-thm-muted">
            Students train in simulation wards and classroom settings — building
            confidence before hospital and home placements.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative aspect-[16/10] overflow-hidden bg-thm-purple-deep lg:col-span-7"
          >
            <Image
              src="/gallery/purple-team-vitals.jpg"
              alt="THM students preparing vitals equipment in the clinical skills lab"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-thm-purple/30 mix-blend-multiply pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 bg-thm-purple-deep/90 px-5 py-4">
              <p className="font-poppins text-sm font-semibold text-thm-gold">
                Clinical practice in focus
              </p>
              <p className="text-sm text-white/80">
                Patient-centred care skills for hospitals and homes
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
                src="/gallery/ward-team-alt.jpg"
                alt="THM students practicing bed-making as a team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-thm-purple/40 mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 right-0 bg-thm-ink/85 px-5 py-4">
                <p className="font-poppins font-semibold text-white">
                  Team-based learning
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
                src="/gallery/students-vitals-mannequin.jpg"
                alt="THM students taking vitals on a training mannequin"
                fill
                className="object-cover object-top"
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
