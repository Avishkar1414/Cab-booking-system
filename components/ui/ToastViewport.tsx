"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useToast } from "@/hooks/useToast";

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

const colors = {
  success: "text-neon-cyan",
  error: "text-red-400",
  info: "text-neon-bluelight",
};

export default function ToastViewport() {
  const { toasts, dismissToast } = useToast();

  return (
    <div className="fixed bottom-24 sm:bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 w-[92%] sm:w-auto items-center pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.variant];
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="glass-strong pointer-events-auto rounded-2xl px-4 py-3 flex items-center gap-3 shadow-glass min-w-[260px] max-w-sm"
            >
              <Icon size={18} className={colors[toast.variant]} />
              <p className="text-sm text-ink flex-1">{toast.message}</p>
              <button
                onClick={() => dismissToast(toast.id)}
                aria-label="Dismiss notification"
                className="text-ink-faint hover:text-ink"
              >
                <X size={16} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
