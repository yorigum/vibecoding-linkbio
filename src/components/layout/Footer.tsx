"use client";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaMediumM } from "react-icons/fa";

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
    //  { href: "#featured", label: "Featured Media" },
    { href: "#services", label: "Services" },
  ],
  copyright = "Copyright © 2026",
}: FooterProps) {
  return (
    <footer className={cx("border-t border-border/50 py-14", className)}>
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <BrandLogo className="h-28 w-auto" />
            <address className="mt-4 not-italic text-sm leading-relaxed text-secondary">
              I'm Yohanes Rizky Gumilir — an Android Developer specializing in Kotlin & Jetpack Compose, and a passionate Music Producer.
              <br />
              <span className="mt-2 block">Jakarta, Indonesia • yoriworks@gmail.com</span>
            </address>
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
                { label: "LinkedIn", Icon: FiLinkedin, href: "https://www.linkedin.com/in/yorigum/" },
                { label: "GitHub", Icon: FiGithub, href: "https://github.com/yorigum" },
                { label: "Instagram", Icon: FiInstagram, href: "https://www.instagram.com/yohanesrizky/" },
                { label: "Medium", Icon: FaMediumM, href: "https://medium.com/@yohanesrizky" },
              ].map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
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

