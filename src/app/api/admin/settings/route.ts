import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ success: true, data: { bankName: 'Prime Global Bank', accountName: 'PrimeLedger Systems', accountNumber: '1234567890' } })
}