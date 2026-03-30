# Design Context — Iron Horse Diesel Service

## Archetype
- **Name:** steel-frame-industrial-cool
- **Colour family:** Cool
- **Profile:** profile-cool.css (sharp corners, thin borders, uppercase labels, geometric precision)
- **Visual identity:** Exposed structural steel framework — I-beams, cross-bracing, bolt plates. The skeleton of heavy machinery. Dark gunmetal surfaces with precision steel-blue highlights and safety orange pops.
- **This site should feel:** powerful, dependable, industrial
- **This site should NOT feel:** generic, soft, corporate

## Brand Token Overrides (from mood: powerful, dependable, industrial)
- **Animation base duration:** 0.4s (snappy — machinery is powerful, not lazy)
- **Stagger delay:** 0.06s (rapid cascade — things move with purpose)
- **Heading font-weight override:** 700-800 (heavy, condensed, commanding)
- **Preferred section density:** mixed (tight stats bars + spacious heroes for contrast)
- **Border treatment:** thick (2px+) or none — hard structural edges
- **Hover intensity:** dramatic (background fill, strong translateY, border colour change)
- **Layout tendency:** mixed (structural grid moments + asymmetric content)

## Expanded Colour Tokens

| Token | Value | Use For |
|-------|-------|---------|
| --clr-primary | oklch(50% 0.08 240) | Steel blue-grey: structural elements, borders |
| --clr-primary-light | oklch(65% 0.08 240) | Hover states, emphasis highlights |
| --clr-primary-muted | oklch(45% 0.04 240) | Subtle tints, inactive states |
| --clr-accent | oklch(68% 0.18 55) | Safety orange: CTAs, phone, key callouts |
| --clr-accent-muted | oklch(55% 0.10 55) | Orange-tinted backgrounds |
| --clr-surface-1 | oklch(14% 0.01 240) | Deepest background (gunmetal black) |
| --clr-surface-2 | oklch(19% 0.015 240) | Card backgrounds |
| --clr-surface-3 | oklch(26% 0.02 240) | Borders, elevated surfaces |
| --clr-surface-4 | oklch(33% 0.02 240) | Hover states, highest elevation |
| --clr-text-primary | oklch(94% 0.008 240) | Main body text (near-white) |
| --clr-text-secondary | oklch(72% 0.02 240) | Supporting text |
| --clr-text-muted | oklch(52% 0.02 240) | Labels, captions |

### Opacity Rules
- Gradient overlays on dark backgrounds: **minimum 0.15 opacity**
- Text on dark backgrounds: use `var(--clr-text-secondary)` minimum
- Subtle backgrounds: `bg-primary/10` to `bg-primary/20`
- Card borders: `border-base-300` or `border-accent/20`

### Hardcoded Colour Rules
- CSS keyframes: Use `color-mix(in oklch, var(--clr-primary) 40%, transparent)` — NOT raw OKLCH
- Inline JSX: Use `var(--clr-primary)` via CSS or `palette.ts` — NOT duplicated OKLCH
- OG images: Use values from `src/config/palette.ts`

## Typography
- **Heading:** `var(--font-heading)` — Barlow Condensed: heavy, industrial, condensed. Use weight 700-800.
- **Body:** `var(--font-body)` — Outfit: clean, modern, readable. Use weight 400-500.
- **Scale:** Use type classes from typography.css (type-hero, type-section, type-card, type-body, type-small)
- **DO NOT hardcode text-4xl, text-2xl, etc.**

## Signature Effects

### 1. Torque Gauge Stats
Custom SVG gauge dials for the stats section. Each stat renders as a circular gauge with animated needle sweep.
```tsx
// Stats section: animated gauge with SVG arc + needle
// Ring: stroke in var(--clr-surface-3), progress arc in var(--clr-accent)
// Needle: rotates from 0deg to target angle on scroll-into-view
// Number: counts up inside the gauge using framer-motion useInView
// Size: 120px diameter on mobile, 160px on desktop
```

### 2. Rivet Dot Grid
Already implemented in archetype.css as `.rivet-grid` class. Apply to dark sections.
```tsx
<section className="rivet-grid section-bg-deep">
  {/* rivet-grid ::after creates the dot pattern */}
</section>
```

### 3. Cross-Brace Dividers
Already implemented in archetype.css as `.cross-brace-divider`. Use between major sections.
```tsx
<div className="cross-brace-divider" />
```

## Layout Rules for This Build
- **Hero layout:** Full-bleed dark gunmetal with chassis-bar framing. Phone number in safety orange. Text left-aligned on desktop, centred on mobile.
- **Primary card pattern:** BentoGrid for services (varied card sizes — featured service gets 2-column span)
- **Container width variety:**
  - Hero, CTA: full-bleed via SectionFullBleed
  - Services: max-w-7xl (wide for bento grid)
  - Stats: max-w-5xl (narrower, focused)
  - Process: max-w-6xl (standard)
  - Testimonials: max-w-6xl (standard)
- **Section spacing:**
  - `section-spacious` for hero, CTA
  - `section-standard` for services, process, testimonials
  - `section-compact` for stats bar
- **Section dividers:** cross-brace-divider between services→stats and process→testimonials. No dividers elsewhere (whitespace only).
- **Section backgrounds:**
  - `section-bg-deep` for hero, stats, CTA
  - `section-bg-gradient` for services, testimonials
  - `section-bg-texture` for process (grid overlay fits technical process steps)

## Anti-Patterns for This Build
- Do NOT centre every heading — hero and stats can centre, but services and process should left-align
- Do NOT use symmetrical 3-column grids — use BentoGrid with varied cell sizes
- Do NOT use the same section-bg-* for every section — alternate between 3 backgrounds
- Do NOT make all sections the same density — mix spacious, standard, compact
- Do NOT use `text-base-content/50` for readable text — use `var(--clr-text-secondary)` minimum
- Do NOT use emoji icons — use Lucide React
- Do NOT use `.card-archetype` — use `.card-featured`, `.card-standard`, `.card-compact`
- Do NOT use flowery/soft language — this is a diesel shop. Direct, no-nonsense copy.
- Do NOT forget the 24/7 phone number prominence — it's the #1 differentiator

## What Already Exists (do not rebuild)
- `Reveal.tsx` — import from `@/components/Reveal`
- `StaggerGroup.tsx` — import from `@/components/StaggerGroup`
- `src/styles/profile.css` — cool profile (cards, badges, buttons, dividers, section backgrounds)
- `src/styles/typography.css` — fluid type scale + section density
- `src/styles/colour-tokens.css` — filled with this site's OKLCH values
- `src/styles/archetype.css` — grain-overlay, rivet-grid, cross-brace-divider, chassis-bar, accent-highlight
- `src/components/effects/` — WaveDivider, GradientSweep, RingBorder, TracePath, GlowCursor, ParticleField
- `src/components/layouts/` — SectionBentoGrid, SectionZigzag, SectionFullBleed, SectionStatsBar, SectionAsymmetricSplit, SectionEditorial, SectionOffsetGrid, SectionStackedCards
- `globals.css` — DaisyUI "ironhorse" theme configured
- `config/site.ts` — business info
