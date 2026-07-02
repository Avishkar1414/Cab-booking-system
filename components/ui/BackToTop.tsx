"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function BackToTop() {
  const visible = useScrollPosition(480);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-24 sm:bottom-6 left-5 sm:left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full glass-strong shadow-glow-blue text-ink hover:text-neon-cyan"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
