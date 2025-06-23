import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Entenda como a Loyfus coleta, usa e protege suas informações pessoais. Nossa política de privacidade detalhada.",
  alternates: {
    canonical: "/privacidade",
  },
}

export default function PrivacidadePage() {
  return (
    <div className="page-container bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

      {/* Header */}
      <header className="relative z-10 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">LOYFUS</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/10 dark:shadow-black/30">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Política de Privacidade</h1>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    1. Informações que Coletamos
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    A Loyfus coleta informações limitadas para fornecer nossos serviços de busca de ferramentas de IA.
                    Coletamos dados de uso anônimos, como termos de pesquisa e preferências de navegação, para melhorar
                    a experiência do usuário.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    2. Como Usamos suas Informações
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Utilizamos as informações coletadas para:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                    <li>Fornecer resultados de pesquisa relevantes</li>
                    <li>Melhorar nossos algoritmos de busca</li>
                    <li>Analisar tendências de uso da plataforma</li>
                    <li>Manter a segurança e integridade do serviço</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    3. Compartilhamento de Dados
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins
                    comerciais. Podemos compartilhar dados agregados e anônimos para fins de pesquisa e desenvolvimento.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    4. Cookies e Tecnologias Similares
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Utilizamos cookies essenciais para o funcionamento da plataforma, como preferências de tema e
                    configurações de sessão. Você pode gerenciar suas preferências de cookies através das configurações
                    do seu navegador.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">5. Seus Direitos</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses
                    direitos, entre em contato conosco através da página de contato.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">6. Contato</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco através da nossa
                    página de contato.
                  </p>
                </section>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Última atualização: Junho de 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
