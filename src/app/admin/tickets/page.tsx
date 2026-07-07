'use client'

import { getDemoTickets } from '@/lib/mock-data'

export default function AdminTicketsPage() {
  const tickets = getDemoTickets()
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Support Tickets</h1>
      <div className="space-y-3">
        {tickets.length === 0 ? (
          <div className="card text-center py-8"><p className="text-slate-400 text-sm">No tickets</p></div>
        ) : (
          tickets.map(ticket => (
            <div key={ticket.id} className="card">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-500">{ticket.category}</span>
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  ticket.status === 'OPEN' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-slate-500/10 text-slate-600'
                }`}>{ticket.status}</span>
              </div>
              <p className="font-medium text-slate-900 dark:text-white text-sm">{ticket.subject}</p>
              <p className="text-xs text-slate-400 mt-1">{ticket.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
