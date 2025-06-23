import { ArrowLeft, Search, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página não encontrada - 404",
  description: "A página que você está procurando não foi encontrada. Volte à busca de ferramentas de IA no Loyfus.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="page-container bg-gray-950 transition-colors duration-300">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold text-gray-100 tracking-tight">LOYFUS</h1>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <Card className="border-0 bg-transparent shadow-none max-w-2xl w-full">
          <CardContent className="p-0">
            <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-3xl p-12 shadow-2xl shadow-black/30 text-center">
              {/* 404 Number */}
              <div className="mb-8">
                <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4">
                  404
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              </div>

              {/* Error Message */}
              <div className="mb-8 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Página não encontrada</h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-lg mx-auto">
                  Ops! A página que você está procurando não existe ou foi movida para outro local.
                </p>
                <p className="text-gray-500">Que tal voltar à busca e descobrir novas ferramentas de IA?</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
                    <Home className="w-4 h-4 mr-2" />
                    Voltar ao Início
                  </Button>
                </Link>

                <Link href="/">
                  <Button
                    variant="outline"
                    className="backdrop-blur-sm bg-gray-800/20 border border-gray-600/40 text-gray-300 hover:bg-gray-700/30 hover:border-gray-500/60 px-8 py-3 font-medium rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Buscar Ferramentas
                  </Button>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="mt-12 pt-8 border-t border-gray-700/30">
                <p className="text-sm text-gray-500">Código de erro: 404 • Página não encontrada</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Loyfus. Plataforma profissional de descoberta de IA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
