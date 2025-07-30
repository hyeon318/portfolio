"use client";

import React from "react";
import { ProjectTimeline } from "@/types";

interface ProjectTimelineSectionProps {
  timeline: ProjectTimeline[];
}

export default function ProjectTimelineSection({
  timeline,
}: ProjectTimelineSectionProps) {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-white)]/90 mb-6 font-kr flex items-center gap-3">
        📋 프로젝트 일정
      </h2>
      <div className="space-y-6">
        {timeline.map((phase, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[var(--text-white)]/90 font-kr">
                {phase.phase}
              </h3>
              <span className="text-sm text-sky-400 font-medium font-en">
                {phase.duration}
              </span>
            </div>
            <p className="text-[var(--text-white)]/80 font-kr mb-4">
              {phase.description}
            </p>
            {phase.achievements && phase.achievements.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[var(--text-white)]/70 font-kr">
                  주요 성과:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-[var(--text-white)]/70 font-kr">
                  {phase.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
