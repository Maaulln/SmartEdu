"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FileQuestion, Clock, Calendar, Award, CheckCircle, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function QuizCard({ quiz }) {
  const getStatusBadge = () => {
    switch (quiz.status) {
      case "available":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-50">
            Tersedia
          </Badge>
        )
      case "in_progress":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-600 hover:bg-amber-50">
            Sedang Dikerjakan
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">
            Selesai
          </Badge>
        )
      default:
        return null
    }
  }

  const getStatusIcon = () => {
    switch (quiz.status) {
      case "available":
        return <FileQuestion className="h-5 w-5 text-blue-500" />
      case "in_progress":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  const getButtonText = () => {
    switch (quiz.status) {
      case "available":
        return "Mulai Kuis"
      case "in_progress":
        return "Lanjutkan"
      case "completed":
        return "Lihat Hasil"
      default:
        return "Lihat Detail"
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Badge className="bg-primary/90 text-white hover:bg-primary">{quiz.category}</Badge>
            {getStatusBadge()}
          </div>
          <CardTitle className="line-clamp-1 text-lg">{quiz.title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="mb-4 line-clamp-2 text-sm text-slate-600">{quiz.description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center text-slate-600">
              <FileQuestion className="mr-2 h-4 w-4 text-slate-400" />
              {quiz.totalQuestions} Soal
            </div>
            <div className="flex items-center text-slate-600">
              <Clock className="mr-2 h-4 w-4 text-slate-400" />
              {quiz.duration}
            </div>
            <div className="flex items-center text-slate-600">
              <Calendar className="mr-2 h-4 w-4 text-slate-400" />
              {quiz.dueDate &&
                new Date(quiz.dueDate).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
              {quiz.date && quiz.date}
            </div>
            <div className="flex items-center text-slate-600">
              <Award className="mr-2 h-4 w-4 text-slate-400" />
              {quiz.difficulty}
            </div>
          </div>

          {quiz.status === "in_progress" && (
            <div className="mt-4">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-medium">{quiz.progress}% selesai</span>
              </div>
              <Progress value={quiz.progress} className="h-1.5" />
            </div>
          )}

          {quiz.status === "completed" && (
            <div className="mt-4 flex items-center justify-between rounded-lg bg-green-50 p-2">
              <span className="text-sm font-medium">Nilai:</span>
              <span className="text-lg font-bold text-green-600">{quiz.score}</span>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Link href={`/dashboard/kuis/${quiz.id}`} className="w-full">
            <Button className="w-full gap-2">
              {getStatusIcon()}
              {getButtonText()}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
