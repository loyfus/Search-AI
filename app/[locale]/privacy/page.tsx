import PrivacyPageClient from "./PrivacyPageClient"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

interface PrivacyPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: PrivacyPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "privacy" })

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/privacy",
    },
  }
}

export default function PrivacyPage({ params: { locale } }: PrivacyPageProps) {
  return <PrivacyPageClient />
}
