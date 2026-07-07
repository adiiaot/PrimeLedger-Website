export interface DemoUser {
  id: string
  userCode: string
  fullName: string
  email: string
  role: string
  selectedPlan: string | null
  paidAmount: number | null
  walletBalance: number
  claimStreak: number
  lastBonusMilestone: number
  lastClaimDate: string | null
  lastRedeemedAt: string | null
  referralCount: number
  referralLink: string
}

export interface DemoInvestment {
  id: string
  planName: string
  principal: number
  status: string
  startDate: string
  earningsProgress: number
  redeemThreshold: number
  redeemable: boolean
  redeemed: boolean
}

export interface DemoTransaction {
  id: string
  type: string
  amount: number
  status: string
  description: string
  createdAt: string
}

export interface DemoWithdrawal {
  id: string
  amount: number
  bankName: string
  accountName: string
  accountNumber: string
  status: string
  createdAt: string
}

export interface DemoTicket {
  id: string
  category: string
  subject: string
  message: string
  status: string
  createdAt: string
}

export interface DashboardData {
  totalDeposits: number
  activeDeposit: number
  totalEarnings: number
  availableBalance: number
  pendingWithdrawals: number
  pendingWithdrawalAmount: number
  userCode: string
  fullName: string
  selectedPlan: string | null
  paidAmount: number | null
  referralCount: number
  referralLink: string
  walletBalance: number
  claimStreak: number
  lastBonusMilestone: number
  lastRedeemedAt: string | null
  redeemFrequencyDays: number
  recentRecharges: DemoInvestment[]
  pendingPayments: any[]
}

export const DEMO_USER: DemoUser = {
  id: 'demo-user-001',
  userCode: 'PL-DEMO01',
  fullName: 'Demo User',
  email: 'demo@primeledger.io',
  role: 'USER',
  selectedPlan: 'Growth Plan',
  paidAmount: 50,
  walletBalance: 450,
  claimStreak: 5,
  lastBonusMilestone: 0,
  lastClaimDate: new Date().toISOString(),
  lastRedeemedAt: null,
  referralCount: 2,
  referralLink: 'https://primeledger.vercel.app/register?ref=PL-DEMO01',
}

export function getDemoInvestments(): DemoInvestment[] {
  const now = new Date()
  const tenDaysAgo = new Date(now.getTime() - 10 * 86400000).toISOString()
  const threeDaysAgo = new Date(now.getTime() - 3 * 86400000).toISOString()
  return [
    {
      id: 'inv-001',
      planName: 'Starter Plan',
      principal: 30,
      status: 'RUNNING',
      startDate: tenDaysAgo,
      earningsProgress: 10,
      redeemThreshold: 100,
      redeemable: false,
      redeemed: false,
    },
    {
      id: 'inv-002',
      planName: 'Growth Plan',
      principal: 50,
      status: 'RUNNING',
      startDate: threeDaysAgo,
      earningsProgress: 3,
      redeemThreshold: 150,
      redeemable: false,
      redeemed: false,
    },
  ]
}

export function getDemoTransactions(): DemoTransaction[] {
  const now = new Date()
  const day = (i: number) => new Date(now.getTime() - i * 86400000).toISOString()
  return [
    { id: 'tx-01', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(0) },
    { id: 'tx-02', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(1) },
    { id: 'tx-03', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(2) },
    { id: 'tx-04', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(3) },
    { id: 'tx-05', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(4) },
    { id: 'tx-06', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(5) },
    { id: 'tx-07', type: 'INVESTMENT', amount: 30, status: 'COMPLETED', description: 'Starter Plan purchase', createdAt: day(10) },
    { id: 'tx-08', type: 'INVESTMENT', amount: 50, status: 'COMPLETED', description: 'Growth Plan purchase', createdAt: day(3) },
    { id: 'tx-09', type: 'PROFIT', amount: 70, status: 'COMPLETED', description: 'Referral reward - John D.', createdAt: day(6) },
    { id: 'tx-10', type: 'PROFIT', amount: 70, status: 'COMPLETED', description: 'Referral reward - Sarah K.', createdAt: day(4) },
    { id: 'tx-11', type: 'ADJUSTMENT', amount: 5, status: 'COMPLETED', description: 'Plan bonus', createdAt: day(3) },
    { id: 'tx-12', type: 'WITHDRAWAL', amount: 150, status: 'PENDING', description: 'Withdrawal request', createdAt: day(1) },
    { id: 'tx-13', type: 'PROFIT', amount: 70, status: 'COMPLETED', description: 'Streak bonus (14 days)', createdAt: day(14) },
    { id: 'tx-14', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(7) },
    { id: 'tx-15', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(8) },
    { id: 'tx-16', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(9) },
    { id: 'tx-17', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(10) },
    { id: 'tx-18', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(11) },
    { id: 'tx-19', type: 'PROFIT', amount: 30, status: 'COMPLETED', description: 'Daily task reward', createdAt: day(12) },
    { id: 'tx-20', type: 'REFERRAL', amount: 70, status: 'COMPLETED', description: 'Referral reward - Mike T.', createdAt: day(2) },
  ]
}

export function getDemoWithdrawals(): DemoWithdrawal[] {
  const now = new Date()
  return [
    {
      id: 'wd-001',
      amount: 150,
      bankName: 'Chase Bank',
      accountName: 'Demo User',
      accountNumber: '****1234',
      status: 'PENDING',
      createdAt: new Date(now.getTime() - 1 * 86400000).toISOString(),
    },
  ]
}

export function getDemoTickets(): DemoTicket[] {
  return [
    {
      id: 'tk-001',
      category: 'Technical',
      subject: 'How to upgrade my plan?',
      message: 'I want to upgrade from Starter to Growth plan. Please guide me.',
      status: 'CLOSED',
      createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
    },
  ]
}

export function getDemoDashboardData(): DashboardData {
  return {
    totalDeposits: 80,
    activeDeposit: 50,
    totalEarnings: 270,
    availableBalance: 450,
    pendingWithdrawals: 1,
    pendingWithdrawalAmount: 150,
    userCode: DEMO_USER.userCode,
    fullName: DEMO_USER.fullName,
    selectedPlan: DEMO_USER.selectedPlan,
    paidAmount: DEMO_USER.paidAmount,
    referralCount: DEMO_USER.referralCount,
    referralLink: DEMO_USER.referralLink,
    walletBalance: DEMO_USER.walletBalance,
    claimStreak: DEMO_USER.claimStreak,
    lastBonusMilestone: DEMO_USER.lastBonusMilestone,
    lastRedeemedAt: DEMO_USER.lastRedeemedAt,
    redeemFrequencyDays: 30,
    recentRecharges: getDemoInvestments(),
    pendingPayments: [],
  }
}
