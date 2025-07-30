"use client";

import React from "react";

interface ProjectListProps {
  items: string[];
  className?: string;
}

export default function ProjectList({
  items,
  className = "",
}: ProjectListProps) {
  return (
    <ul
      className={`list-disc list-inside space-y-4 text-lg text-[var(--text-white)]/80 font-kr ${className}`}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="bg-white/5 px-4 py-3 rounded-lg border border-white/10"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
