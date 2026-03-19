"use client";

import { Button } from "@/components/ui";
import { Container } from "@/components/layout/Container";

export interface NavbarLink {
  href: string;
  label: string;
}

export interface NavbarProps {
  className?: string;
  brand?: string;
  links?: NavbarLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Navbar({
  className,
  brand = "Yohanes / Yoriworks",
  links = [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#studio", label: "Studio" },
    { href: "#services", label: "Services" },
  ],
  ctaLabel = "Hire Me",
  ctaHref = "#cta",
}: NavbarProps) {
  return (
    <nav
      className={cx(
        "sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur",
        className
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <a
          href="#"
          className="font-semibold tracking-tight text-white/90 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          {brand}
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Button href={ctaHref} variant="primary">
          {ctaLabel}
        </Button>
      </Container>
    </nav>
  );
}

