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
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      colors: {
        // Background Colors (from old site)
        background: {
          DEFAULT: "#020410",
          light: "#0f172a",
          soft: "#071A35",
          section: "#172554",
        },

        // Primary Text
        fg: {
          DEFAULT: "#FFFFFF",
          muted: "#B7C6E5",
          subtle: "#8FA5CC",
          light: "#FFFFFF",
        },

        line: {
          DEFAULT: "#172554",
          strong: "#1D4ED8",
        },

        primary: {
          DEFAULT: "#2563EB",
          light: "#60A5FA",
          dark: "#172554",
        },

        secondary: {
          DEFAULT: "#0EA5E9",
          light: "#BAE6FD",
          dark: "#0369A1",
        },

        // Accent
        accent: {
          DEFAULT: "#ffffff",
          light: "#DFF7FF",
          dark: "#2563EB",
          soft: "rgba(37,99,235,0.08)",
        },

        // Hero
        hero: {
          DEFAULT: "#2563EB",
          sky: "#0f172a",
          blue: "#0b1f6b",
        },

        ink: "#000000",

        // Cards
        card: {
          DEFAULT: "#000000",
          hover: "#090909",
        },

        // Surface
        surface: {
          DEFAULT: "#000000",
          1: "#000000",
          2: "#000000",
          3: "#000000",
        },

        white: "#F8FAFC",
      },

      fontFamily: {
        sans: ["PT Sans", "system-ui", "sans-serif"],
        display: ["PT Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },

      fontSize: {
        "display-2xl": [
          "clamp(2.75rem, 1.5rem + 6vw, 5rem)",
          { lineHeight: "1.03", letterSpacing: "-0.04em" },
        ],
        "display-xl": [
          "clamp(2.25rem, 1.3rem + 4.5vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.035em" },
        ],
        "display-lg": [
          "clamp(2rem, 1.2rem + 3.4vw, 3rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
      },

      boxShadow: {
        glow: "0 0 35px rgba(15,76,255,0.18)",

        card:
          "0 8px 30px rgba(15,76,255,0.08)",

        "card-hover":
          "0 16px 40px rgba(15,76,255,0.12)",

        "card-light":
          "0 6px 20px rgba(15,76,255,0.06)",

        "card-light-hover":
          "0 12px 35px rgba(15,76,255,0.10)",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-50%)",
          },
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