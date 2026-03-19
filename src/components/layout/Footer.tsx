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
    <footer className={cx("border-t border-border/50 py-14", className)}>
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <p className="font-semibold tracking-tight text-primary">YORIGUM</p>
            <p className="mt-4 text-sm leading-relaxed text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-5">
              <Badge variant="outline">Mobile • Music</Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight text-primary">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm text-secondary">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight text-primary">
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
                  className="grid h-10 w-10 place-items-center rounded-md border border-border/50 bg-primary/5 text-secondary transition hover:border-border hover:bg-primary/10 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xs text-muted">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
}

