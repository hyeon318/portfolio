"use client";

import React from "react";

interface ProjectSectionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
}

export default function ProjectSection({
  title,
  icon,
  children,
  className = "",
}: ProjectSectionProps) {
  return (
    <section className={`mb-20 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-white)] mb-6 font-kr flex items-center gap-3">
        {icon} {title}
      </h2>
      {children}
    </section>
  );
}
