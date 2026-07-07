'use client'

import { getDemoWithdrawals } from '@/lib/mock-data'

export default function AdminWithdrawalsPage() {
  const withdrawals = getDemoWithdrawals()
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Withdrawal Requests</h1>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">User</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Amount</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Bank</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {withdrawals.map((wd, i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-700/50">
                <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{wd.accountName}</td>
                <td className="py-3 px-4 text-slate-700 dark:text-slate-300">${wd.amount}</td>
                <td className="py-3 px-4 text-slate-500">{wd.bankName}</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full">{wd.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
