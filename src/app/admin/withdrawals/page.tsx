'use client'

import { useState } from 'react'
import { getDemoWithdrawals } from '@/lib/mock-data'
import { FaCheckCircle, FaClock, FaTimesCircle, FaCheck } from 'react-icons/fa'
import toast from 'react-hot-toast'

export default function AdminWithdrawalsPage() {
  const [withdrawals, setWithdrawals] = useState(getDemoWithdrawals())

  const handleApprove = (id: string) => {
    setWithdrawals(prev => prev.map(w => w.id === id ? { ...w, status: 'COMPLETED' } : w))
    toast.success('Withdrawal approved!')
  }

  const handleReject = (id: string) => {
    setWithdrawals(prev => prev.map(w => w.id === id ? { ...w, status: 'CANCELLED' } : w))
    toast.success('Withdrawal rejected.')
  }

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Withdrawal Requests</h1>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">User</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Amount</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider hidden sm:table-cell">Bank</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Status</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {withdrawals.map((wd, i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{wd.accountName}</td>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">${wd.amount}</td>
                <td className="py-3 px-4 text-slate-500 hidden sm:table-cell">{wd.bankName}</td>
                <td className="py-3 px-4">
                  <span className={`flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded-full w-fit ${
                    wd.status === 'COMPLETED' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                    wd.status === 'CANCELLED' ? 'bg-red-500/10 text-red-600 dark:text-red-400' :
                    'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                  }`}>
                    {wd.status === 'COMPLETED' ? <FaCheckCircle size={10} /> :
                     wd.status === 'CANCELLED' ? <FaTimesCircle size={10} /> :
                     <FaClock size={10} />}
                    {wd.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {wd.status === 'PENDING' ? (
                    <div className="flex gap-1">
                      <button onClick={() => handleApprove(wd.id)} className="px-2.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition flex items-center gap-1">
                        <FaCheck size={10} /> Approve
                      </button>
                      <button onClick={() => handleReject(wd.id)} className="px-2.5 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition flex items-center gap-1">
                        <FaTimesCircle size={10} /> Reject
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 font-medium">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
