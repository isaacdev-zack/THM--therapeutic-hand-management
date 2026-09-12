"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, Stagger, StaggerItem } from "./Motion";

const gallery = [
  {
    src: "/gallery/lab-bedside-wide.jpg",
    caption: "Bedside care practice",
    span: "sm:col-span-2 min-h-[220px] lg:min-h-[280px]",
  },
  {
    src: "/gallery/purple-ng-training.jpg",
    caption: "Clinical skills lab",
    span: "min-h-[180px] lg:min-h-[280px]",
  },
  {
    src: "/gallery/childcare-students-toddler.jpg",
    caption: "Childcare & safeguarding",
    span: "min-h-[180px]",
  },
  {
    src: "/gallery/instructor-coaching.jpg",
    caption: "Guided instruction",
    span: "min-h-[180px]",
  },
  {
    src: "/gallery/eldercare-handholding.jpg",
    caption: "Dignity in elder care",
    span: "min-h-[180px]",
  },
  {
    src: "/gallery/feeding-practice.jpg",
    caption: "Hands-on procedures",
    span: "min-h-[180px] sm:col-span-2 lg:col-span-1",
  },
];

export function MomentsSection() {
  return (
    <section className="bg-thm-ink px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <FadeUp className="flex flex-col gap-2 border-b border-white/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-poppins text-[1.85rem] font-bold tracking-tight sm:text-3xl">
              Training. Community. Care.
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
