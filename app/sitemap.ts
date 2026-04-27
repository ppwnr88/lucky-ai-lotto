import { MetadataRoute } from "next";
import { allDreamItems } from "@/lib/dream-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // หน้า static หลัก
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/dream`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dream-meaning`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // หน้า dynamic /dream/[slug]
  const dreamPages = allDreamItems.map((item) => ({
    url: `${baseUrl}/dream/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dreamPages];
}