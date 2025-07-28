import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/mockData";
import TechTag from "@/components/TechTag";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // URL 디코딩 및 프로젝트 찾기
  const decodedSlug = decodeURIComponent(params.slug);
  const project = projectsData.find(
    p =>
      p.title.toLowerCase().replace(/\s+/g, "-") ===
      decodedSlug.toLowerCase().replace(/\s+/g, "-")
  );

  if (!project) {
    notFound();
  }

  const gradientVariants = [
    "from-blue-500 to-purple-600",
    "from-green-500 to-blue-600",
    "from-purple-500 to-pink-600",
    "from-orange-500 to-red-600",
    "from-teal-500 to-green-600",
    "from-indigo-500 to-purple-600",
  ];

  const gradientIndex = project.title.length % gradientVariants.length;
  const gradientClass = gradientVariants[gradientIndex];

  return (
    <div className="bg-[#0A0F1C] text-white/90 backdrop-blur-xl min-h-screen">
      {/* 헤더 */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-white hover:text-sky-400 transition-colors duration-300 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            포트폴리오로 돌아가기
          </Link>
          <div className="text-sm text-white/60 font-en">Project Detail</div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* 프로젝트 헤더 */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* 프로젝트 이미지 */}
            <div className="w-full lg:w-1/2">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} 프로젝트 이미지`}
                    fill
                    className="object-cover"
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradientClass}`}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-xl flex items-center justify-center bg-white/10 border border-white/20">
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <p className="text-lg font-medium tracking-wider uppercase text-white">
                        {project.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 프로젝트 정보 */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-kr leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-white/70 leading-relaxed font-kr">
                  {project.description}
                </p>
              </div>

              {/* 기술 태그 */}
              <div>
                <h3 className="text-sm font-semibold text-white/60 mb-4 font-kr">
                  사용 기술
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/10 px-3 py-1 rounded-lg text-sm text-white/90 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 액션 버튼들 */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-lg text-sm font-medium text-white hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
                    aria-label={`${project.title} GitHub 저장소 보기`}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub 보기
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 rounded-lg text-sm font-medium text-white hover:from-sky-500 hover:to-blue-600 transition-all duration-300 inline-flex items-center justify-center"
                    aria-label={`${project.title} 라이브 데모 보기`}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    라이브 데모
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 📌 Summary */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 mb-6 font-kr flex items-center gap-3">
            📌 Summary
          </h2>
          <p className="text-lg leading-relaxed text-white/80 font-kr">
            기존 웹툰 관리 시스템의 복잡한{" "}
            <span className="bg-white/10 px-2 py-1 rounded-lg text-sm font-medium">
              UI/UX 문제
            </span>
            를 개선하고,
            <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent font-medium">
              관리자 외 실무자도 접근 가능한
            </span>{" "}
            신규 플랫폼 개발.
          </p>
        </section>

        {/* 📖 Background */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 mb-6 font-kr flex items-center gap-3">
            📖 Background
          </h2>
          <p className="text-lg leading-relaxed text-white/80 font-kr">
            기존 시스템은{" "}
            <span className="bg-white/10 px-2 py-1 rounded-lg text-sm font-medium">
              관리자 전용
            </span>
            으로만 설계되어 있어 실무자의{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent font-medium">
              접근성과 사용성
            </span>
            이 낮음.
          </p>
        </section>

        {/* ✨ Main Features */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 mb-8 font-kr flex items-center gap-3">
            ✨ Main Features
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-white/80 font-kr">
            <li>
              <span className="bg-white/10 px-2 py-1 rounded-lg text-sm font-medium">
                콘텐츠 등록 및 수정 워크플로우
              </span>{" "}
              개선
            </li>
            <li>
              <span className="bg-white/10 px-2 py-1 rounded-lg text-sm font-medium">
                사용자 접근 권한 설정
              </span>{" "}
              기능
            </li>
            <li>
              <span className="bg-white/10 px-2 py-1 rounded-lg text-sm font-medium">
                이미지 압축 및 서브 타이틀 자동 생성
              </span>{" "}
              기능
            </li>
          </ul>
        </section>

        {/* 🧪 Tech Stack */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 mb-6 font-kr flex items-center gap-3">
            🧪 Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React Query",
              "Spring Boot",
              "MySQL",
              "AWS EC2",
              "S3",
              "Docker",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-white/10 px-3 py-2 rounded-lg text-sm text-white/90 font-medium backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ⚙️ Setup & Usage */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 mb-6 font-kr flex items-center gap-3">
            ⚙️ Setup & Usage
          </h2>
          <div className="space-y-4 text-lg text-white/80 font-kr">
            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">Github:</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
              >
                [링크]
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">Live Demo:</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300 transition-colors"
              >
                [링크]
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sky-400 font-semibold">배포:</span>
              <span className="text-white/80">Vercel + Docker 기반</span>
            </div>
          </div>
        </section>

        {/* 👥 Role & Team */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 mb-6 font-kr flex items-center gap-3">
            👥 Role & Team
          </h2>
          <p className="text-lg leading-relaxed text-white/80 font-kr">
            총{" "}
            <span className="bg-white/10 px-2 py-1 rounded-lg text-sm font-medium">
              3인 구성
            </span>
            (본인:{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent font-medium">
              프론트엔드 100% + 백엔드 API 일부 개발
            </span>
            )
          </p>
        </section>

        {/* 💡 회고 */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white/90 mb-6 font-kr flex items-center gap-3">
            💡 회고
          </h2>
          <p className="text-lg leading-relaxed text-white/80 font-kr">
            <span className="bg-white/10 px-2 py-1 rounded-lg text-sm font-medium">
              권한 관리와 파일 업로드 로직
            </span>{" "}
            설계에 어려움이 있었지만,
            <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent font-medium">
              설계 문서화
            </span>
            를 통해 명확히 해결.
          </p>
        </section>
      </main>
    </div>
  );
}
