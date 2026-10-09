"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { cn } from "@/lib/cn";

export interface CardProps {
  className?: string;
  title?: string;
  description?: string;
  icon?: IconType;
  children?: ReactNode;
  href?: string;
}

const baseClasses =
  "group relative flex flex-col rounded-2xl p-5 text-xs md:p-6 md:text-sm " +
  "bg-card border border-border/50 " +
  "transition will-change-transform " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-link/60 " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-page " +
  "hover:-translate-y-0.5 hover:border-border active:translate-y-px";

const titleClasses = "text-base md:text-lg font-semibold tracking-tight text-primary";
const descriptionClasses = "mt-2 text-xs md:text-sm text-secondary leading-relaxed";

export function Card({ className, title, description, icon: Icon, children, href }: CardProps) {
  const classes = cn(baseClasses, className);
  const content = (
    <>
      {Icon ? (
        <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 bg-primary/5 text-secondary transition group-hover:border-link/60 group-hover:text-link group-active:bg-primary/10">
          <Icon className="h-4 w-4" />
        </div>
      ) : null}
      {title ? <h3 className={titleClasses}>{title}</h3> : null}
      {description ? <p className={descriptionClasses}>{description}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//i.test(href) || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
