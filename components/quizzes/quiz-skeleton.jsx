import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function QuizSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="h-5 w-20 animate-pulse rounded-full bg-slate-200"></div>
          <div className="h-5 w-24 animate-pulse rounded-full bg-slate-200"></div>
        </div>
        <div className="h-6 w-full animate-pulse rounded bg-slate-200"></div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="mb-4 h-10 w-full animate-pulse rounded bg-slate-200"></div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-5 w-full animate-pulse rounded bg-slate-200"></div>
          <div className="h-5 w-full animate-pulse rounded bg-slate-200"></div>
          <div className="h-5 w-full animate-pulse rounded bg-slate-200"></div>
          <div className="h-5 w-full animate-pulse rounded bg-slate-200"></div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="h-9 w-full animate-pulse rounded bg-slate-200"></div>
      </CardFooter>
    </Card>
  )
}
