"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { FiCpu, FiLayers, FiShield, FiCheckCircle } from "react-icons/fi";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface FeaturesProps {
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  items?: FeatureItem[];
}

export function Features({
  className,
  id = "services",
  title = "Enterprise Engineering Principles",
  subtitle = "High-performance Android codebases structured for long-term maintainability.",
  items,
}: FeaturesProps) {
  const pillars = [
    {
      title: "Modular Clean Architecture",
      description: "Strict isolation between presentation, domain, and data layers to enable parallel feature development and 90%+ unit test coverage.",
      icon: <FiLayers className="w-5 h-5 text-link" />,
      highlights: ["MVI / MVVM Unidirectional Data Flow", "Zero cyclic dependencies", "Scalable multi-module Gradle setup"],
    },
    {
      title: "Declarative UI with Compose",
      description: "Adaptive, fluid user interfaces implemented with Jetpack Compose, state hoisting, and custom canvas animations.",
      icon: <FiCpu className="w-5 h-5 text-link" />,
      highlights: ["Adaptive multi-window layouts", "Zero jank rendering (60-120 FPS)", "Design system token synchronization"],
    },
    {
      title: "Resilient Offline-First Data",
      description: "Robust local-first synchronization using Room persistence, background worker sync, and token refresh interceptors.",
      icon: <FiShield className="w-5 h-5 text-link" />,
      highlights: ["Apollo GraphQL normalized caching", "EncryptedSharedPreferences security", "Automated retry backoff strategies"],
    },
  ];

  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <Container>
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs font-semibold tracking-wider uppercase text-link mb-2">Architecture Standards</p>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-secondary leading-relaxed">{subtitle}</p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl border border-border/50 bg-card p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-primary/5 w-fit mb-6 text-link">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50 space-y-2.5">
                {pillar.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-secondary">
                    <FiCheckCircle className="w-3.5 h-3.5 text-link shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
