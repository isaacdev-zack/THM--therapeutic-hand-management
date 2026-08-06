"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";

export function FacilityMaskSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress Binding
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // Clip Path Transformation: From centered organic oval/hand-motif shape to full 0% inset reveal
  const clipPathInset = useTransform(
    scrollYProgress,
    [0.1, 0.75],
    shouldReduceMotion
      ? ["inset(0% 0% 0% 0% round 0px)", "inset(0% 0% 0% 0% round 0px)"]
      : ["inset(18% 24% 18% 24% round 40px)", "inset(0% 0% 0% 0% round 0px)"]
  );

  const headingOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0.8]);
  const headingScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.92, 1, 1]);

  return (
    <div ref={wrapperRef} className="relative h-[220vh] w-full bg-thm-purple-deep">
      {/* Sticky Image Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Animated Clip Path Photo Reveal */}
        <motion.div
          style={{ clipPath: clipPathInset }}
          className="relative h-full w-full overflow-hidden shadow-2xl transition-shadow"
        >
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop"
            alt="THM Nairobi & Kisumu State-of-the-Art Caregiver Simulation Wards & ICT Lab"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle Duotone Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-thm-purple-deep via-thm-purple/30 to-transparent mix-blend-multiply" />

          {/* Centered Heading Reveal Mid-Transition */}
          <motion.div
            style={{ opacity: headingOpacity, scale: headingScale }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-thm-gold px-4 py-1.5 text-thm-ink font-bold text-xs uppercase tracking-wider mb-4 shadow-xl">
              <MapPin className="h-4 w-4" />
              <span>Nairobi & Kisumu Training Centers</span>
            </div>

            <h2 className="font-poppins text-4xl sm:text-6xl lg:text-7xl font-bold text-white max-w-[900px] leading-tight tracking-tight drop-shadow-lg">
              Where Compassionate Care <br />
              <span className="text-thm-gold">Meets World-Class Labs</span>
            </h2>

            <p className="font-poppins text-lg sm:text-xl text-thm-cream/90 max-w-[600px] mt-4 leading-relaxed drop-shadow">
              Step inside our fully equipped hospital simulation wards, pediatric nurseries, and modern ICT computer labs.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
