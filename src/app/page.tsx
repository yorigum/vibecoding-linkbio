import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";

import pageData from "@/data/pageContent.json";
import { Analytics } from "@vercel/analytics/react"

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function surfaceCard() {
  return "rounded-2xl border border-border/50 bg-card shadow-sm";
}

function surfaceCardHover() {
  return "transition hover:-translate-y-0.5 hover:border-border hover:shadow-md";
}

function focusRing() {
  return "focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page";
}

export default function Page() {
  return (
    <div className="min-h-dvh bg-page text-primary transition-colors duration-300">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,212,255,0.25), transparent 62%)",
          }}
        />
        <div
          className="absolute bottom-[-240px] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,212,255,0.18), transparent 60%)",
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero {...pageData.hero} />
        <Features {...pageData.features as any} />

        {/* How it works */}
        <section className="py-16 sm:py-24">
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
              {pageData.howItWorks.steps.map((s, idx) => (
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

        {/* Testimonials */}
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
              {pageData.testimonials.items.map((t) => (
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

        <CTA {...pageData.cta} />

        {/* Portfolio */}
        <section id="portfolio" className="py-16 sm:py-24">
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
              {pageData.portfolio.projects.map((project, i) => (
                <a
                  key={i}
                  href={project.href}
                  className={cx(surfaceCard(), "p-6", surfaceCardHover(), focusRing())}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="aspect-[16/10] w-full rounded-xl object-cover bg-gray-800" />
                  ) : (
                    <div className="aspect-[16/10] w-full rounded-xl bg-gray-800" />
                  )}
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

            {/* Featured Media Embeds */}
            <div id="featured" className="mt-16 sm:mt-24 pt-16 border-t border-border/50">
              <header className="mb-8">
                <h3 className="text-2xl font-bold tracking-tight text-primary">
                  Featured Media
                </h3>
                <p className="mt-2 text-sm text-secondary">
                  Listen to my latest audio productions and sound designs on Spotify, or watch my latest video content.
                </p>
              </header>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Spotify Column */}
                <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm p-1">
                  <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px", border: 0 }}
                    src="https://open.spotify.com/embed/playlist/1oOWuY9puFTkLsHrMM5bw9?utm_source=generator"
                    width="100%"
                    height="352"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Playlist"
                  />
                </div>

                {/* YouTube Column */}
                <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm p-1 flex items-center justify-center">
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?list=PLgteS5SOEoTLHsYAwDlfvD6iGEmGAhsD5"
                    title="YouTube Playlist"
                    width="100%"
                    height="352"
                    style={{ borderRadius: "12px", border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen={true}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Studio */}
        <section id="studio" className="py-16 sm:py-24" hidden>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                {pageData.studio.title}
              </h2>
              <p className="mt-4 text-base text-secondary">
                {pageData.studio.subtitle}
              </p>
            </header>

            <div className="mt-12 grid gap-6 md:grid-cols-2" >
              {pageData.studio.items.map((x) => (
                <a
                  key={x.title}
                  href={x.href}
                  className={cx(surfaceCard(), "p-6", surfaceCardHover(), focusRing())}
                >
                  {x.image ? (
                    <img src={x.image} alt={x.title} className="aspect-[16/9] w-full rounded-xl object-cover bg-gray-800" />
                  ) : (
                    <div className="aspect-[16/9] w-full rounded-xl bg-gray-800" />
                  )}
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-primary">
                    {x.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary">{x.body}</p>
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
