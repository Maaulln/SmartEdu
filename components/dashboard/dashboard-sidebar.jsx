"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/app/providers";
import {
  BookOpen,
  LayoutDashboard,
  BookOpenText,
  GraduationCap,
  MessageSquare,
  Users,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";

// Navigation Items
const NAVIGATION_ITEMS = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { title: "Materi Belajar", icon: BookOpenText, href: "/dashboard/materi" },
  { title: "Kuis & Latihan", icon: GraduationCap, href: "/dashboard/kuis" },
  { title: "Forum Diskusi", icon: MessageSquare, href: "/dashboard/forum" },
  { title: "Kelas Live", icon: Users, href: "/dashboard/kelas-live" },
  { title: "Jadwal", icon: Calendar, href: "/dashboard/jadwal" },
  { title: "Pengaturan", icon: Settings, href: "/dashboard/pengaturan" },
  { title: "Bantuan", icon: HelpCircle, href: "/dashboard/bantuan" },
];

// Logo component
const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <BookOpen className="h-6 w-6 text-primary" />
    <span className="text-xl font-bold">SmartEdu</span>
  </Link>
);

// NavItem component
const NavItem = ({ item, isActive, onClick = null, isMobile = false }) => {
  const activeClass = isActive
    ? "text-primary" + (isMobile ? " bg-primary/10" : "")
    : "text-slate-700 hover:bg-slate-100 hover:text-primary";

  const iconClass = isActive
    ? "text-primary"
    : "text-slate-500 group-hover:text-primary";

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`group flex items-center ${
        isMobile ? "px-4 py-3" : "rounded-md px-3 py-2"
      } text-sm font-medium transition-colors ${activeClass}`}
    >
      <item.icon
        className={`${isMobile ? "mr-3 h-5 w-5" : "mr-2 h-4 w-4"} ${iconClass}`}
      />
      <span>{item.title}</span>

      {isActive && !isMobile && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  );
};

// LogoutButton component
const LogoutButton = ({ logout, onClick = null, isMobile = false }) => (
  <button
    onClick={() => {
      logout();
      if (onClick) onClick();
    }}
    className={`flex items-center ${
      isMobile ? "px-4 py-3" : "rounded-md px-3 py-2"
    } text-sm font-medium text-red-600 transition-colors hover:bg-red-50`}
  >
    <LogOut className={`${isMobile ? "mr-3 h-5 w-5" : "mr-2 h-4 w-4"}`} />
    <span>Keluar</span>
  </button>
);

export function DashboardNavbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if a navigation item is active
  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Close mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Navigation Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-30 hidden w-full bg-white transition-all duration-300 lg:block ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <Logo />

          {/* Navigation Items */}
          <nav className="flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.href} className="relative">
                <NavItem item={item} isActive={isActive(item.href)} />
              </div>
            ))}
          </nav>

          {/* User Menu */}
          {user && <LogoutButton logout={logout} />}
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-30 flex h-16 items-center justify-between bg-white px-4 shadow-sm lg:hidden ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <Logo />

        <button
          className="rounded-md bg-primary p-2 text-white shadow-md transition-transform active:scale-95"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 z-20 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white shadow-lg lg:hidden"
            >
              <nav className="flex flex-col py-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <NavItem
                    key={item.href}
                    item={item}
                    isActive={isActive(item.href)}
                    onClick={closeMobileMenu}
                    isMobile
                  />
                ))}

                {user && (
                  <LogoutButton
                    logout={logout}
                    onClick={closeMobileMenu}
                    isMobile
                  />
                )}
              </nav>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-10 bg-black lg:hidden"
              onClick={closeMobileMenu}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
