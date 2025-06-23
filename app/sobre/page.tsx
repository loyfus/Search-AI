import { ArrowLeft, Target, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a Loyfus, a plataforma líder para descoberta e análise de ferramentas de IA. Nossa missão é simplificar sua busca por soluções de inteligência artificial.",
  alternates: {
    canonical: "/sobre",
  },
}

export default function SobrePage() {
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
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <Card className="border-0 bg-transparent shadow-none mb-12">
          <CardContent className="p-0">
            <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/30">
              <h1 className="text-4xl font-bold text-gray-100 mb-8">Sobre a Loyfus</h1>

              <div className="prose prose-gray prose-invert max-w-none space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  A Loyfus é uma plataforma profissional dedicada à descoberta e análise de ferramentas de inteligência
                  artificial, criada para simplificar a busca por soluções de IA adequadas às suas necessidades.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Em um mundo onde a inteligência artificial está transformando rapidamente todos os setores, encontrar
                  a ferramenta certa pode ser desafiador. Nossa missão é conectar usuários às melhores soluções de IA
                  disponíveis, fornecendo informações detalhadas, categorizações precisas e avaliações confiáveis.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-2xl p-6 shadow-xl shadow-black/20 text-center">
                <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-lg font-semibold text-gray-100 mb-2">Busca Inteligente</h2>
                <p className="text-gray-400 text-sm">
                  Algoritmos avançados para encontrar exatamente o que você precisa
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-2xl p-6 shadow-xl shadow-black/20 text-center">
                <div className="w-16 h-16 bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-lg font-semibold text-gray-100 mb-2">Categorização Precisa</h2>
                <p className="text-gray-400 text-sm">
                  Ferramentas organizadas por categoria para facilitar a descoberta
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-2xl p-6 shadow-xl shadow-black/20 text-center">
                <div className="w-16 h-16 bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-lg font-semibold text-gray-100 mb-2">Comunidade Ativa</h2>
                <p className="text-gray-400 text-sm">Avaliações e feedback da comunidade para decisões informadas</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/30">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Nossa Missão</h2>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Democratizar o acesso às ferramentas de inteligência artificial, tornando a descoberta e avaliação de
                  soluções de IA mais simples e eficiente para profissionais, empresas e entusiastas da tecnologia.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Acreditamos que a IA deve ser acessível a todos, e nossa plataforma serve como ponte entre a inovação
                  tecnológica e as necessidades práticas do dia a dia.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">Fundada em 2025 • Baseada no Brasil</p>
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
