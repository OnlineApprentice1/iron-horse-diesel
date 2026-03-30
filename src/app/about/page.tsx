import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Wrench, Shield, MapPin, ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionEditorial from "@/components/layouts/SectionEditorial";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "30 years of diesel-only expertise in Sault Ste. Marie. Iron Horse Diesel Service — 6-bay shop, factory-trained technicians, and a 24/7 mobile service truck covering Algoma District.",
};

const timeline = [
  {
    year: "1995",
    heading: "Founded",
    body: "Gary Fillion opens a one-bay diesel shop on the east end of Sault Ste. Marie. Just one technician, a tool chest, and a steady stream of trucks that needed real diesel work.",
  },
  {
    year: "2004",
    heading: "Fleet Contracts Begin",
    body: "First scheduled maintenance agreement with Algoma Transport. The shift from walk-in repairs to contracted fleet service — regular work, deeper relationships, higher stakes.",
  },
  {
    year: "2012",
    heading: "Mobile Service Launch",
    body: "A fully equipped service truck hits the road. From that point on, a breakdown on the Trans-Canada doesn't mean waiting for a tow — it means a technician shows up.",
  },
  {
    year: "2023",
    heading: "Facility Expansion",
    body: "New 6-bay shop with computerised diagnostics suite. The space to take on more complex engine work and run fleet maintenance programs without scheduling conflicts.",
  },
];

const values = [
  {
    icon: Wrench,
    heading: "Diesel Expertise",
    body: "We don't do oil changes on sedans. Every technician, every tool, every part in this shop is diesel. That focus matters when your engine is on the table.",
  },
  {
    icon: Shield,
    heading: "Reliability",
    body: "When your rig is down, time is money. We show up, we diagnose fast, and we get it done right the first time. You don't have the time for a second visit.",
  },
  {
    icon: MapPin,
    heading: "Community",
    body: "We live here. We work here. When a storm knocks out power and generators need fixing, we're already on the way — before the phone call.",
  },
];

const certifications = [
  "Cummins Certified",
  "Detroit Diesel Certified",
  "CAT Certified",
  "John Deere Certified",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="section-spacious section-bg-deep grain-overlay rivet-grid">
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="blur-sharpen">
            <p className="badge-label mb-6">Our Story</p>
            <h1 className="type-hero" style={{ color: "var(--clr-text-primary)" }}>
              About Iron Horse Diesel
            </h1>
            <p
              className="type-hero-sub mt-4 max-w-2xl mx-auto"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Diesel-only since 1995. One shop, one focus.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="cross-brace-divider" />

      {/* Owner photo block — full bleed visual before editorial text */}
      <section className="section-standard section-bg-texture">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="slide-left">
            <div className="relative overflow-hidden mb-10" style={{ borderRadius: "0.25rem", maxHeight: "420px" }}>
              <Image
                src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1200&h=500&fit=crop&q=80"
                alt="Diesel technician at workbench"
                width={1200}
                height={500}
                className="w-full object-cover img-duotone"
                style={{ maxHeight: "420px", objectPosition: "center 40%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, color-mix(in oklch, var(--clr-surface-1) 60%, transparent) 0%, transparent 50%), linear-gradient(to top, color-mix(in oklch, var(--clr-surface-1) 50%, transparent), transparent 50%)",
                }}
              />
              <div className="absolute bottom-6 left-6">
                <p className="type-small" style={{ color: "var(--clr-text-muted)" }}>
                  Iron Horse Diesel — Sault Ste. Marie, Ontario
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Owner Origin Story — SectionEditorial for text-dominant reading column */}
      <SectionEditorial className="section-bg-texture" align="left">
        <Reveal animation="fade-up">
          <p className="badge-label">The Owner</p>
        </Reveal>
        <Reveal animation="fade-up" delay={0.05}>
          <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
            Gary Fillion — 30 Years on Diesel
          </h2>
        </Reveal>
        <Reveal animation="fade-up" delay={0.1}>
          <p className="type-body-lg" style={{ color: "var(--clr-text-secondary)" }}>
            Gary Fillion started turning wrenches on diesel engines in 1995, working out of a
            single-bay shop on the east end of the Soo. Back then, it was just Gary and a tool
            chest.
          </p>
        </Reveal>
        <Reveal animation="fade-up" delay={0.15}>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            Thirty years later, Iron Horse Diesel Service runs a 6-bay facility with a team of
            factory-trained technicians and a fully equipped mobile service truck that covers Algoma
            District from Sault Ste. Marie to Wawa.
          </p>
        </Reveal>
        <Reveal animation="fade-up" delay={0.2}>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            The work hasn&apos;t changed — diagnose it properly, fix it properly, stand behind it. The
            capacity has. Today the shop handles everything from fleet maintenance contracts to full
            engine rebuilds, without losing the direct relationship that a small shop is known for.
          </p>
        </Reveal>
        <Reveal animation="fade-up" delay={0.25}>
          <div>
            <Link href="/contact" className="btn-profile inline-flex items-center gap-2">
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </SectionEditorial>

      <div className="cross-brace-divider" />

      {/* Timeline */}
      <section className="section-standard section-bg-deep grain-overlay">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="badge-label mb-4">History</p>
              <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
                Thirty Years, Four Milestones
              </h2>
            </div>
          </Reveal>
          <div className="relative flex flex-col gap-0">
            <div
              className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "var(--clr-surface-3)" }}
            />
            {timeline.map((item, i) => (
              <Reveal
                key={item.year}
                animation={i % 2 === 0 ? "slide-left" : "slide-right"}
                delay={i * 0.1}
              >
                <div className="relative flex flex-col md:flex-row gap-4 md:gap-8 pb-10 last:pb-0">
                  <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0 md:w-28 shrink-0">
                    <div
                      className="relative z-10 flex items-center justify-center w-10 h-10 shrink-0"
                      style={{
                        background: "var(--clr-surface-2)",
                        border: "2px solid var(--clr-primary)",
                      }}
                    >
                      <div
                        className="w-3 h-3"
                        style={{ background: "var(--clr-accent)" }}
                      />
                    </div>
                    <span
                      className="type-card"
                      style={{ color: "var(--clr-accent)", fontFamily: "var(--font-heading)" }}
                    >
                      {item.year}
                    </span>
                  </div>
                  <div className="card-standard flex-1">
                    <h3 className="type-card mb-2" style={{ color: "var(--clr-text-primary)" }}>
                      {item.heading}
                    </h3>
                    <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="cross-brace-divider" />

      {/* Values Section */}
      <section className="section-standard section-bg-gradient">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="badge-label mb-4">How We Work</p>
              <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
                Three Things That Don&apos;t Change
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <Reveal key={val.heading} animation="fade-up" delay={i * 0.12}>
                  <div className="card-standard h-full flex flex-col gap-4">
                    <div
                      className="flex items-center justify-center w-12 h-12"
                      style={{
                        background: "color-mix(in oklch, var(--clr-primary) 12%, transparent)",
                        border: "1px solid var(--clr-surface-3)",
                      }}
                    >
                      <Icon size={22} style={{ color: "var(--clr-accent)" }} />
                    </div>
                    <h3 className="type-card" style={{ color: "var(--clr-text-primary)" }}>
                      {val.heading}
                    </h3>
                    <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
                      {val.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="cross-brace-divider" />

      {/* Certifications */}
      <section className="section-compact section-bg-deep">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="scale-up">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="shrink-0">
                <p className="badge-label mb-1">Certifications</p>
                <p className="type-body" style={{ color: "var(--clr-text-muted)" }}>
                  Factory-trained technicians
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span key={cert} className="badge-label">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-standard section-bg-texture">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="fade-up">
            <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
              Ready to talk about your equipment?
            </h2>
            <p
              className="type-body-lg mt-4 max-w-xl mx-auto"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Call us or send a message. No runaround, no waiting — just a straight answer from
              someone who knows diesel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn-profile inline-flex items-center gap-2">
                Send a Message
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="btn-profile-ghost inline-flex items-center gap-2"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
