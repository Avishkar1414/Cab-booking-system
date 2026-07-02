"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { features } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Nova Cabs"
          title="Built Around Your Peace of Mind"
          description="Every ride runs on the same standard: verified, on time, and easy to book."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = (Icons as any)[feature.icon] ?? Icons.Star;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              >
                <GlassCard className="h-full p-5 sm:p-6 text-center group hover:shadow-glow-cyan transition-shadow duration-300">
                  <motion.div
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-grad-cyan shadow-glow-cyan"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.div>
                  <h3 className="mt-4 font-display text-sm font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
