"use client"

import { useTranslations } from "next-intl"

export default function AboutPageClient() {
  const t = useTranslations("about")

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">{t("title")}</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6 text-gray-300">{t("description")}</p>

            <p className="text-lg mb-8 text-gray-300">{t("mission")}</p>

            <h2 className="text-2xl font-semibold mb-6">{t("features.title")}</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• {t("features.search")}</li>
              <li>• {t("features.compare")}</li>
              <li>• {t("features.reviews")}</li>
              <li>• {t("features.updates")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
