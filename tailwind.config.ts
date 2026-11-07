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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        gold: {
          50: "#fdfbf7",
          100: "#f9f4ea",
          200: "#f0e2c8",
          300: "#e5cca0",
          400: "#d7b273",
          500: "#c59b27",
          600: "#a97d1b",
          700: "#865e18",
          800: "#6f4c19",
          900: "#5d3f18",
        },
        warm: {
          50: "#faf9f6",
          100: "#f5f3ee",
          200: "#eae6dc",
          300: "#dbd5c4",
          400: "#c7bfa6",
          500: "#a99f84",
          600: "#8c8166",
          700: "#706752",
          800: "#5a5344",
          900: "#494438",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(19, 78, 74, 0.06), 0 2px 6px -1px rgba(0,0,0,0.04)",
        card: "0 10px 30px -4px rgba(19, 78, 74, 0.08), 0 4px 12px -2px rgba(0,0,0,0.04)",
        elevated: "0 20px 40px -6px rgba(19, 78, 74, 0.12), 0 8px 16px -4px rgba(0,0,0,0.06)",
        gold: "0 10px 25px -3px rgba(197, 155, 39, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

