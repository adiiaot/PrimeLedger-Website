import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ success: true, data: { paymentReference: 'PL-' + Date.now().toString(36).toUpperCase() } })
}