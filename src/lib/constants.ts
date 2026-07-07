export const APP_NAME = 'PrimeLedger'
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://primeledger.vercel.app/'
export const TELEGRAM_USERNAME = 'PrimeLedgerHelp'
export const TELEGRAM_LINK = 'https://t.me/PrimeLedgerHelp'

export const DAILY_TASK_REWARD = 30
export const STREAK_BONUS = 70
export const STREAK_THRESHOLD = 14
export const PLAN_BONUS_AMOUNT = 5
export const REFERRAL_REWARD = 70

// Crypto wallet addresses for demo deposits (lowercase keys match deposit page)
export const CRYPTO_ADDRESSES = {
  btc: 'bc1qar0srrr7x9l9q3w5v3y5q3w5v3y5q3w5v3y5',
  eth: '0x742d35Cc6634C0532925a3b844Bc9e7595f2bD18',
  usdt: 'TXmCRpmJY7YqTmGmJXxJq3Jxq3JXxJq3JX',
  bnb: 'bnb1ar0srrr7x9l9q3w5v3y5q3w5v3y5q3w5v3y5',
  doge: 'D8x9l9q3w5v3y5q3w5v3y5q3w5v3y5q3w5v3y5',
  ltc: 'ltc1ar0srrr7x9l9q3w5v3y5q3w5v3y5q3w5v3y5',
}

export const BANK_DETAILS = {
  bankName: 'Prime Global Bank',
  accountName: 'PrimeLedger Systems',
  accountNumber: '1234567890',
}

export interface PlanInfo {
  key: string
  name: string
  amount: number
  regularAmount: number
}

export const PLAN_STARTER: PlanInfo = { key: 'starter', name: 'Starter Plan', amount: 30, regularAmount: 50 }
export const PLAN_GROWTH: PlanInfo = { key: 'growth', name: 'Growth Plan', amount: 50, regularAmount: 80 }
export const PLAN_PREMIUM: PlanInfo = { key: 'premium', name: 'Premium Plan', amount: 100, regularAmount: 150 }
export const PLAN_STARTER_REGULAR: PlanInfo = { key: 'starter', name: 'Starter Plan', amount: 50, regularAmount: 50 }
export const PLAN_GROWTH_REGULAR: PlanInfo = { key: 'growth', name: 'Growth Plan', amount: 80, regularAmount: 80 }
export const PLAN_PREMIUM_REGULAR: PlanInfo = { key: 'premium', name: 'Premium Plan', amount: 150, regularAmount: 150 }
