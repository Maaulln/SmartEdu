"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock } from "lucide-react"

export function DashboardRecentMaterials({ materials }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
      {materials.map((material, index) => (
        <motion.div key={material.id} variants={item}>
          <Link
            href={`/dashboard/materi/${material.id}`}
            className="group block rounded-lg border p-4 transition-all hover:border-primary/50 hover:bg-slate-50"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium group-hover:text-primary">{material.title}</h3>
                <p className="text-sm text-slate-500">{material.category}</p>
              </div>
              <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BookOpen className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-medium">{material.progress}% selesai</span>
                <span className="flex items-center text-xs text-slate-500">
                  <Clock className="mr-1 h-3 w-3" />
                  {material.lastAccessed}
                </span>
              </div>
              <Progress value={material.progress} className="h-1.5" />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
