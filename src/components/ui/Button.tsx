"use client";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg font-medium transition",
        {
          "bg-primary text-white hover:bg-orange-600": variant === "primary",
          "border border-orange-500 text-orange-500 hover:bg-orange-50":
            variant === "secondary",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
