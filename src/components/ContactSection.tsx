import React from "react";
import Section from "@/components/animated/Section";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/animated/AnimatedCard";
import { contactData } from "@/data/mockData";

export default function ContactSection() {
  return (
    <div className="block lg:hidden">
      <Section id="contact" delay={0.6}>
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
  );
}
