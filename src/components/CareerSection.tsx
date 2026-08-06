import { Building2, Home, Heart, Baby, CheckCircle2 } from "lucide-react";

export function CareerSection() {
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
    <section id="career" className="py-20 lg:py-28 bg-thm-cream text-thm-ink">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="max-w-[700px] mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-thm-purple">
            Career Outcomes & Opportunities
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-thm-ink mt-2">
            Where THM Graduates Work
          </h2>
          <p className="mt-4 text-lg text-thm-muted">
            Our graduates are equipped for immediate employment across healthcare, institutional care, and private home-based medical support.
          </p>
        </div>

        {/* Sequential Step Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pathways.map((path) => {
            const IconComp = path.icon;
            return (
              <div
                key={path.num}
                className="bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-sm relative flex flex-col justify-between hover:border-thm-purple transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="h-12 w-12 rounded-2xl bg-thm-gold font-poppins text-lg font-bold text-thm-ink flex items-center justify-center">
                      {path.num}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider bg-thm-cream text-thm-purple px-3 py-1.5 rounded-full border border-slate-200">
                      {path.badge}
                    </span>
                  </div>

                  <h3 className="font-poppins text-2xl font-bold text-thm-ink mb-3 flex items-center gap-3">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
