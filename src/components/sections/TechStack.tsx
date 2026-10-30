"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "motion/react";
import {
  SiKotlin, SiJetpackcompose, SiGraphql, SiSqlite,
  SiFigma, SiJira, SiAndroidstudio
} from "react-icons/si";
import { LuLayoutTemplate, LuCpu, LuMonitor, LuLaptop, LuShieldCheck, LuLayers, LuWorkflow } from "react-icons/lu";

export interface TechStackProps {
  className?: string;
  id?: string;
}

export function TechStack({ className, id = "stack" }: TechStackProps) {
  const capabilities = [
    {
      category: "Mobile Foundation",
      headline: "Modern Android Core",
      description: "Production-tested Kotlin, declarative UI with Jetpack Compose, Coroutines, and reactive asynchronous state flows.",
      icon: <SiKotlin className="w-5 h-5 text-link" />,
      items: [
        { name: "Kotlin", detail: "Coroutines, Flow, DSLs" },
        { name: "Jetpack Compose", detail: "Custom Layouts, Canvas, M3" },
        { name: "Clean Architecture", detail: "Multi-module, Domain-driven" },
        { name: "Hilt & Koin", detail: "Modular Dependency Injection" },
      ],
    },
    {
      category: "Data & Systems",
      headline: "Persistence & APIs",
      description: "Robust offline-first persistence, real-time GraphQL synchronization, and enterprise REST client architectures.",
      icon: <LuLayers className="w-5 h-5 text-link" />,
      items: [
        { name: "Room / SQLite", detail: "Reactive DB & Migrations" },
        { name: "Apollo GraphQL", detail: "Normalized Cache & Mutations" },
        { name: "Retrofit & OkHttp", detail: "Auth Interceptors & Caching" },
        { name: "Firebase Suite", detail: "Cloud Messaging, Crashlytics" },
      ],
    },
    {
      category: "Engineering Workflow",
      headline: "Tooling & Hardware",
      description: "Iterative profiling, CI/CD automation, and high-performance hardware tuned for enterprise mobile builds.",
      icon: <LuWorkflow className="w-5 h-5 text-link" />,
      items: [
        { name: "Android Studio", detail: "Profiler, Layout Inspector" },
        { name: "Figma & Jira", detail: "Design systems & Agile sprints" },
        { name: "Legion 5 Pro", detail: "Ryzen 7 5800H, 32GB RAM" },
        { name: "ThinkPad Workstation", detail: "Linux & Enterprise testing" },
      ],
    },
  ];

  return (
    <section id={id} className={`py-16 sm:py-24 bg-page/50 ${className}`}>
      <Container>
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs font-semibold tracking-wider uppercase text-link mb-2">Technical Capabilities</p>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Tech Stack & Architectural Standards
          </h2>
          <p className="mt-4 text-base text-secondary leading-relaxed">
            Scalable Android architectures built with modern declarative toolchains and rigorous testing paradigms.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <motion.div
              key={cap.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative p-7 sm:p-8 rounded-2xl border border-border/50 bg-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-secondary tracking-wide uppercase">{cap.category}</span>
                  <div className="p-2.5 rounded-xl bg-primary/5">
                    {cap.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary tracking-tight">{cap.headline}</h3>
                <p className="text-sm text-secondary mt-2 leading-relaxed">{cap.description}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50 space-y-3">
                {cap.items.map((item) => (
                  <div key={item.name} className="flex items-baseline justify-between text-sm">
                    <span className="font-semibold text-primary">{item.name}</span>
                    <span className="text-xs text-secondary">{item.detail}</span>
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
