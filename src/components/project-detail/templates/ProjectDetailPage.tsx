"use client";

import React, { useEffect, useState } from "react";
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
import { trackProjectDetailView } from "@/lib/gtag";

interface ProjectDetailPageProps {
  projectData: ProjectDetailData;
  projectSlug?: string;
}

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://since1994-oasis-portfolio.vercel.app/";

export default function ProjectDetailPage({
  projectData,
  projectSlug,
}: ProjectDetailPageProps) {
  // 프로젝트 상세 페이지 진입 추적
  useEffect(() => {
    trackProjectDetailView(projectData.title);
  }, [projectData.title]);

  const [currentSection, setCurrentSection] = useState("overview");

  // 섹션 스크롤 추적
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    // 모든 섹션을 관찰 대상에 추가
    const sections = ["overview", "gallery", "technical", "timeline"];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const projectUrl = `${baseUrl}/projects/${projectSlug}`;
  const imageUrl =
    projectData.images?.thumbnail ||
    `${baseUrl}/images/tabby-mansion/thumbnail1.png`;

  // 프로젝트 데이터 상태 관리
  const [currentProjectData, setCurrentProjectData] = useState(projectData);

  // 뒤로가기 시 스크롤 위치 저장

  return (
    <div className="backdrop-blur-xl min-h-screen">
      {/* 헤더 */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[var(--background)] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors duration-300">
          <Link
            href="/"
            className="text-lg font-semibold transition-colors duration-300 flex items-center gap-2"
            scroll={false}
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
        <ProjectHeader projectData={currentProjectData} />

        {/* 📌 Summary */}
        {currentProjectData.summary && (
          <ProjectSection title="Summary" icon="📌">
            <>
              {currentProjectData.summary?.text && (
                <StyledText
                  text={currentProjectData.summary.text}
                  highlight={
                    currentProjectData.cssClasses?.background?.highlight
                  }
                  gradient={currentProjectData.cssClasses?.background?.gradient}
                />
              )}
              {currentProjectData.summary?.list && (
                <ul className="list-disc list-inside space-y-4 text-lg text-[var(--text-white)]/80 font-kr pt-4">
                  {currentProjectData.summary?.list?.map((feature, index) => (
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
        {currentProjectData.background && (
          <ProjectSection title="Background" icon="📖">
            <StyledText
              text={currentProjectData.background}
              highlight={currentProjectData.cssClasses?.background?.highlight}
              gradient={currentProjectData.cssClasses?.background?.gradient}
            />
          </ProjectSection>
        )}

        {/* 💡 회고 */}
        {currentProjectData.reflection && (
          <ProjectSection title="회고" icon="💡">
            <StyledText
              text={currentProjectData.reflection}
              highlight={currentProjectData.cssClasses?.reflection?.highlight}
              gradient={currentProjectData.cssClasses?.reflection?.gradient}
            />
          </ProjectSection>
        )}

        {/* ✨ Main Features */}
        <ProjectSection title="Main Features" icon="✨">
          <ul className="list-disc list-inside space-y-4 text-lg text-[var(--text-white)]/80 font-kr">
            {currentProjectData.features.map((feature, index) => (
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
            {currentProjectData.techStack.map((tech, index) => (
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
        {currentProjectData.setupInfo && (
          <ProjectSection title="Setup & Usage" icon="⚙️">
            <ProjectSetup setupInfo={currentProjectData.setupInfo} />
          </ProjectSection>
        )}

        {/* 👥 Role & Team */}
        {currentProjectData.roleAndTeam && (
          <ProjectSection title="Role & Team" icon="👥">
            <StyledText
              text={currentProjectData.roleAndTeam}
              highlight={currentProjectData.cssClasses?.roleAndTeam?.highlight}
              gradient={currentProjectData.cssClasses?.roleAndTeam?.gradient}
            />
          </ProjectSection>
        )}

        {/* 📅 프로젝트 기간 */}
        {currentProjectData.period && (
          <ProjectSection title="프로젝트 기간" icon="📅">
            <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/10">
              <p className="text-lg font-medium text-[var(--text-white)]/90 font-kr">
                {currentProjectData.period}
              </p>
            </div>
          </ProjectSection>
        )}

        {/* 📋 프로젝트 일정 */}
        {currentProjectData.timeline &&
          currentProjectData.timeline.length > 0 && (
            <ProjectSection title="프로젝트 일정" icon="📋">
              <ProjectTimeline timeline={currentProjectData.timeline} />
            </ProjectSection>
          )}

        {/* 🎯 도전과제 */}
        {currentProjectData.challenges &&
          currentProjectData.challenges.length > 0 && (
            <ProjectSection title="도전과제" icon="🎯">
              <ProjectList items={currentProjectData.challenges} />
            </ProjectSection>
          )}

        {/* 🏆 결과물/성과 */}
        {currentProjectData.results &&
          currentProjectData.results.length > 0 && (
            <ProjectSection title="결과물/성과" icon="🏆">
              <ProjectGrid
                items={currentProjectData.results}
                gradientFrom="from-green-500/10"
                gradientTo="to-blue-500/10"
                borderColor="border-green-500/20"
              />
            </ProjectSection>
          )}

        {/* 📚 배운 점 */}
        {currentProjectData.lessons &&
          currentProjectData.lessons.length > 0 && (
            <ProjectSection title="배운 점" icon="📚">
              <ProjectList items={currentProjectData.lessons} />
            </ProjectSection>
          )}

        {/* 🚀 다음 단계/개선점 */}
        {currentProjectData.nextSteps &&
          currentProjectData.nextSteps.length > 0 && (
            <ProjectSection title="다음 단계/개선점" icon="🚀">
              <ProjectGrid
                items={currentProjectData.nextSteps}
                gradientFrom="from-purple-500/10"
                gradientTo="to-pink-500/10"
                borderColor="border-purple-500/20"
              />
            </ProjectSection>
          )}

        {/* 🖼️ 프로젝트 이미지 */}
        {currentProjectData.images && (
          <ProjectSection title="프로젝트 이미지" icon="🖼️">
            <ProjectGallery
              images={currentProjectData.images}
              title={currentProjectData.title}
            />
          </ProjectSection>
        )}
      </main>
    </div>
  );
}
