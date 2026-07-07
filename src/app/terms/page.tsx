'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import { FaGavel, FaShieldAlt, FaBan, FaInfoCircle } from 'react-icons/fa'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-page-light dark:bg-page-dark">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gold-500/10 to-emerald-500/10 rounded-full border border-gold-200 dark:border-gold-800 mb-4">
            <span className="w-2 h-2 bg-gradient-to-r from-gold-500 to-emerald-500 rounded-full" />
            <span className="text-gold-700 dark:text-gold-300 text-xs sm:text-sm font-semibold">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400">Terms and conditions for using PrimeLedger</p>
        </div>

        <div className="space-y-4 animate-slide-up">
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <FaInfoCircle className="text-gold-500 shrink-0" size={18} />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Demo / Portfolio Project</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              PrimeLedger is a portfolio showcase / demo project created for demonstration purposes only. 
              It simulates a fintech earning platform but does not process, store, or transmit any real financial transactions.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <FaBan className="text-amber-500 shrink-0" size={18} />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">No Real Financial Activity</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              This platform does not handle real money, real cryptocurrency, or real financial instruments. 
              All balances, transactions, investments, and user data are simulated using mock data. 
              No real deposits, withdrawals, or earnings occur.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <FaShieldAlt className="text-emerald-500 shrink-0" size={18} />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Data Privacy</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Any data you enter while exploring the demo is stored locally in your browser via localStorage. 
              No data is transmitted to any server, collected, or stored beyond your local machine. 
              Clearing your browser data will reset all demo state.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <FaGavel className="text-gold-500 shrink-0" size={18} />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Limitation of Liability</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              This software is provided "as is" without warranty of any kind. The creators are not responsible 
              for any decisions made based on the simulated data shown in this demo. Do not use this platform 
              with real personal, financial, or sensitive information.
            </p>
          </div>
        </div>
      </div>
      <footer className="border-t border-slate-200 dark:border-white/10 py-8 text-center text-slate-400 text-sm">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">FAQ</Link>
            <Link href="/privacy-policy" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">Privacy</Link>
            <Link href="/guide" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">Guide</Link>
          </div>
          <span>&copy; {new Date().getFullYear()} PrimeLedger. All rights reserved.</span>
        </div>
      </footer>
    </main>
  )
}
