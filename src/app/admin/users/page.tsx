'use client'

const users = [
  { name: 'Demo User', email: 'demo@primeledger.io', plan: 'Growth Plan', status: 'ACTIVE' },
  { name: 'John D.', email: 'john@example.com', plan: 'Starter Plan', status: 'ACTIVE' },
  { name: 'Sarah K.', email: 'sarah@example.com', plan: 'Premium Plan', status: 'ACTIVE' },
]

export default function AdminUsersPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Users</h1>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Name</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Email</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Plan</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-700/50">
                <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{u.name}</td>
                <td className="py-3 px-4 text-slate-500">{u.email}</td>
                <td className="py-3 px-4 text-slate-500">{u.plan}</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">{u.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
