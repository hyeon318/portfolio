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
    <div className={`mb-6 ${className}`}>
      <div className="flex items-center gap-4 mb-6 group">
        {number && (
          <span className="section-number text-base font-bold tracking-wider">
            {number}.
          </span>
        )}
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-title font-kr group-hover:text-accent transition-colors duration-300">
          {children}
        </h2>
        <div className="flex-1 h-px ml-6 max-w-xs bg-gradient-to-r from-border to-transparent group-hover:from-accent/50 transition-all duration-300"></div>
      </div>
    </div>
  );
}
