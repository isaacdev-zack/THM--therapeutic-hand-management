"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const feature = {
  src: "https://images.unsplash.com/photo-1645263012675-bb72c4752882?q=80&w=1400&auto=format&fit=crop",
  caption: "Graduation day — Nairobi",
};

const stack = [
  {
    src: "https://images.unsplash.com/photo-1768489038182-7db6980fd841?q=80&w=1000&auto=format&fit=crop",
    caption: "Celebration & community",
  },
  {
    src: "https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?q=80&w=1000&auto=format&fit=crop",
    caption: "Ready for the ward",
  },
];

const strip = [
  {
    src: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?q=80&w=1000&auto=format&fit=crop",
    caption: "Patient-centred practice",
  },
  {
    src: "https://images.unsplash.com/photo-1643297654397-97b3201abc7c?q=80&w=1000&auto=format&fit=crop",
    caption: "Confident caregivers",
  },
  {
    src: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?q=80&w=1000&auto=format&fit=crop",
    caption: "Hands-on lab work",
  },
];

function Frame({
  src,
  caption,
  className,
  delay = 0,
}: {
  src: string;
  caption: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={caption}
        fill
        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-thm-purple/20 mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 bg-thm-ink px-4 py-2.5">
        <p className="font-poppins text-sm font-semibold text-thm-cream">
          {caption}
        </p>
      </div>
    </motion.div>
  );
}

export function MomentsSection() {
  return (
    <section className="bg-thm-cream px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-6 border-b-4 border-thm-gold pb-8 lg:grid-cols-12 lg:items-end">
          <h2 className="font-poppins text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-thm-ink sm:text-[52px] lg:col-span-7">
            Life at THM looks
            <span className="text-thm-purple"> like this.</span>
          </h2>
          <p className="font-inter text-[16px] leading-relaxed text-thm-muted lg:col-span-5 lg:text-right">
            Graduations, labs, and cohorts training for real care roles across
            Kenya — energetic, human, and proud.
          </p>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-12">
          <Frame
            src={feature.src}
            caption={feature.caption}
            className="min-h-[320px] lg:col-span-7 lg:min-h-[520px]"
          />
          <div className="grid gap-3 lg:col-span-5">
            {stack.map((item, i) => (
              <Frame
                key={item.caption}
                src={item.src}
                caption={item.caption}
                className="min-h-[200px] lg:min-h-[254px]"
                delay={0.06 + i * 0.05}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {strip.map((item, i) => (
            <Frame
              key={item.caption}
              src={item.src}
              caption={item.caption}
              className="min-h-[200px]"
              delay={0.1 + i * 0.05}
            />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-thm-ink/10 pt-8">
          <p className="font-inter text-sm text-thm-muted">
            150+ graduates since 2023
          </p>
          <Link
            href="/about"
            className="font-poppins text-[15px] font-semibold text-thm-purple hover:underline"
          >
            Our story →
          </Link>
        </div>
      </div>
    </section>
  );
}
