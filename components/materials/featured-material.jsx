"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function FeaturedMaterial({ material }) {
  return (
    <Link
      href={`/dashboard/materi/${material.id}`}
      className="group relative overflow-hidden rounded-xl shadow-md transition-transform hover:-translate-y-1"
    >
      <div className="relative h-48 w-full">
        <Image
          src={material.image || "/placeholder.svg"}
          alt={material.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <Badge className="mb-2 bg-primary/90 text-white hover:bg-primary">{material.category}</Badge>
          <h3 className="text-xl font-bold text-white">{material.title}</h3>
          <p className="mt-1 text-sm text-white/80">{material.description}</p>
        </div>
      </div>
    </Link>
  )
}
