"use client";

import React from "react";
import { ProjectSetupInfo } from "@/types";

interface ProjectSetupProps {
  setupInfo: ProjectSetupInfo;
}

export default function ProjectSetup({ setupInfo }: ProjectSetupProps) {
  return (
    <div className="space-y-4 text-lg text-[var(--text-white)]/80 font-kr">
      {setupInfo.github && (
        <div className="flex items-center gap-3">
          <span className="font-semibold">Github:</span>
          {Array.isArray(setupInfo.github) ? (
            <div className="flex flex-wrap items-center gap-2">
              {setupInfo.github.map((url, idx) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors"
                >
                  [{idx + 1}]
                </a>
              ))}
            </div>
          ) : (
            <a
              href={setupInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors"
            >
              [링크]
            </a>
          )}
        </div>
      )}
      <div className="flex items-center gap-3">
        <span className="font-semibold">Live Demo:</span>
        <a
          href={setupInfo.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] underline underline-offset-2 hover:text-[var(--primary-light)] transition-colors"
        >
          [링크]
        </a>
      </div>
      {setupInfo.deployment && (
        <div className="flex items-center gap-3">
          <span className="font-semibold">배포:</span>
          <span className="text-[var(--primary)]">{setupInfo.deployment}</span>
        </div>
      )}
    </div>
  );
}
