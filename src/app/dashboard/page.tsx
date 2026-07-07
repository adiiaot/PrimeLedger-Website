'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useWallet } from '@/context/WalletContext'
import { getDemoDashboardData, getDemoInvestments, DashboardData } from '@/lib/mock-data'
import { HiCash, HiChartBar, HiUserGroup, HiArrowRight, HiRefresh } from 'react-icons/hi'
import { FaCoins, FaCheckCircle } from 'react-icons/fa'
import { CardSkeleton } from '@/components/Skeleton'

export default function DashboardPage() {
  const { user } = useAuth()
  const { balance, addBalance } = useWallet()
  const [data, setData] = useState<DashboardData | null>(null)
  const [claimed, setClaimed] = useState(false)

  useEffect(() => {
    setData(getDemoDashboardData())
  }, [])

  const handleClaim = () => {
    if (claimed) return
    setClaimed(true)
    addBalance(30)
  }

  if (!data) return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[1,2,3,4].map(i => <CardSkeleton key={i} />)}
      </div>
    </div>
  )

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Welcome back, {user?.fullName}</p>
        </div>
        <span className="text-xs text-slate-400 font-mono font-medium bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg self-start">{data.userCode}</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="card">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">Wallet Balance</p>
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">${balance.toFixed(2)}</p>
        </div>
        <div className="card">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">Total Earnings</p>
          <p className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">${data.totalEarnings}</p>
        </div>
        <div className="card">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">Referrals</p>
          <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">{data.referralCount}</p>
        </div>
        <div className="card">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1">Pending Withdrawals</p>
          <p className="text-xl sm:text-2xl font-extrabold text-amber-600 dark:text-amber-400">${data.pendingWithdrawalAmount}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Daily Claim */}
        <div className="card">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Daily Task</h3>
          <div className="text-center py-4 sm:py-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm">
              <HiRefresh size={24} className="text-white" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-1 font-medium">Claim your daily reward</p>
            <p className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-emerald-500 mb-1">$30</p>
            <p className="text-xs text-slate-400 mb-3 sm:mb-4 font-medium">Streak: {data.claimStreak} days</p>
            <button onClick={handleClaim} disabled={claimed}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold transition text-sm ${claimed ? 'bg-emerald-500 text-white cursor-not-allowed' : 'btn-primary'}`}>
              {claimed ? 'Claimed Today!' : 'Claim Reward'}
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Quick Actions</h3>
          <div className="space-y-2 sm:space-y-3">
            <Link href="/dashboard/deposit" className="flex items-center justify-between p-3 bg-gradient-to-r from-gold-500/5 to-emerald-500/5 dark:from-gold-400/5 dark:to-emerald-400/5 rounded-xl hover:from-gold-500/10 hover:to-emerald-500/10 transition">
              <span className="flex items-center gap-3"><FaCoins className="text-gold-600 dark:text-gold-400 shrink-0" /><span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Deposit Funds</span></span><HiArrowRight className="text-gold-600 dark:text-gold-400 shrink-0" />
            </Link>
            <Link href="/dashboard/withdrawals" className="flex items-center justify-between p-3 bg-gradient-to-r from-gold-500/5 to-emerald-500/5 dark:from-gold-400/5 dark:to-emerald-400/5 rounded-xl hover:from-gold-500/10 hover:to-emerald-500/10 transition">
              <span className="flex items-center gap-3"><HiCash className="text-gold-600 dark:text-gold-400 shrink-0" /><span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Withdraw Funds</span></span><HiArrowRight className="text-gold-600 dark:text-gold-400 shrink-0" />
            </Link>
            <Link href="/dashboard/referrals" className="flex items-center justify-between p-3 bg-gradient-to-r from-gold-500/5 to-emerald-500/5 dark:from-gold-400/5 dark:to-emerald-400/5 rounded-xl hover:from-gold-500/10 hover:to-emerald-500/10 transition">
              <span className="flex items-center gap-3"><HiUserGroup className="text-gold-600 dark:text-gold-400 shrink-0" /><span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Refer & Earn</span></span><HiArrowRight className="text-gold-600 dark:text-gold-400 shrink-0" />
            </Link>
          </div>
        </div>
      </div>

      {/* Active Investments */}
      <div className="card">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Active Investments</h3>
          <Link href="/dashboard/deposit" className="text-gold-600 dark:text-gold-400 text-sm font-semibold hover:underline">View All</Link>
        </div>
        <div className="space-y-2 sm:space-y-3">
          {getDemoInvestments().map(inv => (
            <div key={inv.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 gap-2">
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">{inv.planName}</p>
                <p className="text-xs text-slate-500 font-medium">Principal: ${inv.principal}</p>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full font-bold"><FaCheckCircle size={10} /> Running</span>
                <p className="text-xs text-slate-400 font-medium">Progress: {inv.earningsProgress}/{inv.redeemThreshold}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h3>
          <Link href="/dashboard/activity" className="text-gold-600 dark:text-gold-400 text-sm font-semibold hover:underline">View All</Link>
        </div>
        <div className="space-y-1">
          {[
            { desc: 'Daily task reward', amt: 30, type: 'credit' },
            { desc: 'Referral reward', amt: 70, type: 'credit' },
            { desc: 'Plan bonus', amt: 5, type: 'credit' },
            { desc: 'Withdrawal request', amt: 150, type: 'debit' },
            { desc: 'Daily task reward', amt: 30, type: 'credit' },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between py-2.5 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${tx.type === 'credit' ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
                  {tx.type === 'credit' ? <FaCoins className="text-emerald-500" size={12} /> : <HiCash className="text-red-500" size={12} />}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-700 dark:text-slate-300 font-medium truncate">{tx.desc}</p>
                  <p className="text-xs text-slate-400">Today</p>
                </div>
              </div>
              <span className={`text-sm font-bold shrink-0 ${tx.type === 'credit' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                {tx.type === 'credit' ? '+' : '-'}${tx.amt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
