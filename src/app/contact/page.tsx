import type { Metadata } from "next";
import { Mail, MapPin, Clock, AlertTriangle, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionFullBleed from "@/components/layouts/SectionFullBleed";
import { siteConfig } from "@/config/site";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Iron Horse Diesel Service in Sault Ste. Marie. 24/7 emergency breakdown line, fleet maintenance inquiries, and engine repair bookings. Call (705) 555-0318.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <SectionFullBleed
        minHeight="min-h-[40vh]"
        contentPosition="center"
        className="section-bg-deep grain-overlay rivet-grid section-spacious"
        background={<div className="absolute inset-0 section-bg-deep" />}
      >
        <Reveal animation="blur-sharpen">
          <div className="text-center">
            <p className="badge-label mb-6">Reach Us</p>
            <h1 className="type-hero" style={{ color: "var(--clr-text-primary)" }}>
              Get in Touch
            </h1>
            <p
              className="type-hero-sub mt-4 max-w-2xl mx-auto"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Broken down or planning ahead — we&apos;re here.
            </p>
          </div>
        </Reveal>
      </SectionFullBleed>

      {/* Emergency Call Banner */}
      <section className="section-compact section-bg-deep">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="scale-up">
            <div className="accent-highlight-bg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <AlertTriangle
                  size={22}
                  className="shrink-0 mt-0.5"
                  style={{ color: "var(--clr-accent)" }}
                />
                <div>
                  <p
                    className="type-body"
                    style={{ color: "var(--clr-text-primary)", fontWeight: 700 }}
                  >
                    24/7 Emergency Breakdown
                  </p>
                  <p className="type-small" style={{ color: "var(--clr-text-secondary)" }}>
                    Algoma District — highway-side or job site response
                  </p>
                </div>
              </div>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="btn-profile whitespace-nowrap inline-flex items-center gap-2"
                style={{
                  background: "var(--clr-accent)",
                  borderColor: "var(--clr-accent)",
                  color: "var(--clr-surface-1)",
                  transition: "opacity 0.2s ease",
                }}
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Google Maps — full width */}
      <section className="section-compact section-bg-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal animation="fade-up">
            <div
              className="w-full overflow-hidden"
              style={{
                borderRadius: "0.25rem",
                border: "1px solid var(--clr-surface-3)",
                aspectRatio: "16 / 9",
              }}
            >
              <iframe
                src={siteConfig.location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Iron Horse Diesel Service location — Sault Ste. Marie, Ontario"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="cross-brace-divider" />

      {/* Form + Info */}
      <section className="section-standard section-bg-texture">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Contact Form — 2/3 width */}
            <Reveal animation="slide-left" className="w-full lg:w-2/3">
              <ContactForm />
            </Reveal>

            {/* Info Sidebar — 1/3 width */}
            <Reveal animation="slide-right" delay={0.1} className="w-full lg:w-1/3">
              <div className="flex flex-col gap-5">
                {/* Emergency Phone */}
                <div className="accent-highlight-bg">
                  <p
                    className="type-small mb-2"
                    style={{
                      color: "var(--clr-accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 700,
                    }}
                  >
                    24/7 Emergency
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="type-card accent-highlight block"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="type-small mt-1" style={{ color: "var(--clr-text-muted)" }}>
                    Breakdown response — Algoma District
                  </p>
                </div>

                {/* Divider */}
                <div className="divider-profile" />

                {/* Email */}
                <div className="card-compact">
                  <div className="flex items-start gap-3">
                    <Mail
                      size={18}
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--clr-primary-light)" }}
                    />
                    <div>
                      <p
                        className="type-small mb-1"
                        style={{
                          color: "var(--clr-text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="type-body"
                        style={{
                          color: "var(--clr-text-primary)",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="card-compact">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--clr-primary-light)" }}
                    />
                    <div>
                      <p
                        className="type-small mb-1"
                        style={{
                          color: "var(--clr-text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Address
                      </p>
                      <p className="type-body" style={{ color: "var(--clr-text-primary)" }}>
                        123 Industrial Road
                        <br />
                        Sault Ste. Marie, ON
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="card-standard">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock
                      size={18}
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--clr-primary-light)" }}
                    />
                    <p
                      className="type-small"
                      style={{
                        color: "var(--clr-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Hours
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pl-7">
                    {[
                      { day: "Mon – Fri", hours: "7:00 am – 6:00 pm" },
                      { day: "Saturday", hours: "8:00 am – 2:00 pm" },
                      { day: "Sunday", hours: "Closed" },
                    ].map(({ day, hours }) => (
                      <div key={day} className="flex justify-between gap-4">
                        <span className="type-small" style={{ color: "var(--clr-text-secondary)" }}>
                          {day}
                        </span>
                        <span
                          className="type-small"
                          style={{
                            color:
                              hours === "Closed"
                                ? "var(--clr-text-muted)"
                                : "var(--clr-text-primary)",
                            fontWeight: hours === "Closed" ? 400 : 600,
                          }}
                        >
                          {hours}
                        </span>
                      </div>
                    ))}
                    <div className="divider-profile" style={{ marginBlock: "0.5rem" }} />
                    <div className="flex justify-between gap-4">
                      <span className="type-small" style={{ color: "var(--clr-text-secondary)" }}>
                        Emergency
                      </span>
                      <span className="type-small accent-highlight">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
