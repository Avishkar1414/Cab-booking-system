"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const contactItems = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 80103 58049",
    href: "tel:+918010358049",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us instantly",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: "Pruthvirajc461@gmail.com",
    href: "mailto:Pruthvirajc461@gmail.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Available 24/7, every day",
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Reach Us"
          title="We're Always One Message Away"
          description="Call, message, or drop by, whichever is easiest for you."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contactItems.map((item) => {
              const Content = (
                <GlassCard className="h-full p-5 hover:shadow-glow-blue transition-shadow duration-300">
                  <item.icon size={20} className="text-neon-cyan" />
                  <p className="mt-3 text-xs text-ink-faint">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                </GlassCard>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {Content}
                </a>
              ) : (
                <div key={item.label}>{Content}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <GlassCard className="h-full min-h-[280px] overflow-hidden p-2">
              <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-2xl">
                <iframe
                  title="Service area map"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=New%20Delhi%2C%20India&output=embed"
                />
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs text-ink">
                  <MapPin size={13} className="text-neon-cyan" />
                  Serving your city & beyond
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
