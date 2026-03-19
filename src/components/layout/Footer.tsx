"use client";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui";
import { Github, Instagram, Linkedin } from "lucide-react";

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterProps {
  className?: string;
  links?: FooterLink[];
  copyright?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Footer({
  className,
  links = [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#studio", label: "Studio" },
    { href: "#services", label: "Services" },
  ],
  copyright = "Copyright © 2026",
}: FooterProps) {
  return (
    <footer className={cx("border-t border-white/10 py-14", className)}>
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <p className="font-semibold tracking-tight">Yohanes / Yoriworks</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-5">
              <Badge variant="outline">Mobile • Music</Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight text-white/90">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
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
                { label: "LinkedIn", Icon: Linkedin },
                { label: "GitHub", Icon: Github },
                { label: "Instagram", Icon: Instagram },
              ].map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xs text-white/40">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
}

