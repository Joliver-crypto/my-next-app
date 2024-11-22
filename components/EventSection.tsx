'use client';

import { useEffect, useState } from 'react';

function Countdown({ date }: { date: string }) {
  const [timeLeft, setTimeLeft] = useState('');
  const [status, setStatus] = useState('upcoming');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date(date).getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0 && difference > -3600000) {
        // Event is in progress (1 hour duration)
        setTimeLeft('Event in progress!');
        setStatus('inProgress');
      } else if (difference <= -3600000) {
        // Event is over, calculate next occurrence
        const nextThursday = new Date(date);
        nextThursday.setDate(nextThursday.getDate() + ((4 - nextThursday.getDay() + 7) % 7 || 7)); // Get next Thursday
        nextThursday.setHours(18, 0, 0, 0); // Set to 6 PM
        setStatus('next');
        calculateTimeLeftForNext(nextThursday);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        setStatus('upcoming');
      }
    };

    const calculateTimeLeftForNext = (nextEventDate: Date) => {
      const now = new Date().getTime();
      const difference = nextEventDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <p className="text-lg text-gray-600 dark:text-gray-400">
      {status === 'upcoming' && `Time left until the first meeting: ${timeLeft}`}
      {status === 'inProgress' && 'Event in progress!'}
      {status === 'next' && `Time left until the next meeting: ${timeLeft}`}
    </p>
  );
}

export default function EventSection() {
  return (
    <div className="w-screen px-10 py-20 text-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
        Meeting Times:
      </h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md inline-block">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          First meeting: January 9th at 6 PM
        </p>
        <div className="text-lg text-gray-600 dark:text-gray-400 mb-4 flex items-center justify-center">
          📍 Roessler 55
        </div>
        <Countdown date="2025-01-09T18:00:00" />
      </div>
    </div>
  );
}
