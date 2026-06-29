import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07111F",
        muted: "#5B6B83",
        line: "#DDE7F5",
        brand: {
          50: "#EFF7FF",
          100: "#DBECFF",
          500: "#2F7DF6",
          600: "#1B63D8",
          700: "#174FAC",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(30, 92, 180, 0.14)",
        glass: "0 18px 60px rgba(11, 47, 101, 0.12)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 3.8s ease-in-out infinite",
      },
    },
  },
  plugins: [forms],
};

export default config;
