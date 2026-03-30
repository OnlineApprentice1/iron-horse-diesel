"use client";

import Image from "next/image";
import { Phone, ClipboardCheck, Wrench, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionZigzag from "@/components/layouts/SectionZigzag";

const steps = [
  {
    number: "01",
    icon: Phone,
    heading: "Call Us or Request Online",
    body: "Day or night, reach us at (705) 555-0318 or fill out our online form. We'll get back to you within the hour.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop&q=80",
    imageAlt: "Diesel service tools on workbench",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    heading: "Diagnosis &amp; Estimate",
    body: "Our technicians run full diagnostics. You get a clear, honest estimate before any work begins.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80",
    imageAlt: "Technician reviewing diagnostic report",
  },
  {
    number: "03",
    icon: Wrench,
    heading: "Expert Repair",
    body: "Factory-trained mechanics with 30+ years of diesel experience. OEM and quality aftermarket parts.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop&q=80",
    imageAlt: "Mechanic repairing diesel engine",
  },
  {
    number: "04",
    icon: Truck,
    heading: "Back on the Road",
    body: "We work fast because we know downtime costs money. Your rig, your equipment — back in service.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
    imageAlt: "Diesel truck back on the road",
  },
];

export default function Process() {
  const zigzagItems = steps.map((step, i) => ({
    content: (
      <Reveal animation="clip-reveal" delay={i * 0.1}>
        <div className="flex flex-col gap-5 py-4">
          <div className="flex items-center gap-4">
            <span
              className="flex items-center justify-center w-14 h-14 rounded-full shrink-0"
              style={{
                background: "var(--clr-surface-3)",
                border: "2px solid var(--clr-surface-4)",
              }}
            >
              <span
                className="type-card"
                style={{
                  color: "var(--clr-accent)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                }}
              >
                {step.number}
              </span>
            </span>
            <span
              className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
              style={{
                background: "color-mix(in oklch, var(--clr-accent) 10%, transparent)",
                border: "1px solid color-mix(in oklch, var(--clr-accent) 25%, transparent)",
              }}
            >
              <step.icon size={18} style={{ color: "var(--clr-accent)" }} />
            </span>
          </div>
          <h3
            className="type-card"
            style={{ color: "var(--clr-text-primary)" }}
            dangerouslySetInnerHTML={{ __html: step.heading }}
          />
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            {step.body}
          </p>
          <div
            className="h-px w-16"
            style={{ background: "var(--clr-accent)", opacity: 0.5 }}
          />
        </div>
      </Reveal>
    ),
    visual: (
      <Reveal animation="clip-reveal" delay={i * 0.1 + 0.06}>
        <div
          className="relative w-full overflow-hidden rounded-sm img-elevated"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover img-duotone"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklch, var(--clr-primary-muted) 25%, transparent) 0%, transparent 60%)",
            }}
          />
        </div>
      </Reveal>
    ),
  }));

  return (
    <section className="section-bg-texture section-standard relative">
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10 lg:mb-14">
          <Reveal animation="fade-up">
            <span className="badge-label mb-4 block">How It Works</span>
            <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
              From Breakdown to Back on the Road.
            </h2>
          </Reveal>
        </div>
        <SectionZigzag items={zigzagItems} gap="standard" className="pt-0" />
      </div>
    </section>
  );
}
