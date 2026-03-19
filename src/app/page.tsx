const ACCENT = "#00D4FF";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function focusRing() {
  return "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]";
}

function surfaceCard() {
  return "rounded-2xl border border-white/10 bg-[#111] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]";
}

function surfaceCardHover() {
  return "transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(0,212,255,0.18)]";
}

export default function Page() {
  return (
    <div className="min-h-dvh bg-[#0a0a0a] text-white">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-60"
          style={{
            background: `radial-gradient(circle at center, ${ACCENT}40, transparent 62%)`,
          }}
        />
        <div
          className="absolute bottom-[-240px] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-50"
          style={{
            background: `radial-gradient(circle at center, ${ACCENT}2E, transparent 60%)`,
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a
            href="#"
            className={cx(
              "font-semibold tracking-tight text-white/90 hover:text-white",
              "transition",
              focusRing()
            )}
          >
            Yohanes <span className="text-white/40">/</span>{" "}
            <span className="text-white/80">Yoriworks</span>
          </a>

          <div className="hidden items-center gap-6 sm:flex">
            {[
              { href: "#portfolio", label: "Portfolio" },
              { href: "#studio", label: "Studio" },
              { href: "#services", label: "Services" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cx(
                  "text-sm text-white/70 hover:text-white",
                  "transition",
                  focusRing()
                )}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#cta"
            className={cx(
              "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold",
              "bg-gradient-to-r from-[#00D4FF] to-[#2EE6FF] text-[#001018]",
              "shadow-[0_10px_30px_rgba(0,212,255,0.10)]",
              "transition hover:brightness-110 active:brightness-95",
              focusRing()
            )}
          >
            Hire Me
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#00D4FF]/90">
                Mobile Dev • Music Producer
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Code that Scales, <span className="text-[#00D4FF]">Sound</span>{" "}
                that Resonates
              </h1>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-white/70 sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Android
                Developer specializing in Kotlin &amp; Jetpack Compose with a
                passion for Music Production.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#portfolio"
                  className={cx(
                    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                    "bg-[#00D4FF] text-[#001018]",
                    "transition hover:brightness-110 active:brightness-95",
                    focusRing()
                  )}
                >
                  View Projects
                </a>
                <a
                  href="#studio"
                  className={cx(
                    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                    "border border-white/15 bg-white/5 text-white/90",
                    "transition hover:border-white/25 hover:bg-white/10 active:bg-white/5",
                    focusRing()
                  )}
                >
                  Listen to Tracks
                </a>
              </div>
            </div>

            <div className={cx("relative p-4", surfaceCard())}>
              <div className="aspect-[4/3] w-full rounded-xl bg-gray-800" />
              <p className="sr-only">Hero image placeholder</p>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl opacity-40 blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(0,212,255,0.25), rgba(0,212,255,0) 70%)",
                }}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="services" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <header className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Services built for speed &amp; taste
              </h2>
              <p className="mt-4 text-base text-white/65">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </header>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Mobile Mastery",
                  body: "Lorem ipsum dolor sit amet. Building high-performance Android apps.",
                },
                {
                  title: "Audio Craft",
                  body: "Lorem ipsum dolor sit amet. Professional music production & sample packs.",
                },
                {
                  title: "Creative Synergy",
                  body: "Lorem ipsum dolor sit amet. Solving problems with logic and art.",
                },
              ].map((c) => (
                <article
                  key={c.title}
                  className={cx(surfaceCard(), "p-7", surfaceCardHover())}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-gray-800" />
                    <h3 className="text-lg font-semibold tracking-tight">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-white/60">
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

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

        {/* CTA */}
        <section id="cta" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 shadow-[0_0_0_1px_rgba(0,212,255,0.12)] sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,212,255,0.30), rgba(0,212,255,0) 70%)",
                }}
              />

              <div className="grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Ready to build your next app or track? Let&apos;s
                    collaborate!
                  </h2>
                  <p className="mt-5 text-base text-white/65">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <a
                    href="#cta"
                    className={cx(
                      "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                      "bg-gradient-to-r from-[#00D4FF] to-[#2EE6FF] text-[#001018]",
                      "transition hover:brightness-110 active:brightness-95",
                      focusRing()
                    )}
                  >
                    Hire Me
                  </a>
                  <a
                    href="#"
                    className={cx(
                      "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                      "border border-white/15 bg-white/5 text-white/90",
                      "transition hover:border-white/25 hover:bg-white/10 active:bg-white/5",
                      focusRing()
                    )}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

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

      {/* Footer */}
      <footer className="border-t border-white/10 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3 md:items-start">
          <div>
            <p className="font-semibold tracking-tight">Yohanes / Yoriworks</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight text-white/90">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                { href: "#portfolio", label: "Portfolio" },
                { href: "#studio", label: "Studio" },
                { href: "#services", label: "Services" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={cx("hover:text-white transition", focusRing())}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight text-white/90">
              Social
            </p>
            <div className="mt-4 flex items-center gap-3">
              {[
                { label: "LinkedIn", text: "in" },
                { label: "GitHub", text: "gh" },
                { label: "Instagram", text: "ig" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className={cx(
                    "grid h-10 w-10 place-items-center rounded-md",
                    "border border-white/10 bg-white/5 text-xs font-semibold text-white/80",
                    "transition hover:border-white/20 hover:bg-white/10 hover:text-white",
                    focusRing()
                  )}
                >
                  {s.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
          <p className="text-xs text-white/40">Copyright © 2026</p>
        </div>
      </footer>
    </div>
  );
}

