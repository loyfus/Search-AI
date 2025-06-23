import SearchInterface from "@/components/search-interface"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Loyfus - Buscador Inteligente de Ferramentas de IA",
  description:
    "Encontre e explore milhares de ferramentas de Inteligência Artificial com o buscador Loyfus. A plataforma líder para descobrir soluções de IA para todas as suas necessidades.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <main className="page-container bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SearchInterface />
    </main>
  )
}
