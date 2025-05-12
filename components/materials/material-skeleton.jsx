export function MaterialSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="h-40 w-full animate-pulse bg-slate-200"></div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="h-4 w-16 animate-pulse rounded bg-slate-200"></div>
          <div className="h-4 w-20 animate-pulse rounded bg-slate-200"></div>
        </div>
        <div className="mb-2 h-6 w-full animate-pulse rounded bg-slate-200"></div>
        <div className="mb-4 h-4 w-3/4 animate-pulse rounded bg-slate-200"></div>
        <div className="flex gap-1">
          <div className="h-5 w-12 animate-pulse rounded-full bg-slate-200"></div>
          <div className="h-5 w-16 animate-pulse rounded-full bg-slate-200"></div>
          <div className="h-5 w-14 animate-pulse rounded-full bg-slate-200"></div>
        </div>
      </div>
    </div>
  )
}
