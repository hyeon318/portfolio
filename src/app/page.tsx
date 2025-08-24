import React from "react";
import {
  Sidebar as TopNav,
  ScrollManager,
  ScrollToTop,
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from "@/components";
import Footer from "@/components/main-page/atom/footer";

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
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
