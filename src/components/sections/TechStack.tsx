import { useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { motion } from "motion/react";
import {
  SiKotlin, SiJetpackcompose, SiGraphql, SiSqlite, SiPostgresql,
  SiFigma, SiJira, SiAndroidstudio
} from "react-icons/si";
import { LuLayoutTemplate, LuCpu, LuMonitor, LuLaptop, LuShieldCheck } from "react-icons/lu";

export interface TechStackProps {
  className?: string;
  id?: string;
}

export function TechStack({ className, id = "stack" }: TechStackProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const categories = [
    {
      title: "Android Stack",
      subtitle: "Core technologies I use to build modern apps.",
      icon: <SiKotlin className="w-6 h-6 text-link" />,
      items: [
        { name: "Kotlin", icon: <SiKotlin /> },
        { name: "Compose", icon: <SiJetpackcompose /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "Room", icon: <SiSqlite /> },
        { name: "Hilt / Koin", icon: <LuShieldCheck /> },
        { name: "Clean Arch", icon: <LuCpu /> },
      ],
      className: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "Workflow",
      subtitle: "Tools for collaboration and design.",
      icon: <SiFigma className="w-6 h-6 text-purple-500" />,
      items: [
        { name: "Figma", icon: <SiFigma /> },
        { name: "Jira", icon: <SiJira /> },
        { name: "AS", icon: <SiAndroidstudio /> },
        { name: "VS Code", icon: <LuLayoutTemplate /> },
      ],
      className: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Workspace",
      subtitle: "Mechanical hardware for daily heavy lifting.",
      icon: <LuMonitor className="w-6 h-6 text-orange-500" />,
      items: [
        { name: "Legion 5", icon: <LuLaptop /> },
        { name: "Thinkpad", icon: <LuLaptop /> },
        { name: "Ryzen 7", icon: <LuCpu /> },
      ],
      className: "md:col-span-3 lg:col-span-3",
    }
  ];

  return (
    <section id={id} className={`py-16 sm:py-24 bg-page/50 ${className}`}>
      <Container>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Tech Stack & Gear
          </h2>
          <p className="mt-4 text-base text-secondary">
            The precise instruments and technologies I use to engineer premium mobile experiences.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-8 rounded-[2rem] border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 ${cat.className}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-primary">{cat.title}</h3>
                  <p className="text-sm text-secondary mt-1">{cat.subtitle}</p>
                </div>
                <div className="p-3 rounded-2xl bg-primary/5">
                  {cat.icon}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-border/50 text-sm font-medium text-primary hover:bg-link hover:text-white hover:border-link transition-colors cursor-default"
                  >
                    <span className="text-lg opacity-80">{item.icon}</span>
                    {item.name}
                  </div>
                ))}
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-link/0 via-link/40 to-link/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
