"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type CardVariant = "primary" | "secondary" | "outline";

export interface CardProps {
  className?: string;
  title?: string;
  description?: string;
  icon?: IconType;
  children?: ReactNode;
  variant?: CardVariant;
  href?: string;
  disabled?: boolean;
}

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

const baseClasses =
  "group relative flex flex-col rounded-2xl p-5 text-xs md:p-6 md:text-sm " +
  "transition will-change-transform " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-page " +
  "hover:-translate-y-0.5 active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<CardVariant, string> = {
  primary:
    "bg-card border border-border/50 shadow-sm " +
    "hover:border-border hover:shadow-md",
  secondary:
    "bg-page border border-border/50 text-primary " +
    "hover:border-border hover:bg-hover",
  outline:
    "bg-transparent border border-border/50 text-primary " +
    "hover:border-border hover:bg-hover",
};

const titleClasses = "text-base md:text-lg font-semibold tracking-tight text-primary";
const descriptionClasses = "mt-2 text-xs md:text-sm text-secondary leading-relaxed";

function CardContent({
  title,
  description,
  icon: Icon,
  children,
}: Pick<CardProps, "title" | "description" | "icon" | "children">) {
  return (
    <>
      {Icon ? (
        <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 bg-primary/5 text-secondary transition group-hover:border-link/60 group-hover:text-link group-active:bg-primary/10">
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

