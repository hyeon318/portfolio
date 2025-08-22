import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// 화살표 아이콘 (뒤로가기)
export const ArrowLeftIcon: React.FC<IconProps> = ({
  className = "w-5 h-5",
  size,
}) => (
  <svg
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

// 프로젝트 아이콘
export const ProjectIcon: React.FC<IconProps> = ({
  className = "w-10 h-10",
  size,
}) => (
  <svg
    className={className}
    style={size ? { width: size, height: size } : undefined}
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
);

// GitHub 아이콘
export const GitHubIcon: React.FC<IconProps> = ({
  className = "w-4 h-4",
  size,
}) => (
  <svg
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// 외부 링크 아이콘
export const ExternalLinkIcon: React.FC<IconProps> = ({
  className = "w-4 h-4",
  size,
}) => (
  <svg
    className={className}
    style={size ? { width: size, height: size } : undefined}
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
);

// 눈 아이콘 (상세보기)
export const EyeIcon: React.FC<IconProps> = ({
  className = "w-4 h-4",
  size,
}) => (
  <svg
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

// X 아이콘 (닫기)
export const XIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// LinkedIn 아이콘
export const LinkedInIcon: React.FC<IconProps> = ({
  className = "w-5 h-5",
  size,
}) => (
  <svg
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// 이메일 아이콘
export const EmailIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
  size,
}) => (
  <svg
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor" // 부모 color 상속
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

// 이력서 아이콘 (문서 모양)
export const ResumeIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
  size,
}) => (
  <svg
    className={`${className} text-[#4A9EFF]`}
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
  </svg>
);

// 포트폴리오 아이콘 (명함/ID 카드 형태)
export const PortfolioIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
  size,
}) => (
  <svg
    className={`${className} text-[#4A9EFF]`}
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9 8h6v2H9V8zm0 4h6v2H9v-2zm-2 6H4V6h16v12H7v-2z" />
  </svg>
);

// ChevronDown 아이콘
export const ChevronDownIcon: React.FC<IconProps> = ({
  className = "w-4 h-4",
  size,
}) => (
  <svg
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// ChevronUp 아이콘
export const ChevronUpIcon: React.FC<IconProps> = ({
  className = "w-4 h-4",
  size,
}) => (
  <svg
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);
