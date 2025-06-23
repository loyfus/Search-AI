import type React from "react"
import type { Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import PageTransition from "@/components/page-transition"
import { locales, defaultLocale } from "@/lib/i18n"

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loyfus.com"

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale?: string }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
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
