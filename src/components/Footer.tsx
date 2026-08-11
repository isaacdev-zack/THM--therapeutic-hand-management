import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-thm-gold bg-thm-purple-deep py-14 text-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative h-11 w-40">
              <Image
                src="/logo.svg"
                alt="Therapeutic Hands Management"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Enabling Caregivers with Life Saving Skills. NITA-curriculum
              training in Nairobi and Kisumu.
            </p>
          </div>

          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-wide text-thm-gold">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="#about" className="hover:text-thm-gold">
                  About
                </Link>
              </li>
              <li>
                <Link href="#curriculum" className="hover:text-thm-gold">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#chancen" className="hover:text-thm-gold">
                  CHANCEN financing
                </Link>
              </li>
              <li>
                <Link href="#career" className="hover:text-thm-gold">
                  Career pathways
                </Link>
              </li>
              <li>
                <Link href="#admissions" className="hover:text-thm-gold">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-wide text-thm-gold">
              Training
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>Certificate in Caregiver</li>
              <li>Clinical basics</li>
              <li>Patient support skills</li>
              <li>Safety & infection control</li>
              <li>Hospital & home placements</li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins text-sm font-semibold uppercase tracking-wide text-thm-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-thm-gold" />
                <span>New Waumini House, 3rd Floor, Westlands, Nairobi</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-thm-gold" />
                <span>0722 590 457 / 0700 589 647</span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-thm-gold" />
                <span>info@thm.co.ke</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/50">
              CEO: Mrs. Janipher Aluoch Otieno
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Therapeutic Hands Management Co.
            Limited
          </p>
          <p>Enabling Caregivers with Life Saving Skills</p>
        </div>
      </div>
    </footer>
  );
}
