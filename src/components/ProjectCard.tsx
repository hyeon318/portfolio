"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TechTag from "./TechTag";
import { ProjectIcon, GitHubIcon, ExternalLinkIcon } from "./icons";
import { renderToHTML } from "next/dist/server/render";

interface ProjectCardProps {
  title: string;
  thumbnailTitle?: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  onCardClick?: () => void;
}

const gradientVariants = [
  "from-blue-500 to-purple-600",
  "from-green-500 to-blue-600",
  "from-purple-500 to-pink-600",
  "from-orange-500 to-red-600",
  "from-teal-500 to-green-600",
  "from-indigo-500 to-purple-600",
];

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  githubUrl,
  thumbnailTitle,
  liveUrl,
  onCardClick,
}: ProjectCardProps) {
  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    }
  };

  const gradientIndex = title.length % gradientVariants.length;
  const gradientClass = gradientVariants[gradientIndex];

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full"
    >
      <article
        className="h-full flex flex-col project-glass-card group hover:glow transition-all duration-500 cursor-pointer"
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCardClick();
          }
        }}
        aria-label={`${title} 프로젝트 상세 보기`}
      >
        <figure className="relative h-40 md:h-48 overflow-hidden flex-shrink-0 bg-background-secondary">
          {image ? (
            <Image
              src={image}
              alt={`${title} 프로젝트 이미지`}
              fill
              className="object-cover transition-transform duration-500"
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradientClass} group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-500`}
            >
              <div className="text-center">
                {/* <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 border border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                  <ProjectIcon className="w-8 h-8 text-accent group-hover:text-accent-light transition-colors duration-300" />
                </div> */}
                <p className="lg:text-2xl sm:text-xl font-bold tracking-wider uppercase text-muted group-hover:text-accent transition-colors duration-300 font-en">
                  {thumbnailTitle}
                </p>
              </div>
            </div>
          )}
          {liveUrl && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
              style={{ backgroundColor: "rgba(10, 15, 28, 0)" }}
              whileHover={{
                backgroundColor: "rgba(10, 15, 28, 0.8)",
                opacity: 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-xs font-semibold px-4 py-2 rounded-full bg-accent text-background border-2 border-accent-light shadow-lg font-en"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                View Live
              </motion.span>
            </motion.div>
          )}
        </figure>

        <div className="flex-1 flex flex-col p-5 space-y-4">
          <header className="space-y-3">
            <h3 className="text-lg lg:text-xl font-bold leading-tight text-title group-hover:text-accent transition-colors duration-300 font-kr">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-text-body group-hover:text-foreground-muted transition-colors duration-300 font-kr">
              {description}
            </p>
          </header>

          <footer className="flex-1 flex flex-col justify-end space-y-4">
            <section
              className="flex flex-wrap gap-2 mt-3"
              aria-label="사용된 기술"
            >
              {tags.map((tag, index) => (
                <TechTag key={index} tech={tag} />
              ))}
            </section>

            <nav className="flex gap-6 text-xs pt-3 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-300">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link font-medium flex items-center gap-2 tracking-wider uppercase transition-all duration-300 text-muted hover:text-accent font-en"
                  aria-label={`${title} GitHub 저장소 보기`}
                  onClick={e => e.stopPropagation()}
                >
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link font-medium flex items-center gap-2 tracking-wider uppercase transition-all duration-300 text-muted hover:text-primary font-en"
                  aria-label={`${title} 라이브 데모 보기`}
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </nav>
          </footer>
        </div>
      </article>
    </motion.div>
  );
}
