"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Star, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function MaterialCard({ material }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <Link href={`/dashboard/materi/${material.id}`}>
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={material.image || "/placeholder.svg"}
            alt={material.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center space-x-2">
            <Badge className="bg-primary/90 text-white hover:bg-primary">{material.category}</Badge>
            <Badge variant="outline" className="bg-white/90 text-slate-800 hover:bg-white">
              {material.level}
            </Badge>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium">{material.rating}</span>
              <span className="ml-1 text-xs text-slate-500">({material.totalRatings})</span>
            </div>
            <div className="flex items-center text-xs text-slate-500">
              <Clock className="mr-1 h-3.5 w-3.5" />
              {material.duration}
            </div>
          </div>

          <h3 className="mb-2 line-clamp-2 font-semibold group-hover:text-primary">{material.title}</h3>
          <p className="mb-4 line-clamp-2 text-sm text-slate-600">{material.description}</p>

          <div className="flex flex-wrap gap-1">
            {material.tags &&
              material.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">
                  {tag}
                </span>
              ))}
          </div>

          {material.progress > 0 && (
            <div className="mt-4">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-medium">{material.progress}% selesai</span>
              </div>
              <Progress value={material.progress} className="h-1.5" />
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
