"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@/components";
import { isIOSSafari } from "@/lib/animations";

interface ProjectGalleryProps {
  images: {
    thumbnail?: string;
    preview?: string[];
  };
  title: string;
  onImageDelete?: (index: number) => void; // 이미지 삭제 콜백 추가
}

export default function ProjectGallery({
  images,
  title,
  onImageDelete,
}: ProjectGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const allImages = images.preview || [];
  const displayImages = isExpanded ? allImages : [allImages[0]];

  // 스크롤 락 - body 클래스 토글 방식
  useEffect(() => {
    if (selectedImage) {
      setScrollPosition(window.scrollY);
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      // 스크롤 위치 복원
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 0);
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedImage, scrollPosition]);

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex(prev => Math.min(allImages.length - 1, prev + 1));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, allImages.length]);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => Math.min(allImages.length - 1, prev + 1));
  };

  const handleDeleteImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onImageDelete) {
      onImageDelete(currentImageIndex);
      // 삭제 후 모달 닫기
      setSelectedImage(null);
      // 마지막 이미지가 삭제된 경우 인덱스 조정
      if (currentImageIndex >= allImages.length - 1) {
        setCurrentImageIndex(Math.max(0, allImages.length - 2));
      }
    }
  };

  // 모달 렌더링 함수
  const renderModal = () => {
    if (!selectedImage || typeof window === "undefined") return null;

    return createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >
        {/* 배경 오버레이 */}
        <div
          className={`absolute inset-0 ${
            isIOSSafari() ? "bg-black/90" : "bg-black/80 backdrop-blur-sm"
          }`}
        />

        {/* 모달 컨테이너 */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            {/* 좌우 스와이프 버튼들 */}
            {allImages.length > 1 && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 ${
                  currentImageIndex > 0
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
                disabled={currentImageIndex <= 0}
                title="이전 이미지"
              >
                ←
              </button>
            )}

            {/* 이미지 컨테이너 */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={allImages[currentImageIndex] || images.thumbnail || ""}
                alt={`${title} 이미지 ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain rounded-lg"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>

            {allImages.length > 1 && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20 ${
                  currentImageIndex < allImages.length - 1
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
                disabled={currentImageIndex >= allImages.length - 1}
                title="다음 이미지"
              >
                →
              </button>
            )}

            {/* 상단 우측 닫기 버튼 */}
            <div className="absolute top-4 right-4 flex gap-2 z-20">
              <button
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                title="닫기"
              >
                ×
              </button>
            </div>

            {/* 이미지 인디케이터 */}
            {allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={e => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    title={`이미지 ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* 이미지 정보 표시 */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/80 text-sm z-20">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    displayImages.length && (
      <div className="space-y-4">
        {/* 이미지 갤러리 */}
        <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
            {displayImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-xl bg-white/5 border border-white/10 cursor-pointer group"
                onClick={() => handleImageClick(image, index)}
              >
                <Image
                  src={image}
                  alt={`${title} 이미지 ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* 토글 버튼 */}
        {allImages.length > 1 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-[var(--text-white)]/80 font-medium transition-all duration-300"
          >
            {isExpanded ? (
              <>
                <ChevronUpIcon className="w-4 h-4" />
                이미지 접기
              </>
            ) : (
              <>
                <ChevronDownIcon className="w-4 h-4" />더 많은 이미지 보기 (
                {allImages.length - 1}개 더)
              </>
            )}
          </button>
        )}

        {/* 모달 렌더링 */}
        {renderModal()}
      </div>
    )
  );
}
