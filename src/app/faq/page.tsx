'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  { q: 'What is PrimeLedger?', a: 'PrimeLedger is a premium fintech demo platform that simulates a complete crypto earning experience. Users can explore tiered investment plans, earn daily rewards, manage referrals, and request withdrawals — all within a fully simulated environment.' },
  { q: 'How do I get started?', a: 'Click "View Live Demo" on the homepage or navigate to the Login page and click "Enter Demo Mode". You will be instantly logged in with pre-populated demo data. No signup, no email, no password required.' },
  { q: 'What payment methods are shown?', a: 'The platform demonstrates crypto payments (Bitcoin, Ethereum, USDT, BNB, Dogecoin, Litecoin) and bank transfer support. All wallet addresses shown are dummy addresses for simulation purposes only.' },
  { q: 'When can I withdraw?', a: 'Withdrawals are processed on Tuesdays and Fridays in the simulation. Minimum withdrawal amounts vary by plan. The demo shows the full withdrawal request flow with admin approval simulation.' },
  { q: 'How does the referral system work?', a: 'Share your unique referral link (shown in the Referrals page). When a new user signs up using your link, you earn a referral reward. In the demo, referral data is pre-populated to demonstrate the feature.' },
  { q: 'Is this a real investment platform?', a: 'No. PrimeLedger is a portfolio showcase / demo project. All data — including balances, transactions, investments, and user profiles — is simulated. No real money is involved, and no real financial transactions occur.' },
  { q: 'Can I customize the demo data?', a: 'The demo runs entirely in your browser with mock data. You can interact with all features, but no changes persist on a server. Refreshing resets certain state (balances, claims).' },
  { q: 'What technologies power this platform?', a: 'Built with Next.js 14, React, TypeScript, Tailwind CSS, and various UI libraries. All data is client-side mock data — no database, no real API, no server-side persistence.' },
]

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-page-light dark:bg-page-dark">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gold-500/10 to-emerald-500/10 rounded-full border border-gold-200 dark:border-gold-800 mb-4">
            <span className="w-2 h-2 bg-gradient-to-r from-gold-500 to-emerald-500 rounded-full" />
            <span className="text-gold-700 dark:text-gold-300 text-xs sm:text-sm font-semibold">FAQ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-emerald-500">Questions</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400">Everything you need to know about PrimeLedger</p>
        </div>
        <div className="space-y-2 animate-slide-up">
          {faqs.map((faq, i) => (
            <div key={i} className="card !p-0 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{faq.q}</span>
                <FaChevronDown className={`text-gold-500 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} size={14} />
              </button>
              {open === i && (
                <div className="px-4 sm:px-6 pb-4 animate-fade-in">
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <footer className="border-t border-slate-200 dark:border-white/10 py-8 text-center text-slate-400 text-sm">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">Privacy</Link>
            <Link href="/guide" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">Guide</Link>
          </div>
          <span>&copy; {new Date().getFullYear()} PrimeLedger. All rights reserved.</span>
        </div>
      </footer>
    </main>
  )
}
