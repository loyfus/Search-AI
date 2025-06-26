import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Loyfus collects, uses, and protects your personal data.",
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPage() {
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
              <h1 className="text-4xl font-bold text-gray-100 mb-8">Privacy Policy</h1>

              <div className="prose prose-gray prose-invert max-w-none space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  At Loyfus, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit our website loyfus.com.
                </p>

                <h2 className="text-2xl font-bold text-gray-100 mt-8 mb-4">Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed">
                  We collect personal information that you voluntarily provide to us when you register on the Website,
                  express an interest in obtaining information about us or our products and services, when you
                  participate in activities on the Website, or otherwise when you contact us.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Personal Data: Name, email address, and contact preferences.</li>
                  <li>Usage Data: Information about how you access and use the Website.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-100 mt-8 mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use personal information collected via our Website for a variety of business purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>To provide, operate, and maintain our Website.</li>
                  <li>To improve, personalize, and expand our Website.</li>
                  <li>To understand and analyze how you use our Website.</li>
                  <li>To develop new products, services, features, and functionality.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-100 mt-8 mb-4">Your Privacy Rights</h2>
                <p className="text-gray-300 leading-relaxed">
                  You have certain rights regarding your personal information, including the right to access, correct,
                  or delete your data. Please contact us to exercise these rights.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  This policy may be updated from time to time. We encourage you to review this page periodically for
                  any changes.
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
