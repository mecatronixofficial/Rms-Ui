import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/machines",
    "/products",
    "/infrastructure",
    "/gallery",
    "/contact",
  ].map((p) => ({
    url: siteUrl + p,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
}
