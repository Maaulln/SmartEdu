"use client"

import { motion } from "framer-motion"

export function DashboardWelcome({ user }) {
  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Selamat Pagi"
    if (hour < 17) return "Selamat Siang"
    return "Selamat Malam"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-gradient-to-r from-primary to-blue-600 p-6 text-white shadow-lg md:p-8"
    >
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold md:text-3xl">
          {getGreeting()}, {user?.name || "Pengguna"}!
        </h1>
        <p className="mt-2 text-blue-100">
          Selamat datang kembali di platform belajar interaktif Anda. Lanjutkan perjalanan belajar Anda hari ini.
        </p>
        <div className="mt-4 inline-block rounded-lg bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
          Tip: Tetapkan target belajar harian untuk meningkatkan konsistensi
        </div>
      </div>
    </motion.div>
  )
}
