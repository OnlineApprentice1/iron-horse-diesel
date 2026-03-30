"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionStatsBar from "@/components/layouts/SectionStatsBar";

interface GaugeStatProps {
  value: string;
  label: string;
  progress: number; // 0–1 arc fill
  numericValue?: number; // if provided, animates count-up to this number
  suffix?: string;
}

function TorqueGauge({ value, label, progress, numericValue, suffix = "" }: GaugeStatProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const size = 160;
  const center = size / 2;
  const radius = 58;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  // Arc is 270 degrees (three-quarters of circle), starting from 135deg
  const arcLength = circumference * 0.75;
  const startAngle = 135; // degrees

  const [displayValue, setDisplayValue] = useState(numericValue ? "0" : value);
  const [dashOffset, setDashOffset] = useState(arcLength);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDashOffset(arcLength * (1 - progress));
      if (numericValue !== undefined) {
        setDisplayValue(numericValue.toLocaleString() + suffix);
      }
      return;
    }

    // Animate arc
    const controls = animate(0, progress, {
      duration: 1.2,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDashOffset(arcLength * (1 - latest));
      },
    });

    // Animate count-up
    if (numericValue !== undefined) {
      const countControls = animate(0, numericValue, {
        duration: 1.4,
        delay: 0.15,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest).toLocaleString() + suffix);
        },
      });
      return () => {
        controls.stop();
        countControls.stop();
      };
    }

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, progress, numericValue, suffix, arcLength]);

  // Needle angle: maps 0–1 progress to 135deg–405deg (270deg sweep)
  const needleAngle = startAngle + progress * 270;
  const needleRad = (needleAngle * Math.PI) / 180;
  const needleLen = radius - 10;
  const needleX = center + needleLen * Math.cos(needleRad);
  const needleY = center + needleLen * Math.sin(needleRad);

  const [currentNeedleAngle, setCurrentNeedleAngle] = useState(startAngle);
  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setCurrentNeedleAngle(startAngle + progress * 270);
      return;
    }
    const controls = animate(startAngle, startAngle + progress * 270, {
      duration: 1.2,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCurrentNeedleAngle(latest),
    });
    return () => controls.stop();
  }, [isInView, prefersReducedMotion, progress, startAngle]);

  const currentNeedleRad = (currentNeedleAngle * Math.PI) / 180;
  const currentNeedleX = center + needleLen * Math.cos(currentNeedleRad);
  const currentNeedleY = center + needleLen * Math.sin(currentNeedleRad);

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="w-32 h-32 lg:w-40 lg:h-40"
        aria-hidden="true"
      >
        {/* Background ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--clr-surface-3)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference - arcLength}`}
          strokeDashoffset={circumference * 0.25 * -1}
          strokeLinecap="round"
          transform={`rotate(${startAngle - 90} ${center} ${center})`}
        />
        {/* Progress arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--clr-accent)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength - dashOffset} ${circumference - (arcLength - dashOffset)}`}
          strokeDashoffset={circumference * 0.25 * -1}
          strokeLinecap="round"
          transform={`rotate(${startAngle - 90} ${center} ${center})`}
          style={{
            filter: "drop-shadow(0 0 6px color-mix(in oklch, var(--clr-accent) 60%, transparent))",
          }}
        />
        {/* Needle */}
        <line
          x1={center}
          y1={center}
          x2={currentNeedleX}
          y2={currentNeedleY}
          stroke="var(--clr-accent)"
          strokeWidth={2}
          strokeLinecap="round"
          opacity={0.8}
        />
        {/* Centre dot */}
        <circle cx={center} cy={center} r={4} fill="var(--clr-primary)" />
        {/* Value text */}
        <text
          x={center}
          y={center + 6}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--clr-text-primary)"
          fontFamily="var(--font-heading)"
          fontSize="22"
          fontWeight="700"
          letterSpacing="-0.5"
        >
          {numericValue !== undefined ? displayValue : value}
        </text>
      </svg>
      <p
        className="type-small text-center"
        style={{ color: "var(--clr-text-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section-bg-deep rivet-grid section-compact">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal animation="scale-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 place-items-center">
            <TorqueGauge
              value="30+"
              label="Years of Diesel Expertise"
              progress={0.88}
              numericValue={30}
              suffix="+"
            />
            <TorqueGauge
              value="5,000+"
              label="Engines Serviced"
              progress={1.0}
              numericValue={5000}
              suffix="+"
            />
            <TorqueGauge
              value="24/7"
              label="Emergency Response"
              progress={1.0}
            />
            <TorqueGauge
              value="100%"
              label="Diesel Focused"
              progress={1.0}
              numericValue={100}
              suffix="%"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
