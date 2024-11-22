import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enables dark mode using the "class" strategy
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{png,jpg,svg}", // If referencing static images in Tailwind classes
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradientShift 10s ease infinite", // Smooth gradient animation
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      colors: {
        primary: "#0096FF", // Primary color for buttons or links
        accent: "#FF4C4C", // Accent color for highlights
      },
    },
  },
  plugins: [],
} satisfies Config;
