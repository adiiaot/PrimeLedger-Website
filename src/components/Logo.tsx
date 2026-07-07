import Link from 'next/link'

export default function Logo({ size = 'md', showText = true }: { size?: 'sm' | 'md' | 'lg'; showText?: boolean }) {
  const dims = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'

  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <div className={`${dims} bg-gold-500 rounded-lg flex items-center justify-center shadow-sm`}>
        <span className="text-white font-bold text-xs">PL</span>
      </div>
      {showText && (
        <span className={`font-sans font-extrabold tracking-tight ${textSize} text-slate-900 dark:text-white`}>
          Prime<span className="text-gold-500">Ledger</span>
        </span>
      )}
    </Link>
  )
}
