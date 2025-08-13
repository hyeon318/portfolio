"use client";

import React, { useState } from "react";
import {
  Section,
  SectionTitle,
  AnimatedCard,
  Modal,
  ProjectCard,
  ProjectModal,
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
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                onCardClick={() => handleProjectClick(project)}
              />
            </AnimatedCard>
          ))}
        </section>
      </Section>

      {/* Project Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </Modal>
    </>
  );
}
