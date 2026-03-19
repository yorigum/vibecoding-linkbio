"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type CardVariant = "primary" | "secondary" | "outline";

export interface CardProps {
  className?: string;
  title?: string;
  description?: string;
  icon?: LucideIcon;
  children?: ReactNode;
  variant?: CardVariant;
  href?: string;
  disabled?: boolean;
}

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

const baseClasses =
  "group relative flex flex-col rounded-2xl p-6 text-sm " +
  "transition will-change-transform " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/60 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] " +
  "hover:-translate-y-0.5 active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<CardVariant, string> = {
  primary:
    "bg-[#111] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] " +
    "hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(0,212,255,0.18)]",
  secondary:
    "bg-[#0c0c0c] border border-white/5 text-white/90 " +
    "hover:border-white/15 hover:bg-[#121212]",
  outline:
    "bg-transparent border border-white/20 text-white/90 " +
    "hover:border-white/35 hover:bg-white/[0.03]",
};

const titleClasses = "text-base font-semibold tracking-tight text-white";
const descriptionClasses = "mt-2 text-sm text-white/65 leading-relaxed";

function CardContent({
  title,
  description,
  icon: Icon,
  children,
}: Pick<CardProps, "title" | "description" | "icon" | "children">) {
  return (
    <>
      {Icon ? (
        <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition group-hover:border-[#00D4FF]/60 group-hover:text-[#00D4FF] group-active:bg-black/40">
          <Icon className="h-4 w-4" />
        </div>
      ) : null}

      {title ? <h3 className={titleClasses}>{title}</h3> : null}

      {description ? (
        <p className={descriptionClasses}>{description}</p>
      ) : null}

      {children ? <div className="mt-4">{children}</div> : null}
    </>
  );
}

export function Card({
  className,
  title,
  description,
  icon,
  children,
  variant = "primary",
  href,
  disabled = false,
}: CardProps) {
  const classes = cx(baseClasses, variantClasses[variant], className);

  if (href && !disabled) {
    const isExternal =
      /^https?:\/\//i.test(href) || href.startsWith("mailto:");

    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={false}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
      >
        <CardContent title={title} description={description} icon={icon}>
          {children}
        </CardContent>
      </Link>
    );
  }

  return (
    <div className={classes} aria-disabled={disabled || undefined}>
      <CardContent title={title} description={description} icon={icon}>
        {children}
      </CardContent>
    </div>
  );
}

