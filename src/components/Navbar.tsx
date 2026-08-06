"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.header
      initial={false}
      animate={{
        backgroundColor: solid ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
        boxShadow: solid ? "0 4px 20px rgba(0, 0, 0, 0.06)" : "0 0 0 rgba(0, 0, 0, 0)",
        backdropFilter: solid ? "blur(12px)" : "blur(0px)",
        paddingTop: solid ? "12px" : "20px",
        paddingBottom: solid ? "12px" : "20px",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <nav
        className="mx-auto flex h-[52px] w-full max-w-[1320px] items-center justify-between px-6 lg:px-12"
        aria-label="Primary"
      >
        {/* Official THM SVG Logo */}
        <Link href="#" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="relative h-12 w-44 sm:h-14 sm:w-52"
          >
            <Image
              src="/logo.svg"
              alt="Therapeutic Hands Management"
              fill
              className={`object-contain object-left transition-all duration-300 ${
                solid ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative group py-1">
              <motion.span
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
                className={`font-poppins text-[15px] font-medium transition-colors duration-200 block ${
                  solid
                    ? "text-thm-ink hover:text-thm-purple"
                    : "text-white/90 hover:text-thm-gold"
                }`}
              >
                {link.label}
              </motion.span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                  solid ? "bg-thm-purple" : "bg-thm-gold"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Action CTAs */}
        <div className="hidden items-center gap-6 lg:flex font-poppins">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#admissions"
              className={`text-[15px] font-semibold transition-colors duration-200 ${
                solid
                  ? "text-thm-purple hover:text-thm-ink"
                  : "text-white hover:text-thm-gold"
              }`}
            >
              Login
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="#admissions"
              className="flex h-[44px] items-center justify-center rounded-full bg-thm-purple px-7 text-[15px] font-bold text-white shadow-md transition-shadow hover:shadow-lg hover:bg-thm-purple-dark"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>

        {/* Mobile Hamburger toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          className={`p-2 lg:hidden ${solid ? "text-thm-ink" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </nav>

      {/* Animated Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden flex flex-col overflow-hidden border-t border-slate-100 bg-white shadow-xl"
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
                className="font-poppins flex h-[48px] w-full items-center justify-center rounded-full bg-thm-purple text-white text-base font-bold shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
