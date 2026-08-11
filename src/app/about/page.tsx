import type { Metadata } from "next";
import { aboutContent } from "@/data/about";
import { AboutHero } from "@/components/about/AboutHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Therapeutic Hands Management — mission, NITA-certified training, history, core values, and caregiver education in Nairobi and Kisumu.",
};

export default function AboutPage() {
  const c = aboutContent;

  return (
    <main className="bg-white">
      <AboutHero headline={c.headline} subhead={c.subhead} />

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] space-y-5">
          {c.intro.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="font-inter text-[17px] leading-relaxed text-thm-muted"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <section
        id="about-mission"
        className="scroll-mt-24 bg-thm-lilac px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-poppins text-[32px] font-bold text-thm-ink md:text-[40px]">
            {c.missionTitle}
          </h2>
          <div className="mt-6 space-y-4">
            {c.mission.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="font-inter text-[17px] leading-relaxed text-thm-ink/80"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-thm-purple px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-poppins text-[32px] font-bold text-thm-cream md:text-[40px]">
            {c.accreditationTitle}
          </h2>
          <div className="mt-6 space-y-4">
            {c.accreditation.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="font-inter text-[16px] leading-relaxed text-thm-cream/90"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-poppins text-[32px] font-bold text-thm-ink md:text-[40px]">
            {c.philosophyTitle}
          </h2>
          <div className="mt-6 space-y-4">
            {c.philosophy.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="font-inter text-[17px] leading-relaxed text-thm-muted"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-thm-ink px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-poppins text-[32px] font-bold text-thm-gold md:text-[40px]">
            {c.purposesTitle}
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {c.purposes.map((item) => (
              <li
                key={item}
                className="font-inter rounded-2xl border border-white/10 bg-thm-purple/40 px-4 py-3 text-[15px] text-thm-cream"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-poppins text-[32px] font-bold text-thm-ink md:text-[40px]">
            {c.historyTitle}
          </h2>
          <div className="mt-6 space-y-4">
            {c.history.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="font-inter text-[17px] leading-relaxed text-thm-muted"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-thm-lilac px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="font-poppins text-[32px] font-bold text-thm-ink md:text-[40px]">
            {c.valuesTitle}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {c.values.map((item) => (
              <div
                key={item.name}
                className="rounded-[20px] bg-thm-purple p-5 text-white"
              >
                <p className="font-poppins text-[20px] font-bold text-thm-gold">
                  {item.name}
                </p>
                <p className="font-inter mt-2 text-[14px] leading-snug text-thm-cream/90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-poppins text-[32px] font-bold text-thm-ink md:text-[40px]">
            {c.affirmationsTitle}
          </h2>
          <ul className="mt-8 space-y-4">
            {c.affirmations.map((item) => (
              <li
                key={item.slice(0, 40)}
                className="font-inter border-l-4 border-thm-gold pl-4 text-[16px] leading-relaxed text-thm-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
