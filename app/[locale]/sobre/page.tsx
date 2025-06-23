import { ArrowLeft, Target, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import Link from "next/link"
import type { Metadata } from "next"
import { locales, type Locale, addLocaleToPathname } from "@/lib/i18n"
import { t } from "@/lib/translations"

interface AboutPageProps {
  params: { locale: Locale }
}

export async function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "pt")
    .map((locale) => ({
      locale,
    }))
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const title = t("seo.about.title", params.locale)
  const description = t("seo.about.description", params.locale)

  return {
    title,
    description,
    alternates: {
      canonical: addLocaleToPathname("/sobre", params.locale),
    },
  }
}

export default function AboutPage({ params }: AboutPageProps) {
  const { locale } = params
  const homeUrl = locale === "pt" ? "/" : `/${locale}`

  return (
    <div className="page-container bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

      <header className="relative z-10 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <Link href={homeUrl} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">LOYFUS</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link href={homeUrl}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("nav.back", locale)}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <Card className="border-0 bg-transparent shadow-none mb-12">
          <CardContent className="p-0">
            <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/30">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">{t("about.title", locale)}</h1>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("about.intro", locale)}</p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t("about.mission.description", locale)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 shadow-xl shadow-black/5 dark:shadow-black/20 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {t("about.feature.search.title", locale)}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("about.feature.search.description", locale)}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 shadow-xl shadow-black/5 dark:shadow-black/20 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {t("about.feature.categorization.title", locale)}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("about.feature.categorization.description", locale)}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 shadow-xl shadow-black/5 dark:shadow-black/20 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {t("about.feature.community.title", locale)}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("about.feature.community.description", locale)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/30">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {t("about.mission.title", locale)}
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t("about.mission.text1", locale)}</p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t("about.mission.text2", locale)}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">{t("about.founded", locale)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
