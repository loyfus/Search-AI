import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/page-transition"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loyfus.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Loyfus",
  description: "Smart AI tool finder. Search, compare and discover Artificial Intelligence software for your projects.",
  icons: { icon: "/favicon.svg" },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-950 text-gray-100`}>
        <Suspense fallback={<div>Loading…</div>}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
