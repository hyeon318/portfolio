"use client";

import React from "react";

interface StyledTextProps {
  text: string;
  highlight?: string;
  gradient?: string;
  className?: string;
}

export default function StyledText({
  text,
  highlight,
  gradient,
  className = "text-lg leading-relaxed text-[var(--text-white)]/80 font-kr",
}: StyledTextProps) {
  // CSS 스타일링이 필요하지 않은 경우 텍스트를 그대로 반환
  if (!highlight && !gradient) {
    return <p className={className}>{text}</p>;
  }

  // 간단한 하이라이트 처리
  if (highlight && text.includes(highlight)) {
    const parts = text.split(highlight);
    return (
      <p className={className}>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="bg-white/10 px-2 py-1 rounded-lg text-sm font-medium">
                {highlight}
              </span>
            )}
          </React.Fragment>
        ))}
      </p>
    );
  }

  // 간단한 그라데이션 처리
  if (gradient && text.includes(gradient)) {
    const parts = text.split(gradient);
    return (
      <p className={className}>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent font-medium">
                {gradient}
              </span>
            )}
          </React.Fragment>
        ))}
      </p>
    );
  }

  return <p className={className}>{text}</p>;
}
