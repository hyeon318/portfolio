"use client";

import { isIOSSafari, getModalStyles, getScrollStyles } from "@/lib/animations";

export default function TestIOSPage() {
  const isIOS = isIOSSafari();
  const modalStyles = getModalStyles();
  const scrollStyles = getScrollStyles();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-title">
          iOS Safari 테스트 페이지
        </h1>

        <div className="space-y-4">
          <div className="p-6 bg-card rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4">디바이스 감지 결과</h2>
            <p className="text-text-body">
              <strong>iOS Safari 여부:</strong> {isIOS ? "✅ 예" : "❌ 아니오"}
            </p>
            <p className="text-text-body">
              <strong>User Agent:</strong>{" "}
              {typeof window !== "undefined" ? navigator.userAgent : "SSR"}
            </p>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4">모달 스타일</h2>
            <pre className="bg-background-secondary p-4 rounded-lg overflow-x-auto text-sm">
              {JSON.stringify(modalStyles, null, 2)}
            </pre>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4">스크롤 스타일</h2>
            <pre className="bg-background-secondary p-4 rounded-lg overflow-x-auto text-sm">
              {JSON.stringify(scrollStyles, null, 2)}
            </pre>
          </div>

          <div className="p-6 bg-card rounded-xl border border-border">
            <h2 className="text-xl font-semibold mb-4">CSS 지원 여부</h2>
            <div className="space-y-2 text-sm">
              <p>
                <strong>backdrop-filter:</strong>{" "}
                {typeof window !== "undefined" &&
                CSS.supports("backdrop-filter", "blur(1px)")
                  ? "✅ 지원"
                  : "❌ 미지원"}
              </p>
              <p>
                <strong>-webkit-backdrop-filter:</strong>{" "}
                {typeof window !== "undefined" &&
                CSS.supports("-webkit-backdrop-filter", "blur(1px)")
                  ? "✅ 지원"
                  : "❌ 미지원"}
              </p>
              <p>
                <strong>transform3d:</strong>{" "}
                {typeof window !== "undefined" &&
                CSS.supports("transform", "translateZ(0)")
                  ? "✅ 지원"
                  : "❌ 미지원"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
