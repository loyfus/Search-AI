import { getRequestConfig } from "next-intl/server"
import { routing } from "../middleware"

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    return {
      locale: "en",
      messages: (await import(`../messages/en.json`)).default,
    }
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
