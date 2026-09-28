import { NextResponse } from 'next/server'
import { verifyRazorpaySignature } from '@/lib/razorpay'

export async function POST(req: Request) {
  try {
    const { orderId, paymentId, signature, tier } = await req.json()

    // If signature provided and secret configured, verify
    if (signature && process.env.RAZORPAY_KEY_SECRET && process.env.RAZORPAY_KEY_SECRET !== 'placeholder_secret') {
      const isValid = verifyRazorpaySignature(orderId, paymentId, signature)
      if (!isValid) {
        return NextResponse.json({ message: 'Invalid payment signature' }, { status: 400 })
      }
    }

    return NextResponse.json({
      success: true,
      message: `Tier upgraded to ${tier}`,
    })
  } catch (error: any) {
    console.error('API verify error:', error)
    return NextResponse.json({ message: 'Verification error' }, { status: 500 })
  }
}
