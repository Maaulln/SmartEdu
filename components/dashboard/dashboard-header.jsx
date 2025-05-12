"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Search, User } from "lucide-react"
import { useAuth } from "@/app/providers"

export function DashboardHeader() {
  const { user } = useAuth()
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    // Implementasi pencarian
    console.log("Searching for:", searchQuery)
  }

  // Get page title based on pathname
  const getPageTitle = () => {
    const path = pathname.split("/").filter(Boolean)

    if (path.length === 1) return "Dashboard"

    const pageName = path[1]
    if (!pageName) return "Dashboard"

    // Convert kebab-case or snake_case to Title Case
    return pageName
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <header
      className={`sticky top-16 z-20 w-full bg-white py-4 transition-all duration-300 ${isScrolled ? "shadow-sm" : ""}`}
    >
      <div className="container-custom flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{getPageTitle()}</h1>
          <p className="text-sm text-slate-500">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <input
              type="text"
              placeholder="Cari..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          </form>

          <button className="relative rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
              3
            </span>
          </button>

          <Link
            href="/dashboard/pengaturan"
            className="flex items-center space-x-2 rounded-full bg-slate-100 p-1 pr-3 text-slate-600 hover:bg-slate-200"
          >
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-primary text-white">
              {user?.avatar ? (
                <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-full w-full object-cover" />
              ) : (
                <User className="h-5 w-5" />
              )}
            </div>
            <span className="text-sm font-medium">{user?.name || "Pengguna"}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
