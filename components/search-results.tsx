"use client"

import { Star, ExternalLink, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "next-intl"

interface Tool {
  id: string
  name: string
  description: string
  category: string
  pricing: string
  rating: number
  url: string
  tags: string[]
}

interface SearchResultsProps {
  results: Tool[]
  query: string
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  const t = useTranslations("search")

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-300 mb-2">{t("noResults")}</h3>
        <p className="text-gray-400">Try searching with different keywords</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-gray-300">
          {t("resultsCount", { count: results.length })} for "{query}"
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((tool) => (
          <div
            key={tool.id}
            className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {tool.category}
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      {tool.pricing}
                    </Badge>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 bg-gray-800/50 px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-300">{tool.rating}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">{tool.description}</p>

              {/* Tags */}
              {tool.tags && tool.tags.length > 0 && (
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {tool.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded-md">
                      {tag}
                    </span>
                  ))}
                  {tool.tags.length > 3 && <span className="text-xs text-gray-500">+{tool.tags.length - 3} more</span>}
                </div>
              )}

              {/* Action Button */}
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-blue-500/25"
              >
                <span>Visit Tool</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
