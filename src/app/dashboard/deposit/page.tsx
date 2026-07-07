'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useWallet } from '@/context/WalletContext'
import { CRYPTO_ADDRESSES } from '@/lib/constants'
import { FaBitcoin, FaEthereum, FaCoins, FaCheckCircle } from 'react-icons/fa'
import { SiTether, SiBinance, SiDogecoin, SiLitecoin } from 'react-icons/si'
import { HiArrowRight, HiClipboardCopy } from 'react-icons/hi'
import toast from 'react-hot-toast'

const cryptoOptions = [
  { key: 'btc', label: 'Bitcoin', icon: FaBitcoin, color: 'text-orange-500', addr: CRYPTO_ADDRESSES.btc },
  { key: 'eth', label: 'Ethereum', icon: FaEthereum, color: 'text-blue-500', addr: CRYPTO_ADDRESSES.eth },
  { key: 'usdt', label: 'USDT (TRC20)', icon: SiTether, color: 'text-green-500', addr: CRYPTO_ADDRESSES.usdt },
  { key: 'bnb', label: 'BNB (BEP20)', icon: SiBinance, color: 'text-yellow-500', addr: CRYPTO_ADDRESSES.bnb },
  { key: 'doge', label: 'Dogecoin', icon: SiDogecoin, color: 'text-amber-500', addr: CRYPTO_ADDRESSES.doge },
  { key: 'ltc', label: 'Litecoin', icon: SiLitecoin, color: 'text-slate-500', addr: CRYPTO_ADDRESSES.ltc },
]

export default function DepositPage() {
  const { addBalance } = useWallet()
  const router = useRouter()
  const [amount, setAmount] = useState('')
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0])
  const [copied, setCopied] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [done, setDone] = useState(false)

  const copyAddress = () => {
    navigator.clipboard.writeText(selectedCrypto.addr)
    setCopied(true)
    toast.success('Address copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const val = parseFloat(amount)
    if (!val || val < 10) {
      toast.error('Minimum deposit is $10')
      return
    }
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      setDone(true)
      addBalance(val)
      toast.success(`$${val.toFixed(2)} deposited! Your wallet has been credited.`)
    }, 4000)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Deposit Funds</h1>

      {done ? (
        <div className="card text-center py-10 sm:py-14">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheckCircle size={36} className="text-white" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Deposit Successful!</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">${parseFloat(amount).toFixed(2)} has been credited to your wallet.</p>
              <button onClick={() => router.push('/dashboard')} className="btn-primary">Back to Dashboard</button>
        </div>
      ) : (
        <>
          {/* Step 1: Enter Amount */}
          <form onSubmit={handleSubmit} className="card space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Enter Amount (USD)</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">$</span>
                <input type="number" step="any" min="10" placeholder="0.00"
                  value={amount} onChange={e => setAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3.5 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-lg focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition" />
              </div>
            </div>

            {/* Step 2: Select Crypto */}
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Select Cryptocurrency</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {cryptoOptions.map(c => {
                  const Icon = c.icon
                  return (
                    <button key={c.key} type="button" onClick={() => setSelectedCrypto(c)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border-2 transition text-left ${selectedCrypto.key === c.key ? 'border-gold-500 bg-gold-500/5' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-gold-500/50'}`}>
                      <Icon className={`text-lg ${c.color} shrink-0`} />
                      <span className="text-sm font-bold text-slate-900 dark:text-white truncate">{c.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Crypto Address */}
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Send to this Address</label>
              <div className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <code className="flex-1 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400 break-all select-all">{selectedCrypto.addr}</code>
                <button type="button" onClick={copyAddress}
                  className="shrink-0 px-3 py-1.5 bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5">
                  <HiClipboardCopy size={14} />{copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-1.5 font-medium">
                <strong>Warning:</strong> Send only {selectedCrypto.label} to this address. Other assets will be lost.
              </p>
            </div>

            <button type="submit" disabled={processing || !amount}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 py-3.5 text-base">
              {processing ? (
                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Confirming Transaction...</>
              ) : (
                <><HiArrowRight size={18} /> Complete Deposit</>
              )}
            </button>
          </form>

          {/* Info Card */}
          <div className="card bg-gold-500/5 border border-gold-500/20">
            <div className="flex items-start gap-3">
              <FaCoins className="text-gold-500 mt-0.5 shrink-0" size={16} />
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <p className="font-bold text-slate-900 dark:text-white mb-1">How it works</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Enter the USD amount you want to deposit</li>
                  <li>Select a cryptocurrency to pay with</li>
                  <li>Send the equivalent value to the provided address</li>
                  <li>Your wallet will be credited automatically after confirmation</li>
                </ol>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
