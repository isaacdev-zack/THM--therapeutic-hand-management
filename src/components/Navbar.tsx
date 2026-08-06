"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About Us" },
  { href: "#curriculum", label: "Programs" },
  { href: "#chancen", label: "Financing" },
  { href: "#career", label: "Outcomes" },
  { href: "#admissions", label: "Contact Us" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = isScrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <nav
        className="mx-auto flex h-[64px] w-full max-w-[1320px] items-center justify-between px-6 lg:px-[80px]"
        aria-label="Primary"
      >
        <Link href="#" className="inline-flex items-center">
          <div className="relative h-10 w-36 sm:h-12 sm:w-40">
            <Image
              src="/logo.svg"
              alt="THM Home"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <span className="sr-only">THM home</span>
        </Link>

        {/* Clean, un-cluttered desktop links like MyFuture */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-poppins text-[15px] font-medium transition-colors ${
                solid
                  ? "text-thm-ink hover:text-thm-purple"
                  : "text-white/90 hover:text-thm-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Clean Login + Primary CTA Action buttons */}
        <div className="hidden items-center gap-5 lg:flex font-poppins">
          <Link
            href="#admissions"
            className={`text-[15px] font-semibold transition-colors ${
              solid ? "text-thm-purple hover:text-thm-ink" : "text-white hover:text-thm-gold"
            }`}
          >
            Login
          </Link>
          <Link
            href="#admissions"
            className="flex h-[44px] items-center justify-center rounded-full bg-thm-purple px-7 text-[15px] font-medium text-white transition-all hover:bg-thm-purple-dark hover:scale-[1.02] active:scale-[0.98]"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          type="button"
          className={`p-2 lg:hidden ${solid ? "text-thm-ink" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Clean Mobile Navigation Menu */}
      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden flex max-h-[calc(100dvh-64px)] flex-col overflow-y-auto border-t border-slate-100 bg-white shadow-xl"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-poppins py-3 text-lg font-medium text-thm-ink border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="sticky bottom-0 mt-auto border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-3">
            <Link
              href="#admissions"
              onClick={() => setOpen(false)}
              className="font-poppins flex h-[44px] w-full items-center justify-center rounded-md border border-thm-purple text-thm-purple text-base font-semibold"
            >
              Login
            </Link>
            <Link
              href="#admissions"
              onClick={() => setOpen(false)}
              className="font-poppins flex h-[48px] w-full items-center justify-center rounded-full bg-thm-purple text-white text-base font-medium"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
