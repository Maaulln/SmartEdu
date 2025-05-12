import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, FileQuestion, Award } from "lucide-react"

export function UpcomingQuiz({ quiz }) {
  return (
    <Card key={quiz.id} className="border-l-4 border-l-amber-500">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <Badge className="mb-2 bg-amber-100 text-amber-800 hover:bg-amber-200">Ujian</Badge>
            <h3 className="font-semibold">{quiz.title}</h3>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center text-slate-600">
                <Calendar className="mr-2 h-4 w-4 text-slate-400" />
                {quiz.date}
              </div>
              <div className="flex items-center text-slate-600">
                <Clock className="mr-2 h-4 w-4 text-slate-400" />
                {quiz.time}
              </div>
              <div className="flex items-center text-slate-600">
                <FileQuestion className="mr-2 h-4 w-4 text-slate-400" />
                {quiz.totalQuestions} Soal
              </div>
              <div className="flex items-center text-slate-600">
                <Award className="mr-2 h-4 w-4 text-slate-400" />
                {quiz.category}
              </div>
            </div>
          </div>
          <Badge variant="outline" className="bg-amber-50 text-amber-600 hover:bg-amber-50">
            Akan Datang
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
