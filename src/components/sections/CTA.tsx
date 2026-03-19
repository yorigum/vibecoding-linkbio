"use client";

import { Container } from "@/components/layout/Container";
import { Button, Input } from "@/components/ui";
import { Mail } from "lucide-react";

export interface CTAProps {
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function CTA({
  className,
  id = "cta",
  title = "Ready to build your next app or track? Let's collaborate!",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  primaryCtaLabel = "Hire Me",
  primaryCtaHref = "#cta",
  secondaryCtaLabel = "Contact",
  secondaryCtaHref = "#",
}: CTAProps) {
  return (
    <section id={id} className={cx("py-16 sm:py-24", className)}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 shadow-[0_0_0_1px_rgba(0,212,255,0.12)] sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,212,255,0.30), rgba(0,212,255,0) 70%)",
            }}
          />

          <div className="grid gap-10 md:grid-cols-[1.35fr_0.65fr] md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-5 text-base text-white/65">{subtitle}</p>

              <div className="mt-7 max-w-md">
                <Input
                  placeholder="your@email.com"
                  variant="default"
                  leadingIcon={Mail}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button href={primaryCtaHref} variant="primary">
                {primaryCtaLabel}
              </Button>
              <Button href={secondaryCtaHref} variant="outline">
                {secondaryCtaLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
