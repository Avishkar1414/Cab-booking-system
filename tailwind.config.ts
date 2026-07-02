import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#050816",
          surface: "#0A0F24",
          raised: "#0F1326",
        },
        neon: {
          blue: "#3B82F6",
          bluelight: "#60A5FA",
          purple: "#8B5CF6",
          cyan: "#22D3EE",
        },
        ink: {
          DEFAULT: "#E8EAF6",
          muted: "#94A3B8",
          faint: "#5B6478",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        "glow-blue": "0 0 24px 0 rgba(59,130,246,0.35)",
        "glow-purple": "0 0 24px 0 rgba(139,92,246,0.35)",
        "glow-cyan": "0 0 24px 0 rgba(34,211,238,0.35)",
        "glass": "0 8px 32px 0 rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
        "grad-cyan": "linear-gradient(135deg, #22D3EE 0%, #3B82F6 100%)",
        "grad-radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(139,92,246,0.25), transparent 60%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "border-spin": "borderSpin 6s linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
