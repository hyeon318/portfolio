"use client";

import React from "react";
import { ProjectSetupInfo } from "@/types";

interface ProjectSetupProps {
  setupInfo: ProjectSetupInfo;
}

export default function ProjectSetup({ setupInfo }: ProjectSetupProps) {
  return (
    <div className="space-y-4 text-lg text-white/80 font-kr">
      {setupInfo.github && (
        <div className="flex items-center gap-3">
          <span className="text-sky-400 font-semibold">Github:</span>
          <a
            href={setupInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
          >
            [링크]
          </a>
        </div>
      )}
      <div className="flex items-center gap-3">
        <span className="text-sky-400 font-semibold">Live Demo:</span>
        <a
          href={setupInfo.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
        >
          [링크]
        </a>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sky-400 font-semibold">배포:</span>
        <span className="text-white/80">{setupInfo.deployment}</span>
      </div>
    </div>
  );
}
