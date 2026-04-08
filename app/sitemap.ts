import type { MetadataRoute } from "next";
import { getCanonicalPath, getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

const routes = ["/", "/about", "/skills", "/projects", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return routes.map((route) => ({
    url: `${siteUrl}${getCanonicalPath(route)}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
