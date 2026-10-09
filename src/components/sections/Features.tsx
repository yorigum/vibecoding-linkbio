"use client";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { FiCode, FiLayers, FiCloud } from "react-icons/fi";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

export interface FeatureItem {
  title: string;
  description: string;
  icon: "code" | "layers" | "cloud";
}

export interface FeaturesProps {
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  items?: FeatureItem[];
}

function iconFor(key: FeatureItem["icon"]) {
  switch (key) {
    case "code":
      return FiCode;
    case "layers":
      return FiLayers;
    case "cloud":
      return FiCloud;
    default:
      return FiCode;
  }
}

export function Features({
  className,
  id = "services",
  title = "Services built for speed",
  subtitle = "Clean, maintainable Android code that ships.",
  items = [
    {
      title: "Modern Android Stack",
      description: "Kotlin, Jetpack Compose, Coroutines and Flow for high-performance UI.",
      icon: "code",
    },
    {
      title: "Architecture",
      description: "MVVM/MVI and Clean Architecture that stays testable and modular.",
      icon: "layers",
    },
    {
      title: "Backend Integration",
      description: "Firebase, REST and GraphQL for real-time data driven apps.",
      icon: "cloud",
    },
  ],
}: FeaturesProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <Container>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-secondary">{subtitle}</p>
        </motion.header>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = iconFor(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  className="p-7 h-full"
                  title={item.title}
                  description={item.description}
                  icon={Icon}
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
