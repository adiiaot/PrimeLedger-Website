'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useTheme } from '@/context/ThemeContext'
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'
import Logo from './Logo'

export default function Navbar() {
  const { user, logout } = useAuth()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700/50">
      <div className="h-0.5 bg-gradient-to-r from-gold-500 to-emerald-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/#about" className="text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition text-sm">About</Link>
            <Link href="/#plans" className="text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition text-sm">Plans</Link>
            <Link href="/#how-it-works" className="text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition text-sm">How It Works</Link>
            <Link href="/faq" className="text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition text-sm">FAQ</Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={toggle} className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" title="Toggle theme">
              {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>

            {user ? (
              <>
                <Link href={user.role === 'ADMIN' ? '/admin' : '/dashboard'}>
                  <button className="btn-primary">Dashboard</button>
                </Link>
                <button onClick={logout} className="btn-secondary text-sm">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="btn-secondary text-sm">Login</button>
                </Link>
                <Link href="/register">
                  <button className="btn-primary">Get Started</button>
                </Link>
              </>
            )}
          </div>

          <button className="lg:hidden text-slate-700 dark:text-white p-2" onClick={() => setOpen(!open)}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link href="/#about" className="block text-slate-600 dark:text-slate-300 py-2 font-medium text-sm" onClick={() => setOpen(false)}>About</Link>
            <Link href="/#plans" className="block text-slate-600 dark:text-slate-300 py-2 font-medium text-sm" onClick={() => setOpen(false)}>Plans</Link>
            <Link href="/#how-it-works" className="block text-slate-600 dark:text-slate-300 py-2 font-medium text-sm" onClick={() => setOpen(false)}>How It Works</Link>
            <Link href="/faq" className="block text-slate-600 dark:text-slate-300 py-2 font-medium text-sm" onClick={() => setOpen(false)}>FAQ</Link>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
              <button onClick={toggle} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 py-2 text-sm font-medium">
                {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
                {theme === 'dark' ? 'Light' : 'Dark'} Mode
              </button>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              {user ? (
                <>
                  <Link href={user.role === 'ADMIN' ? '/admin' : '/dashboard'} onClick={() => setOpen(false)}>
                    <button className="w-full py-3 btn-primary text-center text-sm">Dashboard</button>
                  </Link>
                  <button onClick={() => { logout(); setOpen(false); }} className="w-full py-3 btn-secondary text-center text-sm">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setOpen(false)}>
                    <button className="w-full py-3 btn-secondary text-center text-sm">Login</button>
                  </Link>
                  <Link href="/register" onClick={() => setOpen(false)}>
                    <button className="w-full py-3 btn-primary text-center text-sm">Get Started</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
