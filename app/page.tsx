import SearchInterface from "@/components/search-interface"
import type { Metadata } from "next"
import { defaultLocale } from "@/lib/i18n"
import { t } from "@/lib/translations"

export async function generateMetadata(): Promise<Metadata> {
  const title = t("seo.home.title", defaultLocale)
  const description = t("seo.home.description", defaultLocale)

  return {
    title,
    description,
    alternates: {
      canonical: "/",
    },
  }
}

export default function HomePage() {
  return (
    <main className="page-container bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SearchInterface locale={defaultLocale} />
    </main>
  )
}
