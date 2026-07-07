import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ success: true, data: { accessToken: 'demo-' + Math.random().toString(36).substring(2) } })
}