"use client";

import { useEffect } from "react";

export default function ScrollManager() {
  // 브라우저의 기본 스크롤 복원을 비활성화(앱 라우팅에서 수동 관리)
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // 스크롤 위치 복원 (지연·재시도 포함)
  useEffect(() => {
    const saved = sessionStorage.getItem("mainPageScrollPosition");
    if (!saved) return;

    const target = parseInt(saved, 10);
    if (Number.isNaN(target)) return;

    let attempts = 0;
    const maxAttempts = 30; // ~900ms (30 * 30ms)

    const tryRestore = () => {
      attempts += 1;
      window.scrollTo(0, target);

      // 목표 근처로 도달했으면 종료
      const reached = Math.abs(window.scrollY - target) <= 2;
      if (reached || attempts >= maxAttempts) {
        sessionStorage.removeItem("mainPageScrollPosition");
        return;
      }

      // 다음 프레임/지연으로 재시도 (레이아웃/이미지 로딩 대기)
      setTimeout(() => {
        requestAnimationFrame(tryRestore);
      }, 30);
    };

    // 첫 시도
    requestAnimationFrame(tryRestore);
  }, []);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
}
