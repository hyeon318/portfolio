"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ProjectDetailData } from "@/types";
import {
  ArrowLeftIcon,
  ProjectHeader,
  ProjectSection,
  ProjectTimeline,
  ProjectList,
  ProjectGrid,
  ProjectSetup,
  StyledText,
  ProjectGallery,
} from "@/components";

interface ProjectDetailPageProps {
  projectData: ProjectDetailData;
}

export default function ProjectDetailPage({
  projectData,
}: ProjectDetailPageProps) {
  // 뒤로가기 시 스크롤 위치 저장
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem(
        "mainPageScrollPosition",
        window.scrollY.toString()
      );
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <div className="bg-[#0A0F1C] text-[var(--text-white)]/90 backdrop-blur-xl min-h-screen">
      {/* 헤더 */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-[var(--text-white)] hover:text-sky-400 transition-colors duration-300 flex items-center gap-2"
            onClick={() => {
              sessionStorage.setItem(
                "mainPageScrollPosition",
                window.scrollY.toString()
              );
            }}
          >
            <ArrowLeftIcon className="w-5 h-5" />
            포트폴리오로 돌아가기
          </Link>
          <div className="text-sm text-[var(--text-white)]/60 font-en">
            Project Detail
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* 프로젝트 헤더 */}
        <ProjectHeader projectData={projectData} />

        {/* 📌 Summary */}
        {projectData.summary && (
          <ProjectSection title="Summary" icon="📌">
            <>
              {projectData.summary?.text && (
                <StyledText
                  text={projectData.summary.text}
                  highlight={projectData.cssClasses?.background?.highlight}
                  gradient={projectData.cssClasses?.background?.gradient}
                />
              )}
              {projectData.summary?.list && (
                <ul className="list-disc list-inside space-y-4 text-lg text-[var(--text-white)]/80 font-kr pt-4">
                  {projectData.summary?.list?.map((feature, index) => (
                    <li key={index}>
                      <span
                        className="bg-white/10 px-2 py-1 rounded-lg text-sm font-medium"
                        dangerouslySetInnerHTML={{ __html: feature }}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </>
          </ProjectSection>
        )}

        {/* 📖 Background */}
        {projectData.background && (
          <ProjectSection title="Background" icon="📖">
            <StyledText
              text={projectData.background}
              highlight={projectData.cssClasses?.background?.highlight}
              gradient={projectData.cssClasses?.background?.gradient}
            />
          </ProjectSection>
        )}

        {/* 💡 회고 */}
        {projectData.reflection && (
          <ProjectSection title="회고" icon="💡">
            <StyledText
              text={projectData.reflection}
              highlight={projectData.cssClasses?.reflection?.highlight}
              gradient={projectData.cssClasses?.reflection?.gradient}
            />
          </ProjectSection>
        )}

        {/* ✨ Main Features */}
        <ProjectSection title="Main Features" icon="✨">
          <ul className="list-disc list-inside space-y-4 text-lg text-[var(--text-white)]/80 font-kr">
            {projectData.features.map((feature, index) => (
              <li key={index}>
                <span className="bg-white/10 px-2 py-1 rounded-lg text-sm font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </ProjectSection>

        {/* 🧪 Tech Stack */}
        <ProjectSection title="Tech Stack" icon="🧪">
          <div className="flex flex-wrap gap-3">
            {projectData.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-white/10 px-3 py-2 rounded-lg text-sm text-[var(--text-white)]/90 font-medium backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </ProjectSection>

        {/* ⚙️ Setup & Usage */}
        {projectData.setupInfo && (
          <ProjectSection title="Setup & Usage" icon="⚙️">
            <ProjectSetup setupInfo={projectData.setupInfo} />
          </ProjectSection>
        )}

        {/* 👥 Role & Team */}
        {projectData.roleAndTeam && (
          <ProjectSection title="Role & Team" icon="👥">
            <StyledText
              text={projectData.roleAndTeam}
              highlight={projectData.cssClasses?.roleAndTeam?.highlight}
              gradient={projectData.cssClasses?.roleAndTeam?.gradient}
            />
          </ProjectSection>
        )}

        {/* 📅 프로젝트 기간 */}
        {projectData.period && (
          <ProjectSection title="프로젝트 기간" icon="📅">
            <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
              <p className="text-lg font-medium text-[var(--text-white)]/90 font-kr">
                {projectData.period}
              </p>
            </div>
          </ProjectSection>
        )}

        {/* 📋 프로젝트 일정 */}
        {projectData.timeline && projectData.timeline.length > 0 && (
          <ProjectSection title="프로젝트 일정" icon="📋">
            <ProjectTimeline timeline={projectData.timeline} />
          </ProjectSection>
        )}

        {/* 🎯 도전과제 */}
        {projectData.challenges && projectData.challenges.length > 0 && (
          <ProjectSection title="도전과제" icon="🎯">
            <ProjectList items={projectData.challenges} />
          </ProjectSection>
        )}

        {/* 🏆 결과물/성과 */}
        {projectData.results && projectData.results.length > 0 && (
          <ProjectSection title="결과물/성과" icon="🏆">
            <ProjectGrid
              items={projectData.results}
              gradientFrom="from-green-500/10"
              gradientTo="to-blue-500/10"
              borderColor="border-green-500/20"
            />
          </ProjectSection>
        )}

        {/* 📚 배운 점 */}
        {projectData.lessons && projectData.lessons.length > 0 && (
          <ProjectSection title="배운 점" icon="📚">
            <ProjectList items={projectData.lessons} />
          </ProjectSection>
        )}

        {/* 🚀 다음 단계/개선점 */}
        {projectData.nextSteps && projectData.nextSteps.length > 0 && (
          <ProjectSection title="다음 단계/개선점" icon="🚀">
            <ProjectGrid
              items={projectData.nextSteps}
              gradientFrom="from-purple-500/10"
              gradientTo="to-pink-500/10"
              borderColor="border-purple-500/20"
            />
          </ProjectSection>
        )}

        {/* 🖼️ 프로젝트 이미지 */}
        {projectData.images && (
          <ProjectSection title="프로젝트 이미지" icon="🖼️">
            <ProjectGallery
              images={projectData.images}
              title={projectData.title}
            />
          </ProjectSection>
        )}
      </main>
    </div>
  );
}
