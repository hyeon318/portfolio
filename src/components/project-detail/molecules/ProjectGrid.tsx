"use client";

import React from "react";

interface ProjectGridProps {
  items: string[];
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
}

export default function ProjectGrid({
  items,
  gradientFrom,
  gradientTo,
  borderColor,
}: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} p-4 rounded-xl border ${borderColor}`}
        >
          <p className="text-lg text-[var(--text-white)]/90 font-kr">{item}</p>
        </div>
      ))}
    </div>
  );
}
