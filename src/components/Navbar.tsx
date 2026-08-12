"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/financing", label: "Financing" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const solid = isScrolled || open || !isHome;

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
        <Link
          href="/"
          className="flex h-[52px] w-[52px] sm:h-16 sm:w-16 shrink-0 items-center"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={solid ? "/logo-mark.png?v=4" : "/logo-mark-light.png?v=4"}
            alt="Therapeutic Hands Management"
            width={128}
            height={128}
            className="h-full w-full object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-poppins text-[15px] font-medium transition-colors ${
                  active
                    ? "text-thm-purple"
                    : solid
                      ? "text-thm-ink hover:text-thm-purple"
                      : "text-white/90 hover:text-thm-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
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
                  className={`font-poppins py-3.5 text-base font-medium border-b border-slate-100 last:border-0 ${
                    pathname === link.href ? "text-thm-purple" : "text-thm-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
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
