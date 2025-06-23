import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import PageTransition from "@/components/page-transition"
import { locales, defaultLocale } from "@/lib/i18n"
import { t } from "@/lib/translations"

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loyfus.com"

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale?: string }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale?: string } }): Promise<Metadata> {
  const locale = (params.locale as any) || defaultLocale

  const title = t("seo.home.title", locale)
  const description = t("seo.home.description", locale)

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | Loyfus`,
    },
    description,
    keywords: [
      locale === "pt" ? "ferramentas de IA" : locale === "en" ? "AI tools" : "herramientas de IA",
      locale === "pt"
        ? "inteligência artificial"
        : locale === "en"
          ? "artificial intelligence"
          : "inteligencia artificial",
      locale === "pt" ? "buscador de IA" : locale === "en" ? "AI search engine" : "buscador de IA",
      "Loyfus",
      locale === "pt" ? "software de IA" : locale === "en" ? "AI software" : "software de IA",
      locale === "pt" ? "plataformas de IA" : locale === "en" ? "AI platforms" : "plataformas de IA",
      locale === "pt" ? "IA para negócios" : locale === "en" ? "AI for business" : "IA para negocios",
      locale === "pt" ? "IA para produtividade" : locale === "en" ? "AI for productivity" : "IA para productividad",
    ],
    authors: [{ name: "Loyfus Team", url: SITE_URL }],
    creator: "Loyfus Team",
    publisher: "Loyfus Team",
    alternates: {
      canonical: locale === defaultLocale ? "/" : `/${locale}`,
      languages: {
        pt: "/",
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: "Loyfus",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Loyfus - AI Tools Search Engine",
        },
      ],
      locale: locale === "pt" ? "pt_BR" : locale === "en" ? "en_US" : "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: `${SITE_URL}/site.webmanifest`,
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale || defaultLocale} suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950`} style={{ overflow: "hidden auto" }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
