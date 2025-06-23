import { ArrowLeft, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Loyfus team. We're here to help with your AI tool discovery needs.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
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
            <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-3xl p-8 shadow-2xl shadow-black/30 text-center">
              <h1 className="text-4xl font-bold text-gray-100 mb-8">Contact Us</h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Have questions, feedback, or need support? Feel free to reach out to us!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-2xl p-6 shadow-xl shadow-black/20">
                  <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-gray-100 mb-2">Email Support</h2>
                  <p className="text-gray-400 mb-4">For general inquiries and support.</p>
                  <a href="mailto:support@loyfus.com" className="text-blue-400 hover:underline">
                    support@loyfus.com
                  </a>
                </div>
                <div className="backdrop-blur-xl bg-gray-900/10 border border-gray-700/30 rounded-2xl p-6 shadow-xl shadow-black/20">
                  <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-gray-100 mb-2">Phone</h2>
                  <p className="text-gray-400 mb-4">Reach us during business hours.</p>
                  <a href="tel:+1234567890" className="text-green-400 hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-8">
                We aim to respond to all inquiries within 24-48 business hours.
              </p>
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
