import type { Metadata } from "next"
import PrivacyClientPage from "./PrivacyClientPage"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const titles = {
    en: "Privacy Policy - Loyfus",
    pt: "Política de Privacidade - Loyfus",
    es: "Política de Privacidad - Loyfus",
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
  }
}

export default function PrivacyPage() {
  return <PrivacyClientPage />
}
