export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Graduate Name",
      role: "Class of — · Role / workplace",
      text: "Placeholder quote. Replace with a real THM graduate story about clinical training, placement, or CHANCEN support.",
    },
    {
      name: "Graduate Name",
      role: "Class of — · Role / workplace",
      text: "Placeholder quote. Replace with a real THM graduate story about clinical training, placement, or CHANCEN support.",
    },
    {
      name: "Graduate Name",
      role: "Class of — · Role / workplace",
      text: "Placeholder quote. Replace with a real THM graduate story about clinical training, placement, or CHANCEN support.",
    },
  ];

  return (
    <section className="border-t border-slate-200 bg-white py-20 text-thm-ink lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-poppins text-sm font-semibold uppercase tracking-[0.16em] text-thm-purple">
            Graduate voices
          </p>
          <h2 className="mt-3 font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
            Stories from the field
          </h2>
          <p className="mt-3 inline-block border border-dashed border-thm-purple/40 bg-thm-cream px-3 py-1.5 text-sm text-thm-muted">
            Placeholder testimonials — replace with real graduate quotes
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <blockquote
              key={i}
              className="flex flex-col justify-between border border-slate-200 bg-thm-cream p-7"
            >
              <p className="text-base leading-relaxed text-thm-ink">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer className="mt-6 border-t border-slate-200 pt-4">
                <cite className="not-italic font-poppins font-semibold text-thm-purple">
                  {item.name}
                </cite>
                <p className="mt-0.5 text-sm text-thm-muted">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
