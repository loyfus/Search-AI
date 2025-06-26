import type React from "react"
import type { Metadata } from "next"
import { NextIntlClientProvider, getMessages } from "next-intl"
import { notFound } from "next/navigation"

const LOCALES = ["en", "pt", "es"] as const
type Locale = (typeof LOCALES)[number]

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const titles = {
    en: "Loyfus – Smart AI Tool Finder",
    pt: "Loyfus – Localizador Inteligente de Ferramentas de IA",
    es: "Loyfus – Buscador Inteligente de Herramientas de IA",
  }
  return {
    title: titles[locale] ?? titles.en,
    description: "Find, compare and analyse the best Artificial Intelligence tools with Loyfus.",
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!LOCALES.includes(locale as Locale)) notFound()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
