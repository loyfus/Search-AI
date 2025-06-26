import { createLocalizedPathnamesNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"
import createMiddleware from "next-intl/middleware"

export const routing = defineRouting({
  locales: ["en", "pt", "es"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      pt: "/sobre",
      es: "/acerca",
    },
    "/contact": {
      en: "/contact",
      pt: "/contato",
      es: "/contacto",
    },
    "/privacy": {
      en: "/privacy",
      pt: "/privacidade",
      es: "/privacidad",
    },
    "/terms": {
      en: "/terms",
      pt: "/termos",
      es: "/terminos",
    },
    "/tools/[slug]": {
      en: "/tools/[slug]",
      pt: "/ferramentas/[slug]",
      es: "/herramientas/[slug]",
    },
  },
})

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation(routing)

export default createMiddleware(routing)

export const config = {
  matcher: ["/", "/(pt|es)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
}
