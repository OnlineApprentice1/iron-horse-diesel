import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Iron Horse Diesel Service — Diesel-Only Specialists Since 1995";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Steel blue-grey industrial palette — matches colour-tokens.css
// surface-1: oklch(14% 0.01 240) ≈ #16191f
// surface-2: oklch(19% 0.015 240) ≈ #1f232d
// primary:   oklch(50% 0.08 240)  ≈ #4a5878
// accent:    oklch(68% 0.18 55)   ≈ #e07b20

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          padding: "60px 64px",
          background: "linear-gradient(150deg, #1f232d 0%, #16191f 55%, #111418 100%)",
          color: "#eef0f4",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Safety orange accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "8px",
            background: "#e07b20",
          }}
        />

        {/* Subtle primary-blue glow — top right */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "60px",
            width: "420px",
            height: "420px",
            background: "radial-gradient(circle, rgba(74,88,120,0.28) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />

        {/* Diagonal rivet-grid texture suggestion */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)",
          }}
        />

        {/* Tagline label */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#e07b20",
            marginBottom: 20,
            position: "relative",
          }}
        >
          Diesel-Only Specialists Since 1995
        </div>

        {/* Business name */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            position: "relative",
            color: "#eef0f4",
          }}
        >
          Iron Horse Diesel Service
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 26,
            color: "#8a96b0",
            marginTop: 20,
            position: "relative",
          }}
        >
          Sault Ste. Marie, Ontario · Algoma District
        </div>

        {/* Bottom right: accent rule */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "64px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "#e07b20",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#4a5878",
            }}
          >
            ironhorsediesel.ca
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
