'use client'

import { useState } from 'react'
import { HiCash } from 'react-icons/hi'
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa'
import toast from 'react-hot-toast'

const withdrawals = [
  { id: '#WD01', amount: 150, method: 'Bitcoin', status: 'completed', date: 'Mar 19, 2026' },
  { id: '#WD02', amount: 200, method: 'Ethereum', status: 'pending', date: 'Mar 22, 2026' },
  { id: '#WD03', amount: 80, method: 'USDT', status: 'cancelled', date: 'Mar 18, 2026' },
]

export default function WithdrawalsPage() {
  const [amount, setAmount] = useState('')
  const [method, setMethod] = useState('btc')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const val = parseFloat(amount)
    if (!val || val < 20) {
      toast.error('Minimum withdrawal is $20')
      return
    }
    toast.success('Withdrawal request submitted!')
    setAmount('')
  }

  const statusIcon = (s: string) => {
    switch (s) {
      case 'completed': return <FaCheckCircle className="text-emerald-500" size={14} />
      case 'pending': return <FaClock className="text-amber-500" size={14} />
      case 'cancelled': return <FaTimesCircle className="text-red-500" size={14} />
      default: return null
    }
  }

  const statusClass = (s: string) => {
    switch (s) {
      case 'completed': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
      case 'pending': return 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
      case 'cancelled': return 'bg-red-500/10 text-red-600 dark:text-red-400'
      default: return ''
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in max-w-3xl">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Withdrawals</h1>

      <form onSubmit={handleSubmit} className="card space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Amount (USD)</label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">$</span>
            <input type="number" step="any" min="20" placeholder="0.00"
              value={amount} onChange={e => setAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-3.5 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Withdrawal Method</label>
          <select value={method} onChange={e => setMethod(e.target.value)}
            className="w-full px-4 py-3.5 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition">
            <option value="btc">Bitcoin</option>
            <option value="eth">Ethereum</option>
            <option value="usdt">USDT (TRC20)</option>
            <option value="bnb">BNB (BEP20)</option>
          </select>
        </div>
        <button type="submit" className="btn-primary w-full py-3.5 text-base flex items-center justify-center gap-2">
          <HiCash size={18} /> Request Withdrawal
        </button>
      </form>

      <div className="card">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Withdrawal History</h3>
        <div className="space-y-2">
          {withdrawals.map(w => (
            <div key={w.id} className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">{w.id}</p>
                <p className="text-xs text-slate-400 font-medium">{w.date} &middot; {w.method}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-900 dark:text-white">${w.amount}</span>
                <span className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full capitalize ${statusClass(w.status)}`}>
                  {statusIcon(w.status)} {w.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
