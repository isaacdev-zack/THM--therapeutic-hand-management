"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, User } from "lucide-react";

export function ContactSection() {
  return (
    <section className="bg-thm-purple-deep py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-thm-gold">
              Contact
            </p>
            <h2 className="mt-2 font-poppins text-3xl font-bold tracking-tight sm:text-4xl">
              Get in touch with THM
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Questions about campuses, financing, or training? Reach our team
              directly — or start your official Caregiver II application when
              you are ready.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-thm-gold" />
                <div>
                  <p className="font-semibold">Campus</p>
                  <p className="mt-0.5 text-sm text-white/75">
                    New Waumini House, 3rd Floor, Westlands, Nairobi
                  </p>
                  <p className="text-sm text-white/55">
                    P.O. Box 27268–00100
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-thm-gold" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="mt-0.5 text-sm text-white/75">
                    0722 590 457 / 0700 589 647
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-thm-gold" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:info@thm.co.ke"
                    className="mt-0.5 block text-sm text-white/75 transition-colors hover:text-thm-gold"
                  >
                    info@thm.co.ke
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <User className="mt-0.5 h-5 w-5 shrink-0 text-thm-gold" />
                <div>
                  <p className="font-semibold">CEO</p>
                  <p className="mt-0.5 text-sm text-white/75">
                    Mrs. Janipher Aluoch Otieno
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border-2 border-thm-gold bg-white p-7 text-thm-ink sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-thm-gold">
                Admissions
              </p>
              <h3 className="mt-2 font-poppins text-2xl font-bold text-thm-purple sm:text-3xl">
                Ready to apply?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-thm-muted sm:text-base">
                The official Caregiver II admission form is separate from this
                contact page. Complete it online with your personal details,
                next of kin, education background, and declaration.
              </p>
              <Link
                href="/apply"
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-thm-purple px-7 font-poppins text-sm font-semibold text-white transition-colors hover:bg-thm-purple-dark"
              >
                Start Caregiver II application
                <ArrowRight className="h-4 w-4 text-thm-gold" />
              </Link>
              <p className="mt-4 text-xs text-thm-muted">
                You will need Form Four certificate, ID copy, and two passport
                photos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 lg:mt-16">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-thm-gold" />
              <h3 className="font-poppins text-lg font-semibold sm:text-xl">
                Find us on the map
              </h3>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=New+Waumini+House+Westlands+Nairobi+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-thm-gold transition-colors hover:text-white"
            >
              <MapPin className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-thm-gold/40 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <iframe
              title="THM campus — New Waumini House, Westlands, Nairobi"
              src="https://maps.google.com/maps?q=New+Waumini+House,+Westlands,+Nairobi,+Kenya&hl=en&z=16&output=embed"
              className="h-[280px] w-full border-0 sm:h-[360px] lg:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
