import { MetadataRoute } from "next";
import { projectData } from "@/data/projectDetails";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://since1994-oasis-portfolio.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  // 정적 페이지들
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  // 프로젝트 페이지들
  const projectPages = Object.keys(projectData).map(slug => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
