import React from "react";
import { Variants } from "framer-motion";

// Animation variants
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const scaleInOut: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
};

export const slideInFromLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const slideInFromRight: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

// Reusable transition configs
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const easeTransition = {
  duration: 0.6,
  ease: [0.6, -0.05, 0.01, 0.99],
};

// Scroll reveal options for useInView
export const scrollRevealOptions = {
  threshold: 0.1,
  triggerOnce: true,
  margin: "-100px",
};

/**
 * iOS Safari에서 모달 관련 문제를 해결하는 유틸리티 함수들
 */

/**
 * iOS Safari 디바이스인지 감지
 */
export const isIOSSafari = (): boolean => {
  if (typeof window === "undefined") return false;

  const userAgent = navigator.userAgent;
  const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent);
  const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);

  return isIOSDevice && isSafari;
};

/**
 * iOS Safari에서 backdrop-filter 문제를 해결하기 위한 스타일 객체
 */
export const getIOSSafariStyles = () => {
  if (isIOSSafari()) {
    return {
      backdropFilter: "none",
      WebkitBackdropFilter: "none",
      backgroundColor: "rgba(21, 21, 21, 0.95)",
      zIndex: 10000,
      position: "relative" as const,
      WebkitTransform: "translateZ(0)",
      transform: "translateZ(0)",
    };
  }

  return {};
};

/**
 * iOS Safari에서 모달이 제대로 보이도록 하는 스타일
 */
export const getModalStyles = () => {
  const baseStyles = {
    zIndex: 9999,
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  if (isIOSSafari()) {
    return {
      ...baseStyles,
      WebkitTransform: "translateZ(0)",
      transform: "translateZ(0)",
      zIndex: 10000,
    };
  }

  return baseStyles;
};

/**
 * iOS Safari에서 스크롤 문제를 해결하는 스타일
 */
export const getScrollStyles = (): React.CSSProperties => {
  if (isIOSSafari()) {
    return {
      WebkitOverflowScrolling: "touch",
      overscrollBehavior: "contain",
      scrollBehavior: "smooth",
      // iOS Safari에서 transform 제거
    };
  }

  return {
    WebkitOverflowScrolling: "touch",
    overscrollBehavior: "contain",
    scrollBehavior: "smooth",
    transform: "translateZ(0)",
  };
};
