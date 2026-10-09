# Portfolio: Yohanes, Senior Android Developer and Music Producer

A personal portfolio website showcasing Android development and music production.

## About Me
**Yohanes** is a professional **Senior Android Developer** based in Jakarta, specializing in building large-scale mobile architectures with **Kotlin**, **Jetpack Compose**, and **Clean Architecture**. Beyond code, he is a passionate **Music Producer** and sound designer under the *yoriworks* brand.

*   **Mobile Dev:** Specialist in Modern Android Tech Stack (currently at Astra Graphia).
*   **Music Production:** Sample packs and professional audio scoring.
*   **Philosophy:** Scalable logic, resonant sound.

## Key Features
- **Hero Section:** Split editorial hero with real portrait, no grid/gradient decor.
- **Tech Stack:** Single-accent grid for Android stack, tools, workspace hardware.
- **Dynamic Medium Integration:** RSS feed with static fallback in `pageContent.json`.
- **Smart CTA:** Single-intent contact (email form + LinkedIn).
- **Multilingual Support:** English and Bahasa Indonesia (`/en`, `/id`).
- **DevTools proxy:** Single `/tools/:path*` rewrite to ZEScra.

## Requirements
- Node 20+, npm. No new UI deps without checking `package.json`.
- Design direction lives in `DESIGN.md`. Filter: antislop + taste (`6 / 5 / 4`).
- Ponytail: shortest diff, delete over add, reuse installed code.

## Tech Stack & Architecture
- **Framework:** Next.js 16 (App Router)
- **Engine:** TypeScript & Motion (`motion/react`) for restrained entry reveals
- **Styling:** Tailwind CSS v4 (Apple-editorial, single accent, see DESIGN.md)
- **Components:** UI, Layout, Sections (Server-first, isolated client leaves)
- **Icons:** React Icons (installed only, no new family)
- **Patterns:** Server data fetching, bilingual `/en /id` routes, RSS fallback

## Mobile Architecture Goals
This project mirrors the high standards of mobile app engineering:
1. **Clean Architecture:** Separation of concerns between UI, Logic, and Data.
2. **Performance:** Optimized image loading and layout shifts (Lighthouse focused).
3. **Responsive UI:** Adaptive layouts that feel like a native mobile app on handheld devices.

---

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

---
*Built with passion by Yohanes.*
