import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ProjectDetailPage } from "@/components";
import { getProjectBySlug } from "@/data/projectDetails";

export const dynamic = "force-dynamic";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://since1994-oasis-portfolio.vercel.app/";

interface ProjectSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const projectData = getProjectBySlug(slug);

  if (!projectData) {
    return {
      title: "Project Not Found",
      description: "요청하신 프로젝트를 찾을 수 없습니다.",
    };
  }

  const { title, description, techStack } = projectData;
  const projectUrl = `${baseUrl}/projects/${slug}`;

  const ogImage = `${baseUrl}/images/og-image.png`;

  return {
    title: title,
    description: description,
    keywords: [
      "안현지",
      "프로젝트",
      "포트폴리오",
      "Hyeonji Ahn Portfolio",
      "HyeonJi Ahn Portfolio",
      "개발자",
      "Developer",
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      ...techStack,
      "프론트엔드",
      "백엔드",
      "풀스택",
      "개발",
      "웹 개발",
    ],
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url: projectUrl,
      title: `${title} | Hyeonji Ahn Portfolio`,
      description: description,
      siteName: "Hyeonji Ahn Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - Hyeonji Ahn Project`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Hyeonji Ahn Portfolio`,
      description: description,
      images: [ogImage],
    },
  };
}

export default async function ProjectSlugPage({
  params,
}: ProjectSlugPageProps) {
  const { slug } = await params;

  // slug로 프로젝트 데이터 찾기
  const projectData = getProjectBySlug(slug);

  // 프로젝트가 존재하지 않으면 404 페이지로 리다이렉트
  if (!projectData) {
    notFound();
  }

  return <ProjectDetailPage projectData={projectData} projectSlug={slug} />;
}
