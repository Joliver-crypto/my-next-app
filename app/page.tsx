"use client";

import { BackgroundGradientSlide } from "@/components/BackgroundGradientSlide";
import { JoinUs } from "@/components/JoinUs";
import EventSection from "@/components/EventSection"; 
import { MeetTheTeamWithLamp as MeetTheTeam } from "@/components/MeetTheTeam";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Background Gradient Slide */}
      <BackgroundGradientSlide />

      {/* Meet the Team Slide */}
      <MeetTheTeam />


      {/* Join Us Slide */}
      <JoinUs />

      {/* Event Section */}
      <EventSection />
      
    </div>
  );
}
