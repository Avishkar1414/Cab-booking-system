import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: "blue" | "purple" | "cyan" | "none";
  strong?: boolean;
}

export default function GlassCard({
  className,
  glow = "none",
  strong = false,
  children,
  ...props
}: GlassCardProps) {
  const glowClass =
    glow === "blue"
      ? "shadow-glow-blue"
      : glow === "purple"
      ? "shadow-glow-purple"
      : glow === "cyan"
      ? "shadow-glow-cyan"
      : "shadow-glass";

  return (
    <div
      className={cn(
        strong ? "glass-strong" : "glass",
        "rounded-3xl",
        glowClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
