"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#curriculum", label: "Programs" },
  { href: "#chancen", label: "Financing" },
  { href: "#career", label: "Careers" },
  { href: "#admissions", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = isScrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        solid
          ? "bg-white/95 shadow-[0_1px_0_rgba(30,19,38,0.08)] backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto flex h-[52px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary"
      >
        <Link href="#" className="relative h-11 w-40 sm:h-12 sm:w-48 shrink-0">
          <Image
            src="/logo.svg"
            alt="Therapeutic Hands Management"
            fill
            className={`object-contain object-left transition-all duration-300 ${
              solid ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
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

        <div className="hidden lg:block">
          <Link
            href="#admissions"
            className="inline-flex h-11 items-center justify-center rounded-full bg-thm-gold px-6 font-poppins text-[15px] font-semibold text-thm-ink transition-colors hover:bg-thm-gold-hover"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className={`p-2 lg:hidden ${solid ? "text-thm-ink" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="flex flex-col px-5 py-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-poppins py-3.5 text-base font-medium text-thm-ink border-b border-slate-100 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#admissions"
                onClick={() => setOpen(false)}
                className="mt-4 mb-2 inline-flex h-12 items-center justify-center rounded-full bg-thm-gold font-poppins text-base font-semibold text-thm-ink"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
