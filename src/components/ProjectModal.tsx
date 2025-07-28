"use client";

import React from "react";
import Image from "next/image";
import TechTag from "./TechTag";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
  };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const gradientVariants = [
    "from-blue-500 to-purple-600",
    "from-green-500 to-blue-600",
    "from-purple-500 to-pink-600",
    "from-orange-500 to-red-600",
    "from-teal-500 to-green-600",
    "from-indigo-500 to-purple-600",
  ];

  const gradientIndex = project.title.length % gradientVariants.length;
  const gradientClass = gradientVariants[gradientIndex];

  return (
    <div className="space-y-6">
      {/* 프로젝트 이미지 */}
      <div className="relative h-48 md:h-64 overflow-hidden rounded-xl bg-background-secondary">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} 프로젝트 이미지`}
            fill
            className="object-cover"
            onError={e => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradientClass}`}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium tracking-wider uppercase text-white">
                {project.title}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 프로젝트 정보 */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-title font-kr">
          {project.title}
        </h3>

        <p className="text-base leading-relaxed text-text-body font-kr">
          {project.description}
        </p>

        {/* 기술 태그 */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-muted font-kr">
            사용 기술
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <TechTag key={index} tech={tag} />
            ))}
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-button btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm tracking-wider font-medium font-en"
              aria-label={`${project.title} GitHub 저장소 보기`}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub 보기
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-button btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm tracking-wider font-medium font-en"
              aria-label={`${project.title} 라이브 데모 보기`}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              라이브 데모
            </a>
          )}
        </div>

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="w-full mt-6 px-6 py-3 text-sm font-medium text-muted hover:text-foreground transition-colors duration-200 border border-border rounded-lg hover:bg-card-hover"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
