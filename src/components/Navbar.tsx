"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About THM" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#chancen", label: "Financing & CHANCEN" },
  { href: "#career", label: "Career Outcomes" },
  { href: "#admissions", label: "Admissions" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative h-12 w-36 sm:h-14 sm:w-44 transition-transform group-hover:scale-[1.02]">
            <Image
              src="/logo.svg"
              alt="Therapeutic Hands Management (THM) Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors hover:text-thm-gold ${
                isScrolled ? "text-thm-ink" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Action CTAs */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:0722590457"
            className={`flex items-center gap-2 text-[14px] font-medium transition-colors ${
              isScrolled ? "text-thm-purple hover:text-thm-ink" : "text-white/90 hover:text-white"
            }`}
          >
            <Phone size={16} className="text-thm-gold" />
            <span>0722 590 457</span>
          </a>
          <Link
            href="#admissions"
            className="flex h-11 items-center justify-center rounded-full bg-thm-gold px-6 text-[15px] font-bold text-thm-ink shadow-sm transition-all hover:bg-thm-gold-hover hover:scale-105 active:scale-95"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((v) => !v)}
          className={`p-2 lg:hidden rounded-lg transition-colors ${
            isScrolled || mobileMenuOpen ? "text-thm-ink hover:bg-slate-100" : "text-white hover:bg-white/10"
          }`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-thm-ink py-2 border-b border-slate-100 hover:text-thm-purple"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:0722590457"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 font-semibold text-thm-ink"
              >
                <Phone size={18} className="text-thm-purple" />
                Call 0722 590 457
              </a>
              <Link
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-full bg-thm-gold text-base font-bold text-thm-ink shadow-md active:scale-95"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
