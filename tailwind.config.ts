import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "thm-purple": "#702f99",
        "thm-purple-dark": "#4a1d66",
        "thm-purple-deep": "#2e0e42",
        "thm-gold": "#f8bc0a",
        "thm-gold-hover": "#d9a203",
        "thm-cream": "#fcf8e6",
        "thm-lilac": "#ede7f0",
        "thm-ink": "#1e1326",
        "thm-muted": "#5e5466",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
