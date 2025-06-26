import SearchInterface from "@/components/search-interface"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

interface HomePageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: HomePageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "home" })

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/",
    },
  }
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  return (
    <main className="page-container bg-gray-950">
      <SearchInterface />
    </main>
  )
}
