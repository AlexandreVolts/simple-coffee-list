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
        black: "#111315",
        brown: "#1B1D1F",
        gray: "#6F757C",
        beige: "#BEE3CC",
        white: "#FEF7EE",
        yellow: "#F6C768",
        orange: "#ED735D",
      },
      backgroundImage: {
        banner: "url('/bg-cafe.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
