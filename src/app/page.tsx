"use client";

import { useEffect, type ReactNode } from "react";

type LinkItem = {
  title: string;
  url: string;
  subtitle: string;
  icon: ReactNode;
  clicksLabel: string;
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 transition group-hover:ring-white/20"
    >
      {children}
    </span>
  );
}

function iconProps() {
  return {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-white/90",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

const LINKS: LinkItem[] = [
  {
    title: "Portfolio",
    url: "https://example.com",
    subtitle: "See my work",
    clicksLabel: "🔥 100+ clicks",
    icon: (
      <Icon>
        <svg {...iconProps()}>
          <path d="M3 7h18" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M6 7v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
          <path d="M10 12h4" />
          <path d="M10 16h4" />
        </svg>
      </Icon>
    ),
  },
  {
    title: "GitHub",
    url: "https://github.com/yourname",
    subtitle: "@yourname",
    clicksLabel: "🔥 100+ clicks",
    icon: (
      <Icon>
        <svg {...iconProps()}>
          <path d="M9 19c-4 1.5-4-2.5-5-3" />
          <path d="M14 22v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 17.6 7a4.4 4.4 0 0 0-.1-3S16.5 3.7 14 5.4a9.4 9.4 0 0 0-5 0C6.5 3.7 5.5 4 5.5 4s-.5 1.3-.1 3A4.7 4.7 0 0 0 4.2 10.6c0 4.7 2.9 5.7 5.6 6a2.8 2.8 0 0 0-.8 2.2V22" />
        </svg>
      </Icon>
    ),
  },
  {
    title: "Twitter",
    url: "https://twitter.com/yourname",
    subtitle: "@yourname",
    clicksLabel: "🔥 100+ clicks",
    icon: (
      <Icon>
        <svg {...iconProps()}>
          <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.7-2.2 7.7 7.7 0 0 1-2.5 1A3.9 3.9 0 0 0 12 8a11 11 0 0 1-8-4 3.9 3.9 0 0 0 1.2 5.2c-.6 0-1.2-.2-1.7-.5v.1A3.9 3.9 0 0 0 6.6 13c-.6.2-1.2.2-1.8.1a3.9 3.9 0 0 0 3.6 2.7A7.8 7.8 0 0 1 2 17.4 11 11 0 0 0 8.3 19c7.2 0 11.1-6.1 11.1-11.3v-.5c.8-.6 1.5-1.3 2-2.1Z" />
        </svg>
      </Icon>
    ),
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@yourname",
    subtitle: "Watch my videos",
    clicksLabel: "🔥 100+ clicks",
    icon: (
      <Icon>
        <svg {...iconProps()}>
          <path d="M10 15l5-3-5-3v6Z" />
          <rect x="3" y="7" width="18" height="10" rx="2" />
        </svg>
      </Icon>
    ),
  },
  {
    title: "Email",
    url: "mailto:you@example.com",
    subtitle: "you@example.com",
    clicksLabel: "🔥 100+ clicks",
    icon: (
      <Icon>
        <svg {...iconProps()}>
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </Icon>
    ),
  },
];

export default function Page() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-stagger]")
    );

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      for (const el of items) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }
      return;
    }

    for (const el of items) {
      const d = Number(el.dataset.stagger ?? "0");
      el.animate(
        [
          { opacity: 0, transform: "translateY(10px)" },
          { opacity: 1, transform: "translateY(0px)" },
        ],
        {
          duration: 720,
          delay: d * 90,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        }
      );
    }
  }, []);

  return (
    <main className="min-h-dvh text-white antialiased">
      {/* Subtle gradient background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-[#0a0a0a]"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 35%, rgba(7,7,7,1) 100%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-140px] h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(229,9,20,0.16), rgba(229,9,20,0) 62%)",
          }}
        />
        <div
          className="absolute bottom-[-170px] left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(229,9,20,0.10), rgba(229,9,20,0) 62%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            background:
              "radial-gradient(900px 500px at 20% 10%, rgba(255,255,255,0.06), rgba(255,255,255,0) 60%), radial-gradient(800px 520px at 80% 35%, rgba(255,255,255,0.04), rgba(255,255,255,0) 55%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[480px] px-6 pb-10 pt-10">
        {/* Profile */}
        <section
          data-stagger="0"
          style={{ opacity: 0, transform: "translateY(10px)" }}
          className="mb-8 flex flex-col items-center text-center"
        >
          <div className="relative mb-4">
            <div className="h-24 w-24 rounded-full bg-white/10 ring-1 ring-white/15" />
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full opacity-60 blur-xl"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(229,9,20,0.30), rgba(229,9,20,0) 65%)",
              }}
            />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight">Your Name</h1>
          <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-white/70">
            Vibe Coder ✨ | Building cool stuff with AI
          </p>

          <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>

        {/* Links */}
        <section className="space-y-3">
          {LINKS.map((item, idx) => (
            <a
              key={item.title}
              data-stagger={idx + 1}
              style={{ opacity: 0, transform: "translateY(10px)" }}
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noreferrer" : undefined}
              className={[
                "group block rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10 backdrop-blur",
                "transition-transform duration-200 ease-out will-change-transform",
                "hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-white/[0.06] hover:ring-white/20",
                "active:scale-[0.99] active:translate-y-[1px]",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]",
              ].join(" ")}
            >
              <div className="relative">
                {/* Hover glow */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 blur-xl transition-opacity duration-200 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(229,9,20,0.22), rgba(229,9,20,0) 70%)",
                  }}
                />
                <div className="relative flex items-center gap-4">
                  {item.icon}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="truncate text-base font-medium">
                        {item.title}
                      </p>
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-white/40 transition group-hover:text-white/70"
                      >
                        <svg {...iconProps()} width="18" height="18">
                          <path d="M7 17 17 7" />
                          <path d="M10 7h7v7" />
                        </svg>
                      </span>
                    </div>

                    <p className="mt-1 truncate text-sm text-white/60">
                      {item.subtitle} •{" "}
                      <span className="text-white/45">{item.url}</span>
                    </p>

                    {/* Analytics badge */}
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/65 ring-1 ring-white/10">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: "#E50914" }}
                        />
                        {item.clicksLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Footer */}
        <footer
          data-stagger={LINKS.length + 2}
          style={{ opacity: 0, transform: "translateY(10px)" }}
          className="mt-10 text-center text-xs text-white/50"
        >
          Made with 💚 and vibes
        </footer>
      </div>
    </main>
  );
}