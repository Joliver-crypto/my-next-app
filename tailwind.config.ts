import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enables dark mode using the "class" strategy
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{png,jpg,svg,gif,webp}", // Extended to include more image formats
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradientShift 10s ease infinite", // Smooth gradient animation
        fadeIn: "fadeIn 1.5s ease-in-out", // Fade-in animation
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        primary: "#0096FF", // Primary color for buttons or links
        accent: "#FF4C4C", // Accent color for highlights
        backgroundLight: "#F3F4F6", // Light background
        backgroundDark: "#1E293B", // Dark background
      },
      boxShadow: {
        lamp: "0px -20px 60px -10px rgba(0, 150, 255, 0.7)", // Lamp shadow effect
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default sans-serif font
        mono: ["Fira Code", "monospace"], // Default monospace font
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Add support for form styling
    require("@tailwindcss/typography"), // Add support for better typography
  ],
} satisfies Config;
