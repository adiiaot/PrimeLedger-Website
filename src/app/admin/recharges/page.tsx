'use client'

import { getDemoInvestments } from '@/lib/mock-data'
import { FaCheckCircle, FaChartLine } from 'react-icons/fa'

export default function AdminRechargesPage() {
  const investments = getDemoInvestments()

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Investments</h1>
        <span className="text-xs text-slate-400 font-medium">{investments.length} active</span>
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Plan</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Principal</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Progress</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((inv, i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{inv.planName}</td>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">${inv.principal}</td>
                <td className="py-3 px-4">
                  <span className="flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full w-fit">
                    <FaCheckCircle size={10} /> {inv.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-gold-500 to-emerald-500 rounded-full" style={{ width: `${(inv.earningsProgress / inv.redeemThreshold) * 100}%` }} />
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{inv.earningsProgress}/{inv.redeemThreshold}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
