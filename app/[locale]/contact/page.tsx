import type { Metadata } from "next"
import ContactClientPage from "./ContactClientPage"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const titles = {
    en: "Contact - Loyfus",
    pt: "Contato - Loyfus",
    es: "Contacto - Loyfus",
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
  }
}

export default function ContactPage() {
  return <ContactClientPage />
}
