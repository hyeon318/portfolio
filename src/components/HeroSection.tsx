import React from "react";
import Section from "@/components/animated/Section";
import { contactData } from "@/data/mockData";

export default function HeroSection() {
  return (
    <>
      {/* PC Hero - 좌측 고정 */}
      <aside className="hidden lg:block lg:w-2/5 xl:w-1/3 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:flex lg:items-center lg:justify-center lg:pl-12 xl:pl-16">
        <Section className="py-8 pr-6 xl:pr-8 w-full">
          <header className="text-left space-y-6">
            <div className="space-y-4">
              <p className="text-accent font-mono text-sm font-medium tracking-wider font-kr">
                안녕하세요! 👋
              </p>

              <div className="space-y-2">
                <p className="text-xl xl:text-2xl 2xl:text-5xl font-bold leading-snug font-kr flex items-center gap-2">
                  <span className="text-foreground">저는 </span>
                  <span className="animate-liquidGlass">안현지</span>
                  <span className="text-foreground">입니다.</span>
                </p>

                <p className="text-base xl:text-lg 2xl:text-xl font-bold leading-snug font-kr text-accent pt-4">
                  프론트엔드와 백엔드를 균형 있게 다루는
                </p>

                <p className="text-xl xl:text-2xl 2xl:text-4xl font-bold leading-snug font-kr flex items-center gap-2">
                  <span className="animate-liquidGlass">풀스택 개발자</span>{" "}
                  입니다
                </p>
              </div>

              <p className="text-base font-semibold text-gray-300/80 flex items-center gap-1 font-en pt-4">
                💻 Frontend Developer & Backend Developer
              </p>
            </div>

            <p className="text-base xl:text-lg font-medium text-muted tracking-wide font-kr leading-relaxed">
              <strong className="highlight">Java Spring (Boot)</strong> 기반의
              서버 개발부터
              <br />
              <strong className="highlight">React</strong>와{" "}
              <strong className="highlight">Next.js</strong>를 활용한 프론트엔드
              기능 개발까지 <br className="hidden xl:inline" />
              전체 서비스 흐름을 설계하고 구현할 수 있습니다.
            </p>

            <section className="relative">
              <div className="absolute -left-3 top-0 w-0.5 h-12 bg-gradient-to-b from-accent to-primary rounded-full" />
              <div className="pl-5 space-y-2">
                <p className="text-xs text-accent font-kr">
                  👀 최근 관심 있는 부분들
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 bg-success rounded-full"
                      aria-hidden="true"
                    />
                    <span className="font-kr">
                      🔧 성능 개선을 위한 코드 리팩토링
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 bg-warning rounded-full"
                      aria-hidden="true"
                    />
                    <span className="font-kr">
                      🧠 개발 생산성을 높이기 위한 AI 도구 활용법 탐구
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 bg-accent rounded-full"
                      aria-hidden="true"
                    />
                    <span className="font-kr">
                      🧪 최신 웹 기술 (Edge Function, RSC 등) 탐구
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact 정보 */}
            <section className="pt-4 border-t border-border/50">
              <div className="space-y-3">
                <h2 className="text-base font-bold text-title font-kr">
                  언제든지 <span className="highlight">연락</span>주세요!
                  <br />잘 <span className="highlight">부탁</span> 드립니다!
                </h2>
                <p className="text-xs leading-relaxed text-muted font-kr">
                  {contactData.message}
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="liquid-glass-button btn-primary inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs tracking-wider font-medium font-kr"
                    aria-label="이메일로 연락하기"
                  >
                    이메일 보내기
                  </a>
                  <a
                    href="https://github.com/hyeon318"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass-button btn-secondary inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs tracking-wider font-medium font-en"
                    aria-label="Github에서 연결하기"
                  >
                    Github에서 연결하기
                  </a>
                </div>
              </div>
            </section>
          </header>
        </Section>
      </aside>

      {/* 모바일 Hero */}
      <div className="block lg:hidden">
        <Section className="pt-32 pb-16 px-6 md:px-8">
          <header className="max-w-4xl mx-auto text-center px-4 sm:px-6 space-y-6">
            <div className="space-y-3">
              <p className="text-accent text-xl font-semibold tracking-wider font-kr">
                안녕하세요! 👋
              </p>

              <div className="space-y-2 pt-4">
                <p className="text-3xl font-bold flex justify-center items-center gap-2">
                  <span className="text-foreground">저는 </span>
                  <span className="animate-liquidGlass px-2 py-0.5 rounded-full">
                    안현지
                  </span>
                  <span className="text-foreground"> 입니다</span>
                </p>

                <p className="text-xl font-bold leading-snug font-kr text-accent mt-1">
                  프론트엔드와 백엔드를 균형 있게 다루는
                </p>

                <p className="text-3xl font-bold flex justify-center items-center gap-2">
                  <span className="animate-liquidGlass px-2 py-0.5 rounded-full">
                    풀스택 개발자
                  </span>
                  <span>입니다</span>
                </p>
              </div>
            </div>

            <p className="text-md sm:text-lg md:text-lg font-semibold text-muted tracking-wide font-kr leading-relaxed">
              <strong className="highlight">Java Spring (Boot)</strong> 기반의
              서버 개발부터
              <br />
              <strong className="highlight">React</strong>와{" "}
              <strong className="highlight">Next.js</strong>를 활용한 프론트엔드
              기능 개발까지 <br className="hidden sm:inline" />
              전체 서비스 흐름을 설계하고 구현할 수 있습니다.
            </p>
          </header>
        </Section>
      </div>
    </>
  );
}
