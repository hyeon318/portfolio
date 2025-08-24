"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { scaleInOut } from "@/lib/animations";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  onClick,
}: AnimatedCardProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const isInView = useInView(ref, {
    amount: 0.1,
    once: true,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 모바일에서는 애니메이션 없이 바로 표시
  if (isMobile) {
    return (
      <div ref={ref} className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={scaleInOut}
      transition={{
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay,
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
