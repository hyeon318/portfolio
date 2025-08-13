"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function Section({
  children,
  className = "",
  id,
  delay = 0,
}: SectionProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.1,
    once: true,
  });

  return (
    <>
      {/* 모바일용 - 애니메이션 없음 */}
      <section ref={ref} id={id} className={`md:hidden ${className}`}>
        {children}
      </section>

      {/* 데스크톱용 - 애니메이션 적용 */}
      <motion.section
        ref={ref}
        id={id}
        className={`hidden md:block ${className}`}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={fadeInUp}
        transition={{
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99],
          delay,
        }}
      >
        {children}
      </motion.section>
    </>
  );
}
