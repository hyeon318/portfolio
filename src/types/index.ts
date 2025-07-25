// Component Props Types
export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  number?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface TimelineItemProps {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies?: string[];
}

// Data Types
export interface AboutData {
  intro: string[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactData {
  email: string;
  message: string;
}

// Navigation Types
export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
