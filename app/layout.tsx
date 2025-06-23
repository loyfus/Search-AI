import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loyfus.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Loyfus - Buscador Inteligente de Ferramentas de IA",
    template: "%s | Loyfus",
  },
  description:
    "Encontre, compare e analise as melhores ferramentas de Inteligência Artificial com Loyfus. Descubra soluções de IA para otimizar seus projetos e negócios.",
  keywords: [
    "ferramentas de IA",
    "inteligência artificial",
    "buscador de IA",
    "Loyfus",
    "software de IA",
    "plataformas de IA",
    "IA para negócios",
    "IA para produtividade",
  ],
  authors: [{ name: "Loyfus Team", url: SITE_URL }],
  creator: "Loyfus Team",
  publisher: "Loyfus Team",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Loyfus - Buscador Inteligente de Ferramentas de IA",
    description: "Descubra as melhores ferramentas de IA para seus projetos com Loyfus.",
    url: SITE_URL,
    siteName: "Loyfus",
    images: [
      {
        url: `${SITE_URL}/og-image.png`, // Você precisará criar esta imagem
        width: 1200,
        height: 630,
        alt: "Loyfus - Buscador de Ferramentas de IA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loyfus - Buscador Inteligente de Ferramentas de IA",
    description: "Descubra as melhores ferramentas de IA para seus projetos com Loyfus.",
    images: [`${SITE_URL}/twitter-image.png`], // Você precisará criar esta imagem
    creator: "@LoyfusAI", // Substitua pelo seu Twitter handle
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
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }, // Ajuste conforme o tom escuro do seu tema
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950`} style={{ overflow: "hidden auto" }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
