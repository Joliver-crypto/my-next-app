"use client";

import { BackgroundGradientSlide } from "@/components/BackgroundGradientSlide";
import { MeetTheTeam } from "@/components/MeetTheTeam";
import { JoinUs } from "@/components/JoinUs";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Dark Mode Toggle Button */}
      <ThemeToggleButton />

      {/* Background Gradient Slide */}
      <BackgroundGradientSlide />

      {/* Meet the Team Slide */}
      <MeetTheTeam />

      {/* Join Us Slide */}
      <JoinUs />
    </div>
  );
}
