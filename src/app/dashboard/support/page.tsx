'use client'

import { useState } from 'react'
import { FaHeadset, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import toast from 'react-hot-toast'

const faqs = [
  { q: 'How do I make a deposit?', a: 'Navigate to the Deposit page, enter the amount, choose a cryptocurrency, and send funds to the provided address.' },
  { q: 'How long do withdrawals take?', a: 'Withdrawals are typically processed within 24 hours after review.' },
  { q: 'How does the referral program work?', a: 'Share your referral link. Each active referral earns you a $50 bonus credited to your wallet.' },
  { q: 'What is the minimum deposit?', a: 'The minimum deposit is $10. Higher plans offer better profit rates.' },
]

export default function SupportPage() {
  const [msg, setMsg] = useState('')
  const [open, setOpen] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!msg.trim()) return
    toast.success('Message sent! We\'ll get back to you within 24 hours.')
    setMsg('')
  }

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in max-w-3xl">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Support</h1>

      <div className="card">
        <div className="flex items-center gap-3 mb-3">
          <FaHeadset className="text-gold-500" size={20} />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-1">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-slate-100 dark:border-slate-700/50 last:border-0">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-3 flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-slate-900 dark:text-white">{f.q}</span>
                <span className={`text-gold-500 transition shrink-0 ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {open === i && <p className="text-sm text-slate-500 dark:text-slate-400 pb-3">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="card space-y-4">
        <div className="flex items-center gap-3 mb-1">
          <FaEnvelope className="text-gold-500" size={18} />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Contact Us</h2>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Your Message</label>
          <textarea rows={4} value={msg} onChange={e => setMsg(e.target.value)} placeholder="Describe your issue or question..."
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium resize-none focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition" />
        </div>
        <button type="submit" className="btn-primary flex items-center justify-center gap-2 py-3.5 text-base">
          <FaPaperPlane size={16} /> Send Message
        </button>
      </form>
    </div>
  )
}
