"use client";

import { useEffect } from "react";
import { trackScroll } from "@/lib/gtag";

export default function ScrollTracker() {
  useEffect(() => {
    let lastScrollDepth = 0;
    const depthThresholds = [25, 50, 75, 100];
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollDepth = Math.round((scrollTop / documentHeight) * 100);

      // 25%, 50%, 75%, 100% 스크롤 지점에서 추적
      depthThresholds.forEach(threshold => {
        if (
          scrollDepth >= threshold &&
          !trackedDepths.has(threshold) &&
          threshold > lastScrollDepth
        ) {
          trackedDepths.add(threshold);
          trackScroll(threshold);
          lastScrollDepth = threshold;
        }
      });
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // 렌더링하지 않음
}
