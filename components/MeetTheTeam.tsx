"use client";

import React from "react";

const team = [
  { name: "Jeanette Simo", role: "President", image: "/team/president.png" },
  { name: "Rishi Seri", role: "Vice President", image: "/team/vice_president.png" },
  { name: "Liam Hofman", role: "Workshop Director", image: "/team/workshop_director.png" },
  { name: "Justin Oliver", role: "Project Manager", image: "/team/project_manager.png" },
];

export function MeetTheTeam() {
  return (
    <div className="w-screen px-10 py-20 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-10">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.role}
              className="w-32 h-32 rounded-full shadow-lg"
            />
            <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
