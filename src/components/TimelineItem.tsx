import { TimelineItemProps } from "@/types";
import TechTag from "./TechTag";

export default function TimelineItem({
  company,
  position,
  period,
  description,
  technologies,
}: TimelineItemProps) {
  return (
    <div className="pb-6 last:pb-0 mb-4">
      {/* Experience Card */}
      <div className="card p-5 hover:glow group">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
          <div className="flex-1 lg:pr-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start mb-3">
              <h3 className="text-lg lg:text-xl font-bold text-title mb-2 leading-tight font-kr group-hover:text-accent transition-colors duration-300">
                {position}
              </h3>
              <span className="text-xs text-muted font-medium font-mono bg-background-secondary px-2.5 py-1 rounded-full self-start sm:self-center lg:self-start uppercase tracking-wider border border-border group-hover:border-accent/50 transition-all duration-300">
                {period}
              </span>
            </div>
            <div className="text-accent font-semibold text-base mb-3 tracking-wide font-en group-hover:text-primary transition-colors duration-300">
              @ <span className="highlight-underline">{company}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-3 mb-5 prose-enhanced">
          {description.map((item, index) => (
            <li
              key={index}
              className="text-text-body leading-relaxed flex items-start text-sm group-hover:text-foreground-muted transition-colors duration-300"
            >
              <span className="text-accent mr-3 mt-1 text-xs flex-shrink-0 font-bold">
                ▸
              </span>
              <span className="leading-relaxed font-kr">{item}</span>
            </li>
          ))}
        </ul>

        {technologies && (
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, index) => (
              <TechTag key={index} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
