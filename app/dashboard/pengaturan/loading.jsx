import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function PengaturanLoading() {
  return (
    <div className="space-y-8">
      {/* Page header skeleton */}
      <div className="rounded-xl bg-gradient-to-r from-primary/30 to-blue-600/30 p-6 md:p-8">
        <div className="max-w-3xl">
          <Skeleton className="h-8 w-48 bg-primary/20" />
          <Skeleton className="mt-2 h-4 w-full max-w-md bg-primary/20" />
        </div>
      </div>

      {/* Tabs skeleton */}
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
        <aside className="lg:w-1/4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Skeleton className="h-24 w-24 rounded-full" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>

              <div className="my-6 h-px bg-slate-200" />

              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>

              <div className="my-6 h-px bg-slate-200" />

              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        </aside>

        <div className="flex-1">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-full max-w-md" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>

              <Skeleton className="mt-6 h-10 w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
