# DESIGN.md — yorigum.xyz

Source of direction. Antislop filter applies on top. Taste skill: `design-taste-frontend`.

## Identity
Solo developer portfolio for hiring managers and tech clients. Apple-editorial minimal.
Reading this as: developer portfolio for hiring managers, with an Apple-editorial minimal language, leaning toward Tailwind v4 + Geist + restrained motion.

## Palette (locked, single accent)
- Base neutrals only: light `#f5f5f7`, dark off-black `#09090b` (never pure `#000000`).
- Card: white/zinc with hairline border, no page-wide glass.
- Accent (one hue): link/text `#0069d2` light / `#2997ff` dark; button bg `#0069d2` light / `#0071e3` dark. Split lightness is deliberate: every text and button pair passes WCAG AA 4.5 (verified: light secondary `#6e6e73` 4.7, light link 4.9, button white 5.3 light / 4.7 dark).
- Success/error only for form validation, never decoration.
- Banned as default: purple/blue gradients, radial orbs, neon glow, background grid.

## Typography
- Display: Geist Sans, `tracking-tighter leading-none`, `text-4xl md:text-6xl` max. No serif default.
- Body: `text-base leading-relaxed max-w-[65ch]`.
- Mono only for metrics/code (`Geist Mono`).
- No mixed-family emphasis inside headlines. Italic descenders get `leading-[1.1] + pb-1`.

## Shape (locked)
- Cards/containers: `rounded-2xl` (16px). Inputs: `rounded-xl`. All CTAs pill (`rounded-full`). Chips `rounded-xl`. No mixing.
- Shadows: one per page max on the primary CTA (the focus accent, reason documented). Never shadow on every card.

## Layout
- Container `max-w-6xl`. Hero split 50/50, fits initial viewport (`min-h-[100dvh]`, `pt-24` max).
- One layout family per section, max 2 image+text splits in a row. No bento unless content needs mixed sizes.
- Eyebrows: max 1 per 3 sections. No split-header (headline left + explainer right) as default.
- One CTA intent per page: `Hire Me` everywhere (`mailto:`). No `Get in Touch` + `Contact` + `Hire Me` trio.

## Motion
- Dials: `DESIGN_VARIANCE 6 / MOTION_INTENSITY 5 / VISUAL_DENSITY 4`.
- Hero keeps the single orchestrated entrance. All other sections: one flat reveal (`opacity + y:24`, `0.6s`, `once:true`), no stagger, no loops except loading spinner.
- `prefers-reduced-motion` collapses to static. Animate `transform/opacity` only. No `window scroll` listeners.

## Imagery
- Real photos only: profile, Pexels portfolio, Medium thumbnails. No div fake screenshots, no hand-rolled illustration walls.
- Icons: installed `react-icons` only (no new family). Standardize weight, domain-relevant glyphs.
