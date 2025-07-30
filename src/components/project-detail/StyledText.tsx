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
  // HTML 태그를 React 요소로 변환하는 함수
  const renderTextWithHTML = (textContent: string) => {
    // <br>, <br/>, <br /> 태그를 줄바꿈으로 처리
    let processedText = textContent
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/br>/gi, "\n");

    // 모든 <strong> 태그를 bold 스타일로 처리 (className 포함)
    processedText = processedText.replace(
      /<strong[^>]*>(.*?)<\/strong>/gi,
      "**$1**"
    );

    // <b> 태그를 bold 스타일로 처리
    processedText = processedText.replace(/<b>(.*?)<\/b>/gi, "**$1**");

    // 줄바꿈과 bold 텍스트를 처리
    const lines = processedText.split("\n");

    return lines.map((line, lineIndex) => {
      // bold 텍스트 처리
      const boldParts = line.split(/\*\*(.*?)\*\*/);

      return (
        <React.Fragment key={lineIndex}>
          {boldParts.map((part, partIndex) => {
            // 홀수 인덱스는 bold 텍스트
            if (partIndex % 2 === 1) {
              return (
                <strong key={partIndex} className="font-semibold text-white">
                  {part}
                </strong>
              );
            }
            return part;
          })}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  // CSS 스타일링이 필요하지 않은 경우 텍스트를 그대로 반환
  if (!highlight && !gradient) {
    return <p className={className}>{renderTextWithHTML(text)}</p>;
  }

  // 간단한 하이라이트 처리
  if (highlight && text.includes(highlight)) {
    const parts = text.split(highlight);
    return (
      <p className={className}>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {renderTextWithHTML(part)}
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
            {renderTextWithHTML(part)}
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

  return <p className={className}>{renderTextWithHTML(text)}</p>;
}
