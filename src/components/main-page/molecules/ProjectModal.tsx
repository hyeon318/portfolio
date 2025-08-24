"use client";

import React from "react";
import Image from "next/image";
import { TechTag } from "@/components";

interface ProjectModalProps {
  project: {
    slug?: string; // slug 필드 선택적 처리로 변경
    title: string;
    thumbnailTitle?: string;
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
    <div className="space-y-4">
      {/* 프로젝트 이미지 */}
      <div className="relative h-32 lg:h-48 overflow-hidden rounded-xl bg-background-secondary">
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
              <p className="text-lg lg:text-2xl font-bold tracking-wider uppercase text-[var(--text-white)]">
                {project.thumbnailTitle}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-muted font-kr">
          프로젝트 설명
        </h4>
      </div>
      {/* 프로젝트 설명 */}
      <p
        className="text-base leading-relaxed text-text-body font-kr"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />

      {/* 사용 기술 */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-muted font-kr">사용 기술</h4>
        <div className="flex flex-wrap gap-2 max-w-full">
          {project.tags.map((tag, index) => (
            <TechTag key={index} tech={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
