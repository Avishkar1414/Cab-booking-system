import { SelectHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FieldWrapperProps {
  label: string;
  icon?: ReactNode;
  error?: string;
  children: ReactNode;
  htmlFor?: string;
}

export function FieldWrapper({ label, icon, error, children, htmlFor }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-xs font-medium text-ink-muted">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint">
            {icon}
          </span>
        )}
        {children}
      </div>
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}

export function TextInput({
  className,
  hasIcon,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { hasIcon?: boolean }) {
  return (
    <input
      className={cn(
        "w-full rounded-xl bg-white/5 border border-white/10 py-3 text-sm text-ink placeholder:text-ink-faint",
        "focus:border-neon-blue/60 focus:bg-white/[0.07] focus:outline-none transition-colors",
        hasIcon ? "pl-10 pr-3.5" : "px-3.5",
        className
      )}
      {...props}
    />
  );
}

export function SelectInput({
  className,
  children,
  hasIcon,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { hasIcon?: boolean }) {
  return (
    <select
      className={cn(
        "w-full rounded-xl bg-white/5 border border-white/10 py-3 text-sm text-ink",
        "focus:border-neon-blue/60 focus:bg-white/[0.07] focus:outline-none transition-colors appearance-none",
        hasIcon ? "pl-10 pr-3.5" : "px-3.5",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function TextareaInput({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-3 text-sm text-ink placeholder:text-ink-faint resize-none",
        "focus:border-neon-blue/60 focus:bg-white/[0.07] focus:outline-none transition-colors",
        className
      )}
      {...props}
    />
  );
}
