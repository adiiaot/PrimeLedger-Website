import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ success: true, data: { reference: 'PL-' + Date.now().toString(36).toUpperCase() } })
}