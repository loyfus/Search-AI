"use client"

import { useState } from "react" // Removed useEffect, only useState for local UI state
import { ArrowLeft, ExternalLink, Globe, DollarSign, Tag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"

interface Tool {
  slug: string
  name: string
  description_en?: string
  description_pt?: string
  description_es?: string
  logoBase64?: string
  officialUrl?: string
  pricingModel?: string
  categories?: string[]
  score?: number
}

interface ToolDetailsProps {
  tool: Tool // Tool data is now passed as a prop
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loyfus.com"

// Component to render structured data (now rendered in page.tsx)
const ToolStructuredData = ({ tool }: { tool: Tool | null }) => {
  if (!tool) return null

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: tool.categories ? tool.categories.join(", ") : "Artificial Intelligence",
    description: tool.description_en || tool.description_pt || tool.description_es,
    operatingSystem: "Web-based",
    url: tool.officialUrl || `${SITE_URL}/tools/${tool.slug}`,
    image: tool.logoBase64?.startsWith("data:")
      ? tool.logoBase64
      : tool.logoBase64
        ? `data:image/png;base64,${tool.logoBase64}`
        : undefined,
    offers: tool.pricingModel
      ? {
          "@type": "Offer",
          priceCurrency: "USD",
          price: tool.pricingModel.toLowerCase() === "free" ? "0" : undefined,
          category: tool.pricingModel,
        }
      : undefined,
    aggregateRating: undefined,
    author: {
      "@type": "Organization",
      name: "Loyfus",
    },
    datePublished: undefined,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export default function ToolDetails({ tool }: ToolDetailsProps) {
  const [showExitConfirm, setShowExitConfirm] = useState(false)

  const getPricingColor = (model: string) => {
    switch (model?.toLowerCase()) {
      case "free":
        return "bg-green-900 text-green-200"
      case "freemium":
        return "bg-blue-900 text-blue-200"
      case "paid":
        return "bg-orange-900 text-orange-200"
      default:
        return "bg-gray-800 text-gray-200"
    }
  }

  // No loading or error states needed here as data is passed as prop
  // The parent page.tsx handles notFound() if tool is null

  return (
    <>
      {/* ToolStructuredData is now rendered in page.tsx */}
      <div className="page-container bg-gray-950 transition-colors duration-300">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <header className="relative z-10 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
          <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold text-gray-100 tracking-tight">LOYFUS</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="relative z-10 max-w-6xl mx-auto px-6 py-8">
          {/* Hero Section */}
          <Card className="border-0 bg-transparent shadow-none mb-8">
            <CardContent className="p-0">
              <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/30">
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-800 flex-shrink-0 flex items-center justify-center">
                    {tool.logoBase64 ? (
                      <img
                        src={
                          tool.logoBase64.startsWith("data:")
                            ? tool.logoBase64
                            : `data:image/png;base64,${tool.logoBase64}`
                        }
                        alt={`${tool.name} logo`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          target.parentElement!.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-2xl" aria-label="${tool.name} logo placeholder">${tool.name.charAt(0)}</div>`
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-2xl"
                        aria-label={`${tool.name} logo placeholder`}
                      >
                        {tool.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4 sm:mb-0">{tool.name}</h1>
                      {tool.pricingModel && (
                        <Badge className={`text-sm ${getPricingColor(tool.pricingModel)} w-fit`}>
                          <DollarSign className="w-4 h-4 mr-1" />
                          {tool.pricingModel}
                        </Badge>
                      )}
                    </div>

                    {tool.categories && tool.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tool.categories.map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="backdrop-blur-sm bg-gray-800/20 border-gray-600 text-gray-300"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {category}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      {tool.officialUrl && (
                        <Button
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          onClick={() => setShowExitConfirm(true)}
                          aria-label={`Visit official website of ${tool.name}`}
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Visit Official Website
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        className="backdrop-blur-sm bg-gray-800/20 border border-gray-600/40 text-gray-300 hover:bg-gray-700/30 hover:border-gray-500/60"
                        onClick={() => window.history.back()}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Results
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="p-0">
                  <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/30">
                    <h2 className="text-2xl font-bold text-gray-100 mb-6">About {tool.name}</h2>
                    <article className="prose prose-lg max-w-none">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {tool.description_en ||
                          tool.description_pt ||
                          tool.description_es ||
                          `${tool.name} is an artificial intelligence tool that offers innovative solutions for your needs. This tool is categorized in ${tool.categories?.join(", ") || "various areas"} and provides advanced features to optimize your work.`}
                      </p>

                      {tool.categories && tool.categories.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-semibold text-gray-100 mb-4">Key Features</h3>
                          <ul className="space-y-2 text-gray-300">
                            {tool.categories.includes("image-improvement") && (
                              <li className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                                Image enhancement and optimization
                              </li>
                            )}
                            {tool.categories.includes("generative-art") && (
                              <li className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                                Art and visual content generation
                              </li>
                            )}
                            {tool.categories.includes("productivity") && (
                              <li className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                                Productivity enhancement
                              </li>
                            )}
                            {tool.categories.includes("copywriting") && (
                              <li className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-2" />
                                Content creation and copywriting
                              </li>
                            )}
                            <li className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-2" />
                              Intuitive and easy-to-use interface
                            </li>
                            <li className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-2" />
                              High-quality results
                            </li>
                          </ul>
                        </div>
                      )}
                    </article>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="p-0">
                  <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-2xl p-6 shadow-xl shadow-black/20">
                    <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Information</h3>
                    <div className="space-y-4">
                      {tool.pricingModel && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Pricing Model</span>
                          <Badge className={`text-xs ${getPricingColor(tool.pricingModel)}`}>{tool.pricingModel}</Badge>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Categories</span>
                        <span className="text-gray-300 text-sm">{tool.categories?.length || 0}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Availability</span>
                        <span className="text-green-400 text-sm">Online</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              {tool.categories && tool.categories.length > 0 && (
                <Card className="border-0 bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-2xl p-6 shadow-xl shadow-black/20">
                      <h3 className="text-lg font-semibold text-gray-100 mb-4">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {tool.categories.map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="backdrop-blur-sm bg-gray-800/20 border-gray-600 text-gray-300 text-xs"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              {tool.officialUrl && (
                <Card className="border-0 bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <div className="backdrop-blur-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-2xl p-6 shadow-xl shadow-black/20">
                      <h3 className="text-lg font-semibold text-gray-100 mb-2">Ready to get started?</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Access {tool.name} and discover how this tool can transform your work.
                      </p>
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                        onClick={() => setShowExitConfirm(true)}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Access Tool
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>

        {/* Exit Confirmation Modal */}
        {showExitConfirm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-700">
              <h3 className="text-lg font-semibold text-gray-100 mb-3">You are leaving Loyfus</h3>
              <p className="text-gray-400 mb-6">
                You will be redirected to the official website of <strong className="text-gray-200">{tool.name}</strong>
                . This action will open a new tab in your browser.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowExitConfirm(false)}
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    window.open(tool.officialUrl, "_blank")
                    setShowExitConfirm(false)
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
