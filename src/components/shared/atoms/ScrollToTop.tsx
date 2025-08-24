"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon } from "@/components";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // 스크롤이 300px 이상 내려가면 버튼 표시
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 초기 체크
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 스크롤 위치에 따라 표시/숨김
  const shouldShow = isVisible;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 50,
            pointerEvents: "auto",
            backgroundColor: "var(--primary)",
            color: "white",
            padding: "12px",
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(8px)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{
            scale: 1.1,
            y: -2,
            backgroundColor: "var(--primary-light)",
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="맨 위로 이동"
        >
          <ChevronUpIcon className="w-5 h-5 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
