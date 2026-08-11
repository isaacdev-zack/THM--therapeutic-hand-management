import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function CloseSection() {
  return (
    <section className="bg-thm-ink text-white">
      <div className="mx-auto grid max-w-[1200px] lg:grid-cols-12">
        <div className="border-b border-white/10 px-6 py-16 sm:px-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:py-24 lg:pl-10 lg:pr-14">
          <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-thm-gold">
            Next step
          </p>
          <h2 className="font-poppins mt-4 max-w-lg text-[36px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[52px]">
            Your caregiving career starts
            <span className="text-thm-gold"> with one application.</span>
          </h2>
          <p className="font-inter mt-5 max-w-md text-[16px] leading-relaxed text-white/70">
            Enroll in Nairobi or Kisumu. Ask about CHANCEN Study Now, Pay Later
            when you reach out.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center bg-thm-gold px-8 font-poppins text-[16px] font-bold text-thm-ink transition-colors hover:bg-thm-gold-hover"
            >
              Apply Now
            </Link>
            <Link
              href="/financing"
              className="inline-flex h-14 items-center border border-white/30 px-8 font-poppins text-[16px] font-bold text-white transition-colors hover:border-thm-gold hover:text-thm-gold"
            >
              Financing options
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 px-6 py-14 sm:px-8 lg:col-span-5 lg:py-24 lg:pl-12 lg:pr-10">
          <div>
            <p className="font-poppins text-sm font-semibold uppercase tracking-wide text-thm-gold">
              Campus
            </p>
            <p className="mt-2 flex gap-3 font-inter text-[15px] text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-thm-gold" />
              New Waumini House, 3rd Floor, Westlands, Nairobi
            </p>
          </div>
          <div>
            <p className="font-poppins text-sm font-semibold uppercase tracking-wide text-thm-gold">
              Phone
            </p>
            <p className="mt-2 flex gap-3 font-inter text-[15px] text-white/80">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-thm-gold" />
              0722 590 457 / 0700 589 647
            </p>
          </div>
          <div>
            <p className="font-poppins text-sm font-semibold uppercase tracking-wide text-thm-gold">
              Email
            </p>
            <p className="mt-2 flex gap-3 font-inter text-[15px] text-white/80">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-thm-gold" />
              <a href="mailto:info@thm.co.ke" className="hover:text-thm-gold">
                info@thm.co.ke
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
