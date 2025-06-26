import ContactPageClient from "./ContactPageClient"
import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

interface ContactPageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: ContactPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "contact" })

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/contact",
    },
  }
}

export default function ContactPage({ params: { locale } }: ContactPageProps) {
  return <ContactPageClient />
}
