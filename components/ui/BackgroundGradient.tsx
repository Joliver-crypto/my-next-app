"use client";

import React from "react";

export function BackgroundGradient({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-r from-[#E3F2FD] via-[#0096FF] via-[#7F00FF] to-[#001F54] bg-[length:300%_300%] animate-gradient ${className}`}
    ></div>



  );
}
