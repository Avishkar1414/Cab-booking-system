"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Car } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const links = [
  { label: "Fares", href: "#fares" },
  { label: "Fleet", href: "#fleet" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScrollPosition(30);
  const [open, setOpen] = useState(false);

  function handleLinkClick(href: string) {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-glass py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad-primary shadow-glow-purple">
            <Car size={18} className="text-white" />
          </span>
          <span className="text-gradient">Amar Tour's & Travels</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink-muted">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLinkClick(link.href)}
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => handleLinkClick("#book")}>
            Book Now
          </Button>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="glass-strong mx-4 mt-3 rounded-2xl p-4 flex flex-col gap-3">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left text-ink-muted hover:text-ink py-1.5"
                >
                  {link.label}
                </button>
              ))}
              <Button size="sm" onClick={() => handleLinkClick("#book")} className="mt-1">
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
