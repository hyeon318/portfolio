"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCardProps } from "@/types";
import TechTag from "./TechTag";

// 프로젝트별 gradient 색상 - 새로운 컬러 팔레트
const gradientVariants = [
  "from-accent/20 to-primary/20",
  "from-primary/20 to-accent-light/20",
  "from-accent-light/20 to-accent/20",
  "from-primary-light/20 to-accent/20",
  "from-success/20 to-accent/20",
  "from-warning/20 to-primary/20",
];

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const handleImageClick = () => {
    if (liveUrl) {
      window.open(liveUrl, "_blank");
    }
  };

  const gradientIndex = title.length % gradientVariants.length;
  const gradientClass = gradientVariants[gradientIndex];

  const renderCard = (isMobile: boolean = false) => {
    const cardContent = (
      <div className="h-full flex flex-col card group hover:glow transition-all duration-500">
        <div
          className="relative h-40 md:h-48 overflow-hidden cursor-pointer flex-shrink-0 bg-background-secondary"
          onClick={handleImageClick}
        >
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 border border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-accent group-hover:text-accent-light transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <p className="text-xs font-medium tracking-wider uppercase text-muted group-hover:text-accent transition-colors duration-300 font-en">
                  View Project
                </p>
              </div>
            </div>
          )}
          {liveUrl && !isMobile && (
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
        </div>

        <div className="flex-1 flex flex-col p-5 space-y-4">
          <div className="space-y-3">
            <h3 className="text-lg lg:text-xl font-bold leading-tight text-title group-hover:text-accent transition-colors duration-300 font-kr">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-text-body group-hover:text-foreground-muted transition-colors duration-300 font-kr">
              {description}
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-end space-y-4">
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag, index) => (
                <TechTag key={index} tech={tag} />
              ))}
            </div>

            <div className="flex gap-6 text-xs pt-3 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-300">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium flex items-center gap-2 tracking-wider uppercase transition-all duration-300 text-muted hover:text-accent hover:scale-105 font-en"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium flex items-center gap-2 tracking-wider uppercase transition-all duration-300 text-muted hover:text-primary hover:scale-105 font-en"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
    return cardContent;
  };

  return (
    <>
      {/* Mobile version - no animations */}
      <div className="md:hidden">{renderCard(true)}</div>

      {/* Desktop version - with animations */}
      <motion.div
        className="hidden md:block"
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="relative overflow-hidden cursor-pointer"
          onClick={handleImageClick}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {renderCard()}
        </motion.div>
      </motion.div>
    </>
  );
}
