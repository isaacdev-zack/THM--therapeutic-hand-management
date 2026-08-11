const voices = [
  {
    quote:
      "Placeholder — replace with a real THM graduate story about clinical training or placement.",
    name: "Graduate Name",
  },
  {
    quote:
      "Placeholder — replace with a CHANCEN beneficiary story about Study Now, Pay Later.",
    name: "Graduate Name",
  },
  {
    quote:
      "Placeholder — replace with a story about elder care or home-based caregiving work.",
    name: "Graduate Name",
  },
];

export function VoicesSection() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <h2 className="font-poppins text-[36px] font-bold text-thm-ink sm:text-[44px]">
          Voices from the field.
        </h2>
        <p className="font-inter mt-3 text-sm text-thm-muted">
          Placeholder testimonials — replace with real graduate quotes.
        </p>
        <div className="mt-12 space-y-10 border-t border-thm-lilac pt-10">
          {voices.map((v, i) => (
            <blockquote
              key={`${v.name}-${i}`}
              className="border-l-4 border-thm-gold pl-5"
            >
              <p className="font-inter text-[20px] leading-snug text-thm-ink md:text-[24px]">
                &ldquo;{v.quote}&rdquo;
              </p>
              <cite className="font-inter mt-3 block text-[14px] not-italic text-thm-muted">
                — {v.name}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
