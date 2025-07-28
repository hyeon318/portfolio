import TopNav from "@/components/Sidebar";
import SectionTitle from "@/components/SectionTitle";
import TimelineItem from "@/components/TimelineItem";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/animated/Section";
import { StaggerText } from "@/components/animated/FadeInText";
import AnimatedCard from "@/components/animated/AnimatedCard";
import {
  aboutData,
  experienceData,
  projectsData,
  contactData,
} from "@/data/mockData";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <TopNav />

      {/* Desktop Layout - 좌우 분할 */}
      <div className="hidden lg:flex lg:min-h-screen lg:pt-24">
        {/* Left Side - Hero Section (고정) */}
        <aside className="lg:w-2/5 xl:w-1/3 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:flex lg:items-center lg:justify-center lg:pl-12 xl:pl-16">
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
                <strong className="highlight">Next.js</strong>를 활용한 프론트
                엔드 기능 개발까지
                <br className="hidden xl:inline" />
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

        {/* Right Side - Main Content */}
        <main className="lg:w-3/5 xl:w-2/3 lg:pl-12 lg:pr-16 xl:pl-16 xl:pr-20">
          <div className="pt-8 pb-16 space-y-16 flex flex-col justify-center min-h-screen">
            {/* About Section */}
            <Section
              id="about"
              className="px-8 lg:px-12 flex items-center justify-center"
            >
              <SectionTitle number="01">About</SectionTitle>
              <article className="text-left space-y-6 prose-enhanced max-w-6xl w-full">
                <StaggerText
                  paragraphs={aboutData.intro}
                  className="text-base leading-relaxed space-y-6 font-kr"
                  style={{ color: "var(--text-body)" }}
                />
              </article>
            </Section>

            {/* Experience Section */}
            <Section
              id="experience"
              className="px-8 lg:px-12 flex items-center justify-center"
              delay={0.2}
            >
              <SectionTitle number="02">Experience</SectionTitle>
              <section
                className="space-y-8 max-w-5xl w-full"
                aria-label="경력 사항"
              >
                {experienceData.map((item, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <TimelineItem
                      company={item.company}
                      position={item.position}
                      period={item.period}
                      description={item.description}
                      technologies={item.technologies}
                    />
                  </AnimatedCard>
                ))}
              </section>
            </Section>

            {/* Projects Section */}
            <Section
              id="projects"
              className="px-8 lg:px-12 flex items-center justify-center"
              delay={0.4}
            >
              <SectionTitle number="03">Projects</SectionTitle>
              <div className="mb-8 text-left prose-enhanced w-full">
                <p className="text-base leading-relaxed font-kr">
                  다양한 기술을 활용하여 구축한 프로젝트들입니다. 각 프로젝트는
                  <strong className="highlight">
                    {" "}
                    실제 문제를 해결
                  </strong>하고{" "}
                  <strong className="highlight">사용자 경험을 개선</strong>하는
                  것에 중점을 두었습니다.
                </p>
              </div>
              <section
                className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl w-full"
                aria-label="프로젝트 목록"
              >
                {projectsData.map((project, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      image={project.image}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                    />
                  </AnimatedCard>
                ))}
              </section>
            </Section>
          </div>

          {/* Footer */}
          <footer className="border-t border-border py-12 px-8 lg:px-12 mt-16">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <p className="text-sm text-muted font-kr">
                Designed & built by{" "}
                <strong className="highlight">안현지</strong>
              </p>
              <div className="flex justify-center items-center gap-3 text-xs text-muted">
                <span className="font-kr">Built with</span>
                <code className="font-mono text-accent font-medium font-en">
                  Next.js
                </code>
                <span className="font-en">&</span>
                <code className="font-mono text-accent font-medium font-en">
                  Tailwind CSS
                </code>
              </div>
              <p className="text-xs text-muted font-en">
                &copy; 2024 All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Hero Section */}
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

        <main>
          <div className="max-w-6xl mx-auto space-y-16">
            {/* About Section */}
            <Section id="about" className="py-10 px-6 w-full md:px-8">
              <SectionTitle number="01">About</SectionTitle>
              <article className="text-left space-y-6 prose-enhanced w-full">
                <StaggerText
                  paragraphs={aboutData.intro}
                  className="text-sm leading-relaxed space-y-5 font-kr"
                  style={{ color: "var(--text-body)" }}
                />
              </article>
            </Section>

            {/* Experience Section */}
            <Section id="experience" className="py-10 px-6 md:px-8" delay={0.2}>
              <SectionTitle number="02">Experience</SectionTitle>
              <section className="space-y-8 w-full" aria-label="경력 사항">
                {experienceData.map((item, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <TimelineItem
                      company={item.company}
                      position={item.position}
                      period={item.period}
                      description={item.description}
                      technologies={item.technologies}
                    />
                  </AnimatedCard>
                ))}
              </section>
            </Section>

            {/* Projects Section */}
            <Section id="projects" className="py-10 px-6 md:px-8" delay={0.4}>
              <SectionTitle number="03">Projects</SectionTitle>
              <div className="mb-8 text-left prose-enhanced w-full">
                <p className="text-sm leading-relaxed font-kr">
                  다양한 기술을 활용하여 구축한 프로젝트들입니다. 각 프로젝트는
                  <strong className="highlight">
                    {" "}
                    실제 문제를 해결
                  </strong>하고{" "}
                  <strong className="highlight">사용자 경험을 개선</strong>하는
                  것에 중점을 두었습니다.
                </p>
              </div>
              <section
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                aria-label="프로젝트 목록"
              >
                {projectsData.map((project, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      image={project.image}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                    />
                  </AnimatedCard>
                ))}
              </section>
            </Section>

            {/* Contact Section */}
            <Section id="contact" className="py-10 px-6 md:px-8" delay={0.6}>
              <SectionTitle number="04">Contact</SectionTitle>
              <AnimatedCard className="prose-enhanced text-left w-full">
                <div className="liquid-glass-card p-6 space-y-6 glow-yellow">
                  <h2 className="text-lg font-bold text-title leading-relaxed font-kr">
                    <span>
                      언제든 <span className="highlight">연락</span> 주세요!
                    </span>
                    <br />
                    <span>
                      잘 <span className="highlight">부탁드립니다!</span>
                    </span>
                  </h2>
                  <p className="text-sm leading-relaxed font-kr">
                    {contactData.message}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <a
                      href={`mailto:${contactData.email}`}
                      className="liquid-glass-button btn-primary inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium font-kr"
                      aria-label="이메일로 연락하기"
                    >
                      이메일 보내기
                    </a>
                    <a
                      href="https://github.com/hyeon318"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-glass-button btn-secondary inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium font-en"
                      aria-label="Github에서 연결하기"
                    >
                      Github에서 연결하기
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            </Section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-12 px-6 md:px-8 mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <p className="text-sm text-muted font-kr">
                Designed & built by{" "}
                <strong className="highlight">안현지</strong>
              </p>
              <div className="flex justify-center items-center gap-3 text-xs text-muted">
                <span className="font-kr">Built with</span>
                <code className="font-mono text-accent font-medium font-en">
                  Next.js
                </code>
                <span className="font-en">&</span>
                <code className="font-mono text-accent font-medium font-en">
                  Tailwind CSS
                </code>
              </div>
              <p className="text-xs text-muted font-en">
                &copy; 2024 All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
