import type { Metadata } from "next"
import TermsPageClient from "./TermsPageClient"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const titles = {
    en: "Terms of Service - Loyfus",
    pt: "Termos de Serviço - Loyfus",
    es: "Términos de Servicio - Loyfus",
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
  }
}

export default function TermsPage() {
  return <TermsPageClient />
}
