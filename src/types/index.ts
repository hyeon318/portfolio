// Component Props Types
export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  number?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface TimelineItemProps {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies?: string[];
}

// Data Types
export interface AboutData {
  intro: string[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  slug: string; // 상세 페이지와 연결하기 위한 고유 식별자
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

// 프로젝트 상세 페이지 타입들
export interface ProjectSetupInfo {
  github: string;
  liveDemo: string;
  deployment: string;
}

export interface ProjectTimeline {
  phase: string;
  duration: string;
  description: string;
  achievements?: string[];
}

export interface ProjectDetailData {
  title: string;
  description: string;
  summary?: {
    list?: string[];
    text?: string;
  };
  background: string;
  features: string[];
  techStack: string[];
  image?: string | null;
  githubUrl?: string;
  liveUrl?: string;
  setupInfo?: ProjectSetupInfo;
  roleAndTeam?: string;
  reflection?: string;

  // 추가 필수 요소들
  period?: string; // 프로젝트 기간 (예: "2024.01 - 2024.03")
  timeline?: ProjectTimeline[]; // 프로젝트 일정
  challenges?: string[]; // 도전과제
  results?: string[]; // 결과물/성과
  lessons?: string[]; // 배운 점
  nextSteps?: string[]; // 다음 단계/개선점

  // CSS 클래스 정보
  cssClasses?: {
    summary?: {
      highlight?: string;
      gradient?: string;
    };
    background?: {
      highlight?: string;
      gradient?: string;
    };
    roleAndTeam?: {
      highlight?: string;
      gradient?: string;
    };
    reflection?: {
      highlight?: string;
      gradient?: string;
    };
  };
}

export interface ContactData {
  email: string;
  message: string;
}

// Navigation Types
export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
