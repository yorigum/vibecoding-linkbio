"use client";

import type { ReactNode } from "react";

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cx("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}
