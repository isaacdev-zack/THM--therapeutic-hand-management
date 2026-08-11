"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1645263012675-bb72c4752882?q=80&w=1400&auto=format&fit=crop",
    caption: "Graduation day in Nairobi",
    span: "lg:col-span-7 min-h-[360px]",
  },
  {
    src: "https://images.unsplash.com/photo-1768489038182-7db6980fd841?q=80&w=1000&auto=format&fit=crop",
    caption: "Proud graduates, ready to serve",
    span: "lg:col-span-5 min-h-[360px]",
  },
  {
    src: "https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?q=80&w=1000&auto=format&fit=crop",
    caption: "Healthcare careers start here",
    span: "lg:col-span-4 min-h-[220px]",
  },
  {
    src: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?q=80&w=1000&auto=format&fit=crop",
    caption: "Patient-centred practice",
    span: "lg:col-span-4 min-h-[220px]",
  },
  {
    src: "https://images.unsplash.com/photo-1643297654397-97b3201abc7c?q=80&w=1000&auto=format&fit=crop",
    caption: "Confident caregivers",
    span: "lg:col-span-4 min-h-[220px]",
  },
];

export function MomentsSection() {
  return (
    <section className="bg-thm-ink px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <h2 className="font-poppins max-w-xl text-[36px] font-bold leading-[1.05] text-thm-cream sm:text-[48px]">
            Moments that look like this.
          </h2>
          <p className="font-inter max-w-sm text-[16px] text-thm-cream/70 md:text-right">
            Graduations, labs, and the energy of cohorts training for real care
            roles across Kenya.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {gallery.map((item, i) => (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-thm-ink/90 px-5 py-4">
                <p className="font-poppins text-base font-semibold text-thm-cream">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <Link
            href="/about"
            className="font-poppins text-[15px] font-semibold text-thm-gold hover:underline"
          >
            Learn more about THM →
          </Link>
        </div>
      </div>
    </section>
  );
}
