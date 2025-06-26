import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/page-transition"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

// Can be imported from a shared config
const locales = ["en", "pt", "es"]

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loyfus.com"

  const titles = {
    en: "Loyfus - Smart AI Tool Finder",
    pt: "Loyfus - Localizador Inteligente de Ferramentas de IA",
    es: "Loyfus - Buscador Inteligente de Herramientas de IA",
  }

  const descriptions = {
    en: "Find, compare, and analyze the best Artificial Intelligence tools with Loyfus. Discover AI solutions to optimize your projects and businesses.",
    pt: "Encontre, compare e analise as melhores ferramentas de Inteligência Artificial com o Loyfus. Descubra soluções de IA para otimizar seus projetos e negócios.",
    es: "Encuentra, compara y analiza las mejores herramientas de Inteligencia Artificial con Loyfus. Descubre soluciones de IA para optimizar tus proyectos y negocios.",
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: titles[locale as keyof typeof titles] || titles.en,
      template: `%s | Loyfus`,
    },
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: [
      "AI tools",
      "artificial intelligence",
      "AI search engine",
      "Loyfus",
      "AI software",
      "AI platforms",
      "AI for business",
      "AI for productivity",
    ],
    authors: [{ name: "Loyfus Team", url: SITE_URL }],
    creator: "Loyfus Team",
    publisher: "Loyfus Team",
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        pt: "/pt",
        es: "/es",
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      url: SITE_URL,
      siteName: "Loyfus",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Loyfus - AI Tool Finder",
        },
      ],
      locale: locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      images: [`${SITE_URL}/twitter-image.png`],
      creator: "@LoyfusAI",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },
    manifest: `${SITE_URL}/site.webmanifest`,
  }
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-950 text-gray-100`} style={{ overflow: "hidden auto" }}>
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<div>Loading...</div>}>
            <PageTransition>{children}</PageTransition>
          </Suspense>
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
