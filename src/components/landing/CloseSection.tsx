import Link from "next/link";

export function CloseSection() {
  return (
    <section className="bg-thm-purple px-5 py-12 text-white sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-poppins text-2xl font-bold tracking-tight sm:text-3xl">
            Ready for your caregiving career?
          </h2>
          <p className="mt-2 text-sm text-white/80 sm:text-base">
            Apply for Nairobi or Kisumu — and ask about CHANCEN Study Now, Pay
            Later.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-full bg-thm-gold px-7 font-poppins text-sm font-semibold text-thm-ink hover:bg-thm-gold-hover"
          >
            Apply Now
          </Link>
          <Link
            href="/financing"
            className="inline-flex h-11 items-center rounded-full border border-white/35 px-7 font-poppins text-sm font-semibold text-white hover:border-thm-gold hover:text-thm-gold"
          >
            Financing
          </Link>
        </div>
      </div>
    </section>
  );
}
