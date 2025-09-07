import React from "react";
import Script from "next/script";
import {
  Sidebar as TopNav,
  ScrollManager,
  ScrollToTop,
  ScrollTracker,
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from "@/components";
import Footer from "@/components/main-page/atom/footer";
import { experienceData } from "@/data/mockData";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://since1994-oasis-portfolio.vercel.app/";

export default function Home() {
  // Person Structured Data
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "안현지",
    alternateName: "Hyeonji Ahn",
    jobTitle: "Frontend & Backend Developer",
    description: "사용자 경험을 중심으로 생각하는 프론트엔드 & 백엔드 개발자",
    url: `${baseUrl}`,
    image: `${baseUrl}/images/og-image.png`,
    email: "mail_0318@naver.com",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Java",
      "Spring Boot",
      "Frontend Development",
      "Backend Development",
      "Web Development",
    ],
    worksFor: experienceData.map(exp => ({
      "@type": "Organization",
      name: exp.company,
      description: exp.description.join(", "),
    })),
    hasOccupation: {
      "@type": "Occupation",
      name: "Frontend Developer",
      occupationLocation: {
        "@type": "Country",
        name: "South Korea",
      },
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Java",
        "Spring Boot",
        "MySQL",
        "PostgreSQL",
      ],
    },
  };

  // Website Structured Data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HyeonJi Ahn Portfolio",
    alternateName: "Hyeonji Ahn Portfolio",
    description:
      "Frontend & Backend Developer Portfolio - 사용자 경험을 중심으로 생각하는 프론트엔드 & 백엔드 개발자 안현지의 포트폴리오",
    url: baseUrl,
    inLanguage: "ko-KR",
    author: {
      "@type": "Person",
      name: "안현지",
      alternateName: "Hyeonji Ahn",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/projects?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Script
        id="person-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />

      <ScrollManager />
      <ScrollTracker />
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
