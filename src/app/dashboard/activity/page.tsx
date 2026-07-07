'use client'

import { useState } from 'react'
import { FaCoins, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { HiCash } from 'react-icons/hi'

const activity = [
  { desc: 'Daily task reward', amt: 30, type: 'credit', date: 'Today, 09:15 AM' },
  { desc: 'Referral bonus', amt: 70, type: 'credit', date: 'Today, 08:40 AM' },
  { desc: 'Withdrawal processed', amt: 150, type: 'debit', date: 'Yesterday, 02:10 PM' },
  { desc: 'Plan profit', amt: 5, type: 'credit', date: 'Yesterday, 12:00 PM' },
  { desc: 'Deposit confirmed', amt: 500, type: 'credit', date: 'Mar 15, 2026' },
  { desc: 'Withdrawal request', amt: 200, type: 'debit', date: 'Mar 14, 2026' },
  { desc: 'Daily task reward', amt: 30, type: 'credit', date: 'Mar 14, 2026' },
  { desc: 'Referral bonus', amt: 20, type: 'credit', date: 'Mar 13, 2026' },
]

export default function ActivityPage() {
  const [filter, setFilter] = useState<'all' | 'credit' | 'debit'>('all')

  const filtered = filter === 'all' ? activity : activity.filter(a => a.type === filter)

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Activity Log</h1>

      <div className="flex gap-2">
        {(['all', 'credit', 'debit'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition capitalize ${filter === f ? 'bg-gold-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-gold-500/10'}`}>
            {f === 'all' ? 'All' : f === 'credit' ? 'Credits' : 'Debits'}
          </button>
        ))}
      </div>

      <div className="card divide-y divide-slate-100 dark:divide-slate-700/50">
        {filtered.length === 0 ? (
          <p className="py-8 text-center text-slate-400 text-sm font-medium">No activity yet.</p>
        ) : filtered.map((tx, i) => (
          <div key={i} className="flex items-center justify-between py-3.5">
            <div className="flex items-center gap-3 min-w-0">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${tx.type === 'credit' ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
                {tx.type === 'credit' ? <FaCoins className="text-emerald-500" size={14} /> : <HiCash className="text-red-500" size={14} />}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{tx.desc}</p>
                <p className="text-xs text-slate-400">{tx.date}</p>
              </div>
            </div>
            <span className={`text-sm font-bold shrink-0 ${tx.type === 'credit' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
              {tx.type === 'credit' ? '+' : '-'}${tx.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
