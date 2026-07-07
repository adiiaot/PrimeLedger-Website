import { NextResponse } from 'next/server'
import { DEMO_USER } from '@/lib/mock-data'

export async function POST() {
  return NextResponse.json({ success: true, data: { user: DEMO_USER, accessToken: 'demo-' + Math.random().toString(36).substring(2) } })
}