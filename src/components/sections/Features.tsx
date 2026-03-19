"use client";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui";
import { AudioLines, Blend, Smartphone } from "lucide-react";
import { motion } from "motion/react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: "mobile" | "audio" | "synergy";
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
    case "mobile":
      return Smartphone;
    case "audio":
      return AudioLines;
    case "synergy":
      return Blend;
  }
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Features({
  className,
  id = "services",
  title = "Services built for speed & taste",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  items = [
    {
      title: "Mobile Mastery",
      description: "Building high-performance Android apps.",
      icon: "mobile",
    },
    {
      title: "Audio Craft",
      description: "Professional music production & sample packs.",
      icon: "audio",
    },
    {
      title: "Creative Synergy",
      description: "Solving problems with logic and art.",
      icon: "synergy",
    },
  ],
}: FeaturesProps) {
  return (
    <section id={id} className={cx("py-16 sm:py-24", className)}>
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => {
            const Icon = iconFor(item.icon);
            return (
              <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Card
                  variant="primary"
                  className="p-7 hover:-translate-y-0.5 transition"
                  title={item.title}
                  description={item.description}
                  icon={Icon}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
