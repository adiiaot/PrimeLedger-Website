'use client'

import { useAuth } from '@/context/AuthContext'
import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaSave } from 'react-icons/fa'
import toast from 'react-hot-toast'

export default function ProfilePage() {
  const { user } = useAuth()
  const [name, setName] = useState(user?.fullName || '')
  const [email, setEmail] = useState(user?.email || '')
  const [phone, setPhone] = useState('')

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Profile updated!')
  }

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in max-w-2xl">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Profile</h1>

      <form onSubmit={handleSave} className="card space-y-4 sm:space-y-5">
        <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-700">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-emerald-500 flex items-center justify-center text-white font-extrabold text-xl shrink-0">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{name}</p>
            <p className="text-xs text-slate-400 font-medium">Member since March 2026</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5"><FaUser className="inline mr-1.5" /> Full Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5"><FaEnvelope className="inline mr-1.5" /> Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5"><FaPhone className="inline mr-1.5" /> Phone</label>
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 123-4567"
            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition" />
        </div>

        <button type="submit" className="btn-primary flex items-center justify-center gap-2 py-3.5 text-base">
          <FaSave size={16} /> Save Changes
        </button>
      </form>
    </div>
  )
}
