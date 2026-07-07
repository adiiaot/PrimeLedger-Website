import { NextResponse } from 'next/server'
import { PLAN_STARTER, PLAN_GROWTH, PLAN_PREMIUM, PLAN_STARTER_REGULAR, PLAN_GROWTH_REGULAR, PLAN_PREMIUM_REGULAR } from '@/lib/constants'

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      active: true,
      remainingMs: 172800000,
      endDate: new Date(Date.now() + 172800000).toISOString(),
      discounts: {
        starter: { original: PLAN_STARTER_REGULAR.amount, current: PLAN_STARTER.amount, discountPercent: Math.round((1 - PLAN_STARTER.amount / PLAN_STARTER_REGULAR.amount) * 100) },
        growth: { original: PLAN_GROWTH_REGULAR.amount, current: PLAN_GROWTH.amount, discountPercent: Math.round((1 - PLAN_GROWTH.amount / PLAN_GROWTH_REGULAR.amount) * 100) },
        premium: { original: PLAN_PREMIUM_REGULAR.amount, current: PLAN_PREMIUM.amount, discountPercent: Math.round((1 - PLAN_PREMIUM.amount / PLAN_PREMIUM_REGULAR.amount) * 100) },
      },
      effectivePlans: [PLAN_STARTER, PLAN_GROWTH, PLAN_PREMIUM],
    },
  })
}