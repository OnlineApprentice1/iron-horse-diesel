"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const hours = [
  { day: "Mon – Fri", time: "7:00 am – 6:00 pm" },
  { day: "Saturday", time: "8:00 am – 2:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--clr-surface-1)",
        borderColor: "var(--clr-surface-3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* Column 1: Identity */}
          <div className="flex flex-col gap-4">
            <div>
              <p
                className="font-heading font-bold uppercase tracking-tight"
                style={{ color: "var(--clr-text-primary)", fontSize: "1.0625rem" }}
              >
                <span style={{ color: "var(--clr-accent)" }}>Iron Horse</span>{" "}
                <span style={{ color: "var(--clr-primary-light)" }}>Diesel Service</span>
              </p>
              <p
                className="font-heading font-semibold uppercase tracking-widest mt-1"
                style={{ color: "var(--clr-text-muted)", fontSize: "0.6875rem" }}
              >
                {siteConfig.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 footer-link-accent"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                <Phone size={14} strokeWidth={2} />
                <span className="type-small">{siteConfig.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 footer-link-primary"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                <Mail size={14} strokeWidth={2} />
                <span className="type-small">{siteConfig.email}</span>
              </a>

              <div className="flex items-start gap-2" style={{ color: "var(--clr-text-muted)" }}>
                <MapPin size={14} strokeWidth={2} className="mt-0.5 shrink-0" />
                <span className="type-small">
                  {siteConfig.location.city}, {siteConfig.location.province}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <p
              className="font-heading font-bold uppercase tracking-widest"
              style={{ color: "var(--clr-text-muted)", fontSize: "0.6875rem" }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-heading font-semibold uppercase tracking-wide nav-link-hover"
                    style={{ color: "var(--clr-text-secondary)", fontSize: "0.875rem" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours + Emergency */}
          <div className="flex flex-col gap-4">
            <p
              className="font-heading font-bold uppercase tracking-widest"
              style={{ color: "var(--clr-text-muted)", fontSize: "0.6875rem" }}
            >
              Hours
            </p>

            <ul className="flex flex-col gap-2">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex items-start gap-2">
                  <Clock
                    size={13}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--clr-primary-light)" }}
                  />
                  <div className="flex flex-col">
                    <span
                      className="font-heading font-semibold uppercase tracking-wide"
                      style={{ color: "var(--clr-text-secondary)", fontSize: "0.8125rem" }}
                    >
                      {day}
                    </span>
                    <span
                      className="type-small"
                      style={{ color: "var(--clr-text-muted)" }}
                    >
                      {time}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {/* 24/7 Emergency callout */}
            <div
              className="flex items-start gap-3 p-3 border"
              style={{
                borderColor: "var(--clr-accent)",
                backgroundColor: "color-mix(in oklch, var(--clr-accent) 8%, transparent)",
              }}
            >
              <AlertTriangle
                size={16}
                strokeWidth={2.5}
                className="shrink-0 mt-0.5"
                style={{ color: "var(--clr-accent)" }}
              />
              <div>
                <p
                  className="font-heading font-bold uppercase tracking-wide"
                  style={{ color: "var(--clr-accent)", fontSize: "0.8125rem" }}
                >
                  24/7 Emergency Breakdown
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="type-small"
                  style={{ color: "var(--clr-accent)" }}
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          style={{ borderColor: "var(--clr-surface-3)" }}
        >
          <p className="type-small" style={{ color: "var(--clr-text-muted)" }}>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="type-small nav-link-hover"
              style={{ color: "var(--clr-text-muted)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="type-small nav-link-hover"
              style={{ color: "var(--clr-text-muted)" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
