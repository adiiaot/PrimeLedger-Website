'use client'

import Link from 'next/link'
import { FaCrown, FaCheckCircle } from 'react-icons/fa'

const plans = [
  { name: 'Starter', minDeposit: 100, maxDeposit: 499, profit: '5%', duration: '3 days', referralBonus: '5%' },
  { name: 'Basic', minDeposit: 500, maxDeposit: 999, profit: '10%', duration: '7 days', referralBonus: '10%' },
  { name: 'Pro', minDeposit: 1000, maxDeposit: 4999, profit: '15%', duration: '14 days', referralBonus: '15%' },
  { name: 'Elite', minDeposit: 5000, maxDeposit: 24999, profit: '20%', duration: '21 days', referralBonus: '20%' },
  { name: 'Mega', minDeposit: 25000, maxDeposit: 99999, profit: '30%', duration: '30 days', referralBonus: '25%' },
  { name: 'Premium', minDeposit: 100000, maxDeposit: 1000000, profit: '50%', duration: '45 days', referralBonus: '30%' },
]

export default function MembershipPage() {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Investment Plans</h1>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map(p => (
          <div key={p.name} className={`card border-2 border-gold-500/20`}>
            <div className="flex items-center gap-2 mb-3">
              <FaCrown className="text-gold-500" size={18} />
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{p.name}</h3>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <p className="flex justify-between"><span className="text-slate-500 dark:text-slate-400 font-medium">Deposit Range</span><span className="font-bold text-slate-900 dark:text-white">${p.minDeposit.toLocaleString()} - ${p.maxDeposit.toLocaleString()}</span></p>
              <p className="flex justify-between"><span className="text-slate-500 dark:text-slate-400 font-medium">Profit</span><span className="font-bold text-emerald-600 dark:text-emerald-400">{p.profit}</span></p>
              <p className="flex justify-between"><span className="text-slate-500 dark:text-slate-400 font-medium">Duration</span><span className="font-bold text-slate-900 dark:text-white">{p.duration}</span></p>
              <p className="flex justify-between"><span className="text-slate-500 dark:text-slate-400 font-medium">Referral Bonus</span><span className="font-bold text-gold-600 dark:text-gold-400">{p.referralBonus}</span></p>
            </div>
            <Link href="/dashboard/deposit" className="btn-primary w-full text-center text-sm">Invest Now</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
