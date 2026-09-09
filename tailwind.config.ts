import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#0b0c0f",
          panel: "#12141a",
          border: "#1e2230",
          muted: "#8b93a7",
          text: "#e8eaef",
          accent: "#ff8c00",
          accent2: "#e8a87c",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 28px -4px rgba(255, 140, 0, 0.55)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
