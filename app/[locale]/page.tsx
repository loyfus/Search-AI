import SearchInterface from "@/components/search-interface"
import type { Metadata } from "next"
import { locales, type Locale } from "@/lib/i18n"
import { t } from "@/lib/translations"

interface LocalePageProps {
  params: { locale: Locale }
}

export async function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "pt")
    .map((locale) => ({
      locale,
    }))
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const title = t("seo.home.title", params.locale)
  const description = t("seo.home.description", params.locale)

  return {
    title,
    description,
    alternates: {
      canonical: `/${params.locale}`,
    },
  }
}

export default function LocalePage({ params }: LocalePageProps) {
  return (
    <main className="page-container bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SearchInterface locale={params.locale} />
    </main>
  )
}
