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
    <section className={cn("relative overflow-hidden py-12 sm:py-20", className)}>
      <Container className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center text-center lg:text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col items-center lg:items-start"
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl font-extrabold leading-[1.15] tracking-tight text-primary sm:text-7xl lg:text-6xl xl:text-7xl"
          >
            {headline.split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-secondary sm:text-xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
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
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md group"
          >
            {/* Organic Blob Frame - Smaller footprint */}
            <div className="relative aspect-square w-full sm:w-[350px] lg:w-full mx-auto overflow-hidden border border-border bg-card rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] transition-[border-radius] duration-1000">

              {/* Background Image (Locked Black & White / Grayscale) - Fills the entire frame */}
              <div className="absolute inset-0 grayscale brightness-75 opacity-40 blur-[1px] scale-115 group-hover:scale-125 -translate-y-8 group-hover:-translate-y-12 transition-all duration-1000">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Main Profile Image - Fills the entire frame */}
              {/* Starts grayscale, turns color on hover */}
              <Image
                src={image}
                alt="Profile photo"
                fill
                className="relative z-10 object-cover object-top scale-115 -translate-y-8 grayscale group-hover:grayscale-0 group-hover:scale-120 group-hover:-translate-y-12 transition-all duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 400px"
                priority
              />
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
