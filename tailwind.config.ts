import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        leaf: {"50":"#f4faef","100":"#e6f3dc","200":"#cde7b9","300":"#acd48d","400":"#87bd61","500":"#639c3f","600":"#487c2d","700":"#386225","800":"#2e4f21","900":"#28431f","950":"#14260f"},
        forest: {"50":"#f8faf6","100":"#f0f4ec","200":"#dfe7d8","300":"#c5d1bd","400":"#94a58a","500":"#687b5e","600":"#4e6046","700":"#3b4d34","800":"#293923","900":"#1d2c18","950":"#12200e"},
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(72,124,45,.20)",
      },
    },
  },
  plugins: [],
} satisfies Config;
