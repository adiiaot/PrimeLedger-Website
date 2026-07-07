import { NextResponse } from 'next/server'
import { DEMO_USER } from '@/lib/mock-data'

export async function GET() {
  return NextResponse.json({ success: true, data: [DEMO_USER] })
}