import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // ── Dark surfaces ──────────────────────────────
        ink: { DEFAULT: "#050508", 950: "#050508", 900: "#0B1020" },
        onyx: { DEFAULT: "#0A0A0A", 950: "#0A0A0A" },
        surface: {
          DEFAULT: "#11162A",
          1: "#11162A",
          2: "#161C33",
          3: "#1C2340",
        },
        line: {
          DEFAULT: "#232A44",
          strong: "#313A5E",
        },

        // ── Foreground — dark backgrounds ─────────────
        fg: {
          DEFAULT: "#F8FAFC",
          muted: "#AAB2C8",
          subtle: "#778099",
        },

        // ── Foreground — light backgrounds ────────────
        "fg-dark": {
          DEFAULT: "#0F172A",
          muted: "#475569",
          subtle: "#94A3B8",
        },

        // ── Light surfaces ────────────────────────────
        "light-bg": {
          DEFAULT: "#FFFFFF",
          grey: "#F8FAFC",
          slate: "#F1F5F9",
        },
        "light-line": {
          DEFAULT: "#E2E8F0",
          strong: "#CBD5E1",
        },

        // ── Brand blue palette ────────────────────────
        brand: {
          DEFAULT: "#2563EB",
          deep: "#1E40AF",
          light: "#3B82F6",
          cyan: "#06B6D4",
          soft: "rgba(37, 99, 235, 0.10)",
        },

        // ── Single accent: indigo ─────────────────────
        accent: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
          dark: "#4F46E5",
          soft: "rgba(99, 102, 241, 0.14)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.75rem, 1.5rem + 6vw, 5rem)", { lineHeight: "1.03", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.25rem, 1.3rem + 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2rem, 1.2rem + 3.4vw)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
      },
      boxShadow: {
        // Dark-mode shadows
        glow: "0 0 30px rgba(99, 102, 241, 0.28)",
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 16px 40px rgba(0,0,0,0.5)",
        // Light-mode shadows
        "card-light": "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-light-hover": "0 4px 24px rgba(37,99,235,0.10), 0 8px 32px rgba(0,0,0,0.08)",
        // Blue glow for CTA
        "glow-blue": "0 0 60px rgba(37,99,235,0.30), 0 0 120px rgba(6,182,212,0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(10px, -15px)" },
          "66%": { transform: "translate(-8px, 8px)" },
        },
        marquee: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-33.333%, 0, 0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
