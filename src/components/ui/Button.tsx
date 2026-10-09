"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "outline" | "ghost";

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-semibold " +
  "transition will-change-transform " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page " +
  "active:translate-y-px";

const variants: Record<ButtonVariant, string> = {
  // Shadow lives here only: the primary CTA is the page focus accent.
  primary:
    "bg-cta text-white shadow-sm " +
    "hover:shadow hover:-translate-y-0.5 active:scale-[0.98]",
  outline:
    "border border-border/50 bg-primary/5 text-primary " +
    "hover:border-border hover:bg-primary/10 active:bg-primary/5",
  ghost:
    "bg-transparent text-secondary " +
    "hover:bg-primary/10 hover:text-primary active:bg-primary/5",
};

export function Button({
  className,
  children,
  variant = "primary",
  href,
  onClick,
  target,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = /^https?:\/\//i.test(href) || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        target={isExternal ? target : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
