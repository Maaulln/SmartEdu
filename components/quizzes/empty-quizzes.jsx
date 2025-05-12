"use client"

import { motion } from "framer-motion"
import { FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmptyQuizzes({ resetFilters }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center"
    >
      <FileQuestion className="mb-4 h-12 w-12 text-slate-300" />
      <h3 className="text-lg font-medium">Tidak ada kuis ditemukan</h3>
      <p className="mt-2 text-sm text-slate-500">Coba ubah filter atau kata kunci pencarian Anda</p>
      <Button className="mt-4" onClick={resetFilters}>
        Reset Filter
      </Button>
    </motion.div>
  )
}
