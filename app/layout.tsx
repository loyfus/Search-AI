import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/page-transition"
import { Analytics } from "@vercel/analytics/next" // Import Analytics
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.loyfus.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Loyfus - Smart AI Tool Finder",
    template: "%s | Loyfus",
  },
  description:
    "Find, compare, and analyze the best Artificial Intelligence tools with Loyfus. Discover AI solutions to optimize your projects and businesses.",
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
  },
  openGraph: {
    title: "Loyfus - Smart AI Tool Finder",
    description: "Discover the best AI tools for your projects with Loyfus.",
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loyfus - Smart AI Tool Finder",
    description: "Discover the best AI tools for your projects with Loyfus.",
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
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-950 text-gray-100`} style={{ overflow: "hidden auto" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <PageTransition>{children}</PageTransition>
        </Suspense>
        <Analytics /> {/* Add Analytics component here */}
        <SpeedInsights /> {/* Add SpeedInsights component here */}
      </body>
    </html>
  )
}
