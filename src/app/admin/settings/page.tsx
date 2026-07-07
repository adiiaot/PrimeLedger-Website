'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    bankName: 'Prime Global Bank',
    accountName: 'PrimeLedger Systems',
    accountNumber: '1234567890',
  })

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Settings saved!')
  }

  return (
    <div className="max-w-2xl space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
      <form onSubmit={handleSave} className="card space-y-4">
        <div>
          <label className="block text-xs text-slate-500 dark:text-slate-400 mb-1">Bank Name</label>
          <input type="text" value={settings.bankName} onChange={e => setSettings({ ...settings, bankName: e.target.value })}
            className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:border-indigo-500 transition text-sm" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 dark:text-slate-400 mb-1">Account Name</label>
          <input type="text" value={settings.accountName} onChange={e => setSettings({ ...settings, accountName: e.target.value })}
            className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:border-indigo-500 transition text-sm" />
        </div>
        <div>
          <label className="block text-xs text-slate-500 dark:text-slate-400 mb-1">Account Number</label>
          <input type="text" value={settings.accountNumber} onChange={e => setSettings({ ...settings, accountNumber: e.target.value })}
            className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:border-indigo-500 transition text-sm" />
        </div>
        <button type="submit" className="btn-primary">Save Settings</button>
      </form>
    </div>
  )
}
