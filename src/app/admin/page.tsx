'use client'

import { DEMO_USER, getDemoDashboardData } from '@/lib/mock-data'

export default function AdminPage() {
  const data = getDemoDashboardData()
  const stats = [
    { label: 'Total Users', value: '45' },
    { label: 'Active Investments', value: '38' },
    { label: 'Pending Payments', value: '3' },
    { label: 'Pending Withdrawals', value: String(data.pendingWithdrawals) },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="card">
            <p className="text-slate-500 dark:text-slate-400 text-xs">{s.label}</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
