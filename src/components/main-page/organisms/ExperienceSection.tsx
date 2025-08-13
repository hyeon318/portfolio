import React from "react";
import {
  Section,
  SectionTitle,
  AnimatedCard,
  TimelineItem,
} from "@/components";
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
