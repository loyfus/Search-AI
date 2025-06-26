import SearchInterface from "@/components/search-interface"

interface PageProps {
  params: { locale: string }
}

export default function HomePage({ params: { locale } }: PageProps) {
  return (
    <main className="page-container bg-gray-950">
      <SearchInterface />
    </main>
  )
}
