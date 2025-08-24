import React, { useMemo } from "react";
import { Section, AnimatedCard } from "@/components";
import MonthlyTimeline from "./MonthlyTimeline";
import ProjectGantt from "./ProjectGantt";
import { parseProjectItems } from "./time";
import type { ProjectItem } from "./types";

interface ProjectsTimelineProps {
  projects: ProjectItem[];
}

export default function ProjectsTimeline({ projects }: ProjectsTimelineProps) {
  // 유효한 period를 가진 프로젝트만 필터링하고 파싱
  const { parsedItems, globalRange } = useMemo(() => {
    const validProjects = projects.filter(p => p.period && p.period.trim());
    return parseProjectItems(validProjects);
  }, [projects]);

  // 유효한 프로젝트가 없으면 렌더링하지 않음
  if (parsedItems.length === 0) {
    return null;
  }

  return (
    <Section delay={0.6}>
      <div className="mb-8 text-left prose-enhanced w-full">
        <h2 className="text-2xl lg:text-3xl font-bold text-title font-kr mb-4">
          Project Analytics
        </h2>
        <p className="text-sm lg:text-base leading-relaxed font-kr max-w-3xl">
          프로젝트 진행 현황을 시각적으로 분석하여 월별 활동량과 전체 타임라인을
          한눈에 확인할 수 있습니다.
        </p>
      </div>

      {/* 2-up 레이아웃 (모바일에서는 1-up) */}
      <section
        className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 max-w-5xl w-full"
        aria-label="프로젝트 분석 차트"
      >
        <AnimatedCard delay={0.1}>
          <MonthlyTimeline
            parsedItems={parsedItems}
            globalRange={globalRange}
          />
        </AnimatedCard>
        <AnimatedCard delay={0.1}>
          <ProjectGantt parsedItems={parsedItems} globalRange={globalRange} />
        </AnimatedCard>
      </section>
    </Section>
  );
}

// 타입과 유틸리티 함수들을 re-export
export type { ProjectItem } from "./types";
export { parseProjectItems } from "./time";
