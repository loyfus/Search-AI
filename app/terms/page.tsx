import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using the Loyfus platform.",
  alternates: {
    canonical: "/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="page-container bg-gray-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

      <header className="relative z-10 border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold text-gray-100 tracking-tight">LOYFUS</h1>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/30">
              <h1 className="text-4xl font-bold text-gray-100 mb-8">Terms of Service</h1>

              <div className="prose prose-gray prose-invert max-w-none space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Welcome to Loyfus! These Terms of Service ("Terms") govern your use of the Loyfus website and
                  services. By accessing or using our Website, you agree to be bound by these Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-100 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using Loyfus, you accept and agree to be bound by the terms and provisions of this
                  agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-gray-100 mt-8 mb-4">2. Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time. All changes are effective immediately when we
                  post them. Your continued use of the Website following the posting of revised Terms means that you
                  accept and agree to the changes.
                </p>

                <h2 className="text-2xl font-bold text-gray-100 mt-8 mb-4">3. User Conduct</h2>
                <p className="text-gray-300 leading-relaxed">
                  You agree to use the Website only for lawful purposes and in a way that does not infringe the rights
                  of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited behavior includes
                  harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive
                  content, or disrupting the normal flow of dialogue within the Website.
                </p>

                <h2 className="text-2xl font-bold text-gray-100 mt-8 mb-4">4. Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed">
                  All content on the Website, including text, graphics, logos, images, and software, is the property of
                  Loyfus or its content suppliers and protected by international copyright laws.
                </p>

                <h2 className="text-2xl font-bold text-gray-100 mt-8 mb-4">5. Disclaimer of Warranties</h2>
                <p className="text-gray-300 leading-relaxed">
                  The Website is provided on an "as is" and "as available" basis. Loyfus makes no representations or
                  warranties of any kind, express or implied, as to the operation of the Website or the information,
                  content, materials, or products included on the Website.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  By using Loyfus, you acknowledge that you have read, understood, and agree to be bound by these Terms
                  of Service.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="relative z-10 border-t border-gray-800 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Loyfus. Professional AI discovery platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
