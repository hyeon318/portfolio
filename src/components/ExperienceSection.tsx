import React from "react";
import Section from "@/components/animated/Section";
import SectionTitle from "@/components/SectionTitle";
import TimelineItem from "@/components/TimelineItem";
import AnimatedCard from "@/components/animated/AnimatedCard";
import { experienceData } from "@/data/mockData";

export default function ExperienceSection({
  className,
}: {
  className?: string;
}) {
  return (
    <Section id="experience" delay={0.2} className={className}>
      <SectionTitle number="02">Experience</SectionTitle>
      <section className="space-y-8 w-full mb-6" aria-label="경력 사항">
        {experienceData.map((item, index) => (
          <AnimatedCard key={index} delay={index * 0.1}>
            <TimelineItem {...item} />
          </AnimatedCard>
        ))}
      </section>
    </Section>
  );
}
