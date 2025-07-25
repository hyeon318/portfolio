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
    <div className="pb-8 last:pb-0 mb-6">
      {/* Experience Card */}
      <div className="card p-6 hover:glow group">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-5">
          <div className="flex-1 lg:pr-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start mb-4">
              <h3 className="text-xl lg:text-2xl font-bold text-title mb-2 leading-tight font-kr group-hover:text-accent transition-colors duration-300">
                {position}
              </h3>
              <span className="text-sm text-muted font-medium font-mono bg-background-secondary px-3 py-1.5 rounded-full self-start sm:self-center lg:self-start uppercase tracking-wider border border-border group-hover:border-accent/50 transition-all duration-300">
                {period}
              </span>
            </div>
            <div className="text-accent font-semibold text-lg mb-4 tracking-wide font-en group-hover:text-primary transition-colors duration-300">
              @ <span className="highlight-underline">{company}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-4 mb-6 prose-enhanced">
          {description.map((item, index) => (
            <li
              key={index}
              className="text-text-body leading-relaxed flex items-start text-base group-hover:text-foreground-muted transition-colors duration-300"
            >
              <span className="text-accent mr-4 mt-2 text-sm flex-shrink-0 font-bold">
                ▸
              </span>
              <span className="leading-relaxed font-kr">{item}</span>
            </li>
          ))}
        </ul>

        {technologies && (
          <div className="flex flex-wrap gap-3 mt-4">
            {technologies.map((tech, index) => (
              <TechTag key={index} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
