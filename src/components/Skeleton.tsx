export function CardSkeleton() {
  return (
    <div className="card animate-pulse">
      <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
      <div className="h-6 w-28 bg-slate-200 dark:bg-slate-700 rounded" />
    </div>
  )
}

export function TableSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="card animate-pulse space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="h-4 flex-1 bg-slate-200 dark:bg-slate-700 rounded" />
          <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
        </div>
      ))}
    </div>
  )
}
