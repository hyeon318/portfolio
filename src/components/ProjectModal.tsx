"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TechTag from "./TechTag";
import { ProjectIcon, GitHubIcon, ExternalLinkIcon, EyeIcon } from "./icons";

interface ProjectModalProps {
  project: {
    slug: string; // slug 필드 추가
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
                <ProjectIcon className="w-8 h-8 text-accent" />
              </div>
              <p className="text-sm font-medium tracking-wider uppercase text-[var(--text-white)]">
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
              <GitHubIcon className="w-4 h-4 mr-2" />
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
              <ExternalLinkIcon className="w-4 h-4 mr-2" />
              라이브 데모
            </a>
          )}
        </div>

        {/* 상세보기 버튼 */}
        <div className="flex flex-col gap-3 pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="liquid-glass-button btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm tracking-wider font-medium font-kr"
            aria-label={`${project.title} 상세보기 페이지로 이동`}
          >
            <EyeIcon className="w-4 h-4 mr-2" />
            자세히 보기
          </Link>

          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="w-full px-6 py-3 text-sm font-medium text-muted hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-card-hover"
            style={{ border: "1.5px solid rgba(255, 255, 255, 0.40)" }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
