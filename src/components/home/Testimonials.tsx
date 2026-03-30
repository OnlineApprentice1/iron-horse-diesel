"use client";

import Reveal from "@/components/Reveal";
import SectionStackedCards from "@/components/layouts/SectionStackedCards";

const testimonials = [
  {
    quote:
      "Had a rig break down on the 17 outside Batchawana Bay. Iron Horse had a tech there in under two hours. They diagnosed a fuel injector issue, had the part, and got us rolling by morning. That kind of response saves us thousands in lost loads.",
    name: "Steve M.",
    role: "Fleet Manager, Algoma Transport",
  },
  {
    quote:
      "We switched our entire fleet maintenance program to Iron Horse three years ago. Haven't had a single unplanned breakdown since. Gary's team knows these engines inside and out.",
    name: "Denise K.",
    role: "Operations Director, Northern Equipment Rentals",
  },
  {
    quote:
      "Needed a full rebuild on a CAT C15. Other shops quoted eight weeks. Iron Horse had it done in three. The engine runs better than it did out of the factory.",
    name: "Paul T.",
    role: "Owner-Operator, Sault Ste. Marie",
  },
];

export default function Testimonials() {
  return (
    <section className="section-bg-gradient section-standard">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10 lg:mb-14">
        <Reveal animation="fade-up">
          <span className="badge-label mb-4 block">What They Say</span>
          <h2 className="type-section" style={{ color: "var(--clr-text-primary)" }}>
            Trusted by Fleets Across Algoma District.
          </h2>
        </Reveal>
      </div>

      {/* Mobile: 1 col | Tablet: 2 col | Desktop: 3 col grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 block md:hidden">
        <div className="flex flex-col gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} animation="rotate-in" delay={i * 0.1}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={i} animation="rotate-in" delay={i * 0.12}>
            <TestimonialCard testimonial={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="card-standard flex flex-col gap-4 h-full">
      {/* Large quotation mark */}
      <span
        aria-hidden="true"
        style={{
          fontSize: "4rem",
          lineHeight: 1,
          color: "color-mix(in oklch, var(--clr-accent) 22%, transparent)",
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          display: "block",
          marginBottom: "-0.5rem",
        }}
      >
        &ldquo;
      </span>
      <p className="type-body" style={{ color: "var(--clr-text-secondary)", flex: 1 }}>
        {testimonial.quote}
      </p>
      <div
        className="pt-4"
        style={{ borderTop: "1px solid var(--clr-surface-3)" }}
      >
        <p
          className="type-small"
          style={{ color: "var(--clr-text-primary)", fontWeight: 600 }}
        >
          {testimonial.name}
        </p>
        <p className="type-small" style={{ color: "var(--clr-text-muted)" }}>
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}
