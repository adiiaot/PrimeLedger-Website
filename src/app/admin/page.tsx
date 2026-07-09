'use client'

import { DEMO_USER, getDemoDashboardData } from '@/lib/mock-data'
import { FaUsers, FaCoins, FaMoneyBillWave, FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { HiCash, HiChartBar } from 'react-icons/hi'

export default function AdminPage() {
  const data = getDemoDashboardData()
  const stats = [
    { label: 'Total Users', value: '45', icon: FaUsers, color: 'text-gold-600 dark:text-gold-400' },
    { label: 'Active Investments', value: '38', icon: FaCoins, color: 'text-emerald-600 dark:text-emerald-400' },
    { label: 'Total Deposits', value: '$12,450', icon: HiCash, color: 'text-gold-600 dark:text-gold-400' },
    { label: 'Pending Withdrawals', value: String(data.pendingWithdrawals), icon: FaClock, color: 'text-amber-600 dark:text-amber-400' },
  ]

  const recentActivity = [
    { user: 'Demo User', action: 'Deposited $500', time: '2 min ago', status: 'completed' },
    { user: 'John D.', action: 'Withdrawal request $150', time: '1 hour ago', status: 'pending' },
    { user: 'Sarah K.', action: 'Claimed daily reward $30', time: '3 hours ago', status: 'completed' },
    { user: 'Mike T.', action: 'Registered via referral', time: '5 hours ago', status: 'completed' },
    { user: 'Alice M.', action: 'Upgraded to Premium', time: '1 day ago', status: 'completed' },
  ]

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Admin Dashboard</h1>
        <span className="text-xs text-slate-400 font-mono font-medium bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">{DEMO_USER.userCode}</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={i} className="card">
              <div className="flex items-center gap-2 mb-2">
                <Icon className={s.color} size={16} />
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{s.label}</p>
              </div>
              <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">{s.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="card">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Recent Activity</h2>
          <div className="space-y-2">
            {recentActivity.map((act, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">{act.user}</p>
                  <p className="text-xs text-slate-400">{act.action}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-slate-400">{act.time}</span>
                  {act.status === 'completed' ? <FaCheckCircle className="text-emerald-500" size={12} /> : <FaTimesCircle className="text-amber-500" size={12} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Platform Overview</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Revenue</span>
              <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">$45,230</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Pending Payouts</span>
              <span className="text-sm font-extrabold text-amber-600 dark:text-amber-400">$2,150</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Active Users Today</span>
              <span className="text-sm font-extrabold text-gold-600 dark:text-gold-400">12</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">New Registrations (7d)</span>
              <span className="text-sm font-extrabold text-gold-600 dark:text-gold-400">8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
