"use client";

import React, { useState } from "react";
import Section from "@/components/animated/Section";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import AnimatedCard from "@/components/animated/AnimatedCard";
import Modal from "@/components/Modal";
import ProjectModal from "@/components/ProjectModal";
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
      {/* Desktop Projects Section */}
      <div className="hidden lg:block">
        <Section
          id="projects"
          className="px-8 lg:px-12 flex items-center justify-center"
          delay={0.4}
        >
          <SectionTitle number="03">Projects</SectionTitle>
          <div className="mb-8 text-left prose-enhanced w-full">
            <p className="text-base leading-relaxed font-kr">
              다양한 기술을 활용하여 구축한 프로젝트들입니다. 각 프로젝트는
              <strong className="highlight"> 실제 문제를 해결</strong>하고{" "}
              <strong className="highlight">사용자 경험을 개선</strong>하는 것에
              중점을 두었습니다.
            </p>
          </div>
          <section
            className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-5xl w-full"
            aria-label="프로젝트 목록"
          >
            {projectsData.map((project, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <ProjectCard
                  title={project.title}
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
      </div>

      {/* Mobile Projects Section */}
      <div className="lg:hidden">
        <Section id="projects" className="py-10 px-6 md:px-8" delay={0.4}>
          <SectionTitle number="03">Projects</SectionTitle>
          <div className="mb-8 text-left prose-enhanced w-full">
            <p className="text-sm leading-relaxed font-kr">
              다양한 기술을 활용하여 구축한 프로젝트들입니다. 각 프로젝트는
              <strong className="highlight"> 실제 문제를 해결</strong>하고{" "}
              <strong className="highlight">사용자 경험을 개선</strong>하는 것에
              중점을 두었습니다.
            </p>
          </div>
          <section
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            aria-label="프로젝트 목록"
          >
            {projectsData.map((project, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <ProjectCard
                  title={project.title}
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
      </div>

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
