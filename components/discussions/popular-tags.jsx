"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PopularTags({ tags, isLoading, onTagClick }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Tag Populer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {!isLoading &&
            tags.map((tag) => (
              <Badge
                key={tag.name}
                variant="outline"
                className="cursor-pointer hover:bg-primary/5"
                onClick={() => onTagClick(tag.name)}
              >
                {tag.name} ({tag.count})
              </Badge>
            ))}
          {isLoading &&
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-6 w-20 animate-pulse rounded-full bg-slate-200"></div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}
