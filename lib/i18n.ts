export const locales = ["pt", "en", "es"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "pt"

export const localeNames = {
  pt: "Português",
  en: "English",
  es: "Español",
} as const

export const localeFlags = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
} as const

// Função simples para detectar locale da URL
export function getLocaleFromUrl(pathname: string): Locale {
  if (pathname.startsWith("/en")) return "en"
  if (pathname.startsWith("/es")) return "es"
  return "pt"
}

// Função para construir URL com locale
export function buildUrlWithLocale(path: string, locale: Locale): string {
  // Remove locale existente do path
  let cleanPath = path
  if (path.startsWith("/en/") || path.startsWith("/es/")) {
    cleanPath = path.substring(3)
  } else if (path === "/en" || path === "/es") {
    cleanPath = "/"
  }

  // Para português (padrão), não adiciona prefixo
  if (locale === "pt") {
    return cleanPath
  }

  // Para outros idiomas, adiciona prefixo
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`
}

// ---------- LEGACY HELPERS (mantidos por compatibilidade) ----------
export function getLocaleFromPathname(pathname: string): Locale {
  return getLocaleFromUrl(pathname)
}

export function removeLocaleFromPathname(pathname: string): string {
  // tira /en ou /es do começo da URL, se existir
  if (pathname.startsWith("/en/") || pathname.startsWith("/es/")) {
    return pathname.substring(3)
  }
  if (pathname === "/en" || pathname === "/es") {
    return "/"
  }
  return pathname
}

export function addLocaleToPathname(pathname: string, locale: Locale): string {
  return buildUrlWithLocale(pathname, locale)
}
