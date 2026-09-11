import type { MetadataRoute } from "next";
import { categories, corporateLinks } from "@/data/categories";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "arama"].map((path) => ({
    url: `${siteConfig.url}/${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path ? 0.7 : 1,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const corporateRoutes = corporateLinks.map((link) => ({
    url: `${siteConfig.url}/${link.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...corporateRoutes];
}
