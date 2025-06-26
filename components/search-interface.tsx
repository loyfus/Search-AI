"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Search, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SearchResults from "./search-results"
import { Link } from "@/middleware"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "./language-switcher"

interface Tool {
  slug: string
  name: string
  description_en?: string
  description_pt?: string
  description_es?: string
  logoBase64?: string
  score?: number
}

interface SearchResponse {
  query: string
  page: number
  pageSize: number
  total: number
  results: Tool[]
  totalResults?: number
  totalPages?: number
}

export default function SearchInterface() {
  const t = useTranslations("common")
  const tHome = useTranslations("home")
  const tNav = useTranslations("navigation")

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Tool[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const pageSize = 10

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const categories = [
    "aggregators",
    "ai-detection",
    "avatar",
    "chat",
    "copywriting",
    "finance",
    "for-fun",
    "gaming",
    "generative-art",
    "generative-code",
    "generative-video",
    "image-improvement",
    "image-scanning",
    "inspiration",
    "marketing",
    "motion-capture",
    "music",
    "podcasting",
    "productivity",
    "prompt-guides",
  ]

  const [visibleCategoriesStart, setVisibleCategoriesStart] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setVisibleCategoriesStart((prev) => {
        const nextStart = prev + 6
        return nextStart >= categories.length ? 0 : nextStart
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "https://ia-back-nu.vercel.app"

  const performSearch = async (searchQuery: string, page = 1) => {
    if (!searchQuery.trim()) {
      setResults([])
      setTotalResults(0)
      setTotalPages(1)
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    if (page === 1) {
      setHasSearched(true)
      setCurrentPage(1)
    }
    setError(null)
    try {
      const url = `${API_BASE}/search?q=${encodeURIComponent(searchQuery)}&page=${page}&pageSize=${pageSize}`
      const res = await fetch(url)
      const isJson = res.headers.get("content-type")?.includes("application/json")
      if (!res.ok || !isJson) {
        const message = isJson ? (await res.json()).error : await res.text()
        throw new Error(t("unexpectedError"))
      }
      const data: SearchResponse = await res.json()
      setResults(data.results || [])
      setCurrentPage(page)
      const totalFromAPI = data.total || data.results?.length || 0
      setTotalResults(totalFromAPI)
      setTotalPages(Math.ceil(totalFromAPI / pageSize))
    } catch (err) {
      console.error("Search error:", err)
      setError((err as Error).message)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }

    debounceTimeoutRef.current = setTimeout(() => {
      performSearch(newQuery, 1)
    }, 500)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) performSearch(query, currentPage + 1)
  }
  const handlePrevPage = () => {
    if (currentPage > 1) performSearch(query, currentPage - 1)
  }
  const handleGoToPage = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) performSearch(query, page)
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }
    performSearch(query, 1)
  }
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }
    performSearch(suggestion, 1)
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />
      <header className="relative z-10 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <div
            className={`flex items-center space-x-3 transition-all duration-700 cursor-pointer ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            onClick={() => {
              setQuery("")
              setResults([])
              setHasSearched(false)
              setCurrentPage(1)
              setError(null)
            }}
          >
            <div className="flex items-center space-x-2">
              <img src="/favicon.svg" alt="Loyfus Logo" className="w-8 h-8" />
              <h1 className="text-2xl font-bold text-gray-100 tracking-tight hover:opacity-80 transition-opacity">
                LOYFUS
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/about">
              <Button variant="ghost" className="text-gray-400 hover:text-gray-100">
                {tNav("about")}
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <div className="flex-1 flex flex-col justify-center items-center px-3 px-sm-4 px-md-6 py-8 md:py-12 lg:py-16 relative z-10 overflow-x-hidden">
        <div
          className={`w-full max-w-md max-w-md-2xl max-w-lg-4xl max-w-xl-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} ${hasSearched ? "transform -translate-y-4 -translate-y-sm-8 -translate-y-md-16" : ""}`}
        >
          {!hasSearched && (
            <div className="text-center mb-16 space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-100 tracking-tight">{tHome("title")}</h1>
                <p className="text-xl text-gray-400 max-w-lg mx-auto leading-relaxed">{tHome("subtitle")}</p>
              </div>
            </div>
          )}
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="p-3 p-sm-4 p-md-5 p-lg-6">
              <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-2xl p-4 p-sm-5 p-md-6 p-lg-8 shadow-2xl shadow-black/30 transition-all duration-500 hover:bg-gray-900/15 hover:border-gray-600/40 hover:shadow-3xl w-full">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-950/70 backdrop-blur-sm rounded-2xl z-20 transition-opacity duration-300 opacity-100">
                    <div className="w-8 h-8 border-4 border-gray-600 border-t-gray-100 rounded-full animate-spin mb-4" />
                    <p className="text-gray-100 text-lg font-medium">{t("searchingMessage")}</p>
                    <p className="text-gray-400 text-sm mt-2">{t("waitMessage")}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4 space-sm-5 space-md-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    <div className="relative backdrop-blur-sm bg-gray-800/30 border border-gray-600/40 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-gray-500/60">
                      <Search className="absolute left-3 left-sm-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 w-sm-5 h-sm-5 transition-colors duration-300 group-hover:text-gray-200" />
                      <Input
                        type="search"
                        placeholder={t("searchPlaceholder")}
                        value={query}
                        onChange={handleSearchChange}
                        className="pl-10 pl-sm-12 pr-3 pr-sm-4 py-3 py-sm-4 text-base text-sm-lg bg-transparent border-0 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-0 transition-all duration-300 w-full"
                        aria-label={t("searchPlaceholder")}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-sm-row gap-3 gap-sm-4 justify-center">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full w-sm-auto bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-900 px-6 px-sm-8 py-3 py-sm-3 font-medium rounded-xl backdrop-blur-sm border border-gray-300/50 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg transform-gpu"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-gray-600 border-t-gray-900 rounded-full animate-spin" />
                          <span className="hidden hidden-sm-inline">{t("searching")}</span>
                          <span className="inline inline-sm-hidden">...</span>
                        </div>
                      ) : (
                        <>
                          <span className="hidden hidden-sm-inline">{t("search")}</span>
                          <span className="inline inline-sm-hidden">{t("search")}</span>
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full w-sm-auto backdrop-blur-sm bg-gray-800/20 border border-gray-600/40 text-gray-300 hover:bg-gray-700/30 hover:border-gray-500/60 px-6 px-sm-8 py-3 py-sm-3 font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu"
                      onClick={() => {
                        if (categories.length > 0) {
                          const randomCategory = categories[Math.floor(Math.random() * categories.length)]
                          setQuery(randomCategory)
                          setCurrentPage(1)
                          performSearch(randomCategory, 1)
                        }
                      }}
                    >
                      {t("explore")}
                    </Button>
                  </div>
                </form>
                {error && (
                  <div className="mt-4 mt-sm-5 mt-md-6 p-3 p-sm-4 backdrop-blur-sm bg-red-400/10 border border-red-400/30 rounded-xl transition-all duration-300">
                    <div className="flex items-start space-x-2 space-sm-3">
                      <AlertCircle className="w-4 h-4 w-sm-5 h-sm-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-red-300 text-sm text-sm-base font-medium">
                          <strong>{t("error")}:</strong> {t("unexpectedError")}
                        </p>
                        <p className="text-red-400 text-xs text-sm-sm mt-1 mt-sm-2">{t("tryAgain")}</p>
                      </div>
                    </div>
                  </div>
                )}
                {!hasSearched && (
                  <div className="mt-6 mt-sm-7 mt-md-8 pt-4 pt-sm-5 pt-md-6 border-t border-gray-600/30">
                    <h2 className="text-sm text-sm-base text-gray-400 mb-3 mb-sm-4 font-medium text-center text-sm-left">
                      {t("popularCategories")}
                    </h2>
                    <div className="flex flex-wrap gap-2 gap-sm-3 justify-center justify-sm-start">
                      {categories.slice(visibleCategoriesStart, visibleCategoriesStart + 6).map((category, index) => (
                        <Button
                          key={category}
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSuggestionClick(category)}
                          className={`backdrop-blur-sm bg-gray-800/10 hover:bg-gray-700/20 text-gray-300 hover:text-gray-100 border border-gray-600/20 hover:border-gray-500/40 px-3 px-sm-4 py-2 py-sm-2 text-xs text-sm-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 transform-gpu ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                          style={{ animationDelay: `${800 + index * 100}ms` }}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        {hasSearched && (
          <div className="w-full max-w-4xl mt-12">
            <SearchResults
              results={results}
              query={query}
              isLoading={isLoading}
              currentPage={currentPage}
              totalPages={totalPages}
              totalResults={totalResults}
              onNextPage={handleNextPage}
              onPrevPage={handlePrevPage}
              onGoToPage={handleGoToPage}
            />
          </div>
        )}
      </div>
      <footer className="relative z-10 border-t border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-400 text-center">
              {useTranslations("footer")("copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
