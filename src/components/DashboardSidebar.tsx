'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from '@/context/ThemeContext'
import { useWallet } from '@/context/WalletContext'
import {
  HiHome, HiChartBar, HiCash, HiUser, HiLogout,
  HiMenu, HiX, HiStar, HiCurrencyDollar, HiLink, HiBell, HiChat,
  HiSun, HiMoon
} from 'react-icons/hi'
import Logo from './Logo'

const userLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: HiHome },
  { href: '/dashboard/deposit', label: 'Deposit', icon: HiChartBar },
  { href: '/dashboard/activity', label: 'Activity', icon: HiBell },
  { href: '/dashboard/membership', label: 'Membership', icon: HiStar },
  { href: '/dashboard/referrals', label: 'Referrals', icon: HiLink },
  { href: '/dashboard/withdrawals', label: 'Withdrawals', icon: HiCash },
  { href: '/dashboard/profile', label: 'Profile', icon: HiUser },
  { href: '/dashboard/support', label: 'Support', icon: HiChat },
]

const adminLinks = [
  { href: '/admin', label: 'Admin Home', icon: HiHome },
  { href: '/admin/users', label: 'Users', icon: HiUser },
  { href: '/admin/payments', label: 'Payments', icon: HiCurrencyDollar },
  { href: '/admin/recharges', label: 'Deposits', icon: HiChartBar },
  { href: '/admin/withdrawals', label: 'Withdrawals', icon: HiCash },
  { href: '/admin/plans', label: 'Plans', icon: HiStar },
  { href: '/admin/settings', label: 'Settings', icon: HiCash },
  { href: '/admin/changelog', label: 'Changelog', icon: HiBell },
  { href: '/admin/tickets', label: 'Tickets', icon: HiChat },
]

export default function DashboardSidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout, isDemo } = useAuth()
  const { theme, toggle } = useTheme()
  const { balance } = useWallet()
  const isAdmin = user?.role === 'ADMIN'
  const links = isAdmin ? adminLinks : userLinks

  return (
    <div className="min-h-screen bg-page-light dark:bg-page-dark flex">
      {open && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setOpen(false)} />}

      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900/95 border-r border-slate-200 dark:border-white/10 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 flex flex-col`}>
        <div className="p-6 border-b border-slate-200 dark:border-white/10">
          <Logo />
          <div className="mt-3 px-3 py-2 bg-gradient-to-r from-gold-500/10 to-emerald-500/10 dark:from-gold-400/10 dark:to-emerald-400/10 rounded-lg">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Wallet</p>
            <p className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-emerald-500">${balance.toFixed(2)}</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {links.map(link => {
            const Icon = link.icon
            const active = pathname === link.href
            return (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                <div className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition ${
                  active
                    ? 'bg-gradient-to-r from-gold-500/10 to-emerald-500/10 dark:from-gold-400/10 dark:to-emerald-400/10 border-l-2 border-gold-500 dark:border-gold-400 text-gold-700 dark:text-gold-300 font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 font-medium'
                }`}>
                  <Icon size={16} />
                  <span className="text-sm">{link.label}</span>
                </div>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-white/10 space-y-2">
          <button onClick={toggle} className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-gold-600 dark:hover:text-gold-400 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition w-full font-medium">
            {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
          </button>
          <button onClick={logout}
            className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition w-full font-medium">
            <HiLogout size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen max-w-full overflow-x-hidden">
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
          <div className="flex items-center justify-between px-4 lg:px-8 h-16">
            <button className="lg:hidden text-slate-700 dark:text-white p-2" onClick={() => setOpen(true)} aria-label="Open menu">
              <HiMenu size={22} />
            </button>
            <div className="hidden lg:block" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-slate-900 dark:text-white font-semibold text-sm">{user?.fullName}</p>
                {isAdmin ? <p className="text-gold-600 dark:text-gold-400 text-xs font-medium">Admin</p> : user?.selectedPlan && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{user.selectedPlan}</span>
                )}
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-gold-500 to-emerald-500 rounded-full flex items-center justify-center shadow-sm shrink-0">
                <span className="text-white font-bold text-sm">{user?.fullName?.charAt(0) || 'U'}</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-3 sm:p-4 lg:p-8 w-full max-w-full">
          {isDemo && (
            <div className="mb-4 px-3 sm:px-4 py-2.5 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-lg text-amber-800 dark:text-amber-300 text-xs font-medium">
              Demo Mode — This is a simulated environment. No real transactions occur.
            </div>
          )}
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
