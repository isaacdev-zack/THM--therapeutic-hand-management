"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, Stagger, StaggerItem } from "./Motion";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1645263012675-bb72c4752882?q=80&w=1200&auto=format&fit=crop",
    caption: "Graduation day",
    span: "sm:col-span-2 min-h-[220px] lg:min-h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=900&auto=format&fit=crop",
    caption: "Practical class",
    span: "min-h-[180px] lg:min-h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?q=80&w=900&auto=format&fit=crop",
    caption: "Proud graduates",
    span: "min-h-[180px]",
  },
  {
    src: "https://images.unsplash.com/photo-1768489038182-7db6980fd841?q=80&w=900&auto=format&fit=crop",
    caption: "Campus energy",
    span: "min-h-[180px]",
  },
  {
    src: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=900&auto=format&fit=crop",
    caption: "Lab practice",
    span: "min-h-[180px]",
  },
];

export function MomentsSection() {
  return (
    <section className="bg-thm-ink px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <FadeUp className="flex flex-col gap-2 border-b border-white/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-thm-gold">
              Life at THM
            </p>
            <h2 className="mt-2 font-poppins text-[1.85rem] font-bold tracking-tight sm:text-3xl">
              Training. Community. Graduation.
            </h2>
          </div>
          <Link
            href="/about"
            className="group font-poppins text-sm font-semibold text-thm-gold"
          >
            About the school
            <span className="inline-block transition-transform group-hover:translate-x-1">
              {" "}
              →
            </span>
          </Link>
        </FadeUp>

        <Stagger className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3" stagger={0.06}>
          {gallery.map((item) => (
            <StaggerItem key={item.caption} className={`relative overflow-hidden ${item.span}`}>
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.55 }}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-thm-ink/90 px-4 py-3">
                <p className="font-poppins text-sm font-semibold">{item.caption}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
