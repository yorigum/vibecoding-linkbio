"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/cn";

export interface HeroProps {
  className?: string;
  headline?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  image?: string;
}

export function Hero({
  className,
  headline = "Scalable Architecture,\nMaintainable Mobile Apps",
  subtitle = "I'm Yohanes Rizky, an Android Developer specializing in Kotlin, Jetpack Compose, and enterprise-grade mobile architecture.",
  primaryCtaLabel = "See the tech stack",
  primaryCtaHref = "#services",
  secondaryCtaLabel = "See selected work",
  secondaryCtaHref = "#portfolio",
  image = "/media/profile_pict.jpeg",
}: HeroProps) {
  return (
    <section className={cn("relative overflow-hidden py-16 sm:py-24", className)}>
      <Container className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7"
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-6xl xl:text-7xl"
          >
            {headline.split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-xl text-base leading-relaxed text-secondary sm:text-lg lg:text-xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
          >
            <Button href={primaryCtaHref} variant="primary" className="h-12 px-8 text-sm">
              {primaryCtaLabel}
            </Button>
            <Button href={secondaryCtaHref} variant="outline" className="h-12 px-8 text-sm">
              {secondaryCtaLabel}
            </Button>
          </motion.div>
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 mx-auto w-full max-w-sm sm:max-w-md"
          >
            {/* Editorial Portrait Frame */}
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/50 bg-card">
              <Image
                src={image}
                alt="Yohanes Rizky Gumilir - Android Specialist"
                fill
                className="object-cover object-top filter grayscale contrast-105 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <p className="text-sm font-semibold tracking-tight">Yohanes Rizky Gumilir</p>
                <p className="text-xs text-white/80">Senior Android Developer & Sound Designer</p>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
