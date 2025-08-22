import { AboutData, ExperienceItem, ContactData } from "@/types";
import { getProjectsForMainPage } from "./projectDetails";

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
    company: "애니툰",
    position: "Frontend & Backend Engineer",
    period: "2024.06 - 2025.04",
    description: [
      "박스넷과 동일 회사",
      "Next.js 기반 <strong>글로벌 서비스</strong> 개발",
      "Next.js 기반 <strong>번역/식자 도구 웹</strong> 개발",
      "React를 사용한 <strong>CP(콘텐츠 제공자) 전용 웹사이트</strong> 개발로 콘텐츠 등록, 수정, 통계 확인 등 자체 관리 서비스 개발",
      "Java Spring Boot 기반의 <strong>애니툰 리뉴얼</strong> 및 유지보수",
      "Java Spring 기반의 <strong>OK캐시백 ASP 서비스</strong> 개발",
      "애드핏, 구글 Ads, Facebook Pixel 등 외부 마케팅 플랫폼과 연동 및 관리",
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
    company: "박스넷",
    position: "Backend Engineer",
    period: "2020.10 - 2024.07",
    description: [
      "OTT 계정 공유 플랫폼 'Netplay' 구축",
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
      "고객사별 근무제 유형, 결재 승인 구조, 급여 연동 로직 등에 맞춘 백엔드 비즈니스 로직 구성",
    ],
    technologies: ["java", "Spring", "JSP", "jQuery", "PostgreSQL"],
  },
];

// projectDetails.ts의 데이터를 사용하여 메인 페이지용 프로젝트 데이터 생성
export const projectsData = getProjectsForMainPage();

export const contactData: ContactData = {
  email: "mail_0318@naver.com",
};
