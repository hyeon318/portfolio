"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface FadeInTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInText({
  children,
  className = "",
  delay = 0,
}: FadeInTextProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.1,
    once: true,
  });

  return (
    <>
      {/* 모바일용 - 애니메이션 없음 */}
      <div ref={ref} className={`md:hidden ${className}`}>
        {children}
      </div>

      {/* 데스크톱용 - 애니메이션 적용 */}
      <motion.div
        ref={ref}
        className={`hidden md:block ${className}`}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={staggerItem}
        transition={{
          duration: 0.5,
          ease: [0.6, -0.05, 0.01, 0.99],
          delay,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

interface StaggerTextProps {
  paragraphs: string[];
  className?: string;
  style?: React.CSSProperties;
}

export function StaggerText({
  paragraphs,
  className = "",
  style,
}: StaggerTextProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.1,
    once: true,
  });

  return (
    <>
      {/* 모바일용 - 애니메이션 없음 */}
      <div ref={ref} className={`md:hidden ${className}`}>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="leading-relaxed text-base mb-6 "
            style={style}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>

      {/* 데스크톱용 - 애니메이션 적용 */}
      <motion.div
        ref={ref}
        className={`hidden md:block ${className}`}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={staggerContainer}
      >
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={staggerItem}
            className="leading-relaxed text-base md:text-md lg:text-lg mb-6"
            style={style}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </motion.div>
    </>
  );
}
