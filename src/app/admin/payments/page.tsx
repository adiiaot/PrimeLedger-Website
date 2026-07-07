'use client'

const payments = [
  { ref: 'PL-PAY-000001', user: 'Demo User', plan: 'Growth Plan', amount: 50, status: 'APPROVED', date: 'Today' },
  { ref: 'PL-PAY-000002', user: 'John D.', plan: 'Starter Plan', amount: 30, status: 'PENDING', date: 'Yesterday' },
  { ref: 'PL-PAY-000003', user: 'Sarah K.', plan: 'Premium Plan', amount: 100, status: 'PENDING', date: '2 days ago' },
]

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Payments</h1>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Reference</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">User</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Plan</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Amount</th>
              <th className="text-left py-3 px-4 text-slate-500 dark:text-slate-400 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i} className="border-b border-slate-100 dark:border-slate-700/50">
                <td className="py-3 px-4 text-slate-500 font-mono text-xs">{p.ref}</td>
                <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{p.user}</td>
                <td className="py-3 px-4 text-slate-500">{p.plan}</td>
                <td className="py-3 px-4 text-slate-700 dark:text-slate-300">${p.amount}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    p.status === 'APPROVED' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                    'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                  }`}>{p.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
