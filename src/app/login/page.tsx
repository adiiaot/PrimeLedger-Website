'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import toast from 'react-hot-toast'
import Logo from '@/components/Logo'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const { enterDemoMode } = useAuth()
  const router = useRouter()

  const handleDemo = () => {
    enterDemoMode()
    toast.success('Welcome to PrimeLedger Demo!')
    router.push('/dashboard')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { handleDemo(); setLoading(false) }, 500)
  }

  return (
    <div className="min-h-screen bg-page-light dark:bg-page-dark flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.08),transparent_60%)]" />
      <div className="relative w-full max-w-md">
        <div className="flex justify-center mb-6 sm:mb-8"><Logo size="lg" /></div>
        <div className="card">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">Welcome Back</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mb-6">Sign in to your account</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-1.5 font-medium">Email</label>
              <input type="email" className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:border-gold-500 transition text-sm" placeholder="demo@primeledger.io" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-1.5 font-medium">Password</label>
              <input type="password" className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:border-gold-500 transition text-sm" placeholder="Any password works in demo" />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full text-center">{loading ? 'Signing in...' : 'Sign In'}</button>
          </form>
          <div className="mt-6">
            <div className="relative mb-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-300 dark:border-slate-600" /></div><div className="relative flex justify-center text-xs"><span className="bg-white dark:bg-slate-800 px-2 text-slate-500 font-medium">or</span></div></div>
            <button onClick={handleDemo} className="w-full min-h-[44px] py-3 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl transition text-sm shadow-sm">Enter Demo Mode</button>
            <p className="text-xs text-slate-400 text-center mt-2 font-medium">Instant access — no password needed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
