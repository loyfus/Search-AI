import AboutPageClient from "./AboutPageClient"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

interface AboutPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: AboutPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "about" })

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/about",
    },
  }
}

export default function AboutPage({ params: { locale } }: AboutPageProps) {
  return <AboutPageClient />
}
