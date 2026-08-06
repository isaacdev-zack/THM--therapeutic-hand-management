import { Shield, Lock, Heart, MessageSquare, Scale, Smile, Award } from "lucide-react";

const coreValues = [
  { name: "Accountability", desc: "Taking full ownership of patient well-being and clinical procedures.", icon: Shield },
  { name: "Confidentiality", desc: "Protecting patient privacy, medical data, and family dignity.", icon: Lock },
  { name: "Compassion", desc: "Providing care with deep warmth, empathy, and personal understanding.", icon: Heart },
  { name: "Communication", desc: "Maintaining clear, accurate updates between doctors, nurses & families.", icon: MessageSquare },
  { name: "Equality", desc: "Treating all patients with equal dedication regardless of background.", icon: Scale },
  { name: "Kindness", desc: "Infusing everyday daily living support with patience and gentle care.", icon: Smile },
  { name: "Integrity", desc: "Upholding high moral standards and NITA professional care ethics.", icon: Award },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-thm-cream text-thm-ink relative">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-[720px]">
          <span className="text-sm font-bold uppercase tracking-widest text-thm-purple">
            Who We Are
          </span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-thm-ink mt-2">
            Pacing the Global Market in Professional Caregiving
          </h2>
          <p className="mt-4 text-lg text-thm-muted leading-relaxed">
            Registered in April 2023, Therapeutic Hands Management (THM) is a pace-setter in caregiver education operating in Nairobi and Kisumu Counties. We train caregivers under the National Industrial Training Authority (NITA) curriculum to serve with clinical precision and heartfelt empathy.
          </p>
        </div>

        {/* Vision & Mission Solid Card Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-thm-purple text-white p-8 sm:p-10 rounded-3xl border-2 border-thm-purple-dark shadow-md flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-thm-gold text-thm-ink flex items-center justify-center font-bold text-xl mb-6">
                V
              </div>
              <h3 className="font-poppins text-2xl font-bold text-thm-gold mb-3">Our Vision</h3>
              <p className="text-thm-cream/90 text-lg leading-relaxed">
                To be a household name and a pace-setter in the caregiving global market, empowering caregivers with specialized skills that meet every client&apos;s needs by God&apos;s grace.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-thm-purple-dark text-xs uppercase tracking-wider text-thm-gold font-semibold">
              Global Standards • Household Trust
            </div>
          </div>

          <div className="bg-white text-thm-ink p-8 sm:p-10 rounded-3xl border-2 border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-thm-purple text-white flex items-center justify-center font-bold text-xl mb-6">
                M
              </div>
              <h3 className="font-poppins text-2xl font-bold text-thm-purple mb-3">Our Mission</h3>
              <p className="text-thm-muted text-lg leading-relaxed">
                To equip caregivers with high-quality skills that enable them to safeguard children & adults at risk with empathy, love, and respect.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs uppercase tracking-wider text-thm-purple font-semibold">
              NITA Certified Curriculum • Holistic Training
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-20">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-thm-ink">
              Our 7 Pillar Values
            </h3>
            <p className="text-thm-muted mt-2">
              Every graduate from THM embodies these core principles in clinical settings and individual homecare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.name}
                  className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm hover:border-thm-purple transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-thm-purple text-thm-gold flex items-center justify-center mb-4">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h4 className="font-poppins text-xl font-bold text-thm-ink mb-2">
                    {val.name}
                  </h4>
                  <p className="text-sm text-thm-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
