"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Clock3 } from "lucide-react";
import Button from "@/components/ui/Button";
import BookingCard from "@/components/sections/BookingCard";
import ParticleField from "@/components/ui/ParticleField";

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient gradient glow */}
      <div className="absolute inset-0 bg-grad-radial-glow" />
      <ParticleField count={22} />

      {/* Signature element: animated route line connecting pickup -> drop */}
      <svg
        className="absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 80 620 C 280 560, 320 420, 520 380 C 760 330, 820 200, 1080 160"
          stroke="url(#routeGrad)"
          strokeWidth="2"
          strokeDasharray="6 10"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.circle
          cx="80"
          cy="620"
          r="6"
          fill="#22D3EE"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.circle
          cx="1080"
          cy="160"
          r="6"
          fill="#8B5CF6"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.6 }}
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-neon-cyan">
            <Star size={12} className="fill-neon-cyan" />
            Rated 4.9 by 12,000+ riders
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-ink">
            Travel <span className="text-gradient">Comfortably</span>,
            <br />
            Arrive Safely
          </h1>

          <p className="mt-6 max-w-lg text-base sm:text-lg text-ink-muted leading-relaxed">
            Reliable taxi service for airport transfers, local rides, outstation trips & corporate travel.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => scrollTo("#book")}>
              Book Now
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="glass" onClick={() => scrollTo("#fares")}>
              See Fare Estimate
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-sm text-ink-muted">
              <ShieldCheck size={16} className="text-neon-cyan" />
              Verified drivers
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-muted">
              <Clock3 size={16} className="text-neon-cyan" />
              24/7 availability
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-muted">
              <Star size={16} className="text-neon-cyan" />
              No app required
            </div>
          </div>
        </motion.div>

        <div id="book" className="flex justify-center lg:justify-end">
          <BookingCard />
        </div>
      </div>
    </section>
  );
}
