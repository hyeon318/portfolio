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
      thumbnail: "/images/anytoon/thumbnail2.jpg",
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
    title: "웹툰 번역 및 식자 프로그램(내부 프로젝트)",
    thumbnailTitle: "웹툰(PSD) 번역 및 식자 프로그램",
    description:
      "웹 기반의 번역 및 식자 툴을 개발하여 PSD 파일을 이미지로 변환하고 텍스트 편집이 가능한 캔버스 기반 UI를 구현했습니다. 번역 및 식자 업무의 생산성을 높였습니다.",
    summary: {
      text: "웹툰 번역 및 식자 업무의 생산성을 높이기 위한 웹 기반 프로그램을 개발하였습니다.",
      list: [
        "웹툰 번역 및 식자 업무의 생산성을 높이기 위한 웹 기반 도구 개발",
        "PSD 파일을 이미지로 변환하고 json 파일을 통하여 텍스트 편집이 가능한 캔버스 기반 UI를 구현",
        "번역 및 식자 업무의 생산성 증가 및 피로도 감소",
      ],
    },
    background:
      "글로벌 서비스 런칭이 확정되면서, 웹툰 플랫폼뿐만 아니라 <strong className='highlight'>웹툰 번역을 위한 전용 툴</strong>도 필요하게 되었습니다.<br/>" +
      "개발 이전에는 번역과 식자 작업을 PSD 파일로 수작업 처리했기 때문에 작업 및 검수에 많은 시간이 소요되고, 실수도 자주 발생했습니다.<br/>" +
      "또한 해당 작업을 외주로 진행하던 중, 전체 작업 시간을 단축하기 위해 웹 기반 번역 툴을 직접 개발하게 되었습니다.",
    features: [
      "PSD 파일에서 파싱된 파일을 Konva 라이브러리를 통하여 캔버스 기반 이미지 편집 기능을 개발",
      "번역 및 식자 작업 워크플로우 개선",
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
      preview: ["/images/anytoon-translation/preview1.png"],
    },
    githubUrl: "",
    liveUrl: "https://www.anytoon.co.kr/webtoon/main",
    period: "2024.08 - 2024.11",
    roleAndTeam: "프론트엔드 100% + 프로세스 기획 : 100%)",
    reflection:
      "웹툰의 경우 작가마다 PSD 파일의 사용 방식이 매우 달라, 이미지나 효과 레이아웃에 <strong>공통된 구조를 찾기 어려웠습니다.</strong><br/>" +
      "초기에는 이러한 다양성을 충분히 고려하지 못한 채 일부 파일로만 테스트를 진행했고, 이후 Photoshop 외에 Clip Studio 등으로 제작된 파일에서는 <strong>호환성 문제와 오류</strong>가 자주 발생했습니다.<br/>" +
      "이런 문제를 해결하기 위해 Photoshop 매크로 프로그램을 별도로 개발하여, 일부 레이아웃을 사전 병합 처리 후 작업을 진행했습니다.<br/>" +
      "또한, 프론트엔드 측면에서는, 웹툰 소재 이미지의 용량이 커 브라우저에서 과부하가 발생하는 문제가 있었습니다.<br/>" +
      "당시에는 <strong>Konva canvas 라이브러리</strong>를 사용하고 있었는데, 초기에는 라이브러리 자체의 성능 이슈로 판단했으나, <strong>실제로는 이미지 크기로 인한 canvas 과부하</strong>임을 확인했습니다." +
      "해당 문제는 처리하는 <strong>이미지 사이즈를 최적화</strong>하는 방식으로 해결했습니다.<br/>" +
      "이번 프로젝트를 통해 <strong>이미지 처리 및 렌더링 최적화의 중요성</strong>, 그리고 그에 대한 <strong>실질적인 해결 경험</strong>을 쌓을 수 있었습니다.",
  },
  "anytoon-global": {
    title: "애니툰 글로벌 서비스(오픈 예정)",
    thumbnailTitle: "애니툰 글로벌 서비스",
    description:
      "다국어 지원을 위한 i18n 시스템을 구축하고, OAuth 기반 글로벌 로그인 기능을 구현했습니다. SSR과 SSG를 활용하여 글로벌 사용자 대상 성능 최적화를 달성했습니다.",
    summary: {
      text:
        "코로나 이후 애니툰 웹툰 서비스의 국내 성장세가 둔화되면서, 국내 사용자 확대보다는 글로벌 시장 진출이 더 효과적이라고 판단하였습니다. 이에 따라 글로벌 웹툰 서비스를 새롭게 개발하게 되었습니다." +
        "기존 국내 서비스와는 달리, <strong>언어, 결제 통화, 서버 리전</strong> 등 고려해야 할 사항들이 많았습니다.<br/>" +
        "또한 이전에는 JSP 기반 구조로 정적 최적화를 고려하지 못했지만, 이번 프로젝트에서는 Next.js를 도입하여 <strong>SSR 및 SSG 기반의 SEO 최적화 구조</strong>를 설계했습니다.",
    },
    features: [
      "Atomic Design 패턴 도입을 통한 UI 구성 개선",
      "ErrorBoundary 및 공통 에러 처리 로직 구현",
      "Next.js의 SSR 및 SSG 기능을 통한 SEO 및 성능 최적화",
      "i18next 기반 다국어 지원 시스템 구축",
      "NextAuth를 활용한 OAuth 로그인 및 회원가입 구현",
      "폼 상태 및 유효성 검사를 위한 react-hook-form 활용",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "React Hook Form",
      "react-query",
      "NextAuth",
      "i18next",
      "Swiper",
    ],
    roleAndTeam: "프론트엔드 100%",
    reflection:
      "프로젝트 진행 중, 안정적인 사용자 경험을 위해 에러 처리 방식을 전반적으로 개선하고자 했습니다.<br/>" +
      "Next.js 14(App Router 기반)를 사용하면서, 에러 처리 방식으로는 error.tsx, 클라이언트 ErrorBoundary, API에서의 try/catch 세 가지 방식을 사용하게 되었습니다.<br/><br/>" +
      "에러처리를 하면서 어려웠던점은 크게 2가지가 있었는데,<br/>" +
      "<strong>첫번째</strong>로는 <strong> 위치를 파악하기가 어려웠다는 점</strong> 이었습니다. 발생한 에러가 서버 컴포넌트인지, 클라이언트 컴포넌트인지, 아니면 api 통신중에 발생한 에러인지 파악에 어려움이 있어 발생한 로그들을 면밀히 확인해야 했습니다.<br/>" +
      "<strong>두번째</strong>로는 <strong>API의 에러메세지와 UI의 대응</strong>이 어려웠습니다. 비로그인이나 권한 관련의 경우 일괄적인 처리가 가능했지만, 500 에러의 경우, 기술적 오류 메시지와 사용자 친화 메시지 간의 균형을 맞추는데 어려움이 있었습니다.<br/>" +
      "위 문제점들은, 에러 로그 시스템을 좀 더 체계화 하고 API 응답 에러는 status와 message를 명시적으로 분리하여, 프론트에서 상황에 맞게 매핑되도록 개선했습니다.<br/><br/>" +
      "에러 처리라는 것은 단순히 예외 상황을 '막는 것'이 아니라, <strong>어떤 상황에서도 사용자에게 일관된 경험을 제공</strong>하는 것이라는 점을 다시금 깨달았습니다. " +
      "Next.js의 SSR, RSC, CSR이 혼재된 구조에서는 에러 발생 위치에 따라 다른 전략이 필요하며, 이를 유기적으로 연결시키는 것이 진정한 챌린지였습니다.",
    period: "2024.05 - 2025.01",
    images: {
      thumbnail: "/images/anytoon-global/thumbnail1.jpg",
      preview: [
        "/images/anytoon-global/preview1.png",
        "/images/anytoon-global/preview2.png",
        "/images/anytoon-global/preview3.png",
      ],
    },
  },

  "anytoon-cp": {
    title: "CP 콘텐츠 관리 시스템",
    thumbnailTitle: "CP 콘텐츠 관리 시스템",
    description:
      "CP(콘텐츠 제공자)가 웹툰/소설 콘텐츠를 직접 업로드하고 사용자 통계를 조회할 수 있도록 하는 내부 관리 시스템을 개발했습니다.",
    summary: {
      text:
        "기존에는 각 CP(Content Provider)사로부터 전달받은 소설 콘텐츠를 내부 DB와 CDN에 직접 저장하는 방식으로 운영되었습니다. 그러나 <strong>콘텐츠의 파일 크기가 크고, 개수 또한 많다</strong> 보니 업무 처리에 <strong>많은 시간과 리소스가 소모</strong>되었습니다.<br/>" +
        "업무 효율을 개선하기 위해, CP사에서 직접 콘텐츠를 업로드하고 관리할 수 있는 전용 웹사이트를 개발하게 되었습니다.<br>" +
        "이를 통해 업무 지연을 최소화하고, 콘텐츠 등록부터 정산까지의 흐름을 CP 주도 방식으로 전환하여 운영 효율성을 크게 향상시킬 수 있었습니다.",
      list: [
        "파일 업로드 및 컨텐츠 등록 : CP사가 직접 원고 파일(epub) 및 메타데이터 등록 가능",
        "판매 콘텐츠 통계 확인 : 기간별/작품별/사용자별 매출 및 판매량 그래프 제공",
        "정산서 출력 : 월별 자동 정산서 생성 및 다운로드 지원",
      ],
    },
    features: [
      "파일(epub) 멀티 업로드 기능",
      "컨텐츠 등록 요청 및 수정 요청 기능",
      "사용자 통계 조회 기능",
      "권한 관리 시스템",
    ],
    images: {
      preview: [
        "/images/anytoon-cp/preview1.png",
        "/images/anytoon-cp/preview2.png",
        "/images/anytoon-cp/preview3.png",
        "/images/anytoon-cp/preview4.png",
        "/images/anytoon-cp/preview5.png",
      ],
    },
    techStack: [
      "React",
      "redux-toolkit",
      "Java",
      "Spring Boot",
      "JPA",
      "MySQL",
    ],
    githubUrl: "",
    liveUrl: "https://anycp.anytoon.co.kr/login",
    setupInfo: {
      github: "",
      liveDemo: "https://anycp.anytoon.co.kr/login",
    },
    roleAndTeam: "프론트엔드 100% + 백엔드 API 일부 개발",
    reflection:
      "이번 프로젝트는 회사에서 처음으로 React를 도입한 웹 어드민 프로젝트였습니다. 프론트엔드는 React 기반으로 구성했고, 백엔드는 기존과 달리 Spring Boot + JPA 스택으로 구성되어 새로운 기술 스택에 대한 학습이 병행되어야 했습니다.<br/>" +
      "전체적인 프로젝트 기간은 다소 길었지만, 실질적인 개발보다는 기획 변경 및 기능 협의, 그리고 새로운 기술 도입에 따른 학습에 더 많은 시간을 투자했습니다. 프로젝트 초기에 기획 담당자가 여러 번 변경되면서 요구사항이 자주 바뀌었고, 이로 인해 전체 일정 조율과 방향성 설정에 시간이 지연되기도 했습니다.<br/>" +
      "프론트엔드에서는 초기 상태 관리에 <strong>Redux</strong>를 도입했는데, 팀 내에서 Redux 사용 경험이 부족했던 터라 러닝 커브가 있었고, 이를 해결하기 위해 공식 문서와 커뮤니티 자료를 참고하며 구조를 잡아나갔습니다. 지금 돌아보면 상태 관리 전략에 대해 더 가볍고 유연한 방식을 고민해볼 수도 있었겠다는 생각이 듭니다.<br/>" +
      "전체적으로 새로운 기술 스택과 환경에서 시작한 프로젝트였기 때문에, 단순히 기능 구현뿐 아니라 기술 선택의 타당성, 유지보수 관점, 협업 방식까지 여러 가지를 실험하고 적용해보며 많은 인사이트를 얻을 수 있었던 경험이었습니다.",
    period: "2023.03 - 2023.12",
  },
  "anytoon-okcashbag": {
    title: "OK 캐시백 ASP 서비스",
    thumbnailTitle: "OK 캐시백",
    description:
      "OK 캐시백 사용자들이 OK포인트를 사용하여 <strong>'애니툰'</strong> 웹툰 서비스를 이용할 수 있도록 구현한 <strong>웹앱</strong> 기반 서비스입니다.",
    summary: {
      text:
        "OK Cashbag 앱 내 ASP 웹툰 서비스를 Java 기반으로 리뉴얼 개발하며, 대규모 트래픽과 데이터베이스 부하 관리를 핵심 목표로 설정하였습니다." +
        "OK Cashbag은 일일 활성 이용자 수가 많은 서비스로, 담당 PM으로부터 성능 최적화 및 안정적인 서비스 운영을 위한 기술적 고려를 요청받았습니다." +
        "이에 따라 다음과 같은 기술적 개선 및 대응을 진행하였습니다",
      list: [
        "웹툰 콘텐츠 조회 기능은 기존에 운영되던 관계형 DB의 컨텐츠 데이터를 그대로 활용하되, 시스템 구조를 Java 기반으로 전환하여 유지보수성과 확장성을 강화",
        "인기순 정렬 조회 시 발생하던 <strong>성능 저하(Slow Query) 문제는, 컨텐츠 결과를 캐싱 처리</strong>하여 빠른 응답 속도를 확보하고 DB 부하를 효과적으로 개선",
        "<strong>NoSQL(MongoDB) 기반으로 데이터 분리 처리,</strong> 트래픽 분산 및 수평 확장성에 유연하게 대응할 수 있도록 설계.",
      ],
    },
    images: {
      thumbnail: "/images/anytoon-okcashbag/thumbnail2.png",
      preview: [
        "/images/anytoon-okcashbag/preview2.png",
        "/images/anytoon-okcashbag/preview1.png",
      ],
    },
    background:
      "이 프로젝트는 SK planet의 OK Cashbag 서비스 내에 웹툰 ASP 서비스를 제공하기 위해 진행되었습니다.<br/>" +
      "기존 애니툰 플랫폼은 PHP 기반으로 운영되고 있었으나, <strong>백화현상(속도 저하)</strong>과 과부하 등의 문제로 서비스 안정성에 어려움이 있었습니다. " +
      "이에 따라, 기존 시스템의 한계를 극복하고 성능 개선 및 유지보수 편의성 확보를 목표로 Java(Spring) 기반으로 리뉴얼 프로토타입을 개발하게 되었으며, 이와 동시에 OK Cashbag에 제공할 웹앱 ASP 서비스도 동일한 스택으로 구축하였습니다.",
    features: [
      "OK포인트를 이용한 웹툰 콘텐츠 구매 기능",
      "OK캐시백 API 및 앱 Function 연동",
      "웹앱 기반 서비스 구조 설계 및 구축",
    ],
    techStack: [
      "Java",
      "Spring Framework",
      "JSP",
      "JavaScript",
      "jQuery",
      "MySQL",
      "MongoDB",
    ],
    githubUrl: "",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.skmc.okcashbag.home_google",
    setupInfo: {
      liveDemo:
        "https://play.google.com/store/apps/details?id=com.skmc.okcashbag.home_google",
    },
    roleAndTeam: "프론트엔드 50% + 백엔드 50%",
    reflection:
      "이 프로젝트는 제가 이 회사에 입사한 이후 처음으로 <strong>단독으로 관리하게 된 애니툰 서비스</strong>였으며, 동시에 <strong>B2C 사용자 대상의 실서비스를 운영해본 첫 경험</strong>이었습니다. 특히 OK Cashbag처럼 <strong>대규모 사용자 기반을 가진 플랫폼에 연동되는 ASP 서비스</strong>였기 때문에, 개인적으로도 많은 기대와 책임감을 가지고 임했던 기억이 있습니다.<br/>" +
      "해당 서비스는 기존에 <strong>오래된 DB 구조</strong>를 가지고 있었고, <strong>쿼리 최적화나 인덱스 튜닝이 거의 되어 있지 않은 상태</strong>였습니다. 구조적인 개선이 필요한 상황이었지만, 제한된 인력과 일정으로 인해 근본적인 리팩토링은 어려웠습니다.<br/>" +
      "특히 <strong>인기순 콘텐츠 조회 기능</strong>에서 성능 문제가 두드러졌습니다. 인기순은 <strong>실제 결제 테이블의 데이터를 기준으로 정렬</strong>되었는데, 결제 데이터 자체가 수백만 건에 달하다 보니 사용자가 요청할 때마다 직접 쿼리를 수행하는 방식은 서버에 큰 부담을 주었고, 응답 시간이 30초 이상 소요되는 경우도 많았습니다.<br/>" +
      "이 문제를 해결하기 위해, <strong>서비스 테이블 구조를 조정하는 대신, 구아바(Guava) 캐싱을 도입하는 방식</strong>으로 대응하였습니다. 결제 데이터를 캐싱하고 이를 콘텐츠 테이블과 조인하여, 콘텐츠별 판매량을 효율적으로 조회할 수 있도록 구현함으로써 <strong>응답 시간을 대폭 단축</strong>하고, 서버 부하도 안정적으로 낮출 수 있었습니다.<br/>" +
      "또한 이 프로젝트를 통해 결제 및 환불 로직, 그리고 모바일 앱과의 통신 방식을 처음 접하며 실무에서의 전반적인 흐름과 설계 방식에 대한 이해를 넓힐 수 있었습니다. 단순한 개발을 넘어서, 실제 유저 경험과 서비스 안정성까지 고려하는 개발자로 한 걸음 더 성장할 수 있었던 기회였습니다.<br/>",

    period: "2021.07 - 2021.12",
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
