'use client'

import { useState } from 'react'
import { HiClipboardCopy } from 'react-icons/hi'
import { FaUserPlus, FaCoins, FaCheckCircle } from 'react-icons/fa'
import toast from 'react-hot-toast'

const refs = [
  { name: 'Alice M.', date: 'Mar 20, 2026', bonus: 50, active: true },
  { name: 'Bob T.', date: 'Mar 18, 2026', bonus: 50, active: true },
  { name: 'Charlie K.', date: 'Mar 15, 2026', bonus: 50, active: false },
]

export default function ReferralsPage() {
  const [copied, setCopied] = useState(false)
  const refLink = 'https://primeledger.com/ref/demo123'

  const copyLink = () => {
    navigator.clipboard.writeText(refLink)
    setCopied(true)
    toast.success('Referral link copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in max-w-3xl">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Refer & Earn</h1>

      <div className="card">
        <div className="flex items-center gap-3 mb-2">
          <FaUserPlus className="text-gold-500" size={20} />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Your Referral Link</h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Share your link and earn <strong className="text-gold-600 dark:text-gold-400">$50</strong> for each active referral.</p>
        <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
          <code className="flex-1 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400 break-all select-all">{refLink}</code>
          <button onClick={copyLink} className="shrink-0 px-3 py-1.5 bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5">
            <HiClipboardCopy size={14} />{copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="card">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Your Referrals</h3>
        <div className="space-y-2">
          {refs.map((r, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">{r.name}</p>
                <p className="text-xs text-slate-400 font-medium">Joined: {r.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">+${r.bonus}</span>
                <span className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${r.active ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}>
                  <FaCheckCircle size={8} /> {r.active ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          ))}
        </div>
        {refs.length === 0 && <p className="text-center text-slate-400 text-sm py-6 font-medium">No referrals yet.</p>}
      </div>
    </div>
  )
}
