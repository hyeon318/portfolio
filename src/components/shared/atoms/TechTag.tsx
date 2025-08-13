interface TechTagProps {
  tech: string;
  variant?: "neutral" | "accent" | "soft";
}

// Brand colors for tech recognition
const TECH_BRAND_COLORS: { [key: string]: string } = {
  // Frontend Frameworks
  React: "text-sky-400",
  "Next.js": "text-gray-100",
  "Vue.js": "text-emerald-400",
  Angular: "text-red-400",

  // Languages
  TypeScript: "text-blue-400",
  JavaScript: "text-yellow-400",
  Java: "text-orange-400",
  Python: "text-blue-400",
  Go: "text-cyan-400",

  // Backend Frameworks
  Spring: "text-green-400",
  "Spring Boot": "text-green-400",
  "Node.js": "text-green-400",

  // Databases
  MySQL: "text-blue-400",
  PostgreSQL: "text-indigo-400",
  PostgresSQL: "text-indigo-400",
  Oracle: "text-red-400",
  MongoDB: "text-green-400",

  // Libraries & Tools
  "React Query": "text-pink-400",
  jQuery: "text-blue-400",
  JSP: "text-orange-400",
  MyBatis: "text-purple-400",
  Mybatis: "text-purple-400",
  JPA: "text-purple-400",

  // CSS & Styling
  "Tailwind CSS": "text-teal-400",

  // Development Tools
  ESLint: "text-purple-400",
  Prettier: "text-pink-400",

  // Graphics & Canvas
  Konva: "text-red-400",
  "Fabric.js": "text-yellow-400",

  // Internationalization
  i18next: "text-indigo-400",

  // Authentication
  OAuth: "text-gray-400",

  // Caching
  "Guava Caching": "text-emerald-400",

  // Scheduling
  "Quartz Scheduler": "text-amber-400",

  // Database Procedures
  "DB Procedure": "text-slate-400",
  Trigger: "text-slate-400",

  // UI Libraries
  w2ui: "text-violet-400",

  // Animation
  "Framer Motion": "text-fuchsia-400",
};

// Accent colors for borders/highlights
const TECH_ACCENT_COLORS: { [key: string]: string } = {
  React: "border-sky-400/40 hover:border-sky-400/60",
  "Next.js": "border-gray-400/40 hover:border-gray-300/60",
  "Vue.js": "border-emerald-400/40 hover:border-emerald-400/60",
  Angular: "border-red-400/40 hover:border-red-400/60",
  TypeScript: "border-blue-400/40 hover:border-blue-400/60",
  JavaScript: "border-yellow-400/40 hover:border-yellow-400/60",
  Java: "border-orange-400/40 hover:border-orange-400/60",
  Python: "border-blue-400/40 hover:border-blue-400/60",
  Go: "border-cyan-400/40 hover:border-cyan-400/60",
  Spring: "border-green-400/40 hover:border-green-400/60",
  "Spring Boot": "border-green-400/40 hover:border-green-400/60",
  "Node.js": "border-green-400/40 hover:border-green-400/60",
  MySQL: "border-blue-400/40 hover:border-blue-400/60",
  PostgreSQL: "border-indigo-400/40 hover:border-indigo-400/60",
  PostgresSQL: "border-indigo-400/40 hover:border-indigo-400/60",
  Oracle: "border-red-400/40 hover:border-red-400/60",
  MongoDB: "border-green-400/40 hover:border-green-400/60",
  "React Query": "border-pink-400/40 hover:border-pink-400/60",
  jQuery: "border-blue-400/40 hover:border-blue-400/60",
  JSP: "border-orange-400/40 hover:border-orange-400/60",
  MyBatis: "border-purple-400/40 hover:border-purple-400/60",
  Mybatis: "border-purple-400/40 hover:border-purple-400/60",
  JPA: "border-purple-400/40 hover:border-purple-400/60",
  "Tailwind CSS": "border-teal-400/40 hover:border-teal-400/60",
  ESLint: "border-purple-400/40 hover:border-purple-400/60",
  Prettier: "border-pink-400/40 hover:border-pink-400/60",
  Konva: "border-red-400/40 hover:border-red-400/60",
  "Fabric.js": "border-yellow-400/40 hover:border-yellow-400/60",
  i18next: "border-indigo-400/40 hover:border-indigo-400/60",
  OAuth: "border-gray-400/40 hover:border-gray-400/60",
  "Guava Caching": "border-emerald-400/40 hover:border-emerald-400/60",
  "Quartz Scheduler": "border-amber-400/40 hover:border-amber-400/60",
  "DB Procedure": "border-slate-400/40 hover:border-slate-400/60",
  Trigger: "border-slate-400/40 hover:border-slate-400/60",
  w2ui: "border-violet-400/40 hover:border-violet-400/60",
  "Framer Motion": "border-fuchsia-400/40 hover:border-fuchsia-400/60",
};

// Soft background colors (very subtle)
const TECH_SOFT_COLORS: { [key: string]: string } = {
  React: "bg-sky-500/5 hover:bg-sky-500/10",
  "Next.js": "bg-gray-600/5 hover:bg-gray-600/10",
  "Vue.js": "bg-emerald-500/5 hover:bg-emerald-500/10",
  Angular: "bg-red-600/5 hover:bg-red-600/10",
  TypeScript: "bg-blue-600/5 hover:bg-blue-600/10",
  JavaScript: "bg-yellow-500/5 hover:bg-yellow-500/10",
  Java: "bg-orange-600/5 hover:bg-orange-600/10",
  Python: "bg-blue-500/5 hover:bg-blue-500/10",
  Go: "bg-cyan-600/5 hover:bg-cyan-600/10",
  Spring: "bg-green-600/5 hover:bg-green-600/10",
  "Spring Boot": "bg-green-600/5 hover:bg-green-600/10",
  "Node.js": "bg-green-500/5 hover:bg-green-500/10",
  MySQL: "bg-blue-700/5 hover:bg-blue-700/10",
  PostgreSQL: "bg-indigo-600/5 hover:bg-indigo-600/10",
  PostgresSQL: "bg-indigo-600/5 hover:bg-indigo-600/10",
  Oracle: "bg-red-700/5 hover:bg-red-700/10",
  MongoDB: "bg-green-700/5 hover:bg-green-700/10",
  "React Query": "bg-pink-600/5 hover:bg-pink-600/10",
  jQuery: "bg-blue-800/5 hover:bg-blue-800/10",
  JSP: "bg-orange-700/5 hover:bg-orange-700/10",
  MyBatis: "bg-purple-600/5 hover:bg-purple-600/10",
  Mybatis: "bg-purple-600/5 hover:bg-purple-600/10",
  JPA: "bg-purple-700/5 hover:bg-purple-700/10",
  "Tailwind CSS": "bg-teal-500/5 hover:bg-teal-500/10",
  ESLint: "bg-purple-500/5 hover:bg-purple-500/10",
  Prettier: "bg-pink-500/5 hover:bg-pink-500/10",
  Konva: "bg-red-500/5 hover:bg-red-500/10",
  "Fabric.js": "bg-yellow-600/5 hover:bg-yellow-600/10",
  i18next: "bg-indigo-500/5 hover:bg-indigo-500/10",
  OAuth: "bg-gray-600/5 hover:bg-gray-600/10",
  "Guava Caching": "bg-emerald-600/5 hover:bg-emerald-600/10",
  "Quartz Scheduler": "bg-amber-600/5 hover:bg-amber-600/10",
  "DB Procedure": "bg-slate-600/5 hover:bg-slate-600/10",
  Trigger: "bg-slate-700/5 hover:bg-slate-700/10",
  w2ui: "bg-violet-600/5 hover:bg-violet-600/10",
  "Framer Motion": "bg-fuchsia-600/5 hover:bg-fuchsia-600/10",
};

export default function TechTag({ tech, variant = "accent" }: TechTagProps) {
  const brandColor = TECH_BRAND_COLORS[tech];
  const accentColor = TECH_ACCENT_COLORS[tech];
  const softColor = TECH_SOFT_COLORS[tech];

  // Base classes for all variants
  const baseClasses =
    "text-xs font-medium rounded-full px-2.5 py-1 transition-all duration-300 hover:scale-105 cursor-default font-en";

  if (variant === "neutral") {
    // Approach 1: Neutral background with brand color text
    return (
      <span
        className={`${baseClasses} bg-white/8 hover:bg-white/12 border border-white/20 hover:border-white/30 ${
          brandColor || "text-gray-300"
        }`}
        role="tag"
        aria-label={`기술: ${tech}`}
      >
        {tech}
      </span>
    );
  }

  if (variant === "accent") {
    // Approach 2: Brand color for borders/accents only
    return (
      <span
        className={`${baseClasses} bg-white/5 hover:bg-white/8 text-gray-200 hover:text-white border ${
          accentColor || "border-gray-400/40 hover:border-gray-400/60"
        }`}
        role="tag"
        aria-label={`기술: ${tech}`}
      >
        {tech}
      </span>
    );
  }

  if (variant === "soft") {
    // Approach 3: Very soft brand-based backgrounds
    return (
      <span
        className={`${baseClasses} ${
          softColor || "bg-white/5 hover:bg-white/8"
        } text-gray-200 hover:text-white border border-white/10 hover:border-white/20`}
        role="tag"
        aria-label={`기술: ${tech}`}
      >
        {tech}
      </span>
    );
  }

  // Fallback for unknown variants
  return (
    <span
      className={`${baseClasses} bg-white/5 hover:bg-white/8 text-gray-200 hover:text-white border border-white/20 hover:border-white/30`}
      role="tag"
      aria-label={`기술: ${tech}`}
    >
      {tech}
    </span>
  );
}
