"use client";

import Link from "next/link";
import { Clock, Wrench, Truck, Shield, Gauge, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";
import SectionBentoGrid from "@/components/layouts/SectionBentoGrid";
import { motion, useReducedMotion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-bg-gradient section-standard">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal animation="fade-up">
          <div className="mb-10 lg:mb-14">
            <span className="badge-label mb-4 block">What We Do</span>
            <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
              Diesel Service, Done Right.
            </h2>
          </div>
        </Reveal>
      </div>

      <SectionBentoGrid columns={3} className="pt-0 pb-0">
        <StaggerGroup
          staggerDelay={0.06}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(180px,auto)]"
        >
          {/* Featured: 24/7 Mobile Breakdown — spans 2 cols on desktop */}
          <motion.div
            variants={prefersReducedMotion ? undefined : cardVariants}
            className="card-featured lg:col-span-2 flex flex-col gap-4"
          >
            <div className="flex items-start gap-4">
              <span
                className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0"
                style={{
                  background: "color-mix(in oklch, var(--clr-primary) 10%, transparent)",
                  border: "1px solid var(--clr-surface-3)",
                }}
              >
                <Clock size={22} style={{ color: "var(--clr-accent)" }} />
              </span>
              <h3 className="type-card" style={{ color: "var(--clr-text-primary)" }}>
                24/7 Mobile Breakdown
              </h3>
            </div>
            <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
              Fully equipped service truck. We come to your breakdown — highway-side or job site.
              Anywhere in Algoma District.
            </p>
            <Link
              href="/services#mobile-breakdown"
              className="inline-flex items-center gap-2 type-small"
              style={{
                color: "var(--clr-accent)",
                textDecoration: "none",
                fontWeight: 600,
                letterSpacing: "0.05em",
                transition: "color 0.25s ease",
              }}
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Standard: Diesel Engine Repair */}
          <motion.div
            variants={prefersReducedMotion ? undefined : cardVariants}
            className="card-standard flex flex-col gap-4"
          >
            <div className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{
                  background: "color-mix(in oklch, var(--clr-primary) 10%, transparent)",
                  border: "1px solid var(--clr-surface-3)",
                }}
              >
                <Wrench size={18} style={{ color: "var(--clr-primary-light)" }} />
              </span>
              <h3 className="type-card" style={{ color: "var(--clr-text-primary)" }}>
                Diesel Engine Repair &amp; Rebuild
              </h3>
            </div>
            <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
              Complete teardown, diagnosis, and rebuild. Cummins, Detroit Diesel, CAT, John Deere.
            </p>
            <Link
              href="/services#engine-repair"
              className="inline-flex items-center gap-2 type-small"
              style={{
                color: "var(--clr-primary-light)",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.25s ease",
              }}
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Standard: Fleet Maintenance */}
          <motion.div
            variants={prefersReducedMotion ? undefined : cardVariants}
            className="card-standard flex flex-col gap-4"
          >
            <div className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{
                  background: "color-mix(in oklch, var(--clr-primary) 10%, transparent)",
                  border: "1px solid var(--clr-surface-3)",
                }}
              >
                <Truck size={18} style={{ color: "var(--clr-primary-light)" }} />
              </span>
              <h3 className="type-card" style={{ color: "var(--clr-text-primary)" }}>
                Fleet Maintenance Programs
              </h3>
            </div>
            <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
              Scheduled maintenance contracts that keep your vehicles compliant and road-ready.
            </p>
            <Link
              href="/services#fleet"
              className="inline-flex items-center gap-2 type-small"
              style={{
                color: "var(--clr-primary-light)",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.25s ease",
              }}
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Standard: Heavy Equipment */}
          <motion.div
            variants={prefersReducedMotion ? undefined : cardVariants}
            className="card-standard flex flex-col gap-4"
          >
            <div className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{
                  background: "color-mix(in oklch, var(--clr-primary) 10%, transparent)",
                  border: "1px solid var(--clr-surface-3)",
                }}
              >
                <Shield size={18} style={{ color: "var(--clr-primary-light)" }} />
              </span>
              <h3 className="type-card" style={{ color: "var(--clr-text-primary)" }}>
                Heavy Equipment Service
              </h3>
            </div>
            <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
              Excavators, loaders, dozers — in-shop or on your job site.
            </p>
            <Link
              href="/services#heavy-equipment"
              className="inline-flex items-center gap-2 type-small"
              style={{
                color: "var(--clr-primary-light)",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.25s ease",
              }}
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Standard: Fuel System Diagnostics */}
          <motion.div
            variants={prefersReducedMotion ? undefined : cardVariants}
            className="card-standard flex flex-col gap-4"
          >
            <div className="flex items-start gap-3">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{
                  background: "color-mix(in oklch, var(--clr-primary) 10%, transparent)",
                  border: "1px solid var(--clr-surface-3)",
                }}
              >
                <Gauge size={18} style={{ color: "var(--clr-primary-light)" }} />
              </span>
              <h3 className="type-card" style={{ color: "var(--clr-text-primary)" }}>
                Fuel System Diagnostics
              </h3>
            </div>
            <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
              Computerised diagnostics, injector testing, fuel pump service, emissions compliance.
            </p>
            <Link
              href="/services#fuel-system"
              className="inline-flex items-center gap-2 type-small"
              style={{
                color: "var(--clr-primary-light)",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.25s ease",
              }}
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </motion.div>
        </StaggerGroup>
      </SectionBentoGrid>
    </section>
  );
}
