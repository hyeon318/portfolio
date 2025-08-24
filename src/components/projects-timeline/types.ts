export interface YM {
  y: number;
  m: number;
}

export interface ProjectPeriod {
  start: YM;
  end: YM;
}

export interface ProjectItem {
  slug?: string;
  title: string;
  period?: string;
}

export interface ParsedProjectItem {
  slug: string;
  title: string;
  period: ProjectPeriod;
  startIdx: number;
  endIdx: number;
}

export interface LaneItem extends ParsedProjectItem {
  lane: number;
  color: string;
}

export interface MonthlyCount {
  [key: string]: number; // "YYYY-MM" -> count
}

export interface GlobalRange {
  minStart: YM;
  maxEnd: YM;
  minStartIdx: number;
  maxEndIdx: number;
}
