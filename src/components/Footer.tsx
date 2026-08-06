import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-thm-purple-deep text-white border-t-4 border-thm-gold py-16">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <div className="relative h-12 w-44">
              <Image
                src="/logo.svg"
                alt="Therapeutic Hands Management Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-thm-cream/80 leading-relaxed mt-2">
              Therapeutic Hands Management Co. Limited (THM) — Enabling Caregivers with Life Saving Skills under the NITA Curriculum in Nairobi and Kisumu.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-poppins text-lg font-bold text-thm-gold mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm text-thm-cream/80">
              <li>
                <Link href="#about" className="hover:text-thm-gold transition-colors">
                  About THM
                </Link>
              </li>
              <li>
                <Link href="#curriculum" className="hover:text-thm-gold transition-colors">
                  NITA Curriculum (20+ Skills)
                </Link>
              </li>
              <li>
                <Link href="#chancen" className="hover:text-thm-gold transition-colors">
                  CHANCEN Financing (Study Now, Pay Later)
                </Link>
              </li>
              <li>
                <Link href="#career" className="hover:text-thm-gold transition-colors">
                  Career Pathways & Hospitals
                </Link>
              </li>
              <li>
                <Link href="#admissions" className="hover:text-thm-gold transition-colors">
                  Admissions & Application
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Curriculum */}
          <div>
            <h4 className="font-poppins text-lg font-bold text-thm-gold mb-4">Training Focus</h4>
            <ul className="space-y-2.5 text-sm text-thm-cream/80">
              <li>Certificate in Caregiver II</li>
              <li>Clinical Vital Signs & Monitoring</li>
              <li>Patient Hygiene & Bed Bathing</li>
              <li>Catheter & Tube Feeding Support</li>
              <li>Geriatric & Elder Homecare</li>
              <li>Childcare & Safeguarding</li>
            </ul>
          </div>

          {/* Col 4: Campus Address & CEO */}
          <div>
            <h4 className="font-poppins text-lg font-bold text-thm-gold mb-4">Headquarters</h4>
            <div className="space-y-3 text-sm text-thm-cream/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-thm-gold shrink-0 mt-1" />
                <span>New Waumini House, 3rd Floor, Westlands, Nairobi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-thm-gold shrink-0" />
                <span>0722 590 457 / 0700 589 647</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-thm-gold shrink-0" />
                <span>info@thm.co.ke</span>
              </div>
              <div className="pt-2 text-xs text-thm-cream/60">
                P.O. Box 27268 – 00100 Nairobi, Kenya <br />
                CEO: Mrs. Janipher Aluoch Otieno
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-thm-purple/60 flex flex-col sm:flex-row items-center justify-between text-xs text-thm-cream/60 gap-4">
          <p>© {new Date().getFullYear()} Therapeutic Hands Management Co. Limited (THM). All rights reserved.</p>
          <p>Enabling Caregivers with Life Saving Skills</p>
        </div>
      </div>
    </footer>
  );
}
