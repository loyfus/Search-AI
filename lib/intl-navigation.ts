"use client"

// Shim para substituir o antigo `next-intl/navigation`
export { useRouter, usePathname, useSearchParams } from "next/navigation"
export { default as Link } from "next/link"
