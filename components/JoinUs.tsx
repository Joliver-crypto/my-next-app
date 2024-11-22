"use client";

import React from "react";
import { FaDiscord } from "react-icons/fa";

export function JoinUs() {
  return (
    <div className="w-screen px-10 py-20 text-center bg-gray-100 dark:bg-gray-900">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
        Join the Club
      </h2>
      
      {/* Description */}
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
        Become a part of our Quantum Computing Club! Click below to join our Discord and connect with other members.
      </p>

      {/* Discord Link */}
      <a
        href="https://discord.gg/KC8NS28WMG"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700"
      >
        <FaDiscord className="mr-3" size={24} />
        Join Our Discord
      </a>
    </div>
  );
}
