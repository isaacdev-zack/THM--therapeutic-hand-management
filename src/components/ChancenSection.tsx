import Link from "next/link";
import { Check, ShieldCheck, GraduationCap, ArrowRight } from "lucide-react";

export function ChancenSection() {
  const benefits = [
    "No upfront tuition fees required to begin your studies",
    "Zero collateral or financial guarantors needed",
    "Repay only after completing your studies and getting employed",
    "Open to less privileged Kenyan youth aged 19 to 35 years",
    "Covers full Certificate in Caregiver II training at THM",
  ];

  return (
    <section id="chancen" className="py-20 lg:py-28 bg-thm-purple text-white relative overflow-hidden">
      {/* Solid Accent Line Top */}
      <div className="absolute top-0 inset-x-0 h-2 bg-thm-gold" />

      <div className="mx-auto max-w-[1320px] px-6 lg:px-12 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: NGO Partnership Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Study Now, Pay Later with <br />
              <span className="text-thm-gold">CHANCEN International</span>
            </h2>

            <p className="text-lg text-thm-cream/90 leading-relaxed">
              Therapeutic Hands Management is proud to partner with <strong>CHANCEN International</strong>, an NGO dedicated to financing education for bright youth aged 19–35. Remove financial barriers and secure your professional future today.
            </p>

            {/* Benefit Bullets */}
            <div className="space-y-3 pt-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-thm-gold text-thm-ink flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <span className="text-base text-thm-cream">{b}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="#admissions"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-thm-gold px-8 text-base font-bold text-thm-ink shadow-lg transition-all hover:bg-thm-gold-hover hover:scale-105"
              >
                <span>Apply for CHANCEN Funding</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Solid Proof Card & Stats */}
          <div className="lg:col-span-5">
            <div className="bg-thm-purple-dark border-4 border-thm-gold p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col gap-8">
              <div className="flex items-center justify-between border-b border-thm-purple/80 pb-6">
                <div>
                  <h3 className="font-poppins text-2xl font-bold text-thm-gold">CHANCEN Track Record</h3>
                  <p className="text-sm text-thm-cream/70">6+ Years of Global Impact</p>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-thm-gold text-thm-ink flex items-center justify-center font-bold">
                  <ShieldCheck className="h-7 w-7" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-thm-purple p-5 rounded-2xl border border-thm-purple/60">
                  <p className="font-poppins text-3xl font-bold text-white">9,000+</p>
                  <p className="text-xs text-thm-gold mt-1 font-semibold uppercase">Students Financed</p>
                </div>
                <div className="bg-thm-purple p-5 rounded-2xl border border-thm-purple/60">
                  <p className="font-poppins text-3xl font-bold text-thm-gold">93%</p>
                  <p className="text-xs text-thm-cream mt-1 font-semibold uppercase">Graduation Rate</p>
                </div>
              </div>

              <div className="bg-thm-purple/80 p-5 rounded-2xl border border-thm-gold/30">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-5 w-5 text-thm-gold" />
                  <p className="font-bold text-sm text-white">Eligibility Criteria</p>
                </div>
                <p className="text-xs text-thm-cream/80 leading-relaxed">
                  Kenyan youth aged 19–35 with a passion for caregiving and healthcare, admitted into THM Certificate in Caregiver II.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
