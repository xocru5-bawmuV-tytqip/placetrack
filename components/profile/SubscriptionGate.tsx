'use client'

import { Lock, Zap, Crown, Building2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

type SubscriptionTier = 'FREE' | 'BASIC' | 'PRO' | 'ENTERPRISE'

interface SubscriptionGateProps {
  requiredTier: 'BASIC' | 'PRO' | 'ENTERPRISE'
  currentTier: SubscriptionTier
  feature: string
  className?: string
}

const TIER_CONFIG: Record<
  'BASIC' | 'PRO' | 'ENTERPRISE',
  {
    label: string
    color: string
    borderColor: string
    glowColor: string
    icon: React.ReactNode
    price: string
    perks: string[]
  }
> = {
  BASIC: {
    label: 'Basic',
    color: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    price: '₹99/mo',
    perks: ['Full candidate profiles', 'Project portfolios', 'Direct messaging'],
  },
  PRO: {
    label: 'Pro',
    color: 'from-amber-500/20 to-amber-600/10',
    borderColor: 'border-amber-500/30',
    glowColor: 'shadow-amber-500/20',
    icon: <Crown className="w-6 h-6 text-amber-400" />,
    price: '₹299/mo',
    perks: ['Resume downloads', 'CTC details', 'Priority AI access', 'Interview resources'],
  },
  ENTERPRISE: {
    label: 'Enterprise',
    color: 'from-purple-500/20 to-purple-600/10',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20',
    icon: <Building2 className="w-6 h-6 text-purple-400" />,
    price: 'Custom',
    perks: ['Bulk access', 'API integration', 'Dedicated support', 'Analytics dashboard'],
  },
}

const TIER_ORDER: Record<SubscriptionTier, number> = {
  FREE: 0,
  BASIC: 1,
  PRO: 2,
  ENTERPRISE: 3,
}

function hasAccess(current: SubscriptionTier, required: 'BASIC' | 'PRO' | 'ENTERPRISE'): boolean {
  return TIER_ORDER[current] >= TIER_ORDER[required]
}

export default function SubscriptionGate({
  requiredTier,
  currentTier,
  feature,
  className = '',
}: SubscriptionGateProps) {
  const router = useRouter()

  if (hasAccess(currentTier, requiredTier)) return null

  const config = TIER_CONFIG[requiredTier]

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-[220px] rounded-2xl overflow-hidden ${className}`}
    >
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-[#0A0F1E]/80 backdrop-blur-sm" />

      {/* Glassmorphism card */}
      <div
        className={`relative z-10 flex flex-col items-center gap-4 p-8 rounded-2xl border ${config.borderColor} bg-gradient-to-br ${config.color} backdrop-blur-md shadow-2xl ${config.glowColor} text-center max-w-sm mx-auto`}
      >
        {/* Lock + tier icon */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10">
          <Lock className="w-5 h-5 text-white/40 absolute -top-1 -right-1 z-10" />
          {config.icon}
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg leading-tight">
            Upgrade to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              {config.label}
            </span>
          </h3>
          <p className="text-white/60 text-sm mt-1">
            Unlock <span className="text-white/80 font-medium">{feature}</span> and more
          </p>
        </div>

        {/* Perks list */}
        <ul className="space-y-1 text-left w-full">
          {config.perks.map((perk) => (
            <li key={perk} className="flex items-center gap-2 text-white/70 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              {perk}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="flex flex-col items-center gap-2 w-full">
          <span className="text-white/50 text-xs">Starting at {config.price}</span>
          <button
            onClick={() => router.push('/subscription')}
            className="w-full py-2.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            Upgrade Now →
          </button>
        </div>
      </div>
    </div>
  )
}

/** Inline variant — wraps children with blurred overlay when locked */
export function SubscriptionGateOverlay({
  requiredTier,
  currentTier,
  feature,
  children,
}: SubscriptionGateProps & { children: React.ReactNode }) {
  const router = useRouter()

  if (hasAccess(currentTier, requiredTier)) return <>{children}</>

  const config = TIER_CONFIG[requiredTier]

  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* Render children blurred underneath */}
      <div className="pointer-events-none select-none filter blur-sm opacity-40 saturate-50">
        {children}
      </div>

      {/* Lock overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0F1E]/70 backdrop-blur-[2px] z-10">
        <div
          className={`flex flex-col items-center gap-3 p-6 rounded-2xl border ${config.borderColor} bg-gradient-to-br ${config.color} backdrop-blur-md shadow-2xl text-center`}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10">
            <Lock className="w-5 h-5 text-white/60" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              {config.label} plan required
            </p>
            <p className="text-white/50 text-xs mt-0.5">{feature}</p>
          </div>
          <button
            onClick={() => router.push('/subscription')}
            className="py-2 px-5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs font-semibold transition-all duration-200 shadow-md shadow-blue-500/30"
          >
            Upgrade to {config.label}
          </button>
        </div>
      </div>
    </div>
  )
}
