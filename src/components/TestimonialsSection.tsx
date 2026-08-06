import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Faith Wanjiku",
      role: "Class of 2024 • Hospital Caregiver",
      text: "The clinical rotations organized by THM at the hospital gave me the confidence to administer vital checks and tube feeding under RN supervision. I was hired immediately after graduation.",
    },
    {
      name: "Brian Ochieng",
      role: "Class of 2025 • CHANCEN Beneficiary",
      text: "I couldn't afford upfront fees, but CHANCEN International funded my entire Certificate in Caregiver II. Now I support my family while providing private homecare in Nairobi.",
    },
    {
      name: "Mary Nyambura",
      role: "Class of 2024 • Elder Caregiver",
      text: "THM taught me that caregiving is not just a job—it is a calling of love, patience, and confidentiality. The NITA curriculum prepared me for real-world patient challenges.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-thm-ink border-t border-slate-200">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-[650px]">
            <span className="text-sm font-bold uppercase tracking-widest text-thm-purple">
              Graduate Voices & Social Proof
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-thm-ink mt-2">
              Stories of Impact & Empowerment
            </h2>
            <p className="mt-4 text-lg text-thm-muted">
              Over 150+ graduates trained in Nairobi and Kisumu are actively transforming lives in healthcare facilities and private homes.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-thm-cream px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-thm-purple">
            <Star className="h-4 w-4 fill-thm-gold text-thm-gold" />
            <span>Graduate Testimonial Proof</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-thm-cream p-8 rounded-3xl border-2 border-slate-200 flex flex-col justify-between relative shadow-sm"
            >
              <div>
                <Quote className="h-10 w-10 text-thm-purple/30 mb-4" />
                <p className="text-thm-ink leading-relaxed text-base italic mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="font-poppins font-bold text-thm-purple text-lg">
                  {item.name}
                </p>
                <p className="text-xs font-medium text-thm-muted mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
