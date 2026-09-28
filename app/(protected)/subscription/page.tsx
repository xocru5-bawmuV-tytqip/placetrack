'use client'

import { useState } from 'react'
import { Check, ShieldCheck, Sparkles, Lock, ArrowRight } from 'lucide-react'
import { SUBSCRIPTION_PLANS } from '@/lib/subscription'
import toast from 'react-hot-toast'

export default function SubscriptionPage() {
  const [loadingTier, setLoadingTier] = useState<string | null>(null)

  const handleSubscribe = async (tierId: string) => {
    if (tierId === 'FREE') {
      toast.success('You are already on the Free tier.')
      return
    }

    setLoadingTier(tierId)
    try {
      const res = await fetch('/api/subscription/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: tierId }),
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message || 'Failed to initialize order')
        return
      }

      // If Razorpay SDK is loaded
      if (typeof window !== 'undefined' && (window as any).Razorpay) {
        const options = {
          key: data.keyId,
          amount: data.amount,
          currency: 'INR',
          name: 'PlaceTrack',
          description: `${tierId} Placement Pass`,
          order_id: data.orderId,
          handler: async function (response: any) {
            const verifyRes = await fetch('/api/subscription/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                tier: tierId,
              }),
            })
            if (verifyRes.ok) {
              toast.success(`Successfully upgraded to ${tierId}!`)
              window.location.reload()
            } else {
              toast.error('Payment verification failed.')
            }
          },
          theme: { color: '#3B82F6' },
        }
        const rzp = new (window as any).Razorpay(options)
        rzp.open()
      } else {
        // Simulated checkout success for development/demo
        toast.success(`Order #${data.orderId} created! Simulated payment success.`)
      }
    } catch (err) {
      toast.error('Subscription checkout error')
    } finally {
      setLoadingTier(null)
    }
  }

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
            TRANSPARENT PRICING • POORNIMA UNIVERSITY
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Choose Your Placement Preparation Tier
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Gain full verified access to placed senior project source code, resume PDF downloads, and SevenAI mock interview simulator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 flex flex-col justify-between space-y-6 transition-all ${
                plan.popular
                  ? 'bg-slate-900 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 relative'
                  : 'bg-slate-900/80 border border-slate-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-base text-white">{plan.name}</h3>
                  <div className="text-3xl font-extrabold text-white mt-2">
                    ₹{plan.price}{' '}
                    <span className="text-xs text-slate-400 font-normal">/ {plan.interval}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">{plan.description}</p>
                </div>

                <div className="space-y-2.5 pt-2 text-xs">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Features included:</span>
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                  {plan.locked.map((l, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-500">
                      <Lock className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                      <span>{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSubscribe(plan.id)}
                disabled={loadingTier === plan.id}
                className={`w-full py-3 rounded-xl font-bold text-xs transition shadow-md flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-600/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                {plan.price === 0 ? 'Current Plan' : `Upgrade to ${plan.name}`}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-slate-800 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-slate-400">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted Payments via Razorpay</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Instant Tier Activation</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            <span>Cancel Anytime in Profile</span>
          </div>
        </div>
      </div>
    </div>
  )
}
