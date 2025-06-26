"use client"

import { usePathname, useRouter } from "next-intl/navigation"
import { LOCALES } from "@/lib/i18n"
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (locale: string) => {
    router.push(`/${locale}${pathname === "/" ? "" : pathname}`)
  }

  return (
    <Menu>
      <MenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800">
        <Globe className="w-4 h-4" />
        <span className="sr-only">Change language</span>
      </MenuTrigger>
      <MenuContent align="end">
        {LOCALES.map((loc) => (
          <MenuItem key={loc} onSelect={() => handleChange(loc)}>
            {loc.toUpperCase()}
          </MenuItem>
        ))}
      </MenuContent>
    </Menu>
  )
}
