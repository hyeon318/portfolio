import { AboutData, ExperienceItem, ProjectItem, ContactData } from "@/types";

export const aboutData: AboutData = {
  intro: [
    "<strong>6년 차</strong> 소프트웨어 개발자로서, <strong>웹툰 플랫폼, 문자 발송 솔루션, 인트라넷, 근태 관리 시스템</strong> 등 다양한 서비스와 솔루션을 설계하고 구축해왔습니다. 특히, '애니툰' B2C 웹툰 서비스의 프론트 및 백엔드를 직접 개발하며, <strong>다국어 기반 글로벌 서비스로의 확장</strong>을 주도했습니다.",
    "<strong>React/Next.js</strong>와 <strong>Java(Spring Boot)</strong>를 함께 사용하며 프론트엔드와 백엔드 각각의 흐름과 역할을 깊이 있게 이해하게 되었고,<br/>전체적인 서비스 구조 설계와 기능 구현 모두에 안정감을 갖고 임할 수 있게 되었습니다.",
    // "현재는 <strong>사용자 경험을 개선하고 개발 생산성을 높이기 위한 AI 도구 활용</strong>에도 관심을 갖고 지속적으로 탐구 중이며, 기획자, 디자이너, 다른 개발자 등과 <strong>협업하며 서로의 역할을 이해하고 조율하는 소통을</strong>를 지향합니다.",
    "현재는 <strong>사용자 경험을 개선하고 개발 생산성을 높이기 위한 AI 도구 활용</strong>에도 관심을 갖고 지속적으로 탐구 중입니다.<br/>혼자보다 <strong>함께</strong> 만드는 개발을 중요하게 여기며, <strong>팀 내 원활한 커뮤니케이션과 협업</strong>을 위해 노력합니다.",
    // "안녕하세요! 사용자 경험을 중심으로 생각하는 프론트엔드 개발자 안현지입니다.",
    // "React와 TypeScript를 주로 사용하여 현대적이고 접근성 있는 웹 애플리케이션을 구축하는 것을 좋아합니다. 복잡한 문제를 단순하고 직관적인 솔루션으로 해결하는 것에 관심이 많습니다.",
    // "현재는 Next.js와 Tailwind CSS를 활용한 풀스택 개발에 집중하고 있으며, 성능 최적화와 사용자 경험 개선에 특히 관심을 가지고 있습니다.",
    // "새로운 기술을 배우고 적용하는 것을 즐기며, 팀원들과의 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게 생각합니다.",
  ],
};

export const experienceData: ExperienceItem[] = [
  {
    company: "애니툰 (Boxnet이랑 동일 회사)",
    position: "Senior Frontend & Backend Engineer",
    period: "2024.07 - 2025.04",
    description: [
      "프론트엔드와 백엔드 전반 개발을 담당하며, 기존 웹툰 플랫폼을 기획 초기 단계부터 함께 설계하고 구축",
      "Next.js 기반 프론트엔드 개발 및 다국어 지원을 포함한 글로벌 서비스 개발",
      "React를 사용한 CP(콘텐츠 제공자) 전용 웹사이트 개발로 콘텐츠 등록, 수정, 통계 확인 등 자체 관리 서비스 개발",
      "글로벌 서비스 오픈을 위한 번역/식자 도구 웹앱 개발",
      "Java Spring & Spring Boot 기반의 백엔드 서버 구축 및 유지보수",
      "OK캐시백 ASP 서비스 개발",
      "애드핏, 구글 Ads, Facebook Pixel 등 외부 마케팅 플랫폼과 연동",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "React Query",
      "Java",
      "JSP",
      "Spring",
      "Spring Boot",
      "Mybatis",
      "MySQL",
      "Oracle",
    ],
  },
  {
    company: "박스넷 (애니툰이랑 동일 회사)",
    position: "Backend Engineer",
    period: "2020.10 - 2024.07",
    description: [
      "'Netplay' OTT 계정 공유 플랫폼 구축",
      "'Netplay' 관리자 사이트 개발 및 유지보수",
      "'Oshot'문자 발송 서비스 개발 및 유지보수",
      "'차이나 모바일' 중국 문자 발송 서비스와 연동하여 문자 발송 에이전트 개발",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Mybatis",
      "MySQL",
      "Oracle",
      "PostgresSQL",
    ],
  },
  {
    company: "제이니스",
    position: "Backend Developer",
    period: "2019.09 - 2020.05",
    description: [
      "PC-OFF 솔루션 기반으로 다양한 기업에 납품되는 인트라넷 및 근태 관리 시스템의 요구사항 반영 및 커스터마이징 개발",
      "반응형 웹 디자인 구현 및 크로스 브라우저 호환성 확보",
      "고객사별 근무제 유형, 결재 승인 구조, 급여 연동 로직 등에 맞춘 백엔드 비즈니스 로직 구성",
      "프론트엔드 화면 구성 (JSP + jQuery 기반) 및 사용자 편의성 개선 작업 수행",
    ],
    technologies: ["java", "Spring", "JSP", "jQuery", "PostgreSQL"],
  },
];

export const projectsData: ProjectItem[] = [
  {
    slug: "ocr-note",
    title: "OCR 노트",
    description:
      "OCR Note는 이미지 속 텍스트를 추출(OCR)하고, 이를 자동으로 요약 및 정리하여 사용자가 메모 형태로 저장할 수 있게 도와주는 웹 애플리케이션입니다.<br/>" +
      "주요 타겟은 학생, 수험생, 직장인, 교사 등이며, 손글씨 노트, 책, 간판, 명함 등 다양한 이미지를 활용해 텍스트 기반의 노트와 퀴즈로 확장할 수 있습니다.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "Python",
      "FastAPI",
      "Alembic",
      "PostgreSQL",
      "Google Cloud Vision API",
      "OpenAI GPT-4o API",
      "Docker / Docker Compose",
      "AWS EC2 + Nginx + HTTPS",
    ],
    githubUrl: "",
    image: "/images/ocr-note/thumbnail3.png",
    liveUrl: "https://www.dangilog.cloud/notes",
  },
  {
    slug: "anytoon",
    title: "애니툰 웹툰 플랫폼 리뉴얼",
    description:
      "기존 기존 PHP 기반의 대형 웹툰 서비스를 Java Spring 기반으로 전면 리뉴얼한 프로젝트입니다. 약 400만 명의 가입자와 주간 사용자 5만 명 규모의 플랫폼으로, 실시간 결제, 콘텐츠 제공, 사용자 관리, 외부 API 연동 등 핵심 기능을 설계부터 개발까지 담당했습니다.",
    tags: [
      "Java",
      "Spring",
      "JSP",
      "MyBatis",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Guava Caching",
    ],
    githubUrl: "",
    image: "/images/anytoon/thumbnail2.jpg",
    liveUrl: "https://www.anytoon.co.kr/webtoon/main",
  },
  {
    slug: "anytoon-translation",
    title: "웹툰 번역 및 식자 프로그램(내부 프로젝트)",
    thumbnailTitle: "웹툰(PSD) 번역 및 식자 프로그램",
    description:
      "웹 기반의 번역 및 식자 툴  을 개발하여 PSD 파일을 이미지로 변환하고 텍스트 편집이 가능한 캔버스 기반 UI를 구현했습니다. 기존에 지연되던 번역 및 식자 업무의 생산성을 높였습니다.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "ESLint",
      "Prettier",
      "Konva",
      "Fabric.js",
      "Python",
    ],
    // image: "/images/anytoon-translation/thumbnail1.png",
  },
  {
    slug: "anytoon-global",
    title: "애니툰 글로벌 서비스(오픈 예정)",
    thumbnailTitle: "애니툰 글로벌 서비스",
    description:
      "다국어 지원을 위한 i18n 시스템을 구축하고 OAuth 기반 글로벌 로그인 기능을 개발했습니다. SSR과 SSG를 활용하여 글로벌 사용자에 대한 성능을 최적화했습니다.",
    tags: ["Next.js", "React", "i18next", "OAuth", "TypeScript"],
    image: "/images/anytoon-global/thumbnail1.jpg",
  },
  {
    slug: "anytoon-cp",
    title: "CP 콘텐츠 관리 시스템",
    thumbnailTitle: "CP 콘텐츠 관리 시스템",
    description:
      "CP(콘텐츠 제공자)가 웹툰/소설 콘텐츠를 직접 업로드하고 사용자 통계를 조회할 수 있도록 하는 내부 관리 시스템을 개발했습니다.",
    tags: ["React", "React Query", "Java", "Spring Boot", "JPA", "MySQL"],
    githubUrl: "",
    liveUrl: "https://anycp.anytoon.co.kr/login",
  },
  {
    slug: "anytoon-okcashbag",
    title: "OK캐시백 ASP 연동 서비스",
    thumbnailTitle: "OK캐시백 ASP",
    description:
      "OK캐시백 사용자들이 포인트로 웹툰 콘텐츠를 구매할 수 있도록 연동 기능을 개발했습니다. 기존 PHP 시스템을 Java Spring 기반으로 재구축했습니다.",
    tags: ["Java", "Spring", "JSP", "MongoDB", "MySQL", "jQuery"],
    image: "/images/anytoon-okcashbag/thumbnail2.png",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.skmc.okcashbag.home_google&hl=ko",
  },
  {
    slug: "oshot",
    title: "문자 발송 솔루션 OShot",
    thumbnailTitle: "문자 발송 솔루션 OShot",
    description:
      "400개 이상의 고객사를 위한 문자 발송 플랫폼을 개발하였으며, SMS/LMS/MMS/KMS 송신 및 리포팅 기능을 구현했습니다. " +
      "사용자 DB와 연동하여 메시지를 송수신하고, 수신 데이터를 파싱해 자동으로 DB에 저장하는 프로세스를 구축했습니다.",
    tags: ["Java", "Spring Boot", "Oracle", "MySQL", "DB Procedure", "Trigger"],
    liveUrl: "http://www.oshot.co.kr/",
  },
  {
    title: "넷플레이 OTT 계정 공유 플랫폼",
    thumbnailTitle: "넷플레이",
    description:
      "사용자 간 OTT(netflix, tving, watcha, wavve) 계정을 안전하게 공유할 수 있도록 하는 기능을 개발 및 유지보수하며, B2B 기반의 공유 서비스를 제공했습니다.",
    tags: ["Java", "Spring", "MySQL", "MyBatis", "JSP", "jQuery"],
    liveUrl: "https://netplay.co.kr/",
  },
  {
    title: "넷플레이 관리자 사이트",
    thumbnailTitle: "넷플레이 관리자",
    description:
      "OTT 계정 공유 서비스 운영을 위한 관리자 사이트를 개발하고, B2B 고객사가 계정 및 사용자 관리를 보다 편리하게 수행할 수 있도록 다양한 관리 기능을 구축 및 유지보수했습니다.",
    tags: ["Java", "Spring", "MySQL", "MyBatis", "w2ui", "JSP", "jQuery"],
    liveUrl: "https://netplay.co.kr/",
  },
  {
    title: "PC OFF & 근태 관리 시스템 (제이니스)",
    thumbnailTitle: "PC OFF & 근태 관리 시스템",
    description:
      "Quartz Scheduler를 활용하여 연장근무, 휴일근무 통계를 자동 생성하고, 유연근무제 및 휴가 결재 오류 수정 및 자동화 프로세스를 개선했습니다.",
    tags: ["Java", "Spring", "PostgreSQL", "Quartz Scheduler", "MySQL"],
    liveUrl: "http://www.jness.co.kr/",
  },
  // {
  //   slug: "test",
  //   title: "테스트 프로젝트 - 모든 요소 확인",
  //   description:
  //     "이 프로젝트는 모든 상세 정보 요소들이 어떻게 표시되는지 확인하기 위한 테스트 프로젝트입니다. 각 섹션의 스타일과 레이아웃을 확인할 수 있습니다.",
  //   tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
  //   githubUrl: "https://github.com/test",
  //   liveUrl: "https://test-project.com",
  // },
];

export const contactData: ContactData = {
  email: "mail_0318@naver.com",
  message:
    "좋은 동료, 좋은 기회와 함께 성장할 수 있는 이야기를 나누고 싶습니다.!",
};
