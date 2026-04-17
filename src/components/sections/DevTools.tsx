"use client";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui";
import { FiPrinter, FiTerminal, FiTool } from "react-icons/fi";
import { motion } from "motion/react";

export interface DevToolItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface DevToolsProps {
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  tools?: DevToolItem[];
}

function iconFor(key: string) {
  switch (key) {
    case "printer":
      return FiPrinter;
    case "terminal":
      return FiTerminal;
    default:
      return FiTool;
  }
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function DevTools({
  className,
  id = "devtools",
  title = "Developer Tools",
  subtitle = "Tools I've built to speed up development.",
  tools = [],
}: DevToolsProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <section id={id} className={cx("py-12 sm:py-16 bg-page", className)}>
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
          {tools.map((tool) => {
            const Icon = iconFor(tool.icon);
            return (
              <motion.div key={tool.title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="h-full">
                <Card
                  variant="primary"
                  className="p-7 hover:-translate-y-0.5 transition h-full"
                  title={tool.title}
                  description={tool.description}
                  icon={Icon}
                  href={tool.href}
                >
                  <div className="mt-2 text-link/80 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100 flex items-center gap-1">
                    <span>Open Tool</span>
                    <span className="text-lg">→</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
