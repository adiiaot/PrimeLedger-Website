'use client'

import { FaCodeBranch, FaCheckCircle } from 'react-icons/fa'
import { HiClock } from 'react-icons/hi'

const entries = [
  { id: 1, title: 'Gold+Green Theme Overhaul', version: '2.0', body: 'Complete rebrand to gold+green color scheme. Dark/light mode refinements. All pages now use the new theme.', active: true },
  { id: 2, title: 'Deposit Flow Redesign', version: '2.0', body: 'New deposit page with freeform amount input, 6 crypto options, address copy, and processing simulation.', active: true },
  { id: 3, title: 'Currency System Simplified', version: '2.0', body: 'Removed multi-currency toggle. All values now in USD for simplicity. Exchange rate logic removed.', active: true },
  { id: 4, title: 'Dashboard Improvements', version: '2.0', body: 'Responsive layout fixes. Daily claim, quick actions, active investments, and recent activity panels added.', active: true },
  { id: 5, title: 'Platform Launch v1.1', version: '1.1', body: 'Initial launch of PrimeLedger platform with demo mode, multi-currency support, and dark/light theme.', active: true },
  { id: 6, title: 'Crypto Payment Support', version: '1.0', body: 'Added USDT, BTC, ETH, and SOL payment options alongside bank transfers.', active: true },
]

export default function AdminChangelogPage() {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Changelog</h1>
      <div className="space-y-3 sm:space-y-4">
        {entries.map(entry => (
          <div key={entry.id} className="card">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{entry.title}</h3>
              <span className="px-2 py-0.5 text-xs bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-full font-bold">v{entry.version}</span>
              {entry.active && (
                <span className="flex items-center gap-1 px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full font-bold">
                  <FaCheckCircle size={10} /> Active
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{entry.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
