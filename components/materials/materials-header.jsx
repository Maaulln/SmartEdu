"use client"

import { motion } from "framer-motion"

export function MaterialsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-gradient-to-r from-primary to-blue-600 p-6 text-white shadow-lg md:p-8"
    >
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold md:text-3xl">Katalog Materi Pembelajaran</h1>
        <p className="mt-2 text-blue-100">
          Jelajahi berbagai materi pembelajaran interaktif yang dirancang untuk meningkatkan pemahaman Anda.
        </p>
      </div>
    </motion.div>
  )
}
