"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LOCALES } from "@/lib/i18n"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const stripLocaleFromPath = (path: string) => {
    const parts = path.split("/")
    return LOCALES.includes(parts[1] as any) ? `/${parts.slice(2).join("/")}` : path
  }

  const handleChange = (newLocale: string) => {
    const cleanPath = stripLocaleFromPath(pathname)
    const target = newLocale === "en" ? cleanPath || "/" : `/${newLocale}${cleanPath || ""}`
    router.replace(target)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-100">
          <Globe className="w-4 h-4 mr-2" />
          {languages.find((l) => l.code === locale)?.flag} {languages.find((l) => l.code === locale)?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className="text-gray-300 hover:text-gray-100 hover:bg-gray-800 cursor-pointer"
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
