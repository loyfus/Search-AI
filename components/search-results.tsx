"use client"

import type { Locale } from "@/lib/i18n"
import { t } from "@/lib/translations"
import { ExternalLink, Sparkles, Tag, Globe, DollarSign, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link" // Import Link for internal navigation

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
  locale: Locale // Nova prop
}

const PaginationControls = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  locale,
}: {
  currentPage: number
  totalPages: number
  onPrevPage?: () => void
  onNextPage?: () => void
  onGoToPage?: (page: number) => void
  locale: Locale
}) => (
  <div className="flex items-center justify-center space-x-4 py-4">
    <Button variant="outline" onClick={onPrevPage} disabled={currentPage === 1} size="sm" aria-label="Página anterior">
      <ArrowLeft className="w-4 h-4 mr-1" />
      {t("search.pagination.previous", locale)}
    </Button>
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {t("search.pagination.page", locale)} {currentPage} de {totalPages}
      </span>
    </div>
    <Button
      variant="outline"
      onClick={onNextPage}
      disabled={currentPage === totalPages}
      size="sm"
      aria-label="Próxima página"
    >
      {t("search.pagination.next", locale)}
      <ArrowRight className="w-4 h-4 ml-1" />
    </Button>
  </div>
)

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
  locale,
}: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 animate-pulse">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-3"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
                  <div className="flex space-x-2">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
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
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-gray-400 dark:text-gray-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {t("search.results.none.title", locale)}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            {t("search.results.none.description", locale)}
          </p>
        </CardContent>
      </Card>
    )
  }

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

  const truncateDescription = (text: string, maxLength = 150) => {
    if (!text || text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + "..."
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
        <h2 className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-gray-100">{totalResults}</span>{" "}
          {t("search.results.found", locale)}
          para <span className="font-medium text-gray-900 dark:text-gray-100">"{query}"</span>
          {totalPages > 1 && (
            <span className="ml-2">
              • {t("search.results.showing", locale)} {(currentPage - 1) * 10 + 1}-
              {Math.min(currentPage * 10, totalResults)} {t("search.results.of", locale)} {totalResults}
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
          locale={locale}
        />
      )}

      <div className="grid gap-6">
        {results.map((tool, index) => (
          <Card
            key={tool.slug}
            className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-700 animate-fade-in group"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1 min-w-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center">
                    {tool.logoBase64 ? (
                      <img
                        src={
                          tool.logoBase64.startsWith("data:")
                            ? tool.logoBase64
                            : `data:image/png;base64,${tool.logoBase64}`
                        }
                        alt={`${tool.name} logo`} // Improved alt text
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          target.parentElement!.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center text-white font-bold text-lg" aria-label="${tool.name} logo placeholder">${tool.name.charAt(0)}</div>`
                        }}
                        loading="lazy" // Lazy load images
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center text-white font-bold text-lg"
                        aria-label={`${tool.name} logo placeholder`}
                      >
                        {tool.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <Link
                        href={locale === "pt" ? `/tools/${tool.slug}` : `/${locale}/tools/${tool.slug}`}
                        passHref
                        legacyBehavior
                      >
                        <a className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          <h3 className="inline">{tool.name}</h3> {/* Use h3 for tool name */}
                        </a>
                      </Link>
                      {tool.pricingModel && (
                        <Badge className={`text-xs ${getPricingColor(tool.pricingModel)}`}>
                          <DollarSign className="w-3 h-3 mr-1" />
                          {tool.pricingModel}
                        </Badge>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                      {truncateDescription(
                        tool.description_pt || tool.description_en || tool.description_es || "Descrição não disponível",
                      )}
                    </p>

                    {tool.categories && tool.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tool.categories.slice(0, 3).map((category) => (
                          <Badge key={category} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {category}
                          </Badge>
                        ))}
                        {tool.categories.length > 3 && (
                          <Badge variant="outline" className="text-xs text-gray-500">
                            +{tool.categories.length - 3} {t("search.tool.more", locale)}
                          </Badge>
                        )}
                      </div>
                    )}

                    <div className="flex items-center space-x-4">
                      <Link
                        href={locale === "pt" ? `/tools/${tool.slug}` : `/${locale}/tools/${tool.slug}`}
                        passHref
                        legacyBehavior
                      >
                        <Button
                          as="a" // Render as an anchor tag
                          variant="outline"
                          size="sm"
                          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
                        >
                          {t("search.tool.details", locale)}
                        </Button>
                      </Link>

                      {tool.officialUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          onClick={() => window.open(tool.officialUrl, "_blank")}
                          aria-label={`Visitar site oficial de ${tool.name}`}
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          {t("search.tool.official", locale)}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {tool.officialUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => window.open(tool.officialUrl, "_blank")}
                    aria-label={`Abrir site oficial de ${tool.name} em nova aba`}
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
          locale={locale}
        />
      )}
    </div>
  )
}
