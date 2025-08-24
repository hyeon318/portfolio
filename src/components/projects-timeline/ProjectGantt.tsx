"use client";
import React, { useMemo } from "react";
import type { ParsedProjectItem, GlobalRange, LaneItem } from "./types";
import { indexToYM } from "./time";

interface ProjectGanttProps {
  parsedItems: ParsedProjectItem[];
  globalRange: GlobalRange;
}

// 프로젝트별 색상 팔레트
const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-cyan-500",
];

export default function ProjectGantt({
  parsedItems,
  globalRange,
}: ProjectGanttProps) {
  // Lane 배치 알고리즘
  const laneItems = useMemo(() => {
    const sorted = [...parsedItems].sort((a, b) => a.startIdx - b.startIdx);
    const lanes: number[] = []; // lanes[i] = lane i의 마지막 endIdx
    const items: LaneItem[] = [];

    for (const item of sorted) {
      // 사용 가능한 lane 찾기
      let assignedLane = -1;
      for (let i = 0; i < lanes.length; i++) {
        if (item.startIdx > lanes[i]) {
          assignedLane = i;
          break;
        }
      }

      // 새 lane이 필요한 경우
      if (assignedLane === -1) {
        assignedLane = lanes.length;
        lanes.push(item.endIdx);
      } else {
        lanes[assignedLane] = item.endIdx;
      }

      items.push({
        ...item,
        lane: assignedLane,
        color: colors[items.length % colors.length],
      });
    }

    return { items, totalLanes: lanes.length };
  }, [parsedItems]);

  // 월별 그리드 생성
  const monthsGrid = useMemo(() => {
    const months = [];
    for (
      let idx = globalRange.minStartIdx;
      idx <= globalRange.maxEndIdx;
      idx++
    ) {
      const ym = indexToYM(idx);
      months.push({
        idx,
        year: ym.y,
        month: ym.m,
        label: `${ym.y}.${ym.m.toString().padStart(2, "0")}`,
      });
    }
    return months;
  }, [globalRange]);

  const totalMonths = globalRange.maxEndIdx - globalRange.minStartIdx + 1;
  // 350px 외부 div에서 헤더와 패딩을 제외한 높이 계산
  const headerHeight = 35; // 헤더 텍스트 + mb-4
  const padding = 32; // p-4 * 2 (상하)
  const availableHeight = 350 - headerHeight - padding;
  const containerHeight = Math.min(
    availableHeight,
    Math.max(180, laneItems.totalLanes * 35 + 80)
  );

  return (
    <div
      className="h-full p-4 rounded-2xl border border-border/50"
      style={{
        height: "350px",
        background:
          "linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(239, 68, 68, 0.05) 100%)",
      }}
    >
      {/* 헤더 */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-title font-kr mb-2">
          Project Timeline
        </h3>
        <p className="text-sm text-muted font-kr">
          프로젝트별 진행 기간을 간트 차트로 표시합니다
        </p>
      </div>

      {/* 컨텐츠 */}
      <div className="relative" style={{ height: `${containerHeight}px` }}>
        <div className="absolute inset-0 overflow-auto">
          <div
            style={{
              minWidth: `${totalMonths * 35}px`,
            }}
          >
            {/* Sticky 헤더 */}
            <div className="sticky top-0 z-10 bg-background border-b border-border/50">
              <div className="flex">
                {monthsGrid.map((month, idx) => (
                  <div
                    key={month.idx}
                    className="flex-shrink-0 w-15 p-1 text-xs text-muted text-center border-r border-border/20"
                    style={{ width: "35px" }}
                  >
                    <div className="font-medium">{month.year}</div>
                    <div>{month.month.toString().padStart(2, "0")}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 월별 그리드 라인 */}
            <div className="absolute inset-0 top-12 pointer-events-none">
              {monthsGrid.map((month, idx) => (
                <div
                  key={month.idx}
                  className="absolute top-0 bottom-0 border-l border-border/10"
                  style={{
                    left: `${idx * 35}px`,
                  }}
                />
              ))}
            </div>

            {/* 프로젝트 막대들 */}
            <div className="relative pt-3">
              {laneItems.items.map((item, idx) => {
                const startOffset =
                  (item.startIdx - globalRange.minStartIdx) * 35;
                const width = (item.endIdx - item.startIdx + 1) * 35 - 4;
                const top = item.lane * 35 + 4;

                // 텍스트가 들어갈 공간이 충분한지 확인
                const hasSpaceForText = width > 80;

                return (
                  <div key={idx} className="absolute">
                    {/* 프로젝트 막대 */}
                    <div
                      className={`${item.color} rounded text-white text-xs flex items-center relative overflow-hidden`}
                      style={{
                        left: `${startOffset + 2}px`,
                        top: `${top}px`,
                        width: `${Math.max(width, 20)}px`,
                        height: "20px",
                      }}
                      title={`${item.title} (${
                        item.period.start.y
                      }.${item.period.start.m.toString().padStart(2, "0")} - ${
                        item.period.end.y
                      }.${item.period.end.m.toString().padStart(2, "0")})`}
                    >
                      {hasSpaceForText && (
                        <span className="px-2 truncate font-medium">
                          {item.title}
                        </span>
                      )}
                    </div>

                    {/* 막대가 짧을 때 위쪽에 라벨 표시 */}
                    {!hasSpaceForText && (
                      <div
                        className="absolute text-xs text-foreground font-medium truncate"
                        style={{
                          left: `${startOffset + 2}px`,
                          top: `${top - 8}px`,
                          maxWidth: `${Math.max(width, 100)}px`,
                        }}
                      >
                        {item.title}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
