"use client"

import { useTranslations } from "next-intl"

export default function PrivacyClientPage() {
  const t = useTranslations("privacy")

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">{t("title")}</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-sm text-gray-400 mb-8">{t("lastUpdated", { date: "December 2024" })}</p>

            <p className="text-lg text-gray-300">{t("content")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
