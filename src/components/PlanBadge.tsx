interface PlanBadgeProps {
  plan: string | null
  size?: 'sm' | 'md'
}

export default function PlanBadge({ plan, size = 'sm' }: PlanBadgeProps) {
  if (!plan) return null
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm'
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 ${textSize} font-semibold bg-gold-500/10 text-gold-700 dark:text-gold-300 rounded-full`}>
      {plan}
    </span>
  )
}
