"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: scrolled
          ? "var(--clr-surface-1)"
          : "color-mix(in oklch, var(--clr-surface-1) 70%, transparent)",
        borderColor: "var(--clr-surface-3)",
        transition: "background-color 0.3s ease",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo — left aligned */}
        <Link
          href="/"
          className="font-heading font-bold tracking-tight uppercase"
          style={{ color: "var(--clr-text-primary)", fontSize: "1.125rem" }}
        >
          <span style={{ color: "var(--clr-accent)" }}>Iron Horse</span>{" "}
          <span style={{ color: "var(--clr-primary-light)" }}>Diesel</span>
        </Link>

        {/* Desktop nav — centre */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading font-semibold uppercase tracking-wide nav-link-hover"
              style={{
                color: "var(--clr-text-secondary)",
                fontSize: "0.8125rem",
                letterSpacing: "0.08em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Phone CTA — right aligned (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="btn-profile flex items-center gap-2 transition-opacity"
            style={{ color: "var(--clr-accent)" }}
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone size={16} strokeWidth={2.5} />
            <span className="font-heading font-bold tracking-wide" style={{ fontSize: "0.9375rem" }}>
              {siteConfig.phone}
            </span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 transition-opacity"
          style={{ color: "var(--clr-text-primary)" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={prefersReducedMotion ? "open" : "closed"}
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t"
            style={{
              backgroundColor: "var(--clr-surface-1)",
              borderColor: "var(--clr-surface-3)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {/* Phone — prominent in mobile menu */}
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 font-heading font-bold uppercase tracking-wide transition-opacity"
                style={{ color: "var(--clr-accent)", fontSize: "1.125rem" }}
                onClick={() => setOpen(false)}
              >
                <Phone size={20} strokeWidth={2.5} />
                {siteConfig.phone}
              </a>

              <div
                className="w-full"
                style={{ height: "1px", backgroundColor: "var(--clr-surface-3)" }}
              />

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading font-semibold uppercase tracking-wide transition-colors"
                  style={{
                    color: "var(--clr-text-secondary)",
                    fontSize: "0.9375rem",
                    letterSpacing: "0.06em",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-profile w-fit mt-1 font-heading font-bold uppercase tracking-wide"
                style={{ fontSize: "0.875rem" }}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
