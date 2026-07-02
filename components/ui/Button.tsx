"use client";

import { forwardRef, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "gradient" | "glass" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "gradient", size = "md", type = "button", disabled, onClick, ariaLabel, children },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

    const variants: Record<string, string> = {
      gradient: "btn-gradient text-white shadow-glow-purple",
      glass: "glass text-ink hover:bg-white/10",
      ghost: "text-ink-muted hover:text-ink",
      outline: "border border-neon-blue/40 text-ink hover:bg-neon-blue/10",
    };

    const sizes: Record<string, string> = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileTap={{ scale: 0.97 }}
        className={cn(base, variants[variant], sizes[size], className)}
        aria-label={ariaLabel}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
