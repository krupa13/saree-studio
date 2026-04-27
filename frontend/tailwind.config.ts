import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        roseRoyal: "#C2185B",
        gold: "#D4AF37",
        ivory: "#FDF6EC",
        blush: "#F8D7DA",
        charcoal: "#2C2C2C",
        maroon: "#741034"
      },
      fontFamily: {
        heading: ["var(--font-cormorant)"],
        body: ["var(--font-nunito)"]
      },
      boxShadow: {
        goldGlow: "0 0 0 1px rgba(212,175,55,.55), 0 18px 45px rgba(116,16,52,.18)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-110%)" },
          "100%": { transform: "translateX(110%)" }
        },
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slowPan: {
          "0%, 100%": { transform: "scale(1) translateX(0)" },
          "50%": { transform: "scale(1.04) translateX(-1%)" }
        }
      },
      animation: {
        floatIn: "floatIn .75s ease-out both",
        slowPan: "slowPan 10s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
