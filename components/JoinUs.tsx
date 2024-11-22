"use client";

import React, { useEffect, useState } from "react";

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const eventTime = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const diff = eventTime - now;

      if (diff <= 0) {
        setTimeLeft("Meeting Started!");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return <p className="text-2xl font-semibold text-gray-800">{timeLeft}</p>;
}

export function JoinUs() {
  return (
    <div className="w-screen px-10 py-20 text-center bg-white">
      <h2 className="text-4xl font-bold mb-6">Join the Club</h2>
      <Countdown targetDate="2024-12-01T17:00:00" />
      <form className="mt-10 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
