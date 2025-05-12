import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function DiscussionSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200"></div>
            <div>
              <div className="h-4 w-24 animate-pulse rounded bg-slate-200"></div>
              <div className="mt-1 h-3 w-16 animate-pulse rounded bg-slate-200"></div>
            </div>
          </div>
          <div className="h-5 w-20 animate-pulse rounded-full bg-slate-200"></div>
        </div>
        <div className="mt-2 h-6 w-full animate-pulse rounded bg-slate-200"></div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="mb-3 h-4 w-full animate-pulse rounded bg-slate-200"></div>
        <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200"></div>
        <div className="mt-3 flex gap-1">
          <div className="h-5 w-16 animate-pulse rounded-full bg-slate-200"></div>
          <div className="h-5 w-20 animate-pulse rounded-full bg-slate-200"></div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex w-full items-center justify-between">
          <div className="flex space-x-4">
            <div className="h-4 w-10 animate-pulse rounded bg-slate-200"></div>
            <div className="h-4 w-10 animate-pulse rounded bg-slate-200"></div>
            <div className="h-4 w-10 animate-pulse rounded bg-slate-200"></div>
          </div>
          <div className="h-8 w-24 animate-pulse rounded bg-slate-200"></div>
        </div>
      </CardFooter>
    </Card>
  )
}
