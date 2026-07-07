'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import { DEMO_USER } from '@/lib/mock-data'

interface User {
  id: string
  userCode: string
  fullName: string
  email: string
  role: string
  selectedPlan: string | null
  paidAmount: number | null
}

interface AuthContextType {
  user: User | null
  token: string | null
  loading: boolean
  isDemo: boolean
  enterDemoMode: () => void
  logout: () => void
  updateUser: (data: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDemo, setIsDemo] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem('primeledger_user')
    const savedToken = localStorage.getItem('primeledger_token')
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser))
      setToken(savedToken)
      setIsDemo(true)
    }
    setLoading(false)
  }, [])

  const enterDemoMode = useCallback(() => {
    const demoToken = 'demo-' + Math.random().toString(36).substring(2)
    const userData: User = {
      id: DEMO_USER.id,
      userCode: DEMO_USER.userCode,
      fullName: DEMO_USER.fullName,
      email: DEMO_USER.email,
      role: DEMO_USER.role,
      selectedPlan: DEMO_USER.selectedPlan,
      paidAmount: DEMO_USER.paidAmount,
    }
    setUser(userData)
    setToken(demoToken)
    setIsDemo(true)
    localStorage.setItem('primeledger_user', JSON.stringify(userData))
    localStorage.setItem('primeledger_token', demoToken)
    document.cookie = 'primeledger_token=' + demoToken + ';path=/;max-age=86400'
    document.cookie = 'demo_mode=true;path=/;max-age=86400'
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setToken(null)
    setIsDemo(false)
    localStorage.removeItem('primeledger_user')
    localStorage.removeItem('primeledger_token')
    document.cookie = 'primeledger_token=;path=/;max-age=0'
    document.cookie = 'demo_mode=;path=/;max-age=0'
    window.location.href = '/'
  }, [])

  const updateUser = useCallback((data: Partial<User>) => {
    if (user) {
      const updated = { ...user, ...data }
      setUser(updated)
      localStorage.setItem('primeledger_user', JSON.stringify(updated))
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user, token, loading, isDemo, enterDemoMode, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
