"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Cover"
          title="One Service for Every Kind of Trip"
          description="Whether it's a flight to catch or a wedding to get to on time, there's a ride built for the occasion."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = (Icons as any)[service.icon] ?? Icons.Car;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <GlassCard className="h-full p-7 hover:shadow-glow-blue transition-shadow duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-grad-primary shadow-glow-purple">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{service.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
