import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const titles = {
    en: "About - Loyfus",
    pt: "Sobre - Loyfus",
    es: "Acerca de - Loyfus",
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
  }
}

export default function AboutPage() {
  return <AboutPageClient />
}
