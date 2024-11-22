"use client";

import React, { useEffect, useState } from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export function ThemeToggleButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme as "light" | "dark");
      document.documentElement.classList.add(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 left-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-md focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? <IconMoonStars size={20} /> : <IconSun size={20} />}
    </button>
  );
}
