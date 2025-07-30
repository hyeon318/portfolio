"use client";

import React from "react";
import Section from "@/components/animated/Section";
import SectionTitle from "@/components/SectionTitle";
import { StaggerText } from "@/components/animated/FadeInText";
import { aboutData } from "@/data/mockData";

export default function AboutSection({ className }: { className?: string }) {
  return (
    <Section id="about" className={className}>
      <SectionTitle number="01">About</SectionTitle>
      <article className="text-left space-y-6 prose-enhanced max-w-xl w-full">
        <StaggerText
          paragraphs={aboutData.intro}
          className="text-sm lg:text-base leading-relaxed space-y-5 lg:space-y-6 font-kr"
          style={{ color: "var(--text-body)" }}
        />
      </article>
    </Section>
  );
}
