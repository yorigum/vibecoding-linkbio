"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { DevTools } from "@/components/sections/DevTools";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

import allPageData from "@/data/pageContent.json";
import { cn } from "@/lib/cn";

function surfaceCard() {
  return "rounded-2xl border border-border/50 bg-card";
}

function surfaceCardHover() {
  return "transition will-change-transform hover:-translate-y-0.5 hover:border-border";
}

function focusRing() {
  return "focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page";
}

export function InteractivePage({ initialLang = "en" }: { initialLang?: "en" | "id" }) {
  const [lang, setLang] = useState<"en" | "id">(initialLang);
  const [mediumArticles, setMediumArticles] = useState<{ title: string, body: string, href: string, image: string }[] | null>(null);
  const pageData = (allPageData as any)[lang];

  useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMedium() {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yohanesrizky&t=${Date.now()}`,
          { signal: controller.signal }
        );
        if (res.ok) {
          const data = await res.json();
          if (data?.status === "ok" && Array.isArray(data.items)) {
            const relevantKeywords = ["android", "development", "developer", "kotlin", "jetpack", "architecture", "mobile", "vibecoding", "coding", "senior", "vibe coding"];
            const filtered = data.items.filter((item: any) => {
              if (!item.categories || item.categories.length === 0) return true;
              return item.categories.some((cat: string) => relevantKeywords.includes(cat.toLowerCase()));
            });

            const finalItems = filtered.length > 0 ? filtered : data.items;
            const mapped = finalItems.map((item: any) => {
              const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
              const fallbackImg = "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg";
              return {
                title: item.title,
                body: item.description ? item.description.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').substring(0, 120) + '...' : '',
                href: item.link ? item.link.split('?')[0] : 'https://medium.com/@yohanesrizky',
                image: item.thumbnail || (imgMatch ? imgMatch[1] : fallbackImg)
              };
            });
            setMediumArticles(mapped);
          }
        }
      } catch {
        // Silently fall back to static articles in pageContent.json without tripping Next.js dev error overlay
      }
    }
    fetchMedium();
    return () => controller.abort();
  }, []);

  const activeArticles = (mediumArticles || pageData.studio.items).slice(0, 3);

  return (
    <div className="min-h-dvh flex flex-col text-primary transition-colors duration-300">
      <Navbar lang={lang} onLangChange={setLang} ctaLabel={pageData.hero.primaryCtaLabel} />
      <main id="main-content">
        <Hero {...pageData.hero} />
        <TechStack id="stack" />
        <Features {...pageData.features as any} />

        {/* Development Methodology (Clean sequence without 01/02/03 index bubbles) */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl mb-12">
              <p className="text-xs font-semibold tracking-wider uppercase text-link mb-2">Process & Delivery</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                {pageData.howItWorks.title}
              </h2>
              <p className="mt-4 text-base text-secondary leading-relaxed">
                {pageData.howItWorks.subtitle}
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-3">
              {pageData.howItWorks.steps.map((s: any) => (
                <div
                  key={s.title}
                  className={cn(surfaceCard(), "p-7 sm:p-8 flex flex-col justify-between", surfaceCardHover())}
                >
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-primary">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-secondary">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career & Experience Ledger (Clean executive rows, no vertical pipe lines) */}
        <article id="career" className="py-16 sm:py-24 bg-page/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl mb-12">
              <p className="text-xs font-semibold tracking-wider uppercase text-link mb-2">Track Record</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                {pageData.career.title}
              </h2>
              <p className="mt-4 text-base text-secondary leading-relaxed">
                {pageData.career.subtitle}
              </p>
            </header>

            <div className="space-y-6">
              {pageData.career.roles.map((role: any, idx: number) => (
                <div
                  key={idx}
                  className={cn(surfaceCard(), "p-6 sm:p-8", surfaceCardHover())}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-primary">
                        {role.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        <span className="font-semibold text-primary">{role.company}</span>
                        <span className="text-secondary">•</span>
                        <span className="text-sm text-secondary">{role.location}</span>
                      </div>
                    </div>
                    <span className="self-start text-xs font-medium text-link bg-primary/5 px-3 py-1.5 rounded-full border border-border/50">
                      {role.period}
                    </span>
                  </div>

                  {role.achievements.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <ul className="space-y-2.5 text-sm text-secondary list-none">
                        {role.achievements.map((ach: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-link" />
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

        <CTA {...pageData.cta} />

        {/* Selected Portfolio */}
        <article id="portfolio" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl mb-12">
              <p className="text-xs font-semibold tracking-wider uppercase text-link mb-2">Featured Projects</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                {pageData.portfolio.title}
              </h2>
              <p className="mt-4 text-base text-secondary leading-relaxed">
                {pageData.portfolio.subtitle}
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pageData.portfolio.projects.map((project: any, i: number) => (
                <a
                  key={i}
                  href={project.href}
                  className={cn(surfaceCard(), "p-6 group flex flex-col justify-between", surfaceCardHover(), focusRing())}
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-800">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="h-full w-full bg-primary/5" />
                      )}
                    </div>
                    <h3 className="mt-6 text-lg font-bold tracking-tight text-primary flex items-center justify-between">
                      <span>{project.title}</span>
                      <FiArrowUpRight className="w-4 h-4 text-secondary group-hover:text-link group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>
                    <p className="mt-2 text-sm text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </article>

        <DevTools {...pageData.devTools} />

        {/* Editorial Articles / Medium Studio */}
        <section id="studio" className="py-16 sm:py-24 bg-page/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 max-w-6xl mb-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wider uppercase text-link mb-2">Technical Writing</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                  {pageData.studio.title}
                </h2>
                <p className="mt-4 text-base text-secondary leading-relaxed">
                  {pageData.studio.subtitle}
                </p>
              </div>
              <a
                href="https://medium.com/@yohanesrizky"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm font-semibold text-link hover:underline"
              >
                <FiBookOpen className="w-4 h-4" />
                <span>{lang === "en" ? "View all articles" : "Lihat semua artikel"}</span>
                <FiArrowUpRight className="w-4 h-4" />
              </a>
            </header>

            <div className="grid gap-6 md:grid-cols-3">
              {activeArticles.map((x: any, idx: number) => (
                <a
                  key={x.title + idx}
                  href={x.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(surfaceCard(), "p-6 flex flex-col justify-between group", surfaceCardHover(), focusRing())}
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-800">
                      {x.image ? (
                        <Image
                          src={x.image}
                          alt={x.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 380px"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-full w-full bg-primary/5" />
                      )}
                    </div>
                    <h3 className="mt-6 text-base font-bold tracking-tight text-primary line-clamp-2">
                      {x.title}
                    </h3>
                    <p className="mt-2 text-sm text-secondary line-clamp-3 leading-relaxed">
                      {x.body}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-link font-medium">
                    <span>{lang === "en" ? "Read on Medium" : "Baca di Medium"}</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
