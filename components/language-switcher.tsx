"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import { locales, localeNames, localeFlags, type Locale, getLocaleFromUrl, buildUrlWithLocale } from "@/lib/i18n"

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const currentLocale = getLocaleFromUrl(pathname)

  const handleLocaleChange = (newLocale: Locale) => {
    const newUrl = buildUrlWithLocale(pathname, newLocale)
    console.log("Changing from", currentLocale, "to", newLocale, "URL:", newUrl) // Debug
    window.location.href = newUrl
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">
          {localeFlags[currentLocale]} {localeNames[currentLocale]}
        </span>
        <span className="sm:hidden">{localeFlags[currentLocale]}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center space-x-3 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                  locale === currentLocale ? "bg-gray-50 dark:bg-gray-800 font-medium" : ""
                }`}
              >
                <span className="text-lg">{localeFlags[locale]}</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{localeNames[locale]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
