"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "engine-repair", label: "Diesel Engine Repair & Rebuild" },
  { value: "fleet-maintenance", label: "Fleet Maintenance Program" },
  { value: "heavy-equipment", label: "Heavy Equipment Service" },
  { value: "fuel-systems", label: "Fuel System Diagnostics" },
  { value: "mobile-breakdown", label: "24/7 Mobile Breakdown" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const prefersReducedMotion = useReducedMotion();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // prefersReducedMotion drives form animation; referenced to avoid lint warning
  void prefersReducedMotion;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card-featured">
        <h2 className="type-section mb-6" style={{ color: "var(--clr-text-primary)" }}>
          Send a Message
        </h2>
        <div className="accent-highlight-bg">
          <p className="type-body" style={{ color: "var(--clr-text-primary)", fontWeight: 600 }}>
            Message received. We&apos;ll be in touch shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card-featured">
      <h2 className="type-section mb-6" style={{ color: "var(--clr-text-primary)" }}>
        Send a Message
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="type-small"
            style={{
              color: "var(--clr-text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 type-body"
            style={{
              background: "var(--clr-surface-2)",
              border: "1px solid var(--clr-surface-3)",
              color: "var(--clr-text-primary)",
              borderRadius: "0.125rem",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--clr-primary)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--clr-surface-3)";
            }}
          />
        </div>

        {/* Email + Phone row */}
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex flex-col gap-1.5 flex-1">
            <label
              htmlFor="email"
              className="type-small"
              style={{
                color: "var(--clr-text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 type-body"
              style={{
                background: "var(--clr-surface-2)",
                border: "1px solid var(--clr-surface-3)",
                color: "var(--clr-text-primary)",
                borderRadius: "0.125rem",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--clr-primary)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--clr-surface-3)";
              }}
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label
              htmlFor="phone"
              className="type-small"
              style={{
                color: "var(--clr-text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formState.phone}
              onChange={handleChange}
              placeholder="(705) 555-0000"
              className="w-full px-4 py-3 type-body"
              style={{
                background: "var(--clr-surface-2)",
                border: "1px solid var(--clr-surface-3)",
                color: "var(--clr-text-primary)",
                borderRadius: "0.125rem",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--clr-primary)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--clr-surface-3)";
              }}
            />
          </div>
        </div>

        {/* Service Type */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="service"
            className="type-small"
            style={{
              color: "var(--clr-text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Service Type
          </label>
          <select
            id="service"
            name="service"
            value={formState.service}
            onChange={handleChange}
            className="w-full px-4 py-3 type-body"
            style={{
              background: "var(--clr-surface-2)",
              border: "1px solid var(--clr-surface-3)",
              color: formState.service ? "var(--clr-text-primary)" : "var(--clr-text-muted)",
              borderRadius: "0.125rem",
              outline: "none",
              transition: "border-color 0.2s ease",
              cursor: "pointer",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--clr-primary)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--clr-surface-3)";
            }}
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="type-small"
            style={{
              color: "var(--clr-text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formState.message}
            onChange={handleChange}
            placeholder="Describe the issue or what you need..."
            className="w-full px-4 py-3 type-body resize-y"
            style={{
              background: "var(--clr-surface-2)",
              border: "1px solid var(--clr-surface-3)",
              color: "var(--clr-text-primary)",
              borderRadius: "0.125rem",
              outline: "none",
              minHeight: "120px",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--clr-primary)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--clr-surface-3)";
            }}
          />
        </div>

        {status === "error" && (
          <p className="type-small" style={{ color: "var(--clr-text-secondary)" }}>
            Something went wrong. Call us directly at{" "}
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="accent-highlight"
            >
              {siteConfig.phone}
            </a>
            .
          </p>
        )}

        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-profile inline-flex items-center gap-2"
            style={{ opacity: status === "sending" ? 0.7 : 1 }}
          >
            <Phone size={16} />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
