import SearchInterface from "@/components/search-interface"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Loyfus - Smart AI Tool Finder",
  description:
    "Find and explore thousands of Artificial Intelligence tools with the Loyfus search engine. The leading platform to discover AI solutions for all your needs.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <main className="page-container bg-gray-950">
      <SearchInterface />
    </main>
  )
}
