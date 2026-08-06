"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Building2, Home, Heart, Baby, CheckCircle2 } from "lucide-react";

export function CareerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll Progress for Animated Connector Line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.9], shouldReduceMotion ? [1, 1] : [0, 1]);

  const pathways = [
    {
      num: "01",
      title: "Hospitals & Healthcare Facilities",
      desc: "Work in private and public hospital wards under the direct clinical supervision of Registered Nurses.",
      icon: Building2,
      badge: "Clinical Nursing Support",
    },
    {
      num: "02",
      title: "Elderly Care Homes & Hospices",
      desc: "Provide specialized geriatric care, mobility support, vital sign tracking, and dignity in aging.",
      icon: Home,
      badge: "Geriatric & Assisted Living",
    },
    {
      num: "03",
      title: "Individual Private Homecare",
      desc: "Assist discharged patients recovering at home, managing daily living activities, hygiene, and medications.",
      icon: Heart,
      badge: "Post-Discharge Recovery",
    },
    {
      num: "04",
      title: "Childcare & Specialized Centers",
      desc: "Safeguard children at risk, pediatric support, nutrition management, and child safety compliance.",
      icon: Baby,
      badge: "Pediatric & Child Safeguarding",
    },
  ];

  return (
    <section ref={sectionRef} id="career" className="relative py-20 lg:py-28 bg-thm-cream text-thm-ink overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12 relative z-10">
        
        {/* Header Reveal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[700px] mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-thm-purple">
            Career Outcomes & Opportunities
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-thm-ink mt-2">
            Where THM Graduates Work
          </h2>
          <p className="mt-4 text-lg text-thm-muted">
            Our graduates are equipped for immediate employment across healthcare, institutional care, and private home-based medical support.
          </p>
        </motion.div>

        {/* Pathway Container with Animated SVG Connector Line */}
        <div className="relative">
          {/* Animated SVG Connector Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-1 pointer-events-none z-0">
            <svg className="h-full w-full overflow-visible">
              <motion.line
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                stroke="#702F99"
                strokeWidth="4"
                strokeDasharray="8 8"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Sequential Step Pathway Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {pathways.map((path, index) => {
              const IconComp = path.icon;
              return (
                <motion.div
                  key={path.num}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm relative flex flex-col justify-between hover:border-thm-purple hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="h-12 w-12 rounded-2xl bg-thm-gold font-poppins text-lg font-bold text-thm-ink flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        {path.num}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider bg-thm-cream text-thm-purple px-3 py-1.5 rounded-full border border-slate-200">
                        {path.badge}
                      </span>
                    </div>

                    <h3 className="font-poppins text-2xl font-bold text-thm-ink mb-3 flex items-center gap-3 group-hover:text-thm-purple transition-colors">
                      <IconComp className="h-6 w-6 text-thm-purple shrink-0" />
                      <span>{path.title}</span>
                    </h3>

                    <p className="text-thm-muted leading-relaxed text-base">
                      {path.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-thm-purple">
                    <CheckCircle2 className="h-4 w-4 text-thm-gold" />
                    <span>Immediate Employment Pathway</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
