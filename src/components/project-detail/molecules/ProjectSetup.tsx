"use client";

import React from "react";
import { ProjectSetupInfo } from "@/types";
import { trackExternalLink } from "@/lib/gtag";

interface ProjectSetupProps {
  setupInfo: ProjectSetupInfo;
}

export default function ProjectSetup({ setupInfo }: ProjectSetupProps) {
  // GitHub 링크 클릭 핸들러
  const handleGitHubClick = (url: string) => {
    trackExternalLink(url, "project_setup_github");
  };

  // Live Demo 링크 클릭 핸들러
  const handleLiveDemoClick = (url: string) => {
    trackExternalLink(url, "project_setup_live_demo");
  };

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
                  onClick={() => handleGitHubClick(url)}
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
              onClick={() => handleGitHubClick(setupInfo.github as string)}
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
          onClick={() =>
            setupInfo.liveDemo && handleLiveDemoClick(setupInfo.liveDemo)
          }
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
