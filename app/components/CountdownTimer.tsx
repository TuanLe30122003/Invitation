"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [targetDateString, setTargetDateString] = useState("");

  useEffect(() => {
    // Calculate time until 19:00 on November 26, 2025
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date(2025, 10, 26, 19, 0, 0); // November is index 10 (0-based)

      // Set target date string once
      if (!targetDateString) {
        const dateStr = targetDate.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        setTargetDateString(dateStr);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDateString]);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 border border-purple-100">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-500 mb-1">Countdown to</p>
        <p className="text-lg font-semibold text-gray-800">
          19:00 - {targetDateString || "Calculating..."}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 md:gap-4">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl p-4 shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-white text-center">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium">
            Days
          </p>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl p-4 shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-white text-center">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium">
            Hours
          </p>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 shadow-lg">
            <div className="text-3xl md:text-4xl font-bold text-white text-center">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium">
            Minutes
          </p>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="w-full bg-gradient-to-br from-rose-400 to-purple-500 rounded-xl p-4 shadow-lg animate-pulse">
            <div className="text-3xl md:text-4xl font-bold text-white text-center">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
}
