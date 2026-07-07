'use client'

import { PLAN_STARTER, PLAN_GROWTH, PLAN_PREMIUM } from '@/lib/constants'
import { FaStar } from 'react-icons/fa'

const plans = [PLAN_STARTER, PLAN_GROWTH, PLAN_PREMIUM]

export default function AdminPlansPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Investment Plans</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(plan => (
          <div key={plan.key} className="card text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <FaStar size={20} className="text-white" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">{plan.name}</h3>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-emerald-500 my-2">${plan.amount.toFixed(2)}</p>
            <span className="text-xs text-slate-400 font-medium">Promo Price</span>
          </div>
        ))}
      </div>
    </div>
  )
}
