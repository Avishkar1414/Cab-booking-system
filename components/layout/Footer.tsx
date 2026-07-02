import { Car, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const quickLinks = [
  { label: "Fare Calculator", href: "#fares" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-base-surface pt-16 pb-28 sm:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad-primary shadow-glow-purple">
                <Car size={18} className="text-white" />
              </span>
              <span className="text-gradient">Amar Tour's & Travels</span>
            </a>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-xs">
              Premium taxi service for airport transfers, local rides, outstation trips, and corporate travel.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-9 w-9 items-center justify-center rounded-full glass text-ink-muted hover:text-neon-cyan transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full glass text-[#25D366]"
              >
                <MessageCircle size={16} fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-muted hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-sm text-ink-muted hover:text-ink transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-ink uppercase">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
              <li>+91 80103 58049</li>
              <li>support@novacabs.example.com</li>
              <li>Available 24/7, every day</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-faint">
            © {year} Amar Tour's & Travels. All rights reserved.
          </p>
          <p className="text-xs text-ink-faint">Built for safe, comfortable journeys.</p>
        </div>
      </div>
    </footer>
  );
}
