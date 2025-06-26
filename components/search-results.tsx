"use client"

import { ExternalLink, Sparkles, Tag, Globe, DollarSign, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "@/middleware"
import { useTranslations } from "next-intl"

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

interface SearchResultsProps {
  results: Tool[]
  query: string
  isLoading: boolean
  currentPage?: number
  totalPages?: number
  totalResults?: number
  onNextPage?: () => void
  onPrevPage?: () => void
  onGoToPage?: (page: number) => void
}

const PaginationControls = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}: {
  currentPage: number
  totalPages: number
  onPrevPage?: () => void
  onNextPage?: () => void
  onGoToPage?: (page: number) => void
}) => {
  const t = useTranslations("common")

  return (
    <div className="flex items-center justify-center space-x-4 py-4">
      <Button variant="outline" onClick={onPrevPage} disabled={currentPage === 1} size="sm" aria-label="Previous page">
        <ArrowLeft className="w-4 h-4 mr-1" />
        {t("previous")}
      </Button>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-400">
          {t("page")} {currentPage} {t("of")} {totalPages}
        </span>
      </div>
      <Button
        variant="outline"
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        size="sm"
        aria-label="Next page"
      >
        {t("next")}
        <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  )
}

export default function SearchResults({
  results,
  query,
  isLoading,
  currentPage = 1,
  totalPages = 1,
  totalResults = 0,
  onNextPage,
  onPrevPage,
  onGoToPage,
}: SearchResultsProps) {
  const t = useTranslations("common")

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="border border-gray-800 bg-gray-900 animate-pulse">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-700 rounded-xl"></div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-700 rounded w-1/3 mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
                  <div className="flex space-x-2">
                    <div className="h-6 bg-gray-700 rounded w-16"></div>
                    <div className="h-6 bg-gray-700 rounded w-20"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <Card className="border border-gray-800 bg-gray-900 shadow-lg">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-gray-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-100 mb-2">{t("noResults")}</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            We couldn't find any tools matching your search for "{query}". Try using different or more specific terms.
          </p>
        </CardContent>
      </Card>
    )
  }

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

  const truncateDescription = (text: string, maxLength = 250) => {
    if (!text || text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + "..."
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-800 pb-4">
        <h2 className="text-sm text-gray-400">
          <span className="font-medium text-gray-100">{totalResults}</span> {t("toolsFound")}{" "}
          <span className="font-medium text-gray-100">"{query}"</span>
          {totalPages > 1 && (
            <span className="ml-2">
              • {t("displaying")} {(currentPage - 1) * 10 + 1}-{Math.min(currentPage * 10, totalResults)} {t("of")}{" "}
              {totalResults}
            </span>
          )}
        </h2>
      </div>

      {totalPages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          onGoToPage={onGoToPage}
        />
      )}

      <div className="grid gap-6">
        {results.map((tool, index) => (
          <Card
            key={tool.slug}
            className="border border-gray-800 bg-gray-900/70 shadow-md hover:shadow-xl transition-all duration-200 hover:border-gray-600 animate-fade-in group backdrop-blur-sm"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1 min-w-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-800 flex-shrink-0 flex items-center justify-center">
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
                          target.parentElement!.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-lg" aria-label="${tool.name} logo placeholder">${tool.name.charAt(0)}</div>`
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-lg"
                        aria-label={`${tool.name} logo placeholder`}
                      >
                        {tool.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between pb-2 border-b border-gray-700 mb-3">
                      <Link href={`/tools/${tool.slug}`}>
                        <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                          {tool.name}
                        </h3>
                      </Link>
                      {tool.pricingModel && (
                        <Badge className={`text-xs ${getPricingColor(tool.pricingModel)}`}>
                          <DollarSign className="w-3 h-3 mr-1" />
                          {tool.pricingModel}
                        </Badge>
                      )}
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                      {truncateDescription(
                        tool.description_en ||
                          tool.description_pt ||
                          tool.description_es ||
                          "Description not available",
                      )}
                    </p>

                    {tool.categories && tool.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tool.categories.slice(0, 3).map((category) => (
                          <Badge key={category} variant="outline" className="text-xs border-gray-600 text-gray-300">
                            <Tag className="w-3 h-3 mr-1" />
                            {category}
                          </Badge>
                        ))}
                        {tool.categories.length > 3 && (
                          <Badge variant="outline" className="text-xs text-gray-500 border-gray-600">
                            +{tool.categories.length - 3} more
                          </Badge>
                        )}
                      </div>
                    )}

                    <div className="flex items-center space-x-4">
                      <Link href={`/tools/${tool.slug}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:bg-gray-800 font-medium"
                        >
                          {t("viewDetails")}
                        </Button>
                      </Link>

                      {tool.officialUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-400 hover:bg-blue-900/20"
                          onClick={() => window.open(tool.officialUrl, "_blank")}
                          aria-label={`Visit official website of ${tool.name}`}
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          {t("officialWebsite")}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {tool.officialUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-300 ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(tool.officialUrl, "_blank")}
                    aria-label={`Open official website of ${tool.name} in new tab`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {totalPages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          onGoToPage={onGoToPage}
        />
      )}
    </div>
  )
}
