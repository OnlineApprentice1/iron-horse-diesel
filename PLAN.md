# Implementation Plan — Iron Horse Diesel Service

Build #11 | Archetype: steel-frame-industrial-cool | Emergency-First order

---

## Phase 4 — Structure

### Task 4.1: Header Component
- **File:** `src/components/Header.tsx`
- **Layout:** Fixed top nav. Logo (text-only, Barlow Condensed 700) left-aligned. Nav links (Services, About, Contact) centre-aligned. Phone number in safety orange with Phone icon right-aligned as CTA. Mobile: hamburger menu with slide-in panel.
- **Animation:** None — header is static. Subtle background opacity transition on scroll (transparent → surface-1 at 80px scroll).
- **Anti-pattern:** Do NOT use a centred logo with nav below. Do NOT hide the phone number on mobile.
- **Responsive:** Mobile: logo + hamburger only, phone in menu. Tablet+: full horizontal nav. Desktop: phone number always visible.
- **Acceptance:** Logo renders in heading font. Phone number is clickable tel: link. Background transitions on scroll. Mobile menu opens/closes. All links work.

### Task 4.2: Footer Component
- **File:** `src/components/Footer.tsx`
- **Layout:** 3-column grid on desktop (business info | quick links | hours + emergency). Bottom bar with copyright + privacy/terms links. Dark surface-1 background with surface-3 top border.
- **Animation:** None — footer is static.
- **Anti-pattern:** Do NOT use a massive multi-row footer. Keep it tight and functional. Do NOT centre everything — left-align columns.
- **Responsive:** Mobile: single column stack. Tablet: 2 columns. Desktop: 3 columns.
- **Acceptance:** All links work. Phone/email are clickable. Privacy + Terms linked. Hours displayed. "24/7 Emergency" callout in accent colour.

### Task 4.3: Reveal + Motion Setup
- **File:** `src/components/Reveal.tsx` (already exists — verify it works with our animation assignments)
- **Layout:** N/A — wrapper component.
- **Animation:** Configurable entrance types: blur-sharpen, fade-up, slide-left, slide-right, scale-up, clip-reveal, rotate-in. Spring physics: stiffness 100, damping 20. useReducedMotion support.
- **Anti-pattern:** Do NOT animate with CSS transitions — use Framer Motion only. Do NOT skip reduced motion check.
- **Responsive:** Same behaviour at all breakpoints.
- **Acceptance:** Each entrance type renders correctly. Reduced motion users see no animation. useInView triggers at 20% visibility.

---

## Phase 5 — Homepage

### Task 5.1: Hero Section (with Phone)
- **File:** `src/components/home/Hero.tsx`
- **Layout:** SectionFullBleed. Dark gunmetal (section-bg-deep). Chassis-bar top + bottom framing (8px structural bars). Content area: left-aligned on desktop with max-w-3xl. Badge-label "24/7 DIESEL SPECIALISTS" above heading. type-hero heading "Keep Your Fleet Moving." type-hero-sub subtitle. Phone number in large safety orange with Phone icon. Two CTAs: btn-profile "Get a Quote" + btn-profile-ghost "Our Services". Background: GradientSweep effect component for animated gradient-mesh overlay + grain-overlay.
- **Animation:** blur-sharpen+parallax — content blurs in and sharpens, background has subtle parallax depth.
- **Anti-pattern:** Do NOT centre text on desktop. Do NOT use a stock photo background. Do NOT hide the phone number below the fold.
- **Responsive:** Mobile: centred text, stacked CTAs, phone number prominent. Tablet: left-aligned, side-by-side CTAs. Desktop: left-aligned in left 60%, right 40% has decorative industrial illustration/shapes.
- **Acceptance:** Phone is clickable tel: link. Chassis bars render at 8px height. Blur-sharpen animation fires on load. Heading is type-hero class. Badge uses badge-label.

### Task 5.2: Services Section
- **File:** `src/components/home/Services.tsx`
- **Layout:** SectionBentoGrid with max-w-7xl. section-bg-gradient background. Badge-label "WHAT WE DO". type-section heading left-aligned. 5 service cards: mobile breakdown gets card-featured (spans 2 columns on desktop as the hero card), other 4 get card-standard in a 2x2 grid. Each card: Lucide icon (Wrench, Truck, Gauge, Shield, Clock), type-card heading, short description, "Learn more" link.
- **Animation:** fade-up+cascade — section fades up, cards cascade one by one (0.06s stagger).
- **Anti-pattern:** Do NOT use a symmetrical 3-column grid. Do NOT make all cards the same size. Mobile breakdown service MUST be visually prominent.
- **Responsive:** Mobile: single column stack, all cards full-width. Tablet: 2-column grid, featured card spans full width. Desktop: bento grid with featured card spanning 2 columns.
- **Acceptance:** 5 cards render. Featured card is visually distinct (larger, prominent). Icons render from lucide-react. Left-aligned heading. Cascade animation visible.

### Task 5.3: Stats Section
- **File:** `src/components/home/Stats.tsx`
- **Layout:** SectionStatsBar with max-w-5xl. section-bg-deep + rivet-grid background. section-compact density. 4 stats in a horizontal row: "30+" years, "5,000+" engines serviced, "24/7" availability, "100%" diesel focused. Each stat: torque gauge SVG (120px mobile, 160px desktop) with animated needle + count-up number inside.
- **Animation:** scale-up+counter+pop — gauges scale up, needles sweep to position, numbers count up with overshoot.
- **Anti-pattern:** Do NOT use plain text numbers. The gauge visual IS the signature move — it must render as actual SVG arcs with animated needles. Do NOT use identical styling for all stats.
- **Responsive:** Mobile: 2x2 grid. Tablet+: 4 in a row. Gauges scale proportionally.
- **Acceptance:** 4 gauge SVGs render with arc progress and needle. Numbers count up on scroll. Rivet-grid background visible. Safety orange accent on gauge arcs.

### Task 5.4: Process Section
- **File:** `src/components/home/Process.tsx`
- **Layout:** SectionZigzag with max-w-6xl. section-bg-texture background (grid pattern overlay). Badge-label "HOW IT WORKS". type-section heading. 4 steps alternating left/right: 1) Call Us or Request Online, 2) Diagnosis & Estimate, 3) Expert Repair, 4) Back on the Road. Each step: numbered circle (surface-3 bg, accent text), type-card heading, description paragraph. Steps connected by a vertical line on desktop.
- **Animation:** clip-reveal+cascade — each step wipes in sequentially (0.06s stagger between steps).
- **Anti-pattern:** Do NOT use a horizontal timeline. Do NOT make steps identical in layout — zigzag alternates sides. Do NOT forget the connecting line between steps.
- **Responsive:** Mobile: vertical stack, all left-aligned, connecting line on left edge. Tablet+: zigzag alternating left/right with connecting line in centre.
- **Acceptance:** 4 steps render in zigzag pattern. Connecting line visible. Step numbers in accent colour. Clip-reveal animation fires. Grid texture visible in background.

### Task 5.5: Testimonials Section
- **File:** `src/components/home/Testimonials.tsx`
- **Layout:** SectionStackedCards with max-w-6xl. section-bg-gradient background. Badge-label "WHAT THEY SAY". type-section heading. 3 testimonial cards in card-standard style. Each card: large quotation mark in accent/20, quote text in type-body, attribution in type-small with role context (e.g., "— Steve M., Fleet Manager, Algoma Transport").
- **Animation:** rotate-in+wave — cards rotate in with subtle tilt (-3deg to 0) and sinusoidal wave stagger.
- **Anti-pattern:** Do NOT use star ratings. Do NOT centre everything — left-align quote text. Do NOT use identical card backgrounds.
- **Responsive:** Mobile: single column stack. Tablet: 2 columns (third card full-width). Desktop: 3 columns.
- **Acceptance:** 3 testimonial cards render. Quotation marks visible in accent colour. Rotate-in animation fires. Attribution includes role context.

### Task 5.6: CTA Section
- **File:** `src/components/home/CTA.tsx`
- **Layout:** SectionFullBleed. section-bg-deep + grain-overlay. section-spacious density. Centred content: type-section heading "Your Diesel Engine Deserves a Specialist." type-body-lg supporting text. Phone number in large safety orange. btn-profile "Call Now" + btn-profile-ghost "Get a Free Estimate".
- **Animation:** none — intentional stillness. Let the message land.
- **Anti-pattern:** Do NOT add decorative elements that distract from the message. Do NOT use weak copy — be direct and confident.
- **Responsive:** Always centred at all breakpoints. CTAs stack on mobile, side-by-side on tablet+.
- **Acceptance:** Heading + phone render. Both CTAs work. Grain overlay visible. No animation on this section.

---

## Phase 6 — Inner Pages

### Task 6.1: Services Page
- **File:** `src/app/services/page.tsx`
- **Layout:** Zigzag layout. Hero banner at top (section-bg-deep, type-hero heading "Our Services"). Then 5 service blocks alternating image-left/text-right and text-left/image-right. Each block: Unsplash placeholder image, type-section heading, type-body description (2-3 paragraphs), bulleted feature list, btn-profile CTA. Emergency callout banner between services 4 and 5 with accent-highlight-bg styling.
- **Animation:** fade-up for each service block.
- **Anti-pattern:** Do NOT use a simple card grid. Each service gets a full zigzag section with real content. Do NOT use identical images.
- **Responsive:** Mobile: stacked (image above text). Tablet+: zigzag alternating sides.
- **Acceptance:** 5 services render in zigzag pattern. Each has image, heading, description, features, CTA. Emergency callout banner visible in accent.

### Task 6.2: About Page
- **File:** `src/app/about/page.tsx`
- **Layout:** Timeline-biography style. Hero banner (section-bg-deep, type-hero "About Iron Horse Diesel"). Owner introduction section (Gary Fillion photo placeholder + intro text). Timeline of business milestones (1995 founded → growth → current). Values section (3 values in card-standard: Diesel Expertise, Reliability, Community). Certifications/brands section (Cummins, Detroit Diesel, CAT, John Deere logos as text badges).
- **Animation:** fade-up for sections, slide-alternate for timeline entries.
- **Anti-pattern:** Do NOT make this a wall of text. Break it up with the timeline visual and value cards. Do NOT use the owner's name outside this page.
- **Responsive:** Mobile: single column. Tablet+: timeline has centred line with alternating entries.
- **Acceptance:** Timeline renders with at least 4 milestones. Values section has 3 cards. Certifications listed.

### Task 6.3: Contact Page
- **File:** `src/app/contact/page.tsx`
- **Layout:** Centred-form layout. Hero banner (section-bg-deep). Full-width Google Maps embed (16:9 aspect). Below: centred contact form (name, email, phone, service type dropdown, message, submit). Sidebar info cards: phone (with 24/7 emergency callout), email, address, hours. Form submits to API route.
- **Animation:** fade-up for form and info cards.
- **Anti-pattern:** Do NOT hide the map. Do NOT forget the emergency phone callout. Do NOT make the form too narrow on desktop.
- **Responsive:** Mobile: map → form → info stacked. Tablet+: map full-width, then form (2/3) + info sidebar (1/3).
- **Acceptance:** Map renders. Form has all fields. Phone is clickable. Emergency callout visible. Form has client-side validation.

### Task 6.4: Contact API Route
- **File:** `src/app/api/contact/route.ts`
- **Layout:** N/A — server-side API route.
- **Animation:** N/A.
- **Anti-pattern:** Do NOT expose API keys in client code. Use environment variables.
- **Responsive:** N/A.
- **Acceptance:** POST endpoint accepts form data. Returns 200 on success, 400 on validation failure. Resend integration placeholder ready.

---

## Phase 7 — SEO & Legal

### Task 7.1: Privacy Policy & Terms
- **Files:** `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`
- **Layout:** Simple prose layout with max-w-3xl centred. type-hero heading. Prose content styled with @tailwindcss/typography.
- **Animation:** None.
- **Anti-pattern:** Do NOT add decorative elements to legal pages.
- **Responsive:** Single column at all breakpoints.
- **Acceptance:** PIPEDA-compliant privacy policy. Business name substituted throughout. Links work from footer.

### Task 7.2: SEO Infrastructure
- **Files:** `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/opengraph-image.tsx`
- **Layout:** OG image: 1200x630, dark gunmetal background with business name in Barlow Condensed and tagline. Safety orange accent bar.
- **Animation:** N/A.
- **Anti-pattern:** Do NOT use placeholder text in OG image.
- **Responsive:** N/A.
- **Acceptance:** robots.txt allows all. Sitemap lists all pages. OG image renders with correct colours and fonts.

### Task 7.3: llms.txt
- **File:** `public/llms.txt`
- **Layout:** N/A — plain text file describing the business for LLM consumption.
- **Animation:** N/A.
- **Anti-pattern:** Do NOT use marketing language — factual description only.
- **Responsive:** N/A.
- **Acceptance:** File exists with business description, services, location, contact info.

---

## Anti-Sameness Self-Review

| Check | Status |
|-------|--------|
| Archetype differs from last 3 builds? | Yes — steel-frame-industrial-cool (vs glacier-glass, quarry-face, forge-glow) |
| Hero concept differs from last 2? | Yes — chassis-frame-viewport (vs angular-interlocking-blocks, spark-cascade-split) |
| Section order differs from last 3? | Yes — Emergency-First (vs Social-Proof, Portfolio-Led, Premium Showcase) |
| Signature moves unique? | Yes — torque-gauge, rivet-grid, cross-brace (none repeated) |
| Heading font differs from last 3? | Yes — Barlow Condensed (vs Plus Jakarta Sans, Oswald, Bebas Neue) |
| Colour family rotates? | Yes — Cool (vs Cool, Earth, Bold — but crystaledge was 3 builds ago) |
| Inner page layouts vary? | Yes — zigzag, timeline-biography, centred-form (vs recent builds) |
| Animation set differs? | Yes — unique combination per section |
