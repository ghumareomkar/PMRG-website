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
        // Body base — very dark blue-black for the gradient mesh
        ink: { DEFAULT: "#0B1020", 950: "#0B1020", 900: "#0B1020" },
        // Deep black — header / footer / onyx surfaces
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
        fg: {
          DEFAULT: "#F8FAFC",
          muted: "#AAB2C8",
          subtle: "#778099",
        },
        // Single accent: indigo
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
        glow: "0 0 30px rgba(99, 102, 241, 0.28)",
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 16px 40px rgba(0,0,0,0.5)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
