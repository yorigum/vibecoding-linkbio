"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";

import allPageData from "@/data/pageContent.json";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function surfaceCard() {
  return "rounded-[24px] border border-border bg-card backdrop-blur-3xl shadow-sm";
}

function surfaceCardHover() {
  return "transition hover:-translate-y-0.5 hover:border-border hover:shadow-md";
}

function focusRing() {
  return "focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page";
}

// ... focusRing() unchanged
export function InteractivePage({ initialLang = "en" }: { initialLang?: "en" | "id" }) {
  const [lang, setLang] = useState<"en" | "id">(initialLang);
  const [mediumArticles, setMediumArticles] = useState<{title: string, body: string, href: string, image: string}[] | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pageData = (allPageData as any)[lang];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const handleLoadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setVisibleCount((prev) => prev + 3);
  };

  const activeArticles = mediumArticles || pageData.studio.items;
  const showLoadMore = activeArticles.length > visibleCount;

  useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  useEffect(() => {
    async function fetchMedium() {
      try {
        const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yohanesrizky");
        if (res.ok) {
          const data = await res.json();
          if (data.status === "ok" && data.items) {
            const relevantKeywords = ["android", "development", "developer", "kotlin", "jetpack", "architecture", "mobile"];
            const filtered = data.items.filter((item: any) => {
              if (!item.categories || item.categories.length === 0) return true;
              return item.categories.some((cat: string) => relevantKeywords.includes(cat.toLowerCase()));
            });

            const finalItems = filtered.length > 0 ? filtered : data.items;

            const mapped = finalItems.map((item: any) => {
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              const fallbackImg = "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg";
              return {
                title: item.title,
                body: item.description.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').substring(0, 120) + '...',
                href: item.link.split('?')[0],
                image: item.thumbnail || (imgMatch ? imgMatch[1] : fallbackImg)
              };
            });
            setMediumArticles(mapped);
          }
        }
      } catch (err) {
        console.error("Medium fetch error", err);
      }
    }
    fetchMedium();
  }, []);

  return (
    <div className="min-h-dvh flex flex-col text-primary transition-colors duration-300">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-[10%] top-[-10%] h-[600px] w-[600px] rounded-full blur-[120px] opacity-50 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000"
          style={{ background: "radial-gradient(circle, rgba(0,113,227,0.4), transparent 70%)" }}
        />
        <div
          className="absolute right-[-5%] top-[20%] h-[700px] w-[700px] rounded-full blur-[140px] opacity-40 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000"
          style={{ background: "radial-gradient(circle, rgba(162,50,200,0.3), transparent 60%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[30%] h-[600px] w-[600px] rounded-full blur-[120px] opacity-40 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-1000"
          style={{ background: "radial-gradient(circle, rgba(52,199,89,0.25), transparent 70%)" }}
        />
      </div>

      <Navbar lang={lang} onLangChange={setLang} ctaLabel={pageData.hero.primaryCtaLabel} />
      <main id="main-content">
        <Hero {...pageData.hero} badge={undefined} stats={undefined} />
        <Features {...pageData.features as any} />

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                {pageData.howItWorks.title}
              </h2>
              <p className="mt-4 text-base text-secondary">
                {pageData.howItWorks.subtitle}
              </p>
            </header>

            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {pageData.howItWorks.steps.map((s: any, idx: number) => (
                <li
                  key={s.title}
                  className={cx(surfaceCard(), "p-7", surfaceCardHover())}
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-sm font-bold text-link ring-1 ring-link/25">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-primary">
                        {s.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-secondary">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/*
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                {pageData.testimonials.title}
              </h2>
              <p className="mt-4 text-base text-secondary">
                {pageData.testimonials.subtitle}
              </p>
            </header>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pageData.testimonials.items.map((t: any) => (
                <figure
                  key={t.label}
                  className={cx(surfaceCard(), "p-7", surfaceCardHover())}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full bg-border" />
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-primary">
                        {t.label}
                      </p>
                      <p className="text-xs text-secondary">{t.name}</p>
                    </div>
                  </div>
                  <blockquote className="mt-6 text-sm leading-relaxed text-secondary">
                    “{t.quote}”
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>
        */}

        <article id="career" className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                {pageData.career.title}
              </h2>
              <p className="mt-4 text-base text-secondary">
                {pageData.career.subtitle}
              </p>
            </header>

            <div className="relative border-l-2 border-border/50 ml-4 md:ml-6 space-y-10">
              {pageData.career.roles.map((role: any, idx: number) => (
                <div key={idx} className="relative pl-8 md:pl-12 group">
                  <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-border transition-colors duration-300 group-hover:bg-link ring-4 ring-background" />
                  <div className={cx(surfaceCard(), "p-6 sm:p-8", surfaceCardHover())}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-primary group-hover:text-link transition-colors">
                          {role.role}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1.5">
                          <p className="font-semibold text-primary/80">{role.company}</p>
                          <span className="hidden sm:inline text-border/80">•</span>
                          <p className="text-sm text-secondary">{role.location}</p>
                        </div>
                      </div>
                      <time className="shrink-0 text-xs font-semibold text-link bg-link/10 px-3 py-1.5 rounded-full border border-link/20">
                        {role.period}
                      </time>
                    </div>
                    {role.achievements.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <ul className="space-y-3 text-sm text-secondary list-none">
                          {role.achievements.map((ach: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-link/60" />
                              <span className="leading-relaxed">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <CTA {...pageData.cta} />

        <article id="portfolio" className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                {pageData.portfolio.title}
              </h2>
              <p className="mt-4 text-base text-secondary">
                {pageData.portfolio.subtitle}
              </p>
            </header>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pageData.portfolio.projects.map((project: any, i: number) => (
                <a
                  key={i}
                  href={project.href}
                  className={cx(surfaceCard(), "p-6", surfaceCardHover(), focusRing())}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-gray-800">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold tracking-tight text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-secondary">
                        {project.description}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 text-link/80 opacity-0 transition group-hover:opacity-100">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </article>

        <section id="studio" className="py-12 sm:py-16" >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 max-w-6xl">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                  {pageData.studio.title}
                </h2>
                <p className="mt-4 text-base text-secondary">
                  {pageData.studio.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border/50 bg-card text-secondary transition hover:border-border hover:bg-hover hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60"
                  aria-label="Scroll left"
                >
                  <FiChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border/50 bg-card text-secondary transition hover:border-border hover:bg-hover hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60"
                  aria-label="Scroll right"
                >
                  <FiChevronRight className="h-5 w-5" />
                </button>
              </div>
            </header>

            <div 
              ref={scrollRef}
              className="mt-12 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']" 
            >
              {activeArticles.slice(0, visibleCount).map((x: any, idx: number) => (
                <a
                  key={x.title + idx}
                  href={x.href}
                  target="_blank"
                  className={cx(surfaceCard(), "p-6 shrink-0 w-[85vw] sm:w-[400px] flex flex-col snap-start", surfaceCardHover(), focusRing())}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-gray-800">
                    {x.image ? (
                      <Image
                        src={x.image}
                        alt={x.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 85vw, 400px"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-primary">
                    {x.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary flex-1">{x.body}</p>
                </a>
              ))}

              {showLoadMore ? (
                <button
                  onClick={handleLoadMore}
                  className={cx(surfaceCard(), "p-6 shrink-0 w-[85vw] sm:w-[300px] flex flex-col items-center justify-center snap-start group cursor-pointer text-left outline-none", surfaceCardHover(), focusRing())}
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-light mb-1">+</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-primary text-center">
                    {lang === "en" ? "Load More" : "Muat Lebih Banyak"}
                  </h3>
                </button>
              ) : (
                <a
                  href="https://medium.com/@yohanesrizky"
                  target="_blank"
                  className={cx(surfaceCard(), "p-6 shrink-0 w-[85vw] sm:w-[300px] flex flex-col items-center justify-center snap-start group outline-none", surfaceCardHover(), focusRing())}
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">→</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-primary text-center">
                    {lang === "en" ? "Read More on Medium" : "Baca Selengkapnya di Medium"}
                  </h3>
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
