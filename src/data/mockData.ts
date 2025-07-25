import { AboutData, ExperienceItem, ProjectItem, ContactData } from "@/types";

export const aboutData: AboutData = {
  intro: [
    "안녕하세요! 사용자 경험을 중심으로 생각하는 프론트엔드 개발자 안현지입니다.",
    "React와 TypeScript를 주로 사용하여 현대적이고 접근성 있는 웹 애플리케이션을 구축하는 것을 좋아합니다. 복잡한 문제를 단순하고 직관적인 솔루션으로 해결하는 것에 관심이 많습니다.",
    "현재는 Next.js와 Tailwind CSS를 활용한 풀스택 개발에 집중하고 있으며, 성능 최적화와 사용자 경험 개선에 특히 관심을 가지고 있습니다.",
    "새로운 기술을 배우고 적용하는 것을 즐기며, 팀원들과의 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게 생각합니다.",
  ],
};

export const experienceData: ExperienceItem[] = [
  {
    company: "테크스타트업",
    position: "Senior Frontend Engineer",
    period: "2023.03 - 현재",
    description: [
      "React와 TypeScript를 활용한 B2B SaaS 플랫폼 프론트엔드 개발 및 유지보수",
      "Next.js 기반 웹 애플리케이션 성능 최적화로 로딩 시간 40% 단축",
      "컴포넌트 라이브러리 구축으로 개발 효율성 30% 향상",
      "신규 기능 개발 및 기존 코드베이스 리팩토링을 통한 코드 품질 개선",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "React Query",
    ],
  },
  {
    company: "웹에이전시",
    position: "Frontend Developer",
    period: "2021.06 - 2023.02",
    description: [
      "다양한 클라이언트의 웹사이트 및 웹 애플리케이션 개발",
      "반응형 웹 디자인 구현 및 크로스 브라우저 호환성 확보",
      "WordPress 커스텀 테마 개발 및 플러그인 커스터마이징",
      "SEO 최적화 및 웹 접근성 가이드라인 준수",
    ],
    technologies: ["JavaScript", "Vue.js", "SCSS", "WordPress", "PHP", "MySQL"],
  },
  {
    company: "스타트업",
    position: "Junior Developer",
    period: "2020.01 - 2021.05",
    description: [
      "이커머스 플랫폼의 프론트엔드 기능 개발 및 버그 수정",
      "jQuery 기반 레거시 코드를 Vue.js로 마이그레이션",
      "모바일 퍼스트 반응형 웹 페이지 구현",
      "Git을 활용한 버전 관리 및 코드 리뷰 참여",
    ],
    technologies: ["Vue.js", "JavaScript", "HTML/CSS", "Bootstrap", "jQuery"],
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: "E-Commerce Dashboard",
    description:
      "관리자를 위한 이커머스 대시보드 애플리케이션. 실시간 주문 현황, 매출 분석, 상품 관리 기능을 제공합니다. Chart.js를 활용한 데이터 시각화와 반응형 디자인을 구현했습니다.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Zustand"],
    githubUrl: "https://github.com/example/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard.vercel.app",
  },
  {
    title: "AI 챗봇 인터페이스",
    description:
      "OpenAI API를 활용한 AI 챗봇 웹 애플리케이션. 실시간 채팅, 코드 하이라이팅, 마크다운 렌더링 기능을 포함하여 개발자들을 위한 AI 어시스턴트로 활용할 수 있습니다.",
    tags: ["Next.js", "OpenAI API", "WebSocket", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/example/ai-chatbot",
    liveUrl: "https://ai-chatbot.vercel.app",
  },
  {
    title: "날씨 앱",
    description:
      "현재 위치 기반 날씨 정보와 5일 예보를 제공하는 반응형 웹 애플리케이션. OpenWeather API를 활용하여 실시간 날씨 데이터를 가져오고 아름다운 애니메이션과 함께 표시합니다.",
    tags: ["Vue.js", "Weather API", "GSAP", "Composition API"],
    githubUrl: "https://github.com/example/weather-app",
    liveUrl: "https://weather-app.vercel.app",
  },
  {
    title: "작업 관리 도구",
    description:
      "팀을 위한 칸반 스타일 작업 관리 애플리케이션. 드래그 앤 드롭으로 작업을 이동하고, 실시간 협업 기능을 제공합니다. 팀 프로젝트의 생산성 향상을 위해 개발했습니다.",
    tags: ["React", "DnD Kit", "Socket.io", "Express", "MongoDB"],
    githubUrl: "https://github.com/example/task-manager",
    liveUrl: "https://task-manager.vercel.app",
  },
  {
    title: "블로그 플랫폼",
    description:
      "개발자들을 위한 마크다운 기반 블로그 플랫폼. 코드 하이라이팅, 태그 시스템, 검색 기능을 포함하여 기술 블로그 작성에 최적화되어 있습니다.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/example/blog-platform",
    liveUrl: "https://blog-platform.vercel.app",
  },
  {
    title: "포트폴리오 웹사이트",
    description:
      "현재 보고 계신 포트폴리오 웹사이트입니다. Next.js와 Tailwind CSS를 활용하여 반응형 디자인과 부드러운 애니메이션을 구현했습니다. 다크 테마와 접근성을 고려한 디자인이 특징입니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/example/portfolio",
    liveUrl: "https://portfolio.vercel.app",
  },
];

export const contactData: ContactData = {
  email: "hello@example.com",
  message:
    "새로운 기회와 흥미로운 프로젝트에 대해 언제든 이야기하고 싶습니다. 함께 멋진 것을 만들어보아요!",
};
