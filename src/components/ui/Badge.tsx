"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] md:px-2.5 md:py-1 md:text-xs font-medium " +
          "bg-transparent text-secondary border border-border hover:border-link/60 hover:text-link transition",
        className
      )}
    >
      <span>{children}</span>
    </span>
  );
}
