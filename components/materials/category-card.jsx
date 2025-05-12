"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tag } from "lucide-react"

export function CategoryCard({ category, count, onClick }) {
  return (
    <Card className="group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md" onClick={onClick}>
      <CardContent className="flex items-center p-6">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Tag className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold group-hover:text-primary">{category}</h3>
          <p className="text-sm text-slate-500">{count} materi</p>
        </div>
      </CardContent>
    </Card>
  )
}
