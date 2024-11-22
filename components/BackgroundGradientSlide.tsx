"use client";

import React from "react";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import Image from "next/image";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

export function BackgroundGradientSlide() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center text-center">
      {/* Animated Gradient Background */}
      <BackgroundGradient className="absolute inset-0 -z-10" />

      {/* Dark Mode Toggle Button */}
      <ThemeToggleButton />

      {/* Logo */}
      <div className="p-4 shadow-lg border-4 border-black dark:border-white">
        {/* The border color changes between black (light mode) and white (dark mode) */}
        <Image
          src="/logo.png"
          alt="Quantum Computing Club Logo"
          height={120}
          width={120}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mt-6 text-black dark:text-white">
        Quantum Computing at Davis
      </h1>
      <p className="text-lg text-gray-800 dark:text-gray-300 mt-4 max-w-lg">
        Quantum Computing at Davis (QCaD) is an extracurricular organization from the University of California Davis dedicated to education and research in the field of Quantum Computing.
      </p>
    </div>
  );
}
