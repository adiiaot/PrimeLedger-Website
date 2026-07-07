'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import { FaCoins, FaChartBar, FaUserCheck, FaRocket, FaWallet, FaShieldAlt } from 'react-icons/fa'

const sections = [
  {
    icon: <FaRocket size={20} />,
    title: 'Getting Started',
    items: [
      'Visit the PrimeLedger homepage and click "View Live Demo"',
      'Alternatively, click "Get Started" or navigate to /login and click "Enter Demo Mode"',
      'You will be instantly logged in with a pre-configured demo account',
      'Explore the dashboard — your wallet has a starting balance of $450',
    ],
  },
  {
    icon: <FaWallet size={20} />,
    title: 'Making a Deposit',
    items: [
      'Navigate to the Deposit page from the sidebar',
      'Enter the USD amount you want to deposit (minimum $10)',
      'Select a cryptocurrency from Bitcoin, Ethereum, USDT, BNB, Dogecoin, or Litecoin',
      'Copy the provided wallet address and simulate sending funds',
      'Click "Complete Deposit" — a 4-second processing simulation will credit your wallet',
    ],
  },
  {
    icon: <FaCoins size={20} />,
    title: 'Daily Rewards',
    items: [
      'Visit the Dashboard page and locate the "Daily Task" section',
      'Click "Claim Reward" to receive $30',
      'Build your streak by claiming daily — streak bonuses are available',
      'Your wallet balance updates immediately after claiming',
    ],
  },
  {
    icon: <FaChartBar size={20} />,
    title: 'Investment Plans',
    items: [
      'Browse available plans on the Membership page',
      'Plans range from Starter ($10) to Premium ($500,000+)',
      'Higher plans offer better profit rates (5% to 50%)',
      'Select a plan and fund it through the deposit flow',
    ],
  },
  {
    icon: <FaUserCheck size={20} />,
    title: 'Referral Program',
    items: [
      'Find your unique referral link on the Referrals page',
      'Copy and share the link with others',
      'Earn $50 for each active referral',
      'Track your referrals and their status on the Referrals page',
    ],
  },
  {
    icon: <FaShieldAlt size={20} />,
    title: 'Withdrawals',
    items: [
      'Go to the Withdrawals page',
      'Enter the amount you wish to withdraw (minimum $20)',
      'Select your preferred withdrawal method',
      'Submit the request — it will appear in your withdrawal history',
      'In the simulation, withdrawals can be approved or rejected from the admin panel',
    ],
  },
]

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-page-light dark:bg-page-dark">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gold-500/10 to-emerald-500/10 rounded-full border border-gold-200 dark:border-gold-800 mb-4">
            <span className="w-2 h-2 bg-gradient-to-r from-gold-500 to-emerald-500 rounded-full" />
            <span className="text-gold-700 dark:text-gold-300 text-xs sm:text-sm font-semibold">Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            How to Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-emerald-500">PrimeLedger</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400">A complete walkthrough of all platform features</p>
        </div>

        <div className="space-y-6 animate-slide-up">
          {sections.map((section, i) => (
            <div key={i} className="card">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700/50">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shrink-0">
                  {section.icon}
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
              </div>
              <ol className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-gold-500 to-emerald-500 text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">{j + 1}</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
      <footer className="border-t border-slate-200 dark:border-white/10 py-8 text-center text-slate-400 text-sm">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">FAQ</Link>
            <Link href="/terms" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-gold-600 dark:hover:text-gold-400 font-medium">Privacy</Link>
          </div>
          <span>&copy; {new Date().getFullYear()} PrimeLedger. All rights reserved.</span>
        </div>
      </footer>
    </main>
  )
}
