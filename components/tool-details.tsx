"use client"

import { useState, useEffect } from "react" // Added Suspense
import { ArrowLeft, ExternalLink, Globe, DollarSign, Tag } from "lucide-react"
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
  slug: string
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "https://ia-back-nu.vercel.app"
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loyfus.com"

// Component to render structured data
const ToolStructuredData = ({ tool }: { tool: Tool | null }) => {
  if (!tool) return null

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: tool.categories ? tool.categories.join(", ") : "Artificial Intelligence",
    description: tool.description_pt || tool.description_en || tool.description_es,
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
    aggregateRating: undefined, // Placeholder for future reviews
    author: {
      "@type": "Organization",
      name: "Loyfus", // Or the actual tool provider if known
    },
    datePublished: undefined, // Placeholder, could be added if known
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export default function ToolDetails({ slug }: ToolDetailsProps) {
  const [tool, setTool] = useState<Tool | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showExitConfirm, setShowExitConfirm] = useState(false)

  useEffect(() => {
    const fetchTool = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${API_BASE}/tools/${slug}`)
        if (!response.ok) {
          throw new Error(`Ferramenta não encontrada`)
        }
        const data = await response.json()
        setTool(data)
      } catch (err) {
        console.error("Erro ao buscar ferramenta:", err)
        setError((err as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTool()
  }, [slug])

  const getPricingColor = (model: string) => {
    switch (model?.toLowerCase()) {
      case "free":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "freemium":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "paid":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  if (isLoading) {
    return (
      <div className="page-container bg-white dark:bg-gray-950 transition-colors duration-300">
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
          <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
            <Link href="/" className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">LOYFUS</h1>
            </Link>
            <ThemeToggle />
          </div>
        </header>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="animate-pulse">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
              <div className="flex-1">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !tool) {
    return (
      <div className="page-container bg-white dark:bg-gray-950 transition-colors duration-300">
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
          <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
            <Link href="/" className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">LOYFUS</h1>
            </Link>
            <ThemeToggle />
          </div>
        </header>
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ExternalLink className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Ferramenta não encontrada</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            A ferramenta que você está procurando não existe ou foi removida.
          </p>
          <Link href="/">
            <Button className="bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar à busca
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <ToolStructuredData tool={tool} />
      <div className="page-container bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />
        <header className="relative z-10 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
          <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">LOYFUS</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <main className="relative z-10 max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/30">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center">
                      {tool.logoBase64 ? (
                        <img
                          src={
                            tool.logoBase64.startsWith("data:")
                              ? tool.logoBase64
                              : `data:image/png;base64,${tool.logoBase64}`
                          }
                          alt={`${tool.name} logo`} // Alt text for SEO
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = "none"
                            target.parentElement!.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center text-white font-bold text-xl" aria-label="${tool.name} logo placeholder">${tool.name.charAt(0)}</div>`
                          }}
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center text-white font-bold text-xl"
                          aria-label={`${tool.name} logo placeholder`}
                        >
                          {tool.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-0">
                          {tool.name}
                        </h1>
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
                              className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {category}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <article className="mb-6">
                        {" "}
                        {/* Use article tag for main content */}
                        <h2 className="sr-only">Descrição de {tool.name}</h2> {/* Hidden H2 for screen readers */}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                          {tool.description_pt ||
                            tool.description_en ||
                            tool.description_es ||
                            "Descrição não disponível para esta ferramenta."}
                        </p>
                      </article>
                      <div className="flex flex-col sm:flex-row gap-4">
                        {tool.officialUrl && (
                          <Button
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            onClick={() => setShowExitConfirm(true)}
                            aria-label={`Visitar site oficial de ${tool.name}`}
                          >
                            <Globe className="w-4 h-4 mr-2" />
                            Visitar Site Oficial
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-white/40 dark:border-gray-600/40 hover:bg-white/30 dark:hover:bg-gray-700/30"
                          onClick={() => window.history.back()}
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Voltar aos Resultados
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {showExitConfirm && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Você está saindo do Loyfus
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Você será redirecionado para o site oficial de <strong>{tool.name}</strong>. Esta ação abrirá uma nova
                  aba em seu navegador.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setShowExitConfirm(false)} className="flex-1">
                    Cancelar
                  </Button>
                  <Button
                    onClick={() => {
                      window.open(tool.officialUrl, "_blank")
                      setShowExitConfirm(false)
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
}
