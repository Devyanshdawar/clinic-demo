import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { doctorsData } from "@/data/doctors";
import { articlesData } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://veritashealthclinic.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/doctors`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/book-appointment`, lastModified: now, changeFrequency: "daily", priority: 0.95 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/testimonials`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/medical-disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const doctorRoutes: MetadataRoute.Sitemap = doctorsData.map((doc) => ({
    url: `${baseUrl}/doctors/${doc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articlesData.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...doctorRoutes, ...articleRoutes];
}

