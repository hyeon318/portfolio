import { SectionTitleProps } from "@/types";

interface ExtendedSectionTitleProps extends SectionTitleProps {
  number?: string;
}

export default function SectionTitle({
  children,
  number,
  className = "",
}: ExtendedSectionTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center gap-6 mb-8 group">
        {number && (
          <span className="section-number text-lg font-bold tracking-wider">
            {number}.
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-title font-kr group-hover:text-accent transition-colors duration-300">
          {children}
        </h2>
        <div className="flex-1 h-px ml-8 max-w-xs bg-gradient-to-r from-border to-transparent group-hover:from-accent/50 transition-all duration-300"></div>
      </div>
    </div>
  );
}
