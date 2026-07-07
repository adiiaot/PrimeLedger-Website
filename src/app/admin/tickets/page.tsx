'use client'

import { getDemoTickets } from '@/lib/mock-data'
import { FaCheckCircle, FaClock, FaTag } from 'react-icons/fa'

const tickets = [
  ...getDemoTickets(),
  { id: 'tk-002', category: 'Payment', subject: 'Deposit not credited', message: 'I sent USDT but it has not been credited yet.', status: 'OPEN', createdAt: new Date(Date.now() - 2 * 86400000).toISOString() },
  { id: 'tk-003', category: 'Account', subject: 'Change email address', message: 'I need to update my email on file.', status: 'OPEN', createdAt: new Date(Date.now() - 1 * 86400000).toISOString() },
]

export default function AdminTicketsPage() {
  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Support Tickets</h1>
        <span className="text-xs text-slate-400 font-medium">{tickets.filter(t => t.status === 'OPEN').length} open</span>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {tickets.length === 0 ? (
          <div className="card text-center py-8"><p className="text-slate-400 text-sm font-medium">No tickets yet</p></div>
        ) : (
          tickets.map(ticket => (
            <div key={ticket.id} className="card">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <FaTag className="text-gold-500" size={12} />
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{ticket.category}</span>
                  <span className="text-xs text-slate-400">· {ticket.id}</span>
                </div>
                <span className={`flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded-full ${
                  ticket.status === 'OPEN' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                }`}>
                  {ticket.status === 'OPEN' ? <FaClock size={10} /> : <FaCheckCircle size={10} />}
                  {ticket.status}
                </span>
              </div>
              <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">{ticket.subject}</p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{ticket.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
