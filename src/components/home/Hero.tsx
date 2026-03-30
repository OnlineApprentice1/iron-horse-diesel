"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <>
      <div className="chassis-bar" />
      <SectionFullBleed
        background={
          <div
            className="absolute inset-0 grain-overlay section-bg-deep"
            style={{
              background: `
                radial-gradient(
                  ellipse 80% 60% at 70% 50%,
                  color-mix(in oklch, var(--clr-primary-muted) 18%, transparent) 0%,
                  transparent 60%
                ),
                radial-gradient(
                  ellipse 40% 40% at 85% 20%,
                  color-mix(in oklch, var(--clr-accent) 8%, transparent) 0%,
                  transparent 50%
                ),
                var(--clr-surface-1)
              `,
            }}
          />
        }
        contentPosition="left"
        minHeight="min-h-[90vh]"
        className="section-spacious"
      >
        <div className="max-w-3xl">
          <Reveal animation="blur-sharpen" delay={0}>
            <span className="badge-label mb-6 block">24/7 Diesel Specialists</span>
          </Reveal>

          <Reveal animation="blur-sharpen" delay={0.08}>
            <h1 className="type-hero mb-6" style={{ color: "var(--clr-text-primary)" }}>
              Keep Your Fleet
              <br />
              <span style={{ color: "var(--clr-accent)" }}>Moving.</span>
            </h1>
          </Reveal>

          <Reveal animation="blur-sharpen" delay={0.16}>
            <p className="type-hero-sub mb-8 max-w-2xl" style={{ color: "var(--clr-text-secondary)" }}>
              30+ years of diesel-only expertise. Engine rebuilds, fleet maintenance,
              and 24/7 mobile breakdown service across Algoma District.
            </p>
          </Reveal>

          <Reveal animation="blur-sharpen" delay={0.22}>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-3 mb-8 group"
              style={{ textDecoration: "none" }}
            >
              <span
                className="flex items-center justify-center w-12 h-12 rounded-full"
                style={{
                  background: "color-mix(in oklch, var(--clr-accent) 15%, transparent)",
                  border: "2px solid var(--clr-accent)",
                  transition: "background-color 0.25s ease",
                }}
              >
                <Phone
                  size={20}
                  style={{ color: "var(--clr-accent)" }}
                />
              </span>
              <span
                className="type-hero-sub font-bold tracking-wide"
                style={{
                  color: "var(--clr-accent)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                }}
              >
                {siteConfig.phone}
              </span>
            </a>
          </Reveal>

          <Reveal animation="blur-sharpen" delay={0.28}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-profile">
                Get a Quote
              </Link>
              <Link href="/services" className="btn-profile-ghost">
                Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </SectionFullBleed>
      <div className="chassis-bar" />
    </>
  );
}
