import Link from "next/link";

interface PageHeroProps {
  title: string;
  description: string;
  tone?: "cream" | "purple" | "deep";
}

export function PageHero({
  title,
  description,
  tone = "cream",
}: PageHeroProps) {
  const tones = {
    cream: "bg-grain text-thm-ink pt-[88px]",
    purple: "bg-thm-purple text-white pt-[88px]",
    deep: "bg-thm-purple-deep text-white pt-[88px]",
  };

  const muted = tone === "cream" ? "text-thm-muted" : "text-white/80";

  return (
    <section className={`${tones[tone]} border-b border-black/5`}>
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <h1 className="max-w-3xl font-poppins text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight">
          {title}
        </h1>
        <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${muted}`}>
          {description}
        </p>
      </div>
    </section>
  );
}

export function HomeCtaBand() {
  return (
    <section className="bg-thm-purple py-16 text-white lg:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-poppins text-2xl font-bold sm:text-3xl">
            Ready to start your caregiving career?
          </h2>
          <p className="mt-2 text-white/80">
            Apply for Certificate in Caregiver training in Nairobi or Kisumu —
            and ask about CHANCEN Study Now, Pay Later.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center rounded-full bg-thm-gold px-7 font-poppins text-base font-semibold text-thm-ink transition-colors hover:bg-thm-gold-hover"
          >
            Apply Now
          </Link>
          <Link
            href="/financing"
            className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 font-poppins text-base font-semibold text-white transition-colors hover:border-thm-gold hover:text-thm-gold"
          >
            Explore financing
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeAboutTeaser() {
  return (
    <section className="bg-grain py-16 lg:py-20 text-thm-ink">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
              A Kenyan caregiver school built on skill, empathy, and trust
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-thm-muted">
              Registered in April 2023, THM trains caregivers under the NITA
              curriculum in Nairobi and Kisumu — preparing graduates to serve
              with clinical precision and heartfelt care.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="bg-thm-purple p-6 text-white">
              <p className="font-poppins text-xs font-semibold uppercase tracking-wide text-thm-gold">
                Vision
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                To be a household name and pace-setter in the caregiving global
                market.
              </p>
            </div>
            <Link
              href="/about"
              className="font-poppins text-sm font-semibold text-thm-purple underline-offset-4 hover:underline"
            >
              Read our full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFinancingTeaser() {
  return (
    <section className="bg-thm-purple-deep py-16 text-white lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 className="font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
              Study Now, Pay Later with CHANCEN
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
              No upfront fees for eligible youth aged 19–35. Repay only after you
              finish your studies — backed by CHANCEN&apos;s 93% graduation rate.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/financing"
              className="inline-flex h-12 items-center rounded-full bg-thm-gold px-7 font-poppins text-base font-semibold text-thm-ink transition-colors hover:bg-thm-gold-hover"
            >
              How financing works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
