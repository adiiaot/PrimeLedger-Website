'use client'

import { FaUserCheck, FaClock } from 'react-icons/fa'
import PlanBadge from '@/components/PlanBadge'

const users = [
  { name: 'Demo User', email: 'demo@primeledger.io', plan: 'Growth Plan', status: 'ACTIVE', joined: 'Mar 1, 2026', deposits: 80 },
  { name: 'John D.', email: 'john@example.com', plan: 'Starter Plan', status: 'ACTIVE', joined: 'Mar 5, 2026', deposits: 30 },
  { name: 'Sarah K.', email: 'sarah@example.com', plan: 'Premium Plan', status: 'ACTIVE', joined: 'Mar 10, 2026', deposits: 100 },
  { name: 'Mike T.', email: 'mike@example.com', plan: null, status: 'PENDING', joined: 'Mar 15, 2026', deposits: 0 },
  { name: 'Alice M.', email: 'alice@example.com', plan: 'Growth Plan', status: 'ACTIVE', joined: 'Mar 12, 2026', deposits: 50 },
]

export default function AdminUsersPage() {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Users</h1>
        <span className="text-xs text-slate-400 font-medium">{users.length} total</span>
      </div>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Name</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Email</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Plan</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider hidden sm:table-cell">Deposits</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{u.name}</td>
                <td className="py-3 px-4 text-slate-500">{u.email}</td>
                <td className="py-3 px-4"><PlanBadge plan={u.plan} /></td>
                <td className="py-3 px-4 text-slate-600 dark:text-slate-400 hidden sm:table-cell">${u.deposits}</td>
                <td className="py-3 px-4">
                  <span className={`flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded-full w-fit ${
                    u.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                  }`}>
                    {u.status === 'ACTIVE' ? <FaUserCheck size={10} /> : <FaClock size={10} />}
                    {u.status}
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
