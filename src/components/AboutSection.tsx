"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Shield,
  Lock,
  Heart,
  MessageSquare,
  Scale,
  Smile,
  Award,
} from "lucide-react";

const coreValues = [
  { name: "Accountability", desc: "Full ownership of patient well-being and clinical procedures.", icon: Shield },
  { name: "Confidentiality", desc: "Protecting patient privacy, medical data, and family dignity.", icon: Lock },
  { name: "Compassion", desc: "Care delivered with warmth, empathy, and understanding.", icon: Heart },
  { name: "Communication", desc: "Clear updates between clinicians, caregivers, and families.", icon: MessageSquare },
  { name: "Equality", desc: "Equal dedication to every patient, regardless of background.", icon: Scale },
  { name: "Kindness", desc: "Patience and gentleness in every daily living support task.", icon: Smile },
  { name: "Integrity", desc: "High moral standards and professional care ethics.", icon: Award },
];

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-grain py-16 lg:py-24 text-thm-ink">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="bg-thm-purple p-8 sm:p-10 text-white">
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.14em] text-thm-gold">
              Vision
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              To be a household name and pace-setter in the caregiving global
              market, empowering caregivers with specialized skills.
            </p>
          </div>
          <div className="border-2 border-thm-purple bg-white p-8 sm:p-10">
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.14em] text-thm-purple">
              Mission
            </p>
            <p className="mt-4 text-lg leading-relaxed text-thm-muted">
              To equip caregivers with high-quality skills to safeguard children
              and adults at risk, with empathy, love, and respect.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-xl">
            <h3 className="font-poppins text-2xl font-bold sm:text-3xl">
              Core values
            </h3>
            <p className="mt-2 text-thm-muted">
              Every THM graduate is trained to live these principles in clinical
              settings and home-based care.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.name}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`border border-slate-200 bg-white p-6 ${
                    i === 6 ? "lg:col-span-2 lg:max-w-md" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-thm-purple text-thm-gold">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="mt-4 font-poppins text-lg font-semibold text-thm-ink">
                    {val.name}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-thm-muted">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
