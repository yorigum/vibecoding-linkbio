"use client";

import type {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import type { IconType } from "react-icons";

export type InputVariant = "default" | "ghost";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "onChange"> {
  className?: string;
  variant?: InputVariant;
  leadingIcon?: IconType;
  trailingIcon?: IconType;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

const wrapperBase =
  "group flex w-full items-center gap-2 rounded-xl border px-3 py-2 text-xs md:text-sm " +
  "transition focus-within:ring-2 focus-within:ring-link/60 focus-within:ring-offset-2 focus-within:ring-offset-page";

const variantClasses: Record<InputVariant, string> = {
  default:
    "bg-card border-border/50 text-primary " +
    "hover:border-border focus-within:border-link/70",
  ghost:
    "bg-transparent border-transparent text-primary " +
    "hover:border-border focus-within:border-link/70",
};

const inputBase =
  "flex-1 bg-transparent text-xs md:text-sm text-primary placeholder:text-muted " +
  "outline-none border-none min-w-0";

export function Input({
  className,
  variant = "default",
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  addonLeft,
  addonRight,
  error,
  disabled,
  ...props
}: InputProps) {
  const hasError = Boolean(error);

  return (
    <div className="w-full space-y-1.5">
      <div
        className={cx(
          wrapperBase,
          variantClasses[variant],
          hasError &&
            "border-red-500/60 focus-within:ring-red-500/60 focus-within:ring-offset-[#0a0a0a]",
          disabled && "opacity-60 pointer-events-none",
          className
        )}
      >
        {LeadingIcon ? (
          <span className="text-muted group-focus-within:text-link">
            <LeadingIcon className="h-4 w-4" />
          </span>
        ) : null}

        {addonLeft ? (
          <span className="text-xs text-muted">{addonLeft}</span>
        ) : null}

        <input
          {...props}
          disabled={disabled}
          className={inputBase}
        />

        {addonRight ? (
          <span className="text-xs text-muted">{addonRight}</span>
        ) : null}

        {TrailingIcon ? (
          <span className="text-muted group-focus-within:text-link">
            <TrailingIcon className="h-4 w-4" />
          </span>
        ) : null}
      </div>

      {error ? (
        <p className="text-xs text-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

