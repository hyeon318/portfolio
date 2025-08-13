import React from "react";
import {
  Sidebar as TopNav,
  ScrollManager,
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from "@/components";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <ScrollManager />
      <TopNav />

      {/* Desktop Layout - 좌우 분할 */}
      <div className="hidden lg:flex lg:min-h-screen lg:pt-24">
        <HeroSection />

        {/* 우측 Content (About ~ Projects) */}
        <main className="lg:w-3/5 lg:max-w-3/5 xl:w-2/4 space-y-20 lg:pl-20 ">
          <AboutSection className="max-w-5xl" />
          <ExperienceSection className="max-w-5xl" />
          <ProjectsSection />
        </main>
      </div>

      {/* 모바일 Layout */}
      <div className="block lg:hidden">
        <HeroSection />

        <main className="px-6 md:px-8 space-y-20 mt-12">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 md:px-8 mt-16">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <p className="text-sm text-muted font-kr">
            Designed & built by <strong className="highlight">안현지</strong>
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
    </div>
  );
}
