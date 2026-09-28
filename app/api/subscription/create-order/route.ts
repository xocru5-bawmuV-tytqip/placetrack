import { NextResponse } from 'next/server'
import { razorpay, TIER_PRICING_PAISE } from '@/lib/razorpay'

export async function POST(req: Request) {
  try {
    const { tier } = await req.json()
    if (!tier || !['BASIC', 'PRO'].includes(tier)) {
      return NextResponse.json({ message: 'Invalid tier specified' }, { status: 400 })
    }

    const amount = TIER_PRICING_PAISE[tier as 'BASIC' | 'PRO']

    // Create order with Razorpay or fallback order ID for simulation
    let orderId = `order_${Date.now()}`
    try {
      if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_ID !== 'rzp_test_placeholder') {
        const order = await razorpay.orders.create({
          amount,
          currency: 'INR',
          receipt: `rcpt_${Date.now()}`,
        })
        orderId = order.id
      }
    } catch (e) {
      console.warn('Using simulation order ID')
    }

    return NextResponse.json({
      orderId,
      amount,
      currency: 'INR',
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
    })
  } catch (error: any) {
    console.error('API create-order error:', error)
    return NextResponse.json({ message: 'Error generating subscription order' }, { status: 500 })
  }
}
