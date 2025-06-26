// app/[locale]/sitemap.xml/route.ts
import type { MetadataRoute } from "next"

const API_BASE_URL = process.env.API_BASE_URL || "https://ia-back-nu.vercel.app"
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loyfus.com"

interface Tool {
  slug: string
  // Add lastModified if available from your API
  // lastModified?: string | Date;
}

async function getAllToolsForSitemap(): Promise<Tool[]> {
  try {
    // Assuming your API can return all tools without pagination or with a very large page size
    // Adjust pageSize as needed or implement a dedicated endpoint for all slugs
    const response = await fetch(`${API_BASE_URL}/tools?pageSize=10000`) // Fetch a large number
    if (!response.ok) {
      console.error("Sitemap: Failed to fetch tools", response.status)
      return []
    }
    const data = await response.json()
    return data.tools || data.results || [] // Adapt based on your API response structure
  } catch (error) {
    console.error("Sitemap: Error fetching tools:", error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.8 },
    { path: "/terms", priority: 0.8 },
  ]

  const locales = ["en", "pt", "es"]
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add static pages for each locale
  for (const locale of locales) {
    for (const page of staticPages) {
      sitemapEntries.push({
        url: `${SITE_URL}/${locale}${page.path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly" as MetadataRoute.Sitemap[0]["changeFrequency"],
        priority: page.priority,
      })
    }
  }

  // Add tool pages for each locale
  const tools = await getAllToolsForSitemap()
  for (const locale of locales) {
    const toolPath = locale === "en" ? "tools" : locale === "pt" ? "ferramentas" : "herramientas"
    for (const tool of tools) {
      sitemapEntries.push({
        url: `${SITE_URL}/${locale}/${toolPath}/${tool.slug}`,
        lastModified: new Date().toISOString(), // Replace with tool.lastModified if available
        changeFrequency: "weekly" as MetadataRoute.Sitemap[0]["changeFrequency"],
        priority: 0.7,
      })
    }
  }

  return sitemapEntries
}
