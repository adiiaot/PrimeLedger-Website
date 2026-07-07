'use client'

import { PLAN_STARTER, PLAN_GROWTH, PLAN_PREMIUM } from '@/lib/constants'
import { FaStar, FaCheckCircle } from 'react-icons/fa'

const plans = [PLAN_STARTER, PLAN_GROWTH, PLAN_PREMIUM]

export default function AdminPlansPage() {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Investment Plans</h1>
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
        {plans.map(plan => (
          <div key={plan.key} className="card text-center relative">
            <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
              <FaStar size={20} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">{plan.name}</h3>
            <p className="text-2xl sm:text-3xl font-extrabold text-gold-500 my-2">
              ${plan.amount.toFixed(2)}
            </p>
            <span className="text-xs text-slate-400 font-medium">Promo Price</span>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <p className="flex items-center justify-between"><span>Daily Reward</span><span className="font-bold text-emerald-600 dark:text-emerald-400">$30</span></p>
              <p className="flex items-center justify-between"><span>Duration</span><span className="font-bold text-slate-900 dark:text-white">30 days</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
