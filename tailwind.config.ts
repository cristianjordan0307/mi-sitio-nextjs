import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      colors: {
        gray: {
          750: "#2d3748",
          850: "#1a202c",
          950: "#030712",
        },
      },
    },
  },
  plugins: [],
};

export default config;