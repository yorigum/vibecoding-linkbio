"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { Loader2 } from "lucide-react";

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
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold " +
  "transition will-change-transform " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] " +
  "active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#00D4FF] to-[#2EE6FF] text-[#001018] " +
    "hover:brightness-110 active:brightness-95",
  secondary:
    "bg-white/10 text-white/90 ring-1 ring-white/10 " +
    "hover:bg-white/15 hover:ring-white/20 active:bg-white/10",
  outline:
    "border border-white/15 bg-white/5 text-white/90 " +
    "hover:border-white/25 hover:bg-white/10 active:bg-white/5",
  ghost:
    "bg-transparent text-white/85 " +
    "hover:bg-white/10 hover:text-white active:bg-white/5",
  link:
    "bg-transparent px-0 py-0 text-[#00D4FF] underline-offset-4 " +
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
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
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

