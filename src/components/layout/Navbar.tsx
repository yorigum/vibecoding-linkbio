"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

export interface NavbarLink {
  href: string;
  label: string;
}

export interface NavbarProps {
  className?: string;
  brand?: React.ReactNode;
  links?: NavbarLink[];
  ctaLabel?: string;
  ctaHref?: string;
  lang?: "en" | "id";
  onLangChange?: (lang: "en" | "id") => void;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Navbar({
  className,
  brand = <BrandLogo className="h-32 w-auto" />,
  links = [
    { href: "#portfolio", label: "Portfolio" },
    //    { href: "#featured", label: "Featured Media" },
    { href: "#services", label: "Services" },
  ],
  ctaLabel = "Hire Me",
  ctaHref = "#cta",
  lang = "en",
  onLangChange,
}: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const toggleLang = () => {
    const newLang = lang === "en" ? "id" : "en";
    
    // Normalize path for switching
    // handles /, /en, /id and subpaths
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "en" || segments[0] === "id") {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }
    
    router.push(`/${segments.join("/")}`);
    
    if (onLangChange) {
      onLangChange(newLang);
    }
  };

  return (
    <nav
      className={cx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-page/70 backdrop-blur-2xl backdrop-saturate-150"
          : "bg-transparent",
        className
      )}
    >
      <Container
        className={cx(
          "flex items-center justify-between relative transition-all duration-300",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        {/* Logo (Left) */}
        <div className="flex flex-1 items-center justify-start">
          <a
            href="#"
            className="font-bold tracking-tight text-xl text-primary transition focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            {brand}
          </a>
        </div>

        {/* Links (Center - Desktop) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-secondary transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA & Theme Toggle (Right - Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center justify-center rounded-full p-2 text-sm font-medium text-secondary transition hover:bg-hover hover:text-primary focus:outline-none"
            title="Toggle Language"
            aria-label="Toggle Language"
          >
            {lang === "en" ? "EN" : "ID"}
          </button>
          <ThemeToggle />
          <Button href={ctaHref} variant="primary" className="shadow-sm">
            {ctaLabel}
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center justify-center rounded-full p-2 text-sm font-medium text-secondary transition hover:bg-hover hover:text-primary focus:outline-none"
            aria-label="Toggle Language"
          >
            {lang === "en" ? "EN" : "ID"}
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md p-1 ml-2 text-secondary transition hover:bg-hover hover:text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Hamburger Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full border-b border-border bg-page/80 backdrop-blur-3xl backdrop-saturate-200 shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-lg font-medium text-secondary transition hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-5 border-t border-border/30">
                <Button
                  href={ctaHref}
                  variant="primary"
                  className="w-full justify-center text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {ctaLabel}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
