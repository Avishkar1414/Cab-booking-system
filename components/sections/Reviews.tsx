"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Rider Stories"
          title="Trusted by Thousands of Riders"
          description="Real feedback from real trips, across airports, cities, and highways."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <GlassCard className="h-full p-6 relative">
                <Quote size={28} className="text-neon-purple/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className={idx < review.rating ? "fill-neon-cyan text-neon-cyan" : "text-ink-faint"}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{review.text}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="text-sm font-medium text-ink">{review.name}</p>
                    <p className="text-xs text-ink-faint">{review.location}</p>
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-ink-muted">
                    {review.tripType}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
