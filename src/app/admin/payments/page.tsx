'use client'

import { FaCheckCircle, FaClock } from 'react-icons/fa'

const payments = [
  { ref: 'PL-PAY-000001', user: 'Demo User', plan: 'Growth Plan', amount: 50, status: 'APPROVED', date: 'Today' },
  { ref: 'PL-PAY-000002', user: 'John D.', plan: 'Starter Plan', amount: 30, status: 'PENDING', date: 'Yesterday' },
  { ref: 'PL-PAY-000003', user: 'Sarah K.', plan: 'Premium Plan', amount: 100, status: 'PENDING', date: '2 days ago' },
  { ref: 'PL-PAY-000004', user: 'Alice M.', plan: 'Growth Plan', amount: 50, status: 'APPROVED', date: '3 days ago' },
  { ref: 'PL-PAY-000005', user: 'Demo User', plan: 'Starter Plan', amount: 30, status: 'APPROVED', date: '5 days ago' },
]

export default function AdminPaymentsPage() {
  const totalApproved = payments.filter(p => p.status === 'APPROVED').reduce((s, p) => s + p.amount, 0)
  const totalPending = payments.filter(p => p.status === 'PENDING').reduce((s, p) => s + p.amount, 0)

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Payments</h1>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div className="card">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Approved</p>
          <p className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">${totalApproved}</p>
        </div>
        <div className="card">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Pending</p>
          <p className="text-xl sm:text-2xl font-extrabold text-amber-600 dark:text-amber-400">${totalPending}</p>
        </div>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Reference</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">User</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider hidden sm:table-cell">Plan</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Amount</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                <td className="py-3 px-4 text-slate-500 font-mono text-xs">{p.ref}</td>
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{p.user}</td>
                <td className="py-3 px-4 text-slate-500 hidden sm:table-cell">{p.plan}</td>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">${p.amount}</td>
                <td className="py-3 px-4">
                  <span className={`flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded-full w-fit ${
                    p.status === 'APPROVED' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                    'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                  }`}>
                    {p.status === 'APPROVED' ? <FaCheckCircle size={10} /> : <FaClock size={10} />}
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
