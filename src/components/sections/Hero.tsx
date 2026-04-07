"use client";

import Image from "next/image";
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
  image?: string;
  stats?: HeroStat[];
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Hero({
  className,
  badge = "⚠️ UNDER DEVELOPMENT",
  headline = "Code that Scales,\nSound that Resonates",
  subtitle = "I'm Yohanes Rizky Gumilir — an Android Developer specializing in Kotlin & Jetpack Compose, and a passionate Music Producer.",
  primaryCtaLabel = "View Projects",
  primaryCtaHref = "#portfolio",
  secondaryCtaLabel = "Listen to Tracks",
  secondaryCtaHref = "#studio",
  image = "/media/profile_front.png",
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
    <section className={cx("relative overflow-hidden py-12 sm:py-20", className)}>
      {/* SaaS subtle grid pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
      ></div>

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
          {badge && (
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Badge variant="outline" className="mb-6 px-3 py-1 text-sm transition-transform hover:scale-105">
                {badge}
              </Badge>
            </motion.div>
          )}

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl font-extrabold leading-[1.15] tracking-tight text-primary sm:text-7xl lg:text-6xl xl:text-7xl"
          >
            {renderHeadline(headline)}
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

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md group"
          >
            {/* Dynamic Rotating Blob Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-link/40 via-purple-500/30 to-blue-400/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] blur-3xl animate-[spin_10s_linear_infinite] opacity-40 -z-10 group-hover:opacity-60 transition-opacity" />

            {/* Organic Blob Frame - Smaller footprint */}
            <div className="relative aspect-square w-full sm:w-[350px] lg:w-full mx-auto overflow-hidden 
                            border-2 border-white/10 shadow-2xl backdrop-blur-[20px] bg-black/5
                            rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] 
                            animate-[blob_15s_ease-in-out_infinite]
                            group-hover:rounded-[40%_60%_70%_30%_/_40%_40%_60%_60%] transition-[border-radius] duration-1000">

              {/* Background Image (Locked Black & White / Grayscale) - Fills the entire frame */}
              <div className="absolute inset-0 grayscale brightness-75 opacity-40 blur-[1px] scale-115 group-hover:scale-125 -translate-y-8 group-hover:-translate-y-12 transition-all duration-1000">
                <Image
                  src="/media/profile.JPG"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Main Profile Image (profile_front.png) - Fills the entire frame */}
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

            {/* Floating Accents */}
            <div className="absolute -top-6 -right-6 h-20 w-20 bg-link/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -left-6 h-32 w-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
          </motion.div>
        )}
      </Container>
    </section>
  );
}
