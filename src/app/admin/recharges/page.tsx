'use client'

import { getDemoInvestments } from '@/lib/mock-data'

export default function AdminRechargesPage() {
  const investments = getDemoInvestments()
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Investments</h1>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Plan</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Principal</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Status</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Progress</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((inv, i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-700/50">
                <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{inv.planName}</td>
                <td className="py-3 px-4 text-slate-500">${inv.principal}</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">{inv.status}</span></td>
                <td className="py-3 px-4 text-slate-500">{inv.earningsProgress}/{inv.redeemThreshold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
