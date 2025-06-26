import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales: ["en", "pt", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed", // URLs “/en”, “/pt”, “/es”; default sem prefixo = EN
})

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // internacionaliza todas as rotas exceto assets
}
