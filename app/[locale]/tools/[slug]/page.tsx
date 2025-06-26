import ToolDetails from "@/components/tool-details"
import type { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"

interface ToolPageProps {
  params: {
    slug: string
    locale: string
  }
}

const API_BASE_URL = process.env.API_BASE_URL || "https://ia-back-nu.vercel.app"
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loyfus.com"

async function getToolData(slug: string) {
  try {
    // Revalidate every 60 seconds to keep data fresh
    const response = await fetch(`${API_BASE_URL}/tools/${slug}`, { next: { revalidate: 60 } })
    if (!response.ok) {
      // If tool not found or other API error, return null
      return null
    }
    return response.json()
  } catch (error) {
    console.error("Failed to fetch tool data for metadata or page:", error)
    return null
  }
}

export async function generateMetadata({ params }: ToolPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const tool = await getToolData(params.slug)

  if (!tool) {
    return {
      title: "Tool Not Found",
      description: "The AI tool you are looking for was not found.",
    }
  }

  const title = `${tool.name} - AI Tool | Loyfus`
  const description =
    tool.description_en ||
    tool.description_pt ||
    `Discover more about ${tool.name}, a powerful AI tool. Analysis, features, and how ${tool.name} can help you.`
  const imageUrl = tool.logoBase64?.startsWith("data:")
    ? tool.logoBase64
    : tool.logoBase64
      ? `data:image/png;base64,${tool.logoBase64}`
      : `${SITE_URL}/og-image.png` // Fallback image

  return {
    title,
    description: description.substring(0, 160), // Meta descriptions should be concise
    alternates: {
      canonical: `/tools/${params.slug}`,
    },
    openGraph: {
      title,
      description: description.substring(0, 160),
      url: `${SITE_URL}/tools/${params.slug}`,
      type: "article", // More specific type for a tool page
      images: [{ url: imageUrl, alt: tool.name }],
      // Potentially add more OpenGraph article specific tags like publishedTime, authors etc.
    },
    twitter: {
      title,
      description: description.substring(0, 160),
      images: [imageUrl],
    },
  }
}

export default async function ToolPage({ params }: ToolPageProps) {
  const tool = await getToolData(params.slug)

  if (!tool) {
    notFound() // Render the 404 page if tool is not found
  }

  // Structured Data for SoftwareApplication
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: tool.categories ? tool.categories.join(", ") : "Artificial Intelligence",
    description: tool.description_en || tool.description_pt || tool.description_es,
    operatingSystem: "Web-based", // Assuming most are web-based
    url: tool.officialUrl || `${SITE_URL}/tools/${tool.slug}`,
    image: tool.logoBase64?.startsWith("data:")
      ? tool.logoBase64
      : tool.logoBase64
        ? `data:image/png;base64,${tool.logoBase64}`
        : undefined,
    offers: tool.pricingModel
      ? {
          "@type": "Offer",
          priceCurrency: "USD", // Assuming USD, adjust if needed
          price: tool.pricingModel.toLowerCase() === "free" ? "0" : undefined, // Or a typical price if known
          category: tool.pricingModel,
        }
      : undefined,
    // Add aggregateRating if you implement reviews
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ToolDetails tool={tool} />
    </>
  )
}
