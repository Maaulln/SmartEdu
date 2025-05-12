"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ThumbsUp, MessageCircle, Eye, Clock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DiscussionCard({ discussion }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card
        className={`transition-all hover:border-primary/50 hover:shadow-md ${discussion.isPinned ? "border-l-4 border-l-amber-500" : ""}`}
      >
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={discussion.author.avatar || "/placeholder.svg"} alt={discussion.author.name} />
                <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <span className="text-sm font-medium">{discussion.author.name}</span>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="mr-1 h-3 w-3" />
                  {formatDate(discussion.createdAt)}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Badge className="bg-primary/90 text-white hover:bg-primary">{discussion.category}</Badge>
              {discussion.isPinned && (
                <Badge variant="outline" className="bg-amber-50 text-amber-600 hover:bg-amber-50">
                  Disematkan
                </Badge>
              )}
              {discussion.isResolved && (
                <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
                  Terjawab
                </Badge>
              )}
            </div>
          </div>
          <CardTitle className="mt-2 text-lg">
            <Link href={`/dashboard/forum/${discussion.id}`} className="hover:text-primary">
              {discussion.title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="line-clamp-2 text-sm text-slate-600">{discussion.content}</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {discussion.tags.map((tag) => (
              <span key={tag} className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between pt-2">
          <div className="flex space-x-4">
            <button className="flex items-center text-xs text-slate-500 hover:text-primary">
              <ThumbsUp className="mr-1 h-3.5 w-3.5" />
              <span>{discussion.likes}</span>
            </button>
            <button className="flex items-center text-xs text-slate-500 hover:text-primary">
              <MessageCircle className="mr-1 h-3.5 w-3.5" />
              <span>{discussion.replies.length}</span>
            </button>
            <button className="flex items-center text-xs text-slate-500 hover:text-primary">
              <Eye className="mr-1 h-3.5 w-3.5" />
              <span>{discussion.views}</span>
            </button>
          </div>
          <Link href={`/dashboard/forum/${discussion.id}`}>
            <Button variant="outline" size="sm">
              Lihat Diskusi
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
