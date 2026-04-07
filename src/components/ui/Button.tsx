"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { FiLoader } from "react-icons/fi";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";

export interface ButtonProps {
  className?: string;
  children: ReactNode;

  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;

  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;

  id?: string;
  title?: string;

  type?: "button" | "submit" | "reset";
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-semibold " +
  "transition will-change-transform " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page " +
  "active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cta text-white shadow-sm " +
    "hover:shadow hover:-translate-y-0.5 active:scale-[0.98]",
  secondary:
    "bg-primary/10 text-primary ring-1 ring-primary/10 " +
    "hover:bg-primary/15 hover:ring-primary/20 active:bg-primary/10",
  outline:
    "border border-border/50 bg-primary/5 text-primary " +
    "hover:border-border hover:bg-primary/10 active:bg-primary/5",
  ghost:
    "bg-transparent text-secondary " +
    "hover:bg-primary/10 hover:text-primary active:bg-primary/5",
  link:
    "bg-transparent px-0 py-0 text-link underline-offset-4 " +
    "hover:underline hover:brightness-110 active:brightness-95",
};

export function Button({
  className,
  children,
  variant = "primary",
  disabled = false,
  loading = false,
  href,
  onClick,
  id,
  title,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const content = (
    <>
      {loading ? <FiLoader className="h-4 w-4 animate-spin" /> : null}
      <span className={cx(loading ? "opacity-90" : undefined)}>{children}</span>
    </>
  );

  const classes = cx(base, variants[variant], className);

  if (href) {
    if (isDisabled) {
      return (
        <span
          id={id}
          title={title}
          aria-disabled="true"
          className={classes}
        >
          {content}
        </span>
      );
    }

    const isExternal = /^https?:\/\//i.test(href) || href.startsWith("mailto:");
    const computedRel =
      rel ?? (target === "_blank" ? "noreferrer noopener" : undefined);

    return (
      <Link
        id={id}
        title={title}
        href={href}
        target={isExternal ? target : undefined}
        rel={isExternal ? computedRel : undefined}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      id={id}
      title={title}
      type={type}
      className={classes}
      disabled={isDisabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

