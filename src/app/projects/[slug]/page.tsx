import React from "react";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/projectDetails";

export const dynamic = "force-dynamic";

interface ProjectSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
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

  return <ProjectDetailPage projectData={projectData} />;
}
