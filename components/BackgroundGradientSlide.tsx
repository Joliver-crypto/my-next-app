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
      <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg">
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
        Welcome to the Quantum Computing Club
      </h1>
      <p className="text-lg text-gray-800 dark:text-gray-300 mt-4 max-w-lg">
        Explore the frontier of quantum computing through research, workshops,
        and innovation at UC Davis.
      </p>
    </div>
  );
}
