"use client";

import { Container } from "@/components/layout/Container";
import { Badge, Button } from "@/components/ui";
import { motion } from "motion/react";
import React from "react";

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroProps {
  className?: string;
  badge?: string;
  headline?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  stats?: HeroStat[];
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Hero({
  className,
  badge = "✨ Now in Beta",
  headline = "Code that Scales,\nSound that Resonates",
  subtitle = "I'm Yohanes Rizky Gumilir — a Senior Android Developer specializing in Kotlin & Jetpack Compose, and a passionate Music Producer.",
  primaryCtaLabel = "View Projects",
  primaryCtaHref = "#portfolio",
  secondaryCtaLabel = "Listen to Tracks",
  secondaryCtaHref = "#studio",
  stats = [],
}: HeroProps) {
  // We can format the headline to emphasize "Sound" using link colors, as before.
  const renderHeadline = (text: string) => {
    return text.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line.split("Sound").length > 1 ? (
          <>
            {line.split("Sound")[0]}
            <span className="text-link">Sound</span>
            {line.split("Sound")[1]}
          </>
        ) : (
          line
        )}
        {i < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section className={cx("relative overflow-hidden py-20 sm:py-32", className)}>
      {/* SaaS subtle grid pattern background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
      ></div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="flex max-w-3xl flex-col items-center"
        >
          {badge && (
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Badge variant="outline" className="mb-6 px-3 py-1 text-sm transition-transform hover:scale-105">
                {badge}
              </Badge>
            </motion.div>
          )}

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
            className="text-5xl font-extrabold leading-[1.15] tracking-tight text-primary sm:text-7xl"
          >
            {renderHeadline(headline)}
          </motion.h1>

          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
            className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary sm:text-xl"
          >
            {subtitle}
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
            className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4"
          >
            <Button href={primaryCtaHref} variant="primary" className="h-12 px-8 text-sm shadow-md transition-shadow hover:shadow-lg">
              {primaryCtaLabel}
            </Button>
            <Button href={secondaryCtaHref} variant="outline" className="h-12 px-8 text-sm">
              {secondaryCtaLabel}
            </Button>
          </motion.div>
          
          {stats && stats.length > 0 && (
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-16 sm:mt-24 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8 border-t border-border/50 pt-10"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="text-4xl font-bold tracking-tight text-primary">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-secondary">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
