"use client";

import { Home, Calculator, Car, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const items = [
  { label: "Home", icon: Home, href: "#top" },
  { label: "Fares", icon: Calculator, href: "#fares" },
  { label: "Fleet", icon: Car, href: "#fleet" },
];

export default function MobileBottomNav() {
  function goTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 sm:hidden glass-strong border-t border-white/10"
      aria-label="Quick navigation"
    >
      <ul className="flex items-center justify-between px-4 py-2">
        {items.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => goTo(item.href)}
              className="flex flex-col items-center gap-1 px-3 py-1 text-ink-muted hover:text-neon-cyan"
            >
              <item.icon size={20} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          </li>
        ))}
        <li>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 px-3 py-1 text-[#25D366]"
          >
            <MessageCircle size={20} fill="currentColor" strokeWidth={0} />
            <span className="text-[10px] font-medium text-ink-muted">Chat</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
