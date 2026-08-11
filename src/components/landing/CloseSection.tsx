import Link from "next/link";

export function CloseSection() {
  return (
    <section className="bg-thm-purple px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="font-poppins text-[40px] font-bold leading-[1.05] text-thm-cream sm:text-[56px]">
          Your caregiving career has a name.
          <span className="block text-thm-gold"> Let&apos;s start it.</span>
        </h2>
        <Link
          href="/contact"
          className="font-poppins mt-10 inline-flex h-14 items-center rounded-md bg-thm-gold px-10 text-[17px] font-bold text-thm-ink hover:bg-thm-cream"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}
