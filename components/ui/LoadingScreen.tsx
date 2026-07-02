"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen 3D loader: a car driving toward the viewer down a
 * perspective road. The road plane is tilted in 3D space (perspective +
 * rotateX) with lane markers animated along Z to read as forward motion;
 * the car bobs on its suspension and the wheels spin in sync.
 */
export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const minDelay = new Promise((resolve) => setTimeout(resolve, 1600));
    const pageReady = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", () => resolve(), { once: true });
      }
    });

    Promise.all([minDelay, pageReady]).then(() => setShow(false));

    const fallback = setTimeout(() => setShow(false), 4500);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-base overflow-hidden"
        >
          {/* ambient glow */}
          <div className="absolute h-80 w-80 rounded-full bg-grad-radial-glow blur-3xl" />

          <div className="relative flex flex-col items-center gap-8">
            {/* 3D scene */}
            <div
              className="relative h-[180px] w-[300px]"
              style={{ perspective: "420px", perspectiveOrigin: "50% 30%" }}
            >
              {/* road plane, tilted back in 3D */}
              <div
                className="absolute inset-x-0 bottom-0 h-[120px] overflow-hidden rounded-b-xl"
                style={{
                  transform: "rotateX(62deg)",
                  transformOrigin: "bottom center",
                  background:
                    "linear-gradient(180deg, #0F1326 0%, #0A0F24 100%)",
                }}
              >
                {/* receding lane markers, animated toward viewer */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent 0px, transparent 22px, rgba(96,165,250,0.55) 22px, rgba(96,165,250,0.55) 40px)",
                    backgroundSize: "100% 60px",
                  }}
                  animate={{ backgroundPositionY: ["0px", "60px"] }}
                  transition={{ repeat: Infinity, duration: 0.55, ease: "linear" }}
                />
                {/* side edge glow lines */}
                <div className="absolute inset-y-0 left-[20%] w-px bg-gradient-to-t from-neon-cyan/60 to-transparent" />
                <div className="absolute inset-y-0 right-[20%] w-px bg-gradient-to-t from-neon-cyan/60 to-transparent" />
              </div>

              {/* ground shadow under car */}
              <motion.div
                className="absolute bottom-[64px] left-1/2 h-3 w-24 -translate-x-1/2 rounded-full bg-black/50 blur-sm"
                animate={{ scaleX: [1, 0.85, 1], opacity: [0.5, 0.35, 0.5] }}
                transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
              />

              {/* car, bobbing on suspension */}
              <motion.div
                className="absolute bottom-[68px] left-1/2 -translate-x-1/2"
                animate={{ y: [0, -4, 0], rotate: [-0.6, 0.6, -0.6] }}
                transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
              >
                <svg width="148" height="62" viewBox="0 0 148 62" fill="none">
                  <defs>
                    <linearGradient id="car-body" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="55%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                    <linearGradient id="car-glass" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E8EAF6" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.4" />
                    </linearGradient>
                    <radialGradient id="headlight-beam" cx="0%" cy="50%" r="75%">
                      <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* headlight beam, pulsing */}
                  <motion.ellipse
                    cx="6"
                    cy="38"
                    rx="34"
                    ry="10"
                    fill="url(#headlight-beam)"
                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                  />

                  {/* body */}
                  <path
                    d="M10 44 C9 33 18 27 30 25 L46 14 C52 9 60 7 68 7 L100 7 C108 7 115 10 119 16 L129 25 C138 27 145 33 146 41 C147 46 144 49 138 49 L132 49 C132 41 125 35 117 35 C109 35 102 41 102 49 L46 49 C46 41 39 35 31 35 C23 35 16 41 16 49 L14 49 C11 49 10 47 10 44 Z"
                    fill="url(#car-body)"
                  />
                  {/* windows */}
                  <path d="M44 23 L54 16 C58 13 63 11 68 11 L82 11 L82 23 Z" fill="url(#car-glass)" opacity="0.9" />
                  <path d="M86 11 L98 11 C104 11 109 13 112 17 L120 23 L86 23 Z" fill="url(#car-glass)" opacity="0.9" />
                  <path d="M84 11 L84 23" stroke="#0A0F24" strokeWidth="1.5" opacity="0.5" />
                  {/* taillight */}
                  <ellipse cx="140" cy="38" rx="3.5" ry="5" fill="#FB7185" opacity="0.9" />

                  {/* wheels, spinning */}
                  <g>
                    <circle cx="31" cy="49" r="10.5" fill="#0F1326" />
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.4, ease: "linear" }}
                      style={{ originX: "31px", originY: "49px" }}
                    >
                      <circle cx="31" cy="49" r="10.5" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
                      <line x1="31" y1="40" x2="31" y2="58" stroke="#60A5FA" strokeWidth="1.5" />
                      <line x1="22.5" y1="49" x2="39.5" y2="49" stroke="#60A5FA" strokeWidth="1.5" />
                    </motion.g>
                  </g>
                  <g>
                    <circle cx="117" cy="49" r="10.5" fill="#0F1326" />
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.4, ease: "linear" }}
                      style={{ originX: "117px", originY: "49px" }}
                    >
                      <circle cx="117" cy="49" r="10.5" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
                      <line x1="117" y1="40" x2="117" y2="58" stroke="#60A5FA" strokeWidth="1.5" />
                      <line x1="108.5" y1="49" x2="125.5" y2="49" stroke="#60A5FA" strokeWidth="1.5" />
                    </motion.g>
                  </g>
                </svg>
              </motion.div>

              {/* speed lines streaking past */}
              {[18, 30, 42].map((top, i) => (
                <motion.div
                  key={top}
                  className="absolute h-px w-10 bg-gradient-to-r from-transparent via-ink-muted/70 to-transparent"
                  style={{ top, left: -20 }}
                  animate={{ x: [0, 340], opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.7,
                    delay: i * 0.18,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="font-display text-sm tracking-[0.3em] uppercase text-ink">
                Amar Tour's <span className="text-gradient">& Travels</span>
              </p>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-neon-cyan"
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.1, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
