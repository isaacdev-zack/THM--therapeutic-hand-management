import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Enroll",
    text: "Apply for Certificate in Caregiver training. Ask about CHANCEN financing.",
  },
  {
    n: "02",
    title: "Train",
    text: "Classroom theory plus mandatory practical labs under NITA standards.",
  },
  {
    n: "03",
    title: "Place",
    text: "Hospital and care placements under registered nurse supervision.",
  },
  {
    n: "04",
    title: "Serve",
    text: "Graduate into hospitals, elder care, childcare, or private homes.",
  },
];

export function PathwaySection() {
  return (
    <section className="border-y border-thm-ink/10 bg-thm-cream px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-thm-purple">
              Your path
            </p>
            <h2 className="mt-2 font-poppins text-[1.85rem] font-bold tracking-tight text-thm-ink sm:text-3xl">
              From enrollment to employment
            </h2>
          </div>
          <Link
            href="/careers"
            className="font-poppins text-sm font-semibold text-thm-purple hover:underline"
          >
            Career pathways →
          </Link>
        </div>

        <div className="mt-8 grid gap-px bg-thm-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-thm-cream p-5 sm:p-6">
              <p className="font-poppins text-2xl font-bold text-thm-gold">{s.n}</p>
              <h3 className="mt-2 font-poppins text-lg font-bold text-thm-ink">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-thm-muted">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
