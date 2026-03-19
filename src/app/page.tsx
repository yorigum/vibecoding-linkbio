import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function surfaceCard() {
  return "rounded-2xl border border-white/10 bg-[#111] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]";
}

function surfaceCardHover() {
  return "transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(0,212,255,0.18)]";
}

function focusRing() {
  return "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]";
}

export default function Page() {
  return (
    <div className="min-h-dvh bg-[#0a0a0a] text-white">
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
        <Hero />
        <Features />

        {/* How it works */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How it works
              </h2>
              <p className="mt-4 text-base text-white/65">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </header>

            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Ideation",
                  body: "Lorem ipsum dolor sit amet. Analyzing user needs or musical vibes.",
                },
                {
                  title: "Development",
                  body: "Lorem ipsum dolor sit amet. Coding with Jetpack Compose or arranging in DAW.",
                },
                {
                  title: "Delivery",
                  body: "Lorem ipsum dolor sit amet. Deploying to Play Store or final audio mastering.",
                },
              ].map((s, idx) => (
                <li
                  key={s.title}
                  className={cx(surfaceCard(), "p-7", surfaceCardHover())}
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#00D4FF]/15 text-sm font-bold text-[#00D4FF] ring-1 ring-[#00D4FF]/25">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/60">
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Testimonials
              </h2>
              <p className="mt-4 text-base text-white/65">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </header>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Professional", name: "Lorem Ipsum" },
                { label: "Creative", name: "Lorem Ipsum" },
                { label: "Community", name: "Lorem Ipsum" },
              ].map((t) => (
                <figure
                  key={t.label}
                  className={cx(surfaceCard(), "p-7", surfaceCardHover())}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-full bg-gray-800" />
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-white/90">
                        {t.label}
                      </p>
                      <p className="text-xs text-white/55">{t.name}</p>
                    </div>
                  </div>
                  <blockquote className="mt-6 text-sm leading-relaxed text-white/70">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.”
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <CTA />

        {/* Portfolio */}
        <section id="portfolio" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Portfolio
              </h2>
              <p className="mt-4 text-base text-white/65">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </header>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <a
                  key={i}
                  href="#"
                  className={cx(surfaceCard(), "p-6", surfaceCardHover(), focusRing())}
                >
                  <div className="aspect-[16/10] w-full rounded-xl bg-gray-800" />
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold tracking-tight">
                        Project Title
                      </h3>
                      <p className="mt-2 text-sm text-white/60">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 text-[#00D4FF]/80 opacity-0 transition group-hover:opacity-100">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Studio */}
        <section id="studio" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Studio
              </h2>
              <p className="mt-4 text-base text-white/65">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </header>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                { title: "Track / Playlist", body: "Lorem ipsum dolor sit amet." },
                { title: "Sample Pack", body: "Lorem ipsum dolor sit amet." },
              ].map((x) => (
                <a
                  key={x.title}
                  href="#"
                  className={cx(surfaceCard(), "p-6", surfaceCardHover(), focusRing())}
                >
                  <div className="aspect-[16/9] w-full rounded-xl bg-gray-800" />
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">
                    {x.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{x.body}</p>
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

