import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Wrench, Truck, Gauge, Shield, Phone, CheckCircle, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionZigzag from "@/components/layouts/SectionZigzag";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Diesel engine repair, fleet maintenance, heavy equipment service, fuel system diagnostics, and 24/7 mobile breakdown — Iron Horse Diesel Service in Sault Ste. Marie, Ontario.",
};

const services = [
  {
    id: "engine-repair",
    icon: Wrench,
    heading: "Diesel Engine Repair & Rebuild",
    lead: "We strip it down, find the issue, rebuild to spec or better.",
    body: [
      "Complete teardown and diagnosis on Class 8 trucks, heavy equipment, and industrial generators. When an engine comes into our shop, we do the job right — not the quick fix.",
      "Our technicians are certified on Cummins, Detroit Diesel, CAT, and John Deere. We use OEM parts where they matter and quality aftermarket where they don't. The difference between a rebuild that lasts and one that comes back is in the detail work.",
    ],
    features: [
      "Complete engine teardown and inspection",
      "Cummins, Detroit Diesel, CAT, John Deere certified",
      "Class 8 trucks and heavy equipment",
      "Industrial generator overhaul",
      "OEM and quality aftermarket parts",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop&q=80",
      alt: "Diesel engine components on workbench",
    },
  },
  {
    id: "fleet-maintenance",
    icon: Shield,
    heading: "Fleet Maintenance Programs",
    lead: "One call, your whole fleet covered.",
    body: [
      "Scheduled maintenance contracts for trucking companies and municipalities across Algoma District. We track service intervals, oil analysis results, and inspection records so you don't have to chase paperwork.",
      "Every contract includes oil analysis, coolant testing, brake inspections, and DOT compliance checks. When it's time for your fleet to roll, it rolls.",
    ],
    features: [
      "Scheduled maintenance contracts",
      "Oil and coolant analysis",
      "DOT compliance inspections",
      "Brake and drivetrain checks",
      "Digital service records and reminders",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
      alt: "Fleet of trucks at construction site",
    },
  },
  {
    id: "heavy-equipment",
    icon: Truck,
    heading: "Heavy Equipment Service",
    lead: "Construction season is short up here. We keep your iron working.",
    body: [
      "Excavators, loaders, dozers, graders — in-shop or on your job site. We work on hydraulic systems, undercarriage, engines, and electrical. If it runs diesel and moves dirt, we work on it.",
      "Northern Ontario construction windows are tight. A machine down for a week doesn't just cost repair money — it costs contracts. We prioritise heavy equipment calls and come to you when pulling it off-site isn't practical.",
    ],
    features: [
      "Excavators, loaders, dozers, graders",
      "Hydraulic system repair and service",
      "Undercarriage inspection and repair",
      "Engine and electrical diagnostics",
      "On-site job site service available",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80",
      alt: "Heavy equipment construction site",
    },
  },
  {
    id: "fuel-systems",
    icon: Gauge,
    heading: "Fuel System Diagnostics & Injection",
    lead: "We find problems other shops miss.",
    body: [
      "Computerised diagnostics for modern common-rail systems. Injector testing, replacement, and calibration. Fuel pump service, fuel contamination cleanup, and emissions compliance work.",
      "Common-rail systems are unforgiving — bad fuel, worn injectors, or a failing high-pressure pump will drop power and damage your engine fast. Early diagnosis saves rebuilds.",
    ],
    features: [
      "Common-rail system diagnostics",
      "Injector testing and replacement",
      "High-pressure fuel pump service",
      "Fuel contamination cleanup",
      "Emissions compliance checks",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop&q=80",
      alt: "Diesel engine diagnostic work in garage",
    },
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="section-spacious section-bg-deep grain-overlay rivet-grid">
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="blur-sharpen">
            <p className="badge-label mb-6">What We Do</p>
            <h1 className="type-hero" style={{ color: "var(--clr-text-primary)" }}>
              Our Services
            </h1>
            <p
              className="type-hero-sub mt-4 max-w-2xl mx-auto"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              From emergency breakdowns to complete rebuilds — we handle every diesel job.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="cross-brace-divider" />

      {/* Services Zigzag */}
      <SectionZigzag
        gap="loose"
        className="section-bg-texture"
        items={services.slice(0, 4).map((service, index) => {
          const Icon = service.icon;
          const isBeforeEmergency = index === 3;

          const content = (
            <Reveal animation="fade-up" delay={0.1}>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-10 h-10"
                    style={{
                      background: "color-mix(in oklch, var(--clr-primary) 15%, transparent)",
                      border: "1px solid var(--clr-primary)",
                    }}
                  >
                    <Icon size={20} style={{ color: "var(--clr-accent)" }} />
                  </div>
                  <span className="badge-label">{`0${index + 1}`}</span>
                </div>
                <h2
                  className="type-section"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  {service.heading}
                </h2>
                <p
                  className="type-body-lg"
                  style={{ color: "var(--clr-accent)", fontWeight: 600 }}
                >
                  {service.lead}
                </p>
                {service.body.map((para, i) => (
                  <p key={i} className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
                    {para}
                  </p>
                ))}
                <ul className="flex flex-col gap-2 mt-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="mt-1 shrink-0"
                        style={{ color: "var(--clr-primary-light)" }}
                      />
                      <span className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2">
                  <Link
                    href="/contact"
                    className="btn-profile inline-flex items-center gap-2"
                  >
                    Book This Service
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          );

          const visual = (
            <Reveal animation={index % 2 === 0 ? "slide-left" : "slide-right"}>
              <div className="relative overflow-hidden" style={{ borderRadius: "0.25rem" }}>
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover img-duotone"
                  style={{ aspectRatio: "4/3" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in oklch, var(--clr-surface-1) 40%, transparent), transparent 60%)",
                  }}
                />
              </div>
            </Reveal>
          );

          return { content, visual };
        })}
      />

      {/* Emergency Callout Banner — between services 4 and 5 */}
      <section className="section-compact section-bg-deep">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="scale-up">
            <div className="accent-highlight-bg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Phone size={24} style={{ color: "var(--clr-accent)" }} />
                <p className="type-body-lg" style={{ color: "var(--clr-text-primary)", fontWeight: 600 }}>
                  Broken down?{" "}
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="accent-highlight"
                    style={{
                      transition: "opacity 0.2s ease",
                    }}
                  >
                    {siteConfig.phone}
                  </a>{" "}
                  — we&apos;ll get a tech to you fast.
                </p>
              </div>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="btn-profile whitespace-nowrap inline-flex items-center gap-2"
                style={{
                  background: "var(--clr-accent)",
                  borderColor: "var(--clr-accent)",
                  color: "var(--clr-surface-1)",
                }}
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service 5 — 24/7 Mobile Breakdown */}
      <section className="section-standard section-bg-deep grain-overlay">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <Reveal animation="slide-left" className="w-full lg:w-1/2">
              <div className="relative overflow-hidden" style={{ borderRadius: "0.25rem" }}>
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80"
                  alt="Service truck on highway"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover img-duotone"
                  style={{ aspectRatio: "4/3" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in oklch, var(--clr-surface-1) 40%, transparent), transparent 60%)",
                  }}
                />
              </div>
            </Reveal>
            <Reveal animation="fade-up" delay={0.15} className="w-full lg:w-1/2">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-10 h-10"
                    style={{
                      background: "color-mix(in oklch, var(--clr-accent) 15%, transparent)",
                      border: "1px solid var(--clr-accent)",
                    }}
                  >
                    <Truck size={20} style={{ color: "var(--clr-accent)" }} />
                  </div>
                  <span className="badge-label">05</span>
                </div>
                <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
                  24/7 Mobile Breakdown Service
                </h2>
                <p className="type-body-lg" style={{ color: "var(--clr-accent)", fontWeight: 600 }}>
                  Wherever you are, we come to you.
                </p>
                <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
                  Our fully equipped service truck covers all of Algoma District — Sault Ste. Marie
                  to Wawa, Blind River to Elliot Lake. Highway-side, job site, quarry access road.
                  Doesn&apos;t matter where your rig stopped. We&apos;ll get there.
                </p>
                <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
                  The mobile truck carries diagnostic equipment, common repair parts, and the tools
                  to handle most roadside failures on-site. One call gets a technician moving.
                </p>
                <ul className="flex flex-col gap-2 mt-2">
                  {[
                    "Algoma District coverage — Sault to Wawa",
                    "Blind River and Elliot Lake included",
                    "Fully equipped diagnostic truck",
                    "Highway-side and job site response",
                    "24/7 — call anytime",
                  ].map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="mt-1 shrink-0"
                        style={{ color: "var(--clr-primary-light)" }}
                      />
                      <span className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="btn-profile inline-flex items-center gap-2"
                    style={{
                      background: "var(--clr-accent)",
                      borderColor: "var(--clr-accent)",
                      color: "var(--clr-surface-1)",
                    }}
                  >
                    <Phone size={16} />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="cross-brace-divider" />

      {/* CTA Footer Banner */}
      <section className="section-standard section-bg-gradient">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal animation="fade-up">
            <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
              Not sure which service you need?
            </h2>
            <p
              className="type-body-lg mt-4 max-w-2xl mx-auto"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Describe what your equipment is doing — or not doing — and we&apos;ll tell you what it
              needs. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn-profile inline-flex items-center gap-2">
                Contact Us
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
