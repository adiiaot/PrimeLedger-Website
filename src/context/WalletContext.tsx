'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

interface WalletContextType {
  balance: number
  setBalance: (val: number) => void
  addBalance: (amount: number) => void
  deductBalance: (amount: number) => void
}

const WalletContext = createContext<WalletContextType>({
  balance: 450,
  setBalance: () => {},
  addBalance: () => {},
  deductBalance: () => {},
})

export function WalletProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState(450)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('primeledger_balance')
    if (stored) {
      try { setBalance(Number(stored)) } catch {}
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('primeledger_balance', String(balance))
    }
  }, [balance, mounted])

  const addBalance = useCallback((amount: number) => {
    setBalance(prev => prev + amount)
  }, [])

  const deductBalance = useCallback((amount: number) => {
    setBalance(prev => Math.max(0, prev - amount))
  }, [])

  return (
    <WalletContext.Provider value={{ balance, setBalance, addBalance, deductBalance }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => useContext(WalletContext)
