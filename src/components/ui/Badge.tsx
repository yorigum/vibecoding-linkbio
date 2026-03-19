"use client";

import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type BadgeVariant = "default" | "outline" | "success" | "warning";

export interface BadgeProps {
  className?: string;
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: IconType;
}

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

const baseClasses =
  "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] md:px-2.5 md:py-1 md:text-xs font-medium " +
  "transition " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]";

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "bg-[#111] text-white/90 border border-white/15 hover:border-white/30",
  outline:
    "bg-transparent text-white/80 border border-white/25 hover:border-white/40",
  success:
    "bg-emerald-500/15 text-emerald-300 border border-emerald-400/40 hover:border-emerald-300/70",
  warning:
    "bg-amber-500/15 text-amber-300 border border-amber-400/40 hover:border-amber-300/70",
};

export function Badge({
  className,
  children,
  variant = "default",
  icon: Icon,
}: BadgeProps) {
  return (
    <span className={cx(baseClasses, variantClasses[variant], className)}>
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      <span>{children}</span>
    </span>
  );
}

