import { TechTag } from "@/components";

interface TimelineItemProps {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export default function TimelineItem({
  company,
  position,
  period,
  description,
  technologies,
}: TimelineItemProps) {
  return (
    <article className="pb-6 last:pb-0 mb-4">
      {/* Experience Card */}
      <div className="liquid-glass-card p-5 hover:glow group">
        <header className="flex flex-col lg:flex-row lg:items-start lg:justify-between ">
          <div className="flex-1 lg:pr-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start sm:mb-2">
              <h3 className="text-lg lg:text-xl font-bold text-title lg:mb-2 leading-tight font-kr group-hover:text-accent transition-colors duration-300">
                <span className="highlight">{company}</span> | {period}
              </h3>
              <h3 className="text-lg lg:text-xl font-bold text-title mb-2 leading-tight font-kr group-hover:text-accent transition-colors duration-300">
                {position}
              </h3>
            </div>
          </div>
        </header>

        <section className="space-y-3 mb-5 prose-enhanced">
          <ul className="space-y-1 lg:space-y-2">
            {description.map((item, index) => (
              <li
                key={index}
                className="text-text-body leading-relaxed flex items-start text-md group-hover:text-foreground-muted transition-colors duration-300"
              >
                <span
                  className="text-accent mr-3 mt-1 text-xs flex-shrink-0 font-bold"
                  aria-hidden="true"
                >
                  ▸
                </span>
                <span
                  className="leading-relaxed font-kr"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
        </section>

        {technologies && (
          <footer className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, index) => (
              <TechTag key={index} tech={tech} />
            ))}
          </footer>
        )}
      </div>
    </article>
  );
}
