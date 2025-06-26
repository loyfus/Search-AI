import createMiddleware from "next-intl/middleware"
import { LOCALES } from "@/lib/i18n"
import NextLink from "next/link"
import { useRouter, usePathname } from "next/navigation"

export default createMiddleware({
  locales: LOCALES as unknown as string[],
  defaultLocale: "en",
  localePrefix: "as-needed",
})

// EXPORTS que componentes antigos ainda importam
export const Link = NextLink
export { useRouter, usePathname }
export const routing = { locales: LOCALES }
