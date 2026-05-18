"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "首页" },
  { href: "/explore", label: "探索" },
  { href: "/create", label: "创作" },
]

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-1">
      {links.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "var(--font-chinese-body)",
              fontSize: "14px",
              fontWeight: isActive ? 600 : 400,
              color: isActive ? "var(--kairo-speak)" : "var(--kairo-whisper)",
              padding: "8px 16px",
              borderRadius: "var(--radius-button)",
              background: isActive ? "var(--kairo-between)" : "transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "var(--kairo-speak)"
                e.currentTarget.style.background = "var(--kairo-silence)"
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = "var(--kairo-whisper)"
                e.currentTarget.style.background = "transparent"
              }
            }}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
