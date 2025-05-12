"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DiscussionsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-gradient-to-r from-primary to-blue-600 p-6 text-white shadow-lg md:p-8"
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold md:text-3xl">Forum Diskusi</h1>
          <p className="mt-2 text-blue-100">
            Diskusikan berbagai topik pembelajaran dengan sesama pelajar dan dapatkan bantuan dari tutor ahli.
          </p>
        </div>
        <Link href="/dashboard/forum/buat">
          <Button className="bg-white text-primary hover:bg-white/90">
            <Plus className="mr-2 h-4 w-4" />
            Buat Diskusi Baru
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
