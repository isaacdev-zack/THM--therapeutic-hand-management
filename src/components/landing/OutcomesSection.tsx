import Link from "next/link";

const places = [
  {
    title: "Hospitals",
    detail: "Ward support under registered nurse supervision",
  },
  {
    title: "Elder care homes",
    detail: "Geriatric support, mobility, and dignity in aging",
  },
  {
    title: "Childcare centres",
    detail: "Safeguarding and daily developmental care",
  },
  {
    title: "Private home care",
    detail: "One-to-one support for recovering or at-risk clients",
  },
];

export function OutcomesSection() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-thm-purple">
              Outcomes
            </p>
            <h2 className="mt-2 font-poppins text-[1.85rem] font-bold tracking-tight text-thm-ink sm:text-3xl">
              Where graduates work
            </h2>
          </div>
          <Link
            href="/careers"
            className="font-poppins text-sm font-semibold text-thm-purple hover:underline"
          >
            See career pathways →
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {places.map((p) => (
            <div
              key={p.title}
              className="border-l-4 border-thm-gold bg-thm-cream px-5 py-5"
            >
              <h3 className="font-poppins font-bold text-thm-ink">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-thm-muted">
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
