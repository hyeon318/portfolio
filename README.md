# 🚀 안현지 (Hyeonji Ahn) - Portfolio

> **사용자 경험을 중심으로 생각하는 풀스택 개발자**  
> Frontend & Backend Developer with 5+ years of experience

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 📋 프로젝트 개요

이 포트폴리오는 **Next.js 15**와 **TypeScript**를 기반으로 구축된 개인 포트폴리오 웹사이트입니다. 5년 이상의 개발 경험을 바탕으로 한 다양한 프로젝트와 기술적 성과를 체계적으로 보여주는 인터랙티브한 포트폴리오입니다.

### 🎯 주요 특징

- **⚡ 성능 최적화**: Next.js 15의 최신 기능 활용 (Turbopack, App Router)
- **🎨 모던 UI/UX**: Framer Motion을 활용한 부드러운 애니메이션
- **📱 반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **🔍 SEO 최적화**: 구조화된 데이터와 메타 태그를 통한 검색 엔진 최적화
- **♿ 접근성**: 웹 접근성 가이드라인 준수

## 🛠️ 기술 스택

### Frontend

- **Framework**: Next.js 15.4.4 (App Router)
- **Language**: TypeScript 5.0
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.11
- **Animation**: Framer Motion 12.23.9
- **Font**: Pretendard (한국어 최적화)

### Backend & DevOps

- **Runtime**: Node.js
- **Deployment**: Vercel
- **Build Tool**: Turbopack
- **Package Manager**: npm

## 🏆 주요 프로젝트 하이라이트

### 1. 애니툰 웹툰 서비스 리뉴얼 (2021-2025)

- **규모**: 400만 가입자, 월 평균 결제 3.5억원
- **성과**: 응답 속도 4초 → 0.5초로 개선 (87.5% 향상)
- **기술**: PHP → Java Spring 전환, 컨텐츠 Caching 도입
- **역할**: 프론트엔드 30% + 백엔드 30% 담당

### 2. OCR Note 웹 서비스 (2025)

- **기능**: 이미지 OCR + AI 요약을 통한 메모 관리 시스템
- **기술**: Next.js, FastAPI, PostgreSQL, AWS
- **특징**: swagger-typescript-api를 활용한 타입 안전 API 클라이언트 자동 생성

### 3. Tabby Mansion Chrome Extension (2025)

- **기능**: 생산성 향상을 위한 타이머 & 탭 추적 도구
- **기술**: Chrome Extension (Manifest V3), Service Worker
- **배포**: Chrome Web Store 출시

## 🚀 시작하기

### 사전 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/hyeon318/hj-portfolio.git

# 프로젝트 디렉토리로 이동
cd hj-portfolio

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # 재사용 가능한 컴포넌트
│   ├── main-page/         # 메인 페이지 컴포넌트
│   └── index.ts           # 컴포넌트 export
├── data/                  # 정적 데이터
│   ├── mockData.ts        # 경험 데이터
│   └── projectDetails.ts  # 프로젝트 상세 정보
├── lib/                   # 유틸리티 함수
│   ├── animations.ts      # 애니메이션 설정
│   ├── emailUtils.ts      # 이메일 유틸리티
│   └── gtag.ts           # Google Analytics
└── types/                 # TypeScript 타입 정의
    └── index.ts
```

## 🎨 디자인 시스템

- **컬러 팔레트**: 다크/라이트 테마 지원
- **타이포그래피**: Pretendard 폰트 (한국어 최적화)
- **애니메이션**: Framer Motion을 활용한 부드러운 전환 효과
- **레이아웃**: Atomic Design 패턴 적용

## 📊 성능 지표

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: 모든 지표에서 "Good" 등급
- **Bundle Size**: 최적화된 번들 크기로 빠른 로딩

## 🔗 관련 링크

- **포트폴리오 사이트**: [https://since1994-oasis-portfolio.vercel.app/](https://since1994-oasis-portfolio.vercel.app/)
- **GitHub**: [https://github.com/hyeon318](https://github.com/hyeon318)
- **이메일**: mail_0318@naver.com
- **LinkedIn**: [안현지 LinkedIn](https://linkedin.com/in/hyeonji-ahn)

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

**💼 채용 문의나 협업 제안이 있으시면 언제든 연락주세요!**
