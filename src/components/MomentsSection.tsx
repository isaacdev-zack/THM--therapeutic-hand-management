"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/** African / Kenyan-focused photography — verified subjects */
const gallery = [
  {
    src: "https://images.unsplash.com/photo-1645263012675-bb72c4752882?q=80&w=1400&auto=format&fit=crop",
    caption: "Graduation day in Nairobi — celebrating certified caregivers",
    span: "lg:col-span-7 lg:row-span-2 min-h-[380px]",
  },
  {
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1000&auto=format&fit=crop",
    caption: "Students learning with digital tools in practical class",
    span: "lg:col-span-5 min-h-[180px]",
  },
  {
    src: "https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?q=80&w=1000&auto=format&fit=crop",
    caption: "Proud nursing & caregiving graduates",
    span: "lg:col-span-5 min-h-[180px]",
  },
  {
    src: "https://images.unsplash.com/photo-1768489038182-7db6980fd841?q=80&w=1000&auto=format&fit=crop",
    caption: "Happy cohorts. Strong community.",
    span: "lg:col-span-4 min-h-[220px]",
  },
  {
    src: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?q=80&w=1000&auto=format&fit=crop",
    caption: "Confident professionals ready for care roles",
    span: "lg:col-span-4 min-h-[220px]",
  },
  {
    src: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=1000&auto=format&fit=crop",
    caption: "Hands-on lab & clinical practice",
    span: "lg:col-span-4 min-h-[220px]",
  },
];

export function MomentsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-thm-purple-deep py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 border-b border-white/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.16em] text-thm-gold">
              Life at THM
            </p>
            <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Energetic learning.{" "}
              <span className="text-thm-gold">Proud graduates.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-white/70 md:text-right">
            From practical labs and group study to graduation day — the energy
            of a Kenyan school that takes caregiving seriously.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {gallery.map((item, i) => (
            <motion.div
              key={item.caption}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`relative overflow-hidden ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-thm-purple-deep/90 px-5 py-4">
                <p className="font-poppins text-base font-semibold text-white sm:text-lg">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-relaxed text-white/75">
            Join the next cohort training under NITA standards in Nairobi and
            Kisumu.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-thm-gold px-7 font-poppins text-base font-semibold text-thm-ink transition-colors hover:bg-thm-gold-hover"
          >
            Join next cohort
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
