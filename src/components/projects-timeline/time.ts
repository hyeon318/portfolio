import type {
  YM,
  ProjectPeriod,
  ProjectItem,
  ParsedProjectItem,
  GlobalRange,
} from "./types";

/**
 * "YYYY.MM" 문자열을 YM 객체로 파싱
 */
export function parseYM(ymStr: string): YM {
  const [yStr, mStr] = ymStr.split(".");
  return {
    y: parseInt(yStr, 10),
    m: parseInt(mStr, 10),
  };
}

/**
 * YM 객체를 월 인덱스로 변환 (y*12 + (m-1))
 */
export function ymToIndex(ym: YM): number {
  return ym.y * 12 + (ym.m - 1);
}

/**
 * 두 YM 사이의 개월 수 차이 계산
 */
export function monthsBetween(a: YM, b: YM): number {
  return ymToIndex(b) - ymToIndex(a);
}

/**
 * "YYYY.MM - YYYY.MM" 형식의 기간 문자열을 파싱
 */
export function parsePeriod(periodStr: string): ProjectPeriod {
  const [startStr, endStr] = periodStr.split(" - ").map(s => s.trim());
  return {
    start: parseYM(startStr),
    end: parseYM(endStr),
  };
}

/**
 * 인덱스를 YM으로 변환
 */
export function indexToYM(index: number): YM {
  const y = Math.floor(index / 12);
  const m = (index % 12) + 1;
  return { y, m };
}

/**
 * YM을 "YYYY-MM" 문자열로 변환
 */
export function ymToString(ym: YM): string {
  return `${ym.y}-${ym.m.toString().padStart(2, "0")}`;
}

/**
 * 프로젝트 아이템들을 파싱하고 전역 범위 계산
 */
export function parseProjectItems(items: ProjectItem[]): {
  parsedItems: ParsedProjectItem[];
  globalRange: GlobalRange;
} {
  const parsedItems: ParsedProjectItem[] = [];
  let minStartIdx = Infinity;
  let maxEndIdx = -Infinity;

  for (const item of items) {
    if (!item.period.trim()) continue;

    try {
      const period = parsePeriod(item.period);
      const startIdx = ymToIndex(period.start);
      const endIdx = ymToIndex(period.end);

      parsedItems.push({
        ...item,
        period,
        startIdx,
        endIdx,
      });

      minStartIdx = Math.min(minStartIdx, startIdx);
      maxEndIdx = Math.max(maxEndIdx, endIdx);
    } catch (error) {
      console.warn(
        `Invalid period format for project ${item.title}: ${item.period}`
      );
    }
  }

  if (parsedItems.length === 0) {
    // 기본값 설정
    const now = new Date();
    const currentYM = { y: now.getFullYear(), m: now.getMonth() + 1 };
    const currentIdx = ymToIndex(currentYM);

    return {
      parsedItems: [],
      globalRange: {
        minStart: currentYM,
        maxEnd: currentYM,
        minStartIdx: currentIdx,
        maxEndIdx: currentIdx,
      },
    };
  }

  return {
    parsedItems,
    globalRange: {
      minStart: indexToYM(minStartIdx),
      maxEnd: indexToYM(maxEndIdx),
      minStartIdx,
      maxEndIdx,
    },
  };
}

/**
 * 월별 활성 프로젝트 개수 계산
 */
export function calculateMonthlyCount(
  parsedItems: ParsedProjectItem[],
  globalRange: GlobalRange
): Record<string, number> {
  const monthlyCounts: Record<string, number> = {};

  // 전체 범위의 모든 월을 0으로 초기화
  for (let idx = globalRange.minStartIdx; idx <= globalRange.maxEndIdx; idx++) {
    const ym = indexToYM(idx);
    const key = ymToString(ym);
    monthlyCounts[key] = 0;
  }

  // 각 프로젝트가 활성화된 월들에 카운트 추가
  for (const item of parsedItems) {
    for (let idx = item.startIdx; idx <= item.endIdx; idx++) {
      const ym = indexToYM(idx);
      const key = ymToString(ym);
      monthlyCounts[key] = (monthlyCounts[key] || 0) + 1;
    }
  }

  return monthlyCounts;
}
