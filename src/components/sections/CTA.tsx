"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FiMail, FiSend } from "react-icons/fi";
import { motion } from "motion/react";
import { cn } from "@/lib/cn";

export interface CTAProps {
  className?: string;
  id?: string;
  title: string;
  subtitle: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function CTA({
  className,
  id = "cta",
  title,
  subtitle,
  secondaryCtaLabel = "Connect LinkedIn",
  secondaryCtaHref = "https://linkedin.com/in/yorigum",
}: CTAProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Project Inquiry | Android Development");
    const body = encodeURIComponent(`Hi Yohanes,\n\nI'm reaching out from your portfolio. I'd like to discuss... \n\nBest regards,\n${email}`);
    window.location.href = `mailto:yoriworks@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id={id} className={cn("py-16 sm:py-24 bg-page/30", className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-card p-8 sm:p-14"
        >
          {/* Single accent wash */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl opacity-10 bg-link"
          />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl leading-[1.1]">
              {title}
            </h2>
            <p className="mt-6 text-lg text-secondary leading-relaxed">
              {subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="flex flex-1 min-w-0 items-center gap-2 rounded-xl border border-border/50 bg-card px-3 py-2 transition focus-within:border-link/70 focus-within:ring-2 focus-within:ring-link/60 focus-within:ring-offset-2 focus-within:ring-offset-page">
                <span className="text-secondary group-focus-within:text-link">
                  <FiMail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Your email"
                  className="h-10 flex-1 bg-transparent text-sm text-primary placeholder:text-secondary outline-none border-none min-w-0"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-cta text-white font-bold hover:bg-cta/90 active:scale-95 transition"
              >
                <FiSend className="h-5 w-5" />
                <span>Send inquiry</span>
              </button>
            </form>

            <Button
              href={secondaryCtaHref}
              variant="outline"
              className="mt-4 h-14 px-8 rounded-full"
              target="_blank"
            >
              {secondaryCtaLabel}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
