'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

export default function AdminChangelogPage() {
  const [entries] = useState([
    { id: 1, title: 'Platform Launch v1.1', version: '1.1', body: 'Initial launch of PrimeLedger platform with demo mode, multi-currency support, and dark/light theme.', active: true },
    { id: 2, title: 'Crypto Payment Support', version: '1.0', body: 'Added USDT, BTC, ETH, and SOL payment options alongside bank transfers.', active: true },
  ])

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Changelog</h1>
      <div className="space-y-4">
        {entries.map(entry => (
          <div key={entry.id} className="card">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-slate-900 dark:text-white">{entry.title}</h3>
              <span className="px-2 py-0.5 text-xs bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full">v{entry.version}</span>
              {entry.active && <span className="px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">Active</span>}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{entry.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
