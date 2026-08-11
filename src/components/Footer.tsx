import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/financing", label: "CHANCEN financing" },
  { href: "/careers", label: "Career pathways" },
  { href: "/contact", label: "Admissions" },
];

export function Footer() {
  return (
    <footer className="border-t-4 border-thm-gold bg-thm-purple-deep py-14 text-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="relative block h-16 w-16">
              <Image
                src="/logo-mark-light.png"
                alt="Therapeutic Hands Management"
                fill
                sizes="64px"
                className="object-contain object-left"
              />
            </Link>
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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-thm-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
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
                <a href="mailto:info@thm.co.ke" className="hover:text-thm-gold">
                  info@thm.co.ke
                </a>
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
