interface TechTagProps {
  tech: string;
}

// 강조할 주요 기술들
const HIGHLIGHTED_TECHS = [
  "React",
  "TypeScript",
  "Next.js",
  "JavaScript",
  "Node.js",
];
const FRAMEWORK_TECHS = ["Next.js", "React", "Vue.js", "Angular"];
const LANGUAGE_TECHS = ["TypeScript", "JavaScript", "Python", "Go"];

export default function TechTag({ tech }: TechTagProps) {
  const isHighlighted = HIGHLIGHTED_TECHS.includes(tech);
  const isFramework = FRAMEWORK_TECHS.includes(tech);
  const isLanguage = LANGUAGE_TECHS.includes(tech);

  if (isHighlighted) {
    // 주요 기술 - 강조 스타일
    return (
      <span
        className="text-xs font-semibold rounded-full px-2.5 py-1 border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-primary to-primary-light text-background border-primary hover:border-primary-light cursor-default font-en liquid-glass-button"
        role="tag"
        aria-label={`주요 기술: ${tech}`}
      >
        {tech}
      </span>
    );
  }

  if (isFramework) {
    // 프레임워크 - 블루 계열
    return (
      <span
        className="text-xs font-medium rounded-full px-2.5 py-1 border transition-all duration-300 hover:scale-105 bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 hover:border-accent cursor-default font-en liquid-glass-button"
        role="tag"
        aria-label={`프레임워크: ${tech}`}
      >
        {tech}
      </span>
    );
  }

  if (isLanguage) {
    // 언어 - 크림 계열
    return (
      <span
        className="text-xs font-medium rounded-full px-2.5 py-1 border transition-all duration-300 hover:scale-105 bg-foreground/10 text-foreground border-foreground/30 hover:bg-foreground/20 hover:border-foreground cursor-default font-en liquid-glass-button"
        role="tag"
        aria-label={`프로그래밍 언어: ${tech}`}
      >
        {tech}
      </span>
    );
  }

  // 일반 기술 - 기본 스타일
  return (
    <span
      className="text-xs font-medium rounded-full px-2.5 py-1 border transition-all duration-300 hover:scale-105 bg-card text-muted border-border hover:bg-card-hover hover:border-accent/50 hover:text-accent cursor-default font-en liquid-glass-button"
      role="tag"
      aria-label={`기술: ${tech}`}
    >
      {tech}
    </span>
  );
}
