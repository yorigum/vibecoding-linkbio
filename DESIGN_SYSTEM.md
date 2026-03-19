# Design System

This document outlines the core design tokens, patterns, and principles used in the YORIGUM application. It serves as the single source of truth for UI maintainability and visual consistency.

## 1. Colors

We use Semantic CSS variables integrated directly with Tailwind CSS v4 variables to automatically adapt states between Dark and Light mode.

### Background Layers
| Semantic Token | Light Mode Value | Dark Mode Value | Usage |
| -------------- | ---------------- | --------------- |-------|
| `--bg-page`    | `#fafafa`        | `#050505`       | Main application background |
| `--bg-card`    | `#ffffff`        | `#111111`       | Cards, dropdowns, elevated surfaces (`bg-card`) |
| `--bg-hover`   | `#f0f0f0`        | `#1a1a1a`       | Interactive element hover states (`bg-hover`) |
| `--border-color` | `#e2e2e2`      | `#222222`       | Subtle borders (`border-border/50`) |

### Text Hierarchy
| Semantic Token | Light Mode Value | Dark Mode Value | Usage |
| -------------- | ---------------- | --------------- |-------|
| `--text-primary`| `#050505`       | `#fafafa`       | Headings, primary body text (`text-primary`) |
| `--text-secondary`| `#555555`     | `#888888`       | Subtitles, descriptions, muted content (`text-secondary`) |
| `--text-muted` | `#888888`        | `#555555`       | Placeholders, disabled text, footers (`text-muted`) |

### Accents
| Accent Context | Value | Tailwind Token | Usage |
| -------------- | ----- | --------- | ----- |
| **CTA (Brand)** | `#E50914` | `bg-cta` | Primary call to actions, vivid highlights |
| **Links / Info**| `#00D4FF` | `text-link` | Text links, focus rings, info badges |
| **Success**    | `#00cc66` | `text-success` | Success validation, active states |
| **Error**      | `#ff4444` | `text-error` | Error validation, destructive actions |

---

## 2. Typography Scale

We use **Geist Sans** (`var(--font-geist-sans)`) for standard UI elements and **Geist Mono** for specific technical metrics or code strings. Typography scales adhere natively to Tailwind CSS defaults but are stringently constrained to the following hierarchical semantics:

- **Display**: `text-5xl sm:text-7xl font-extrabold tracking-tight` -> Used exclusively in Hero sections.
- **H1 / Section Titles**: `text-3xl sm:text-4xl font-bold tracking-tight` -> Used for macro section headers (e.g., "Features", "Portfolio").
- **H2 / Card / Module Titles**: `text-base md:text-lg font-semibold tracking-tight` -> Used internally in grid blocks and cards.
- **Body Large**: `text-lg sm:text-xl leading-relaxed` -> Used for section descriptions underneath H1s.
- **Body Standard**: `text-sm leading-relaxed text-secondary` -> Default text formatting for descriptions.
- **Tiny / Meta**: `text-[10px] md:text-xs font-medium` -> Used for badges, footers, tooltips.

---

## 3. Spacing Scale

Our spacing scale maps to a functional **8pt/4pt soft grid** wrapped inside responsive Tailwind utilities:

- **Micro (4px - 8px)**: `gap-1`, `gap-2`, `p-2` -> Used inside button bounds and badge paddings.
- **Component (16px - 24px)**: `p-4`, `p-6`, `p-8`, `gap-4`, `gap-6` -> Applied to card padding layouts, internal feature grids.
- **Section (48px - 64px)**: `mt-12`, `py-16`, `gap-12` -> Gaps between structural sections on Mobile/Tablet screens.
- **Macro (80px - 128px)**: `py-24`, `py-32` -> The core vertical rhythm padding mapped to Desktop containers (`<section>`).

---

## 4. Component Patterns

### Buttons
Buttons manage `disabled` and `loading` states cleanly via strict utility mapping.
- **Primary**: `bg-cta text-white` (Solid background, attention-grabbing)
- **Secondary**: `bg-primary/10 text-primary ring-1 ring-primary/10` (Soft subtle outline)
- **Outline**: `border border-border/50 bg-primary/5 text-primary` 
- **Ghost**: Hover transitions without persistent borders (`hover:bg-primary/10`)
- **Focus Rings**: Standardized globally to `focus-visible:ring-2 focus-visible:ring-link/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page`.

### Surface / Cards
- **Base Surface**: `rounded-2xl border border-border/50 bg-card shadow-sm`
- **Interactions**: `transition will-change-transform hover:-translate-y-0.5 hover:border-border hover:shadow-md`

### Form Inputs
Standard inputs extract `outline-none border-none` from the generic HTML tag itself, and push standard borders onto a parent wrapper. This trick allows seamlessly rendering embedded prefix/suffix Lucide Icons inside the bounding box.

---

## 5. Animation Timing

Relying on both **CSS Transitions** and **Framer Motion** (`motion/react`) for nuanced micro-interactions and scroll reveals:

- **Hover Effects (CSS)**: Simple background color mappings utilize Tailwind's baseline `transition` (`150ms ease-in-out`) or `transition-colors duration-300` for broad mode toggles.
- **Entrance Staggers (Motion)**: Container variants pass `transition: { staggerChildren: 0.15 }` orchestrating sequential, satisfying waterfall reveals for feature blocks and text lines.
- **Fade + Slide Up (Motion)**: All baseline section headers use variants like `{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }`.
- **Easing**: Motion default spring configs generally suffice, or explicit `ease: "easeOut"` with `0.6s - 0.8s` duration bounds is preferred for massive modal inserts.
- **Scroll Triggers**: Section wrappers attach `whileInView="..."` with explicit `viewport={{ once: true }}` payload to avoid triggering animations aggressively in reverse scrolls.
