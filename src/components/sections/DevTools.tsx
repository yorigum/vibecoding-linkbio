"use client";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { FiPrinter, FiTerminal, FiTool } from "react-icons/fi";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

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

export function DevTools({
  className,
  id = "devtools",
  title = "Developer Tools",
  subtitle = "Tools I've built to speed up development.",
  tools = [],
}: DevToolsProps) {
  if (!tools || tools.length === 0) return null;

  return (
    <section id={id} className={cn("py-12 sm:py-16 bg-page", className)}>
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

        <div className="mt-12 grid gap-6 grid-cols-1 max-w-3xl">
          {tools.map((tool) => {
            const Icon = iconFor(tool.icon);
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <Card
                  className="p-7 h-full"
                  title={tool.title}
                  description={tool.description}
                  icon={Icon}
                  href={tool.href}
                >
                  <div className="mt-2 text-link text-sm font-medium">
                    Open Tool
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
