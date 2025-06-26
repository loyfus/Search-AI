import TermsPageClient from "./TermsPageClient"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

interface TermsPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: TermsPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "terms" })

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/terms",
    },
  }
}

export default function TermsPage({ params: { locale } }: TermsPageProps) {
  return <TermsPageClient />
}
