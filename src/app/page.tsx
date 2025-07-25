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
      <div className="hidden lg:flex lg:h-screen lg:pt-20">
        {/* Left Side - Hero Section (고정) - 여백 줄임 */}
        <div className="lg:w-2/5 xl:w-1/3 lg:sticky lg:top-20 lg:h-fit lg:max-h-screen lg:overflow-y-auto lg:pl-16 xl:pl-20">
          <Section className="py-16 pr-8">
            <div className="text-left space-y-10">
              <div className="space-y-6">
                <div className="text-accent font-mono text-lg font-medium tracking-wider">
                  안녕하세요! 👋
                </div>
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight font-kr">
                  <span className="text-foreground">저는 </span>
                  <span className="highlight-bg">안현지</span>
                  <span className="text-foreground">이고,</span>
                  <br />
                  <span className="text-accent">사용자 경험</span>을 사랑하는
                  <br />
                  <span className="highlight-underline">프론트엔드 개발자</span>
                  입니다
                </h1>
                <h2 className="text-xl xl:text-2xl font-medium text-muted tracking-wide font-en">
                  Frontend Developer & UX Enthusiast
                </h2>
              </div>

              <div className="space-y-6 prose-enhanced">
                <p className="text-lg leading-relaxed font-kr">
                  <span className="highlight">React</span>와{" "}
                  <span className="highlight">TypeScript</span>로
                  <span className="text-accent font-semibold">
                    {" "}
                    직관적이고 성능이 뛰어난
                  </span>{" "}
                  웹 애플리케이션을 만드는 것이 제 전문 분야입니다.
                </p>
                <p className="text-base leading-relaxed text-muted font-kr">
                  코드의 아름다움과 사용자 경험의 완성도, 두 마리 토끼를 모두
                  잡는 것이 제 목표입니다.
                </p>
              </div>

              {/* 개성있는 요소 추가 */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                <div className="pl-8 space-y-3">
                  <div className="text-sm font-mono text-accent">
                    {`// 현재 집중하고 있는 것들`}
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      <span className="font-kr">성능 최적화와 접근성</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-warning rounded-full"></span>
                      <span className="font-kr">모던 웹 기술 탐구</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="font-kr">사용자 중심 디자인</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact 정보 개선 */}
              <div className="pt-8 border-t border-border/50">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-title font-kr">
                    함께 <span className="highlight">멋진 것</span>을
                    만들어봐요!
                  </h3>
                  <p className="text-base leading-relaxed text-muted font-kr">
                    {contactData.message}
                  </p>
                  <div className="flex flex-col gap-4">
                    <a
                      href={`mailto:${contactData.email}`}
                      className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm tracking-wider font-medium font-en"
                    >
                      이메일 보내기
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm tracking-wider font-medium font-en"
                    >
                      LinkedIn에서 연결
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Right Side - Main Content - 여백 조정 */}
        <div className="lg:w-3/5 xl:w-2/3 lg:overflow-y-auto lg:pr-16 xl:pr-20">
          <main className="px-8 py-16">
            {/* About Section */}
            <Section id="about" className="py-12">
              <SectionTitle number="01">About</SectionTitle>
              <div className="text-left space-y-8 prose-enhanced">
                <StaggerText
                  paragraphs={aboutData.intro}
                  className="text-lg leading-relaxed space-y-8 font-kr"
                  style={{ color: "var(--text-body)" }}
                />
              </div>
            </Section>

            {/* Experience Section */}
            <Section id="experience" className="py-12" delay={0.2}>
              <SectionTitle number="02">Experience</SectionTitle>
              <div className="space-y-8">
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
              </div>
            </Section>

            {/* Projects Section */}
            <Section id="projects" className="py-12" delay={0.4}>
              <SectionTitle number="03">Projects</SectionTitle>
              <div className="mb-10 text-left prose-enhanced">
                <p className="text-lg leading-relaxed font-kr">
                  다양한 기술을 활용하여 구축한 프로젝트들입니다. 각 프로젝트는
                  <span className="highlight"> 실제 문제를 해결</span>하고{" "}
                  <span className="highlight">사용자 경험을 개선</span>하는 것에
                  중점을 두었습니다.
                </p>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
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
              </div>
            </Section>
          </main>

          {/* Footer */}
          <footer className="border-t border-border py-12 px-8">
            <div className="text-center space-y-4">
              <p className="text-base text-muted font-kr">
                Designed & built by{" "}
                <span className="font-semibold highlight">안현지</span>
              </p>
              <div className="flex justify-center items-center gap-3 text-sm text-muted">
                <span className="font-kr">Built with</span>
                <span className="font-mono text-accent font-medium">
                  Next.js
                </span>
                <span>&</span>
                <span className="font-mono text-accent font-medium">
                  Tailwind CSS
                </span>
              </div>
              <p className="text-sm text-muted font-en">
                &copy; 2024 All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>

      {/* Mobile Layout - 기존 레이아웃 개선 */}
      <div className="lg:hidden">
        {/* Hero Section */}
        <Section className="pt-28 pb-20 px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="text-accent font-mono text-base font-medium tracking-wider">
                안녕하세요! 👋
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight font-kr">
                <span className="text-foreground">저는 </span>
                <span className="highlight-bg">안현지</span>
                <span className="text-foreground">이고,</span>
                <br />
                <span className="text-accent">사용자 경험</span>을 사랑하는
                <br />
                <span className="highlight-underline">프론트엔드 개발자</span>
                입니다
              </h1>
              <h2 className="text-lg md:text-xl font-medium text-muted tracking-wide font-en">
                Frontend Developer & UX Enthusiast
              </h2>
            </div>

            <div className="prose-enhanced mx-auto">
              <p className="text-lg leading-relaxed font-kr">
                <span className="highlight">React</span>와{" "}
                <span className="highlight">TypeScript</span>로
                <span className="text-accent font-semibold">
                  {" "}
                  직관적이고 성능이 뛰어난
                </span>{" "}
                웹 애플리케이션을 만드는 것이 제 전문 분야입니다.
              </p>
            </div>
          </div>
        </Section>

        <main>
          <div className="max-w-6xl mx-auto">
            {/* About Section */}
            <Section id="about" className="py-12 px-6 w-full md:px-8">
              <SectionTitle number="01">About</SectionTitle>
              <div className="text-left space-y-8 prose-enhanced">
                <StaggerText
                  paragraphs={aboutData.intro}
                  className="text-base leading-relaxed space-y-6 font-kr"
                  style={{ color: "var(--text-body)" }}
                />
              </div>
            </Section>

            {/* Experience Section */}
            <Section id="experience" className="py-12 px-4 md:px-6" delay={0.2}>
              <div className="px-2 md:px-4">
                <SectionTitle number="02">Experience</SectionTitle>
                <div className="space-y-8">
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
                </div>
              </div>
            </Section>

            {/* Projects Section */}
            <Section id="projects" className="py-12 px-6 md:px-8" delay={0.4}>
              <SectionTitle number="03">Projects</SectionTitle>
              <div className="mb-10 text-left prose-enhanced">
                <p className="text-base leading-relaxed font-kr">
                  다양한 기술을 활용하여 구축한 프로젝트들입니다. 각 프로젝트는
                  <span className="highlight"> 실제 문제를 해결</span>하고{" "}
                  <span className="highlight">사용자 경험을 개선</span>하는 것에
                  중점을 두었습니다.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              </div>
            </Section>

            {/* Contact Section */}
            <Section id="contact" className="py-12 px-6 md:px-8" delay={0.6}>
              <SectionTitle number="04">Contact</SectionTitle>
              <AnimatedCard className="prose-enhanced text-left">
                <div className="card p-8 space-y-8 glow-yellow">
                  <h3 className="text-2xl font-bold text-title leading-relaxed font-kr">
                    함께 <span className="highlight">멋진 것</span>을
                    만들어봐요!
                  </h3>
                  <p className="text-base leading-relaxed font-kr">
                    {contactData.message}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={`mailto:${contactData.email}`}
                      className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm tracking-wider font-medium font-en"
                    >
                      이메일 보내기
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm tracking-wider font-medium font-en"
                    >
                      LinkedIn에서 연결
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            </Section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-16 px-6 md:px-8 mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <p className="text-base text-muted font-kr">
                Designed & built by{" "}
                <span className="font-semibold highlight">안현지</span>
              </p>
              <div className="flex justify-center items-center gap-3 text-sm text-muted">
                <span className="font-kr">Built with</span>
                <span className="font-mono text-accent font-medium">
                  Next.js
                </span>
                <span>&</span>
                <span className="font-mono text-accent font-medium">
                  Tailwind CSS
                </span>
              </div>
              <p className="text-sm text-muted font-en">
                &copy; 2024 All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
