import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Leia os Termos de Uso da plataforma Loyfus. Entenda seus direitos e responsabilidades ao usar nossos serviços de busca de IA.",
  alternates: {
    canonical: "/termos",
  },
}

export default function TermosPage() {
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
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Termos de Uso</h1>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    1. Aceitação dos Termos
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Ao acessar e usar a plataforma Loyfus, você concorda em cumprir e estar vinculado a estes termos de
                    uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    2. Descrição do Serviço
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    A Loyfus é uma plataforma de busca e descoberta de ferramentas de inteligência artificial.
                    Fornecemos informações sobre diversas ferramentas de IA, incluindo descrições, categorias e links
                    para os sites oficiais.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">3. Uso Aceitável</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Você concorda em usar a plataforma apenas para fins legais e de acordo com estes termos. É proibido:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                    <li>Usar a plataforma para atividades ilegais ou não autorizadas</li>
                    <li>Tentar acessar sistemas ou dados não autorizados</li>
                    <li>Interferir no funcionamento normal da plataforma</li>
                    <li>Reproduzir ou distribuir conteúdo sem autorização</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    4. Propriedade Intelectual
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Todo o conteúdo da plataforma Loyfus, incluindo design, texto, gráficos e código, é propriedade da
                    Loyfus ou de seus licenciadores e está protegido por leis de direitos autorais.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    5. Limitação de Responsabilidade
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    A Loyfus fornece informações "como estão" e não garante a precisão, completude ou atualidade das
                    informações sobre as ferramentas de IA listadas. Não somos responsáveis por danos decorrentes do uso
                    de ferramentas de terceiros.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    6. Modificações dos Termos
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
                    imediatamente após a publicação na plataforma.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">7. Contato</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Para questões sobre estes termos, entre em contato conosco através da nossa página de contato.
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
