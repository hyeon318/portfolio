"use client";

import React from "react";
import Image from "next/image";
import { ProjectDetailData } from "@/types";
import { ProjectIcon, GitHubIcon, EyeIcon } from "../icons";

interface ProjectHeaderProps {
  projectData: ProjectDetailData;
}

export default function ProjectHeader({ projectData }: ProjectHeaderProps) {
  const gradientVariants = [
    "from-blue-500 to-purple-600",
    "from-green-500 to-blue-600",
    "from-purple-500 to-pink-600",
    "from-orange-500 to-red-600",
    "from-teal-500 to-green-600",
    "from-indigo-500 to-purple-600",
  ];

  const gradientIndex = projectData.title.length % gradientVariants.length;
  const gradientClass = gradientVariants[gradientIndex];

  return (
    <div className="mb-20">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* 프로젝트 이미지 */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-64 md:h-100 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm">
            {projectData.images?.thumbnail ? (
              <Image
                src={projectData.images.thumbnail}
                alt={`${projectData.title} 프로젝트 이미지`}
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
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl flex items-center justify-center bg-white/10 border border-white/20">
                    <ProjectIcon className="w-10 h-10 text-[var(--text-white)]" />
                  </div>
                  <p className="text-lg font-medium tracking-wider uppercase text-[var(--text-white)]">
                    {projectData.title}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 프로젝트 정보 */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-white)] mb-6 font-kr leading-tight">
              {projectData.title}
            </h1>
            <p className="text-lg text-[var(--text-white)]/80 leading-relaxed font-kr">
              {projectData.description}
            </p>
          </div>

          {/* 기술 태그 */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-white)]/60 mb-4 font-kr">
              사용 기술
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/10 px-3 py-1 rounded-lg text-sm text-[var(--text-white)]/90 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {projectData.githubUrl && (
              <a
                href={projectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-lg text-sm font-medium text-[var(--text-white)] hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
                aria-label={`${projectData.title} GitHub 저장소 보기`}
              >
                <GitHubIcon className="w-4 h-4 mr-2" />
                GitHub 보기
              </a>
            )}

            {projectData.liveUrl && (
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="live-demo-button bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 rounded-lg text-sm font-medium text-[var(--text-white)] hover:from-sky-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center"
                aria-label={`${projectData.title} 라이브 데모 보기`}
              >
                <EyeIcon className="w-4 h-4 mr-2" />
                라이브 데모
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
