import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/bang-gia`,
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/gioi-thieu`,
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lien-he`,
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/thanh-toan`,
      priority: 0.8,
      lastModified: new Date(),
    },
  ];
}
