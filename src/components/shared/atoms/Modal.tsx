"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  footer,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // 모달 열릴 때 body 스크롤 방지
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // 배경 클릭으로 모달 닫기
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 포커스 트랩
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);
      firstElement?.focus();

      return () => {
        document.removeEventListener("keydown", handleTabKey);
      };
    }
  }, [isOpen]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 border-1 border-gray-900/15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          {/* 배경 오버레이 */}
          <motion.div
            className="absolute inset-0 bg-[var(--background)]/85 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* 모달 컨텐츠 */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-2xl max-h-[90vh] lg:max-h-[90vh] xl:max-h-[85vh] bg-background rounded-2xl shadow-2xl flex flex-col"
            style={{
              border: "1.5px solid rgba(255, 255, 255, 0.40)",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="document"
          >
            {/* 헤더 */}
            {title && (
              <div
                className="flex-shrink-0 flex items-center justify-between p-4 lg:p-6"
                style={{
                  borderBottom: "1.5px solid rgba(255, 255, 255, 0.40)",
                }}
              >
                <h2
                  id="modal-title"
                  className="text-lg lg:text-xl font-bold text-title font-kr"
                >
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-1.5 lg:p-2 text-muted hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-card-hover"
                  style={{ border: "1.5px solid rgba(255, 255, 255, 0.40)" }}
                  aria-label="모달 닫기"
                >
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* 메인 컨텐츠 영역 - 스크롤 가능 */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-6 min-h-0">
              {children}
            </div>

            {/* 하단 버튼 고정 영역 */}
            {footer && (
              <div className="flex-shrink-0 border-t border-border/50 bg-background/95 backdrop-blur-sm p-4 lg:p-6">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
