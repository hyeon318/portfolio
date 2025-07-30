import { ProjectDetailData } from "@/types";

// 프로젝트 데이터를 객체 형태로 정의
export const projectData: Record<string, ProjectDetailData> = {
  anytoon: {
    title: "애니툰 웹툰 서비스",
    description:
      "기존 기존 PHP 기반의 대형 웹툰 서비스를 Java Spring 기반으로 전면 리뉴얼한 프로젝트입니다. 약 400만 명의 가입자와 주간 사용자 5만 명 규모의 플랫폼으로, 실시간 결제, 콘텐츠 제공, 사용자 관리, 외부 API 연동 등 핵심 기능을 설계부터 개발까지 담당했습니다.",
    summary: {
      text: "400만 회원을 대상으로 한 웹툰 서비스를 PHP에서 Java Spring 기반으로 리뉴얼하여, 성능 및 유지보수성을 획기적으로 개선한 프로젝트입니다.",
      list: [
        "400만 가입자를 보유한 웹툰 플랫폼의 전면 리뉴얼 및 기능 고도화",
        "PHP 기반 웹툰 서비스를 Java Spring 기반으로 전환하여 트래픽 안정성 확보 및 유지보수 효율성 개선",
        "Guava Caching, Lazy Loading 등 성능 최적화를 통해 콘텐츠 로딩 속도 4초 → 1초 미만으로 개선",
        "결제, 프로모션, 외부 API 연동 등 핵심 서비스 전반 설계 및 개발 주도",
        "월 평균 결제 3.5억 원, WAU 5만 명의 안정적인 운영 지원",
      ],
    },
    background:
      "기존 PHP 기반 서비스는 자정 무렵 트래픽 급증에 따른 백화현상과 서버 멈춤 문제가 반복적으로 발생했으며, PHP 개발자 수급 문제로 인해 기능 업데이트도 더디게 진행되고 있었습니다. " +
      "이전 OK 캐시백 프로젝트에서 Java 기반 서비스의 안정성을 확인한 후, 애니툰 본 서비스도 Java Spring으로 전환하기로 결정하였습니다. " +
      "기존 서비스가 운영 중인 상황에서 장기화될 경우 리스크가 크다고 판단하여, 6개월 내 완료를 목표로 빠르게 진행되었습니다.",
    features: [
      "콘텐츠 등록 및 수정 워크플로우 개선",
      "사용자 접근 권한 설정 기능",
      "이미지 압축 및 서브 타이틀 자동 생성 기능",
    ],
    techStack: [
      "Java",
      "Spring",
      "JSP",
      "MyBatis",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Guava Caching",
    ],
    images: {
      thumbnail: "/images/anytoon/thumbnail1.jpg",
      preview: [
        "/images/anytoon/app1.webp",
        "/images/anytoon/app2.webp",
        "/images/anytoon/app3.webp",
        "/images/anytoon/app4.webp",
        "/images/anytoon/app5.webp",
        "/images/anytoon/app6.webp",
        "/images/anytoon/애니툰메인화면.png",
      ],
    },
    liveUrl: "https://www.anytoon.co.kr/webtoon/main",
    period: "2021.07 - 2025.04",
    setupInfo: {
      github: "",
      liveDemo: "https://www.anytoon.co.kr/webtoon/main",
      deployment: "",
    },
    roleAndTeam: "총 4인 구성 (본인: 프론트엔드 30% + 백엔드 30%)",
    reflection:
      "짧은 개발 기간 안에 완성해야 했고, 기존 서비스의 문서화가 전혀 되어 있지 않아 리뉴얼 과정에서 많은 시행착오를 겪었습니다. 기존 사이트를 직접 분석하며 기능과 흐름을 파악해야 했고, 그 과정에서 예상치 못한 기능 누락 및 캐싱 관련 문제가 발생해 3차례 롤백을 진행하기도 했습니다." +
      "특히, 마케팅 기능 누락과 Guava 캐시의 메모리 공유 이슈는 프로젝트를 롤백하는데 큰 영향을 주었고, 당시에는 사내에서 사용 중이던 오래된 캐싱 라이브러리를 학습 없이 그대로 적용한 것이 큰 원인이었습니다. 이 경험을 통해 이후에는 라이브러리 도입 시 개발 시기와 사용자 규모를 먼저 확인하는 습관을 갖게 되었습니다." +
      "비록 어려움이 많았지만, 프로젝트를 성공적으로 마무리한 후에는 다양한 프로모션 운영 경험을 통해 DB 구조와 서비스 흐름에 대한 이해도가 크게 향상되었습니다.",

    // 프로젝트 일정
  },

  "anytoon-translation": {
    title: "웹툰 번역 및 식자 프로그램 개발",
    description:
      "웹 기반의 번역 및 식자 툴을 개발하여 PSD 파일을 이미지로 변환하고 텍스트 편집이 가능한 캔버스 기반 UI를 구현했습니다. 번역·식자 업무의 생산성을 높였습니다.",
    summary: {
      text: "웹툰 번역 및 식자 업무의 생산성을 높이기 위한 웹 기반 도구 개발.",
    },
    background:
      "기존 번역·식자 업무는 수동으로 진행되어 시간이 오래 걸리고 실수가 발생하는 문제가 있었음.",
    features: [
      "PSD 파일을 이미지로 변환하는 기능",
      "캔버스 기반 텍스트 편집 UI",
      "번역·식자 작업 워크플로우 개선",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Konva",
      "Fabric.js",
      "Python",
    ],
    images: {
      thumbnail: "/images/애니툰메인화면.png",
      preview: ["/images/애니툰메인화면.png"],
    },
    githubUrl: "",
    liveUrl: "https://www.anytoon.co.kr/webtoon/main",
    period: "2024.09 - 2024.11",
    setupInfo: {
      github: "",
      liveDemo: "https://www.anytoon.co.kr/webtoon/main",
      deployment: "Vercel 기반",
    },
    roleAndTeam: "개인 프로젝트 (본인: 프론트엔드 100% 개발)",
    reflection:
      "캔버스 라이브러리 활용에 어려움이 있었지만, 문서화와 커뮤니티 도움으로 해결.",

    // 프로젝트 일정
    timeline: [
      {
        phase: "요구사항 분석",
        duration: "2024.09",
        description: "번역·식자 업무 프로세스 분석 및 요구사항 정의",
        achievements: [
          "기존 업무 프로세스 분석 완료",
          "사용자 인터뷰 및 요구사항 수집",
          "기술 스택 선정 및 아키텍처 설계",
        ],
      },
      {
        phase: "프론트엔드 개발",
        duration: "2024.10",
        description: "React 기반 웹 애플리케이션 개발",
        achievements: [
          "캔버스 기반 텍스트 편집 UI 구현",
          "PSD 파일 파싱 및 이미지 변환 기능 개발",
          "실시간 협업 기능 구현",
        ],
      },
      {
        phase: "테스트 및 배포",
        duration: "2024.11",
        description: "사용자 테스트 및 프로덕션 배포",
        achievements: [
          "사용자 테스트 및 피드백 수집",
          "성능 최적화 및 버그 수정",
          "프로덕션 환경 배포",
        ],
      },
    ],

    // 도전과제
    challenges: [
      "PSD 파일 파싱 및 이미지 처리",
      "캔버스 기반 텍스트 편집 구현",
      "실시간 협업 기능 구현",
      "대용량 이미지 처리 최적화",
    ],

    // 결과물/성과
    results: [
      "번역·식자 업무 시간 50% 단축",
      "작업 오류율 30% 감소",
      "사용자 만족도 90% 달성",
      "실시간 협업 기능으로 팀 효율성 향상",
    ],

    // 배운 점
    lessons: [
      "캔버스 라이브러리 활용 방법",
      "이미지 처리 및 최적화 기법",
      "실시간 협업 시스템 설계",
      "사용자 중심 UI/UX 설계",
    ],

    // 다음 단계/개선점
    nextSteps: [
      "AI 기반 자동 번역 기능 추가",
      "모바일 앱 개발",
      "다국어 지원 확대",
      "클라우드 기반 협업 기능 강화",
    ],

    cssClasses: {
      summary: {
        highlight: "번역·식자 업무",
        gradient: "웹 기반 도구 개발",
      },
      background: {
        highlight: "수동으로 진행",
        gradient: "시간이 오래 걸리고 실수가 발생",
      },
      roleAndTeam: {
        highlight: "개인 프로젝트",
        gradient: "프론트엔드 100% 개발",
      },
      reflection: {
        highlight: "캔버스 라이브러리 활용",
        gradient: "문서화와 커뮤니티 도움",
      },
    },
  },

  "anytoon-global": {
    title: "애니툰 글로벌 서비스 구축",
    description:
      "다국어 지원을 위한 i18n 시스템을 구축하고 OAuth 기반 글로벌 로그인 기능을 개발했습니다. SSR과 SSG를 활용하여 글로벌 사용자에 대한 성능을 최적화했습니다.",
    summary: {
      text: "다국어 지원과 글로벌 사용자를 위한 성능 최적화 시스템 구축.",
    },
    background: "기존 서비스는 한국어만 지원하여 글로벌 확장이 어려웠음.",
    features: [
      "i18n 다국어 지원 시스템",
      "OAuth 글로벌 로그인 기능",
      "SSR/SSG 성능 최적화",
    ],
    techStack: ["Next.js", "React", "i18next", "OAuth", "TypeScript"],
    githubUrl: "",
    liveUrl: "https://www.anytoon.co.kr/webtoon/main",
    setupInfo: {
      github: "",
      liveDemo: "https://www.anytoon.co.kr/webtoon/main",
      deployment: "Vercel 기반",
    },
    roleAndTeam: "개인 프로젝트 (본인: 프론트엔드 100% 개발)",
    reflection:
      "다국어 시스템 설계에 어려움이 있었지만, i18next 라이브러리로 해결.",
    cssClasses: {
      summary: {
        highlight: "다국어 지원",
        gradient: "글로벌 사용자를 위한",
      },
      background: {
        highlight: "한국어만 지원",
        gradient: "글로벌 확장이 어려웠음",
      },
      roleAndTeam: {
        highlight: "개인 프로젝트",
        gradient: "프론트엔드 100% 개발",
      },
      reflection: {
        highlight: "다국어 시스템 설계",
        gradient: "i18next 라이브러리",
      },
    },
  },

  "anytoon-cp": {
    title: "CP 콘텐츠 관리 시스템",
    description:
      "CP(콘텐츠 제공자)가 웹툰/소설 콘텐츠를 직접 업로드하고 사용자 통계를 조회할 수 있도록 하는 내부 관리 시스템을 개발했습니다.",
    summary: {
      text: "CP(콘텐츠 제공자)가 직접 콘텐츠를 관리할 수 있는 웹 기반 관리 시스템 개발.",
    },
    background:
      "기존에는 관리자가 모든 콘텐츠를 직접 관리해야 했지만, CP가 직접 관리할 수 있는 시스템이 필요했음.",
    features: [
      "콘텐츠 업로드 및 수정 기능",
      "사용자 통계 조회 기능",
      "권한 관리 시스템",
    ],
    techStack: ["React", "React Query", "Java", "Spring Boot", "JPA", "MySQL"],
    githubUrl: "",
    liveUrl: "https://anycp.anytoon.co.kr/login",
    setupInfo: {
      github: "",
      liveDemo: "https://anycp.anytoon.co.kr/login",
      deployment: "AWS EC2 기반",
    },
    roleAndTeam: "총 2인 구성 (본인: 프론트엔드 100% + 백엔드 API 일부 개발)",
    reflection:
      "권한 관리와 파일 업로드 로직 설계에 어려움이 있었지만, 설계 문서화를 통해 명확히 해결.",
    cssClasses: {
      summary: {
        highlight: "CP(콘텐츠 제공자)",
        gradient: "직접 콘텐츠를 관리할 수 있는",
      },
      background: {
        highlight: "관리자가 모든 콘텐츠를 직접 관리",
        gradient: "CP가 직접 관리할 수 있는 시스템",
      },
      roleAndTeam: {
        highlight: "2인 구성",
        gradient: "프론트엔드 100% + 백엔드 API 일부 개발",
      },
      reflection: {
        highlight: "권한 관리와 파일 업로드 로직",
        gradient: "설계 문서화",
      },
    },
  },

  test: {
    title: "테스트 프로젝트 - 모든 요소 확인",
    description:
      "이 프로젝트는 모든 상세 정보 요소들이 어떻게 표시되는지 확인하기 위한 테스트 프로젝트입니다. 각 섹션의 스타일과 레이아웃을 확인할 수 있습니다.",
    summary: {
      text: "모든 프로젝트 상세 정보 요소들을 포함한 테스트 프로젝트로, 각 섹션의 표시 방식을 확인할 수 있습니다.",
    },
    background:
      "프로젝트 상세 페이지의 모든 요소들이 올바르게 표시되는지 확인하기 위해 생성된 테스트 프로젝트입니다.",
    features: [
      "모든 섹션 표시 테스트",
      "조건부 렌더링 확인",
      "스타일링 검증",
      "반응형 레이아웃 테스트",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Framer Motion",
    ],
    images: {
      thumbnail: "/images/애니툰메인화면.png",
      preview: ["/images/애니툰메인화면.png"],
    },
    githubUrl: "https://github.com/test",
    liveUrl: "https://test-project.com",
    period: "2024.01 - 2024.12",
    setupInfo: {
      github: "https://github.com/test",
      liveDemo: "https://test-project.com",
      deployment: "Vercel + Docker 기반",
    },
    roleAndTeam: "개인 프로젝트 (본인: 프론트엔드 100% + 백엔드 50% 개발)",
    reflection:
      "테스트 프로젝트를 통해 모든 요소들이 올바르게 표시되는 것을 확인했습니다. 조건부 렌더링과 스타일링이 정상적으로 작동합니다.",

    // 프로젝트 일정
    timeline: [
      {
        phase: "기획 및 설계",
        duration: "2024.01 - 2024.03",
        description: "프로젝트 요구사항 분석 및 아키텍처 설계",
        achievements: [
          "요구사항 분석 완료",
          "기술 스택 선정",
          "아키텍처 설계 완료",
        ],
      },
      {
        phase: "개발",
        duration: "2024.04 - 2024.09",
        description: "프론트엔드 및 백엔드 개발",
        achievements: [
          "프론트엔드 개발 완료",
          "백엔드 API 개발",
          "데이터베이스 설계 및 구현",
        ],
      },
      {
        phase: "테스트 및 배포",
        duration: "2024.10 - 2024.12",
        description: "통합 테스트 및 프로덕션 배포",
        achievements: ["단위 테스트 작성", "통합 테스트 완료", "프로덕션 배포"],
      },
    ],

    // 도전과제
    challenges: [
      "복잡한 상태 관리 구현",
      "성능 최적화",
      "반응형 디자인 구현",
      "접근성 고려사항 적용",
    ],

    // 결과물/성과
    results: [
      "사용자 만족도 95% 달성",
      "페이지 로딩 속도 50% 개선",
      "버그 발생률 80% 감소",
      "개발 생산성 30% 향상",
    ],

    // 배운 점
    lessons: [
      "React 최신 기능 활용 방법",
      "TypeScript 타입 안전성의 중요성",
      "성능 최적화 기법",
      "사용자 중심 설계의 중요성",
    ],

    // 다음 단계/개선점
    nextSteps: [
      "AI 기능 추가",
      "모바일 앱 개발",
      "마이크로서비스 아키텍처 도입",
      "실시간 협업 기능 구현",
    ],

    cssClasses: {
      summary: {
        highlight: "모든 프로젝트 상세 정보 요소들",
        gradient: "테스트 프로젝트",
      },
      background: {
        highlight: "프로젝트 상세 페이지",
        gradient: "모든 요소들이 올바르게 표시되는지 확인",
      },
      roleAndTeam: {
        highlight: "개인 프로젝트",
        gradient: "프론트엔드 100% + 백엔드 50% 개발",
      },
      reflection: {
        highlight: "테스트 프로젝트를 통해",
        gradient: "모든 요소들이 올바르게 표시되는 것을 확인",
      },
    },
  },
};

// slug로 프로젝트 데이터를 찾는 유틸리티 함수
export function getProjectBySlug(slug: string): ProjectDetailData | undefined {
  return projectData[slug];
}

// 모든 프로젝트 slug 목록을 가져오는 함수
export function getAllProjectSlugs(): string[] {
  return Object.keys(projectData);
}

// 프로젝트 데이터 배열 (기존 호환성을 위해)
export const projectDetailsArray: ProjectDetailData[] =
  Object.values(projectData);
