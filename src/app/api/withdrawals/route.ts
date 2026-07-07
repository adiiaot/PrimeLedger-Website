import { NextResponse } from 'next/server'
import { getDemoWithdrawals } from '@/lib/mock-data'

export async function GET() {
  return NextResponse.json({ success: true, data: getDemoWithdrawals() })
}
export async function POST() {
  return NextResponse.json({ success: true, data: { id: 'wd-new', status: 'PENDING' } })
}