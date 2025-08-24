"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Section,
  SectionTitle,
  AnimatedCard,
  Modal,
  ProjectCard,
  ProjectModal,
  EyeIcon,
  ExternalLinkIcon,
} from "@/components";
import { projectsData } from "@/data/mockData";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Section id="projects" delay={0.4}>
        <SectionTitle number="03">Projects</SectionTitle>
        <div className="mb-8 text-left prose-enhanced w-full">
          <p className="text-sm lg:text-base leading-relaxed font-kr">
            다양한 기술을 활용하여 구축한 프로젝트들입니다. 각 프로젝트는
            <strong className="highlight"> 실제 문제를 해결</strong>하고{" "}
            <strong className="highlight">사용자 경험을 개선</strong>하는 것에
            중점을 두었습니다.
          </p>
        </div>
        <section
          className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 max-w-5xl w-full"
          aria-label="프로젝트 목록"
        >
          {projectsData.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <ProjectCard
                title={project.title}
                thumbnailTitle={project.thumbnailTitle}
                description={project.description}
                tags={project.tags}
                image={project.image}
                liveUrl={project.liveUrl}
                slug={project.slug}
                onCardClick={() => handleProjectClick(project)}
              />
            </AnimatedCard>
          ))}
        </section>
      </Section>

      {/* Project Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProject.title}
          footer={
            <div className="flex-shrink-0 space-y-3 pt-4">
              {selectedProject.slug && (
                <Link
                  href={`/projects/${selectedProject.slug}`}
                  className="w-full px-4 lg:px-6 py-2 lg:py-3 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 rounded-lg hover:bg-card-hover inline-flex items-center justify-center font-kr"
                  style={{ border: "1.5px solid rgba(255, 255, 255, 0.40)" }}
                  aria-label={`${selectedProject.title} 상세보기 페이지로 이동`}
                >
                  <EyeIcon className="w-4 h-4 mr-2" />
                  자세히 보기
                </Link>
              )}

              {/* 라이브 데모 버튼 */}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 lg:px-6 py-2 lg:py-3 text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 rounded-lg hover:bg-card-hover inline-flex items-center justify-center font-en"
                  style={{ border: "1.5px solid rgba(255, 255, 255, 0.40)" }}
                  aria-label={`${selectedProject.title} 라이브 데모 보기`}
                >
                  <ExternalLinkIcon className="w-4 h-4 mr-2" />
                  라이브 데모
                </a>
              )}

              {/* 닫기 버튼 */}
              <button
                onClick={handleCloseModal}
                className="w-full px-4 lg:px-6 py-2 lg:py-3 text-sm font-medium text-muted hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-card-hover"
                style={{ border: "1.5px solid rgba(255, 255, 255, 0.40)" }}
              >
                닫기
              </button>
            </div>
          }
        >
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}
