"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Need to know"
          title="Frequently Asked Questions"
          description="Pricing, booking, cancellation, and safety — answered in one place."
        />

        <div className="mt-14 space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">
                {category}
              </h3>
              <div className="space-y-3">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq) => {
                    const isOpen = openId === faq.id;
                    return (
                      <GlassCard key={faq.id} className="overflow-hidden">
                        <button
                          onClick={() => setOpenId(isOpen ? null : faq.id)}
                          className="flex w-full items-center justify-between px-5 py-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm font-medium text-ink pr-4">{faq.question}</span>
                          <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                            <ChevronDown size={18} className="text-ink-muted shrink-0" />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-4 text-sm text-ink-muted leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </GlassCard>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
