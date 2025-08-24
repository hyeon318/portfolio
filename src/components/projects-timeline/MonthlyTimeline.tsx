"use client";
import React, { useMemo, useState } from "react";
import type { ParsedProjectItem, GlobalRange } from "./types";
import {
  calculateMonthlyCount,
  indexToYM,
  ymToString,
  ymToIndex,
} from "./time";

interface MonthlyTimelineProps {
  parsedItems: ParsedProjectItem[];
  globalRange: GlobalRange;
}

export default function MonthlyTimeline({
  parsedItems,
  globalRange,
}: MonthlyTimelineProps) {
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    x: number;
    y: number;
    content: string[];
    month: string;
  }>({
    show: false,
    x: 0,
    y: 0,
    content: [],
    month: "",
  });
  const monthlyCounts = useMemo(
    () => calculateMonthlyCount(parsedItems, globalRange),
    [parsedItems, globalRange]
  );

  // 최대값을 기준으로 5단계 색상 레벨 계산
  const maxCount = Math.max(...Object.values(monthlyCounts));

  const getColorClass = (count: number): string => {
    if (count === 0) return "bg-gray-100 dark:bg-gray-800";

    const ratio = count / maxCount;
    if (ratio <= 0.2) return "bg-green-200 dark:bg-green-900";
    if (ratio <= 0.4) return "bg-green-300 dark:bg-green-800";
    if (ratio <= 0.6) return "bg-green-400 dark:bg-green-700";
    if (ratio <= 0.8) return "bg-green-500 dark:bg-green-600";
    return "bg-green-600 dark:bg-green-500";
  };

  // 연도별로 그룹화
  const years = useMemo(() => {
    const yearSet = new Set<number>();
    for (
      let idx = globalRange.minStartIdx;
      idx <= globalRange.maxEndIdx;
      idx++
    ) {
      const ym = indexToYM(idx);
      yearSet.add(ym.y);
    }
    return Array.from(yearSet).sort();
  }, [globalRange]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // 통계 계산
  const totalMonths = Object.keys(monthlyCounts).length;
  const activeMonths = Object.values(monthlyCounts).filter(
    count => count > 0
  ).length;
  const totalProjects = Object.values(monthlyCounts).reduce(
    (sum, count) => sum + count,
    0
  );

  // 특정 월에 진행 중인 프로젝트 목록 계산
  const getProjectsForMonth = (year: number, month: number): string[] => {
    const monthKey = ymToString({ y: year, m: month });
    const monthIdx = ymToIndex({ y: year, m: month });

    return parsedItems
      .filter(item => monthIdx >= item.startIdx && monthIdx <= item.endIdx)
      .map(item => item.title);
  };

  return (
    <div
      className="h-full p-4 rounded-2xl border border-border/50"
      style={{
        height: "350px",
        background:
          "linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
      }}
    >
      {/* 헤더 */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-title font-kr mb-2">
          Monthly Activity
        </h3>
        <p className="text-sm text-muted font-kr">
          <span className="font-medium text-foreground">{activeMonths}</span>{" "}
          개월간 활동 기록
        </p>
      </div>

      {/* 컨텐츠 */}
      <div>
        <div className="space-y-4">
          {/* 히트맵 그리드 */}
          <div className="overflow-x-auto">
            <div className="min-w-max">
              {/* 월 헤더 */}
              <div className="flex items-center mb-3">
                <div className="w-12 text-xs text-muted font-medium"></div>
                {months.map((month, idx) => (
                  <div
                    key={idx}
                    className="w-5 text-xs text-muted text-center font-medium"
                  >
                    {month.charAt(0)}
                  </div>
                ))}
              </div>

              {/* 연도별 행 */}
              <div className="space-y-1">
                {years.map(year => (
                  <div key={year} className="flex items-center">
                    <div className="w-12 text-xs text-muted text-right pr-3 font-medium">
                      {year}
                    </div>
                    {months.map((_, monthIndex) => {
                      const month = monthIndex + 1;
                      const key = ymToString({ y: year, m: month });
                      const count = monthlyCounts[key] || 0;
                      const projects = getProjectsForMonth(year, month);

                      return (
                        <div
                          key={monthIndex}
                          className={`w-4 h-4 mr-1 rounded-sm ${getColorClass(
                            count
                          )} border border-border/10 cursor-pointer hover:border-border/40 transition-colors`}
                          onMouseEnter={e => {
                            if (projects.length > 0) {
                              const rect =
                                e.currentTarget.getBoundingClientRect();
                              setTooltip({
                                show: true,
                                x: rect.left + rect.width / 2,
                                y: rect.top - 10,
                                content: projects,
                                month: `${year}.${month
                                  .toString()
                                  .padStart(2, "0")}`,
                              });
                            }
                          }}
                          onMouseLeave={() =>
                            setTooltip(prev => ({ ...prev, show: false }))
                          }
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 하단 정보 */}
          <div className="flex items-center justify-between pt-3 border-t border-border/30">
            {/* 범례 */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted font-kr">Less</span>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-100 dark:bg-gray-800 rounded-sm border border-border/20" />
                <div className="w-3 h-3 bg-green-200 dark:bg-green-900 rounded-sm border border-border/20" />
                <div className="w-3 h-3 bg-green-300 dark:bg-green-800 rounded-sm border border-border/20" />
                <div className="w-3 h-3 bg-green-400 dark:bg-green-700 rounded-sm border border-border/20" />
                <div className="w-3 h-3 bg-green-500 dark:bg-green-600 rounded-sm border border-border/20" />
                <div className="w-3 h-3 bg-green-600 dark:bg-green-500 rounded-sm border border-border/20" />
              </div>
              <span className="text-xs text-muted font-kr">More</span>
            </div>

            {/* 통계 정보 */}
            <div className="text-xs text-muted font-kr">
              <span className="text-foreground font-medium">
                {totalProjects}
              </span>{" "}
              projects in the last months
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.show && tooltip.content.length > 0 && (
        <div
          className="fixed z-50 px-3 py-2 bg-[var(--background)] border border-border/50 rounded-lg shadow-lg text-xs font-kr pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translateX(-50%) translateY(-100%)",
          }}
        >
          <div className="font-medium text-foreground mb-1">
            {tooltip.month}
          </div>
          <div className="text-muted space-y-1">
            {tooltip.content.map((project, idx) => (
              <div key={idx} className="whitespace-nowrap">
                • {project}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
