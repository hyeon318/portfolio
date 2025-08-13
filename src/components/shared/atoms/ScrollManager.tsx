"use client";

import { useEffect } from "react";

export default function ScrollManager() {
  // 스크롤 위치 복원
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(
      "mainPageScrollPosition"
    );
    if (savedScrollPosition) {
      const scrollY = parseInt(savedScrollPosition, 10);
      window.scrollTo(0, scrollY);
      sessionStorage.removeItem("mainPageScrollPosition");
    }
  }, []);

  // 스크롤 위치 저장
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(
        "mainPageScrollPosition",
        window.scrollY.toString()
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
}
