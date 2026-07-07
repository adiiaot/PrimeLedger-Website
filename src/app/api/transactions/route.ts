import { NextResponse } from 'next/server'
import { getDemoTransactions } from '@/lib/mock-data'

export async function GET() {
  return NextResponse.json({ success: true, data: getDemoTransactions() })
}