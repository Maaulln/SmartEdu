"use client"

import { motion } from "framer-motion"

export function QuizzesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-gradient-to-r from-primary to-blue-600 p-6 text-white shadow-lg md:p-8"
    >
      <div className="max-w-3xl">
        <h1 className="text-2xl font-bold md:text-3xl">Kuis & Latihan</h1>
        <p className="mt-2 text-blue-100">
          Uji pemahaman Anda dengan berbagai kuis dan latihan interaktif untuk meningkatkan penguasaan materi.
        </p>
      </div>
    </motion.div>
  )
}
