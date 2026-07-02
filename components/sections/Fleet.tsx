"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Luggage, Snowflake, IndianRupee } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { vehicles } from "@/data/vehicles";

export default function Fleet() {
  return (
    <section id="fleet" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Fleet"
          title="A Vehicle for Every Journey"
          description="From quick city hops to long highway runs, pick the cabin size and comfort level that fits your trip."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <GlassCard className="relative h-full p-6 overflow-hidden transition-shadow duration-300 group-hover:shadow-glow-purple">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-grad-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />

                <div className="relative flex h-36 items-center justify-center rounded-2xl bg-white/5 mb-5 overflow-hidden">
                  <Image
                    src={`/images/vehicles/${vehicle.icon}.svg`}
                    alt={`${vehicle.name} illustration`}
                    width={400}
                    height={220}
                    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="font-display text-xl font-semibold text-ink">{vehicle.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{vehicle.tagline}</p>

                <div className="mt-5 flex flex-wrap gap-3 text-xs text-ink-muted">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                    <Users size={13} /> {vehicle.capacity} seats
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                    <Luggage size={13} /> {vehicle.luggage} bags
                  </span>
                  {vehicle.ac && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                      <Snowflake size={13} /> AC
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[11px] text-ink-faint">Starting from</p>
                    <p className="flex items-center font-mono text-lg font-medium text-ink">
                      <IndianRupee size={14} />
                      {vehicle.baseRatePerKm}
                      <span className="ml-1 text-xs text-ink-faint">/km</span>
                    </p>
                  </div>
                  <button
                    onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}
                    className="rounded-full btn-gradient px-5 py-2.5 text-sm font-medium text-white shadow-glow-purple"
                  >
                    Book
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
