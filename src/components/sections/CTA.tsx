import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button, Input } from "@/components/ui";
import { FiMail, FiSend } from "react-icons/fi";
import { motion } from "motion/react";

export interface CTAProps {
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function CTA({
  className,
  id = "cta",
  title = "Ready to build your next app or track? Let's collaborate!",
  subtitle,
  primaryCtaLabel = "Hire Me",
  primaryCtaHref = "#cta",
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
    <section id={id} className={cx("py-16 sm:py-24 bg-page/30", className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-gradient-to-br from-card via-card to-link/5 p-8 shadow-xl sm:p-14"
        >
          {/* Decorative Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-link"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full blur-3xl opacity-10 bg-purple-500"
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl leading-[1.1]">
                {title}
              </h2>
              <p className="mt-6 text-lg text-secondary leading-relaxed">
                {subtitle || "Available for high-scale Android projects and consulting. Let's turn your vision into a high-performance experience."}
              </p>

              <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg">
                <div className="flex-1 min-w-0">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="default"
                    leadingIcon={FiMail}
                    className="h-14 rounded-2xl bg-page/50 backdrop-blur-sm focus:border-link"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-link text-white font-bold hover:bg-link/90 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-link/20"
                >
                  <FiSend className="w-5 h-5" />
                  <span>Get in Touch</span>
                </button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end gap-4">
              <Button 
                href={primaryCtaHref} 
                variant="primary" 
                className="h-16 px-10 text-lg rounded-2xl shadow-xl shadow-link/20"
              >
                {primaryCtaLabel}
              </Button>
              <Button 
                href={secondaryCtaHref} 
                variant="outline" 
                className="h-16 px-10 text-lg rounded-2xl border-border bg-page/30 backdrop-blur-sm"
                target="_blank"
              >
                {secondaryCtaLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
