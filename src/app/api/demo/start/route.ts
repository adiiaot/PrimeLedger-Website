import { NextResponse } from 'next/server'
import { DEMO_USER, getDemoInvestments, getDemoTransactions, getDemoWithdrawals, getDemoTickets } from '@/lib/mock-data'

export async function POST() {
  return NextResponse.json({
    success: true,
    data: { user: DEMO_USER, investments: getDemoInvestments(), transactions: getDemoTransactions(), withdrawals: getDemoWithdrawals(), tickets: getDemoTickets() },
  })
}