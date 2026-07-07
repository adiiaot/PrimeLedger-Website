'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import { FaShieldAlt, FaLock, FaEye, FaCookie, FaInfoCircle } from 'react-icons/fa'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-page-light dark:bg-page-dark">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-gold-600 dark:text-gold-400 text-xs font-bold uppercase tracking-widest mb-3">Privacy</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400">How we handle your information</p>
        </div>

        <div className="space-y-4 animate-slide-up">
          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <FaInfoCircle className="text-gold-500 shrink-0" size={18} />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">No Data Collection</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              PrimeLedger does not collect, store, or process any personal data on any server. 
              This is a purely client-side demo application. All data remains in your browser.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <FaLock className="text-emerald-500 shrink-0" size={18} />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Local Storage Only</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              The following information is stored locally in your browser using localStorage:
            </p>
            <ul className="space-y-1 mt-2">
              {['Demo user profile data (name, email, role)', 'Authentication token (demo session)',
                'Theme preference (light/dark mode)', 'Wallet balance, claim streak, and other demo state'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="text-gold-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <FaCookie className="text-amber-500 shrink-0" size={18} />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Cookies</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We use minimal cookies solely for maintaining your demo session (auth token) and theme preference. 
              No tracking cookies, analytics cookies, or third-party cookies are used.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <FaEye className="text-gold-500 shrink-0" size={18} />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">No Third-Party Sharing</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Since no data is collected, no data is shared with third parties. We do not use analytics services, 
              advertising networks, or data brokers. This demo has no backend servers.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-2">
              <FaShieldAlt className="text-emerald-500 shrink-0" size={18} />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Your Control</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              You can clear all stored data at any time by clearing your browser&apos;s localStorage and cookies 
              for this site. Logging out or using &quot;Clear Browsing Data&quot; will remove all demo data from your machine.
            </p>
          </div>
        </div>
      </div>
      <footer className="border-t border-slate-200 dark:border-white/10 py-8 text-center text-slate-400 text-sm">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">FAQ</Link>
            <Link href="/terms" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">Terms</Link>
            <Link href="/guide" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">Guide</Link>
          </div>
          <span>&copy; {new Date().getFullYear()} PrimeLedger. All rights reserved.</span>
        </div>
      </footer>
    </main>
  )
}
