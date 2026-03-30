# Iron Horse Diesel Service — Quick Reference

## Identity
- **Business:** Iron Horse Diesel Service — diesel engine repair & heavy equipment
- **Location:** Sault Ste. Marie, Ontario | Algoma District service area
- **Archetype:** steel-frame-industrial-cool | Cool profile | Dark-dominant

## Fonts
- Heading: Barlow Condensed (700-800) | Body: Outfit (400-500)

## Colour Tokens (OKLCH)
| Token | Value |
|-------|-------|
| --clr-primary | oklch(50% 0.08 240) |
| --clr-primary-light | oklch(65% 0.08 240) |
| --clr-primary-muted | oklch(45% 0.04 240) |
| --clr-accent | oklch(68% 0.18 55) |
| --clr-accent-muted | oklch(55% 0.10 55) |
| --clr-surface-1 | oklch(14% 0.01 240) |
| --clr-surface-2 | oklch(19% 0.015 240) |
| --clr-surface-3 | oklch(26% 0.02 240) |
| --clr-surface-4 | oklch(33% 0.02 240) |
| --clr-text-primary | oklch(94% 0.008 240) |
| --clr-text-secondary | oklch(72% 0.02 240) |
| --clr-text-muted | oklch(52% 0.02 240) |

## Mandatory Classes
- Cards: `.card-featured`, `.card-standard`, `.card-compact`
- Buttons: `.btn-profile`, `.btn-profile-ghost`
- Type: `.type-hero`, `.type-section`, `.type-card`, `.type-body`, `.type-small`
- Badges: `.badge-label` | Dividers: `.divider-profile`

## Homepage Sections (Emergency-First)
1. Hero (with phone) → SectionFullBleed | blur-sharpen+parallax
2. Services → SectionBentoGrid | fade-up+cascade
3. Stats → SectionStatsBar | scale-up+counter+pop
4. Process → SectionZigzag | clip-reveal+cascade
5. Testimonials → SectionStackedCards | rotate-in+wave
6. CTA → SectionFullBleed | none

## Signature Moves
- torque-gauge-stats → Stats section (animated SVG gauge dials)
- rivet-dot-grid → Dark sections background pattern (archetype.css)
- cross-brace-dividers → Between sections (archetype.css)

## Key Paths
- Effects: `src/components/effects/` | Layouts: `src/components/layouts/`
- Config: `src/config/site.ts` | Palette: `src/lib/palette.ts`
- Icons: lucide-react (Wrench, Truck, Gauge, Shield, Phone, Clock)
