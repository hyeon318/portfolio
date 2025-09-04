// Google Analytics 이벤트 추적 유틸리티

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// GA 이벤트 추적 함수
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// 페이지뷰 추적
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-5X9RPLWSNB", {
      page_path: url,
    });
  }
};

// 스크롤 추적
export const trackScroll = (scrollDepth: number) => {
  trackEvent(
    "scroll",
    "engagement",
    `scroll_depth_${scrollDepth}%`,
    scrollDepth
  );
};

// ===== 프로젝트 관련 추적 =====
// 프로젝트 카드 클릭 (메인 페이지)
export const trackProjectCardClick = (projectName: string) => {
  trackEvent("click", "project_card", `main_page_${projectName}`);
};

// 프로젝트 상세 페이지 진입
export const trackProjectDetailView = (projectName: string) => {
  trackEvent("view", "project_detail", `detail_page_${projectName}`);
};

// 프로젝트 라이브 데모 클릭
export const trackProjectLiveDemo = (
  projectName: string,
  location: "main" | "detail"
) => {
  trackEvent("click", "project_live_demo", `${location}_page_${projectName}`);
};

// 프로젝트 GitHub 클릭
export const trackProjectGitHub = (
  projectName: string,
  location: "main" | "detail"
) => {
  trackEvent("click", "project_github", `${location}_page_${projectName}`);
};

// ===== 다운로드 관련 추적 =====
// 이력서 다운로드 (위치별)
export const trackResumeDownload = (
  fileName: string,
  location: "hero_pc" | "hero_mobile" | "contact"
) => {
  trackEvent("download", "resume", `${location}_${fileName}`);
};

// 포트폴리오 다운로드 (위치별)
export const trackPortfolioDownload = (
  fileName: string,
  location: "hero_pc" | "hero_mobile" | "contact"
) => {
  trackEvent("download", "portfolio", `${location}_${fileName}`);
};

// ===== 연락처 관련 추적 =====
// 이메일 버튼 클릭 (위치별)
export const trackEmailClick = (
  location: "hero_pc" | "hero_mobile" | "contact"
) => {
  trackEvent("click", "email", `email_${location}`);
};

// GitHub 링크 클릭 (위치별)
export const trackGithubClick = (
  location: "hero_pc" | "hero_mobile" | "contact"
) => {
  trackEvent("click", "github", `github_${location}`);
};

// ===== 네비게이션 관련 추적 =====
// 사이드바 메뉴 클릭
export const trackSidebarMenuClick = (menuItem: string) => {
  trackEvent("click", "sidebar_menu", `menu_${menuItem}`);
};

// 스크롤 투 탑 버튼 클릭
export const trackScrollToTopClick = () => {
  trackEvent("click", "scroll_to_top", "scroll_to_top_button");
};

// ===== 외부 링크 추적 =====
// 외부 링크 클릭 (일반)
export const trackExternalLink = (url: string, linkType: string) => {
  trackEvent("click", "external_link", `${linkType}_${url}`);
};

// ===== 기타 추적 =====
// 섹션 뷰 (Intersection Observer로 구현 가능)
export const trackSectionView = (sectionName: string) => {
  trackEvent("view", "section", `section_${sectionName}`);
};

// 모달 열기/닫기
export const trackModalAction = (
  action: "open" | "close",
  modalType: string
) => {
  trackEvent(action, "modal", `modal_${modalType}`);
};
