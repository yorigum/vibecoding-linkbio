"use client";

import { Container } from "@/components/layout/Container";
import { Badge, Button, Card } from "@/components/ui";
import { Headphones, Smartphone } from "lucide-react";

export interface HeroProps {
  className?: string;
  headline?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Hero({
  className,
  headline = "Code that Scales, Sound that Resonates",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Android Developer specializing in Kotlin & Jetpack Compose with a passion for Music Production.",
  primaryCtaLabel = "View Projects",
  primaryCtaHref = "#portfolio",
  secondaryCtaLabel = "Listen to Tracks",
  secondaryCtaHref = "#studio",
}: HeroProps) {
  return (
    <section className={cx("py-16 sm:py-24", className)}>
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" icon={Smartphone}>
                Mobile Dev
              </Badge>
              <Badge variant="outline" icon={Headphones}>
                Music Producer
              </Badge>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              {headline.split("Sound").length > 1 ? (
                <>
                  {headline.split("Sound")[0]}
                  <span className="text-[#00D4FF]">Sound</span>
                  {headline.split("Sound")[1]}
                </>
              ) : (
                headline
              )}
            </h1>

            <p className="mt-6 max-w-prose text-base leading-relaxed text-white/70 sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={primaryCtaHref} variant="primary">
                {primaryCtaLabel}
              </Button>
              <Button href={secondaryCtaHref} variant="outline">
                {secondaryCtaLabel}
              </Button>
            </div>
          </div>

          <Card className="p-4" variant="primary">
            <div className="aspect-[4/3] w-full rounded-xl bg-gray-800" />
            <p className="sr-only">Hero image placeholder</p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
