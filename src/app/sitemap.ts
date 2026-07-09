import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

const routes = [
  "",
  "/about",
  "/services",
  "/solutions",
  "/case-studies",
  "/blog",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${COMPANY.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
