"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import { siteConfig } from "@/config/site";

export default function CTA() {
  return (
    <SectionFullBleed
      background={
        <div
          className="absolute inset-0 grain-overlay section-bg-deep"
          style={{
            background: `
              radial-gradient(
                ellipse 60% 80% at 50% 50%,
                color-mix(in oklch, var(--clr-primary-muted) 20%, transparent) 0%,
                transparent 65%
              ),
              var(--clr-surface-1)
            `,
          }}
        />
      }
      contentPosition="center"
      minHeight="min-h-[50vh]"
      className="section-spacious"
    >
      <div className="flex flex-col items-center gap-8 text-center max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
            Your Diesel Engine Deserves a Specialist.
          </h2>
          <p className="type-body-lg" style={{ color: "var(--clr-text-secondary)" }}>
            30 years. One focus. If it runs on diesel, we keep it running.
          </p>
        </div>

        <a
          href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
          className="inline-flex items-center gap-3"
          style={{ textDecoration: "none" }}
        >
          <span
            className="flex items-center justify-center w-14 h-14 rounded-full"
            style={{
              background: "color-mix(in oklch, var(--clr-accent) 15%, transparent)",
              border: "2px solid var(--clr-accent)",
            }}
          >
            <Phone size={24} style={{ color: "var(--clr-accent)" }} />
          </span>
          <span
            style={{
              color: "var(--clr-accent)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "var(--type-section)",
              letterSpacing: "-0.01em",
            }}
          >
            {siteConfig.phone}
          </span>
        </a>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="btn-profile">
            Call Now
          </a>
          <Link href="/contact" className="btn-profile-ghost">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </SectionFullBleed>
  );
}
