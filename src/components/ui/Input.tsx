"use client";

import type {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import type { LucideIcon } from "lucide-react";

export type InputVariant = "default" | "ghost";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "onChange"> {
  className?: string;
  variant?: InputVariant;
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
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
  "group flex w-full items-center gap-2 rounded-xl border px-3 py-2 text-sm " +
  "transition focus-within:ring-2 focus-within:ring-[#00D4FF]/60 focus-within:ring-offset-2 focus-within:ring-offset-[#0a0a0a]";

const variantClasses: Record<InputVariant, string> = {
  default:
    "bg-[#0b0b0b] border-white/15 text-white/90 " +
    "hover:border-white/25 focus-within:border-[#00D4FF]/70",
  ghost:
    "bg-transparent border-white/10 text-white/90 " +
    "hover:border-white/25 focus-within:border-[#00D4FF]/70",
};

const inputBase =
  "flex-1 bg-transparent text-sm text-white placeholder:text-white/35 " +
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
          <span className="text-white/45 group-focus-within:text-[#00D4FF]">
            <LeadingIcon className="h-4 w-4" />
          </span>
        ) : null}

        {addonLeft ? (
          <span className="text-xs text-white/55">{addonLeft}</span>
        ) : null}

        <input
          {...props}
          disabled={disabled}
          className={inputBase}
        />

        {addonRight ? (
          <span className="text-xs text-white/55">{addonRight}</span>
        ) : null}

        {TrailingIcon ? (
          <span className="text-white/45 group-focus-within:text-[#00D4FF]">
            <TrailingIcon className="h-4 w-4" />
          </span>
        ) : null}
      </div>

      {error ? (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

