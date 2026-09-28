'use client'

import { useRouter } from 'next/navigation'
import { Lock, Linkedin, MapPin, Calendar, GraduationCap, TrendingUp, CheckCircle2 } from 'lucide-react'

type SubscriptionTier = 'FREE' | 'BASIC' | 'PRO' | 'ENTERPRISE'

export interface CandidateCardProps {
  candidate: {
    id: string
    name: string
    company: string
    role: string
    ctc: number | null      // in LPA
    year: number            // passing year
    course: string
    university: string
    avatar: string | null
    isPlaced: boolean
    department?: string
    linkedIn?: string | null
  }
  subscriptionTier: SubscriptionTier
}

const TIER_ORDER: Record<SubscriptionTier, number> = {
  FREE: 0,
  BASIC: 1,
  PRO: 2,
  ENTERPRISE: 3,
}

/** Returns initials from a full name (max 2 chars) */
function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join('')
}

/** Maps company name to a consistent accent color */
function companyColor(company: string): string {
  const colors = [
    'bg-blue-500',
    'bg-emerald-500',
    'bg-violet-500',
    'bg-amber-500',
    'bg-rose-500',
    'bg-cyan-500',
    'bg-orange-500',
    'bg-pink-500',
  ]
  let hash = 0
  for (let i = 0; i < company.length; i++) hash = company.charCodeAt(i) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

export default function CandidateCard({ candidate, subscriptionTier }: CandidateCardProps) {
  const router = useRouter()
  const canSeeCTC = TIER_ORDER[subscriptionTier] >= TIER_ORDER['BASIC']
  const dot = companyColor(candidate.company)

  function handleClick() {
    router.push(`/candidates/${candidate.id}`)
  }

  function handleLinkedIn(e: React.MouseEvent) {
    e.stopPropagation()
    if (candidate.linkedIn) window.open(candidate.linkedIn, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`View profile of ${candidate.name}`}
      className="
        relative group cursor-pointer rounded-2xl
        bg-white/5 border border-white/10
        backdrop-blur-md
        p-5 flex flex-col gap-4
        transition-all duration-300 ease-out
        hover:-translate-y-1.5
        hover:border-blue-500/40
        hover:shadow-[0_8px_40px_rgba(59,130,246,0.18)]
        hover:bg-white/[0.07]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
      "
    >
      {/* ── Placed badge ── */}
      {candidate.isPlaced && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold uppercase tracking-wide">
          <CheckCircle2 className="w-3 h-3" />
          Placed
        </div>
      )}

      {/* ── Top: Avatar + name block ── */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          {candidate.avatar ? (
            <img
              src={candidate.avatar}
              alt={candidate.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-white/10 group-hover:border-blue-500/40 transition-colors duration-300"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center border-2 border-white/10 group-hover:border-blue-500/40 transition-colors duration-300">
              <span className="text-white font-bold text-lg select-none">
                {getInitials(candidate.name)}
              </span>
            </div>
          )}
          {/* Online-style glow ring on hover */}
          <span className="absolute inset-0 rounded-full ring-0 group-hover:ring-2 ring-blue-500/30 transition-all duration-300" />
        </div>

        {/* Name + company */}
        <div className="flex-1 min-w-0 pr-12">
          <h3 className="text-white font-semibold text-sm leading-tight truncate group-hover:text-blue-300 transition-colors duration-200">
            {candidate.name}
          </h3>
          <p className="text-white/50 text-xs mt-0.5 truncate">{candidate.role}</p>

          {/* Company pill */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
            <span className="text-white/70 text-xs font-medium truncate">{candidate.company}</span>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-white/[0.06]" />

      {/* ── Meta info ── */}
      <div className="grid grid-cols-2 gap-2">
        <MetaItem icon={<GraduationCap className="w-3.5 h-3.5" />} label={candidate.course} />
        <MetaItem icon={<Calendar className="w-3.5 h-3.5" />} label={`Class of ${candidate.year}`} />
        <MetaItem
          icon={<MapPin className="w-3.5 h-3.5" />}
          label={candidate.university}
          className="col-span-2"
        />
      </div>

      {/* ── CTC row ── */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
          {canSeeCTC && candidate.ctc !== null ? (
            <span className="text-amber-400 font-semibold text-sm">
              ₹{candidate.ctc} LPA
            </span>
          ) : candidate.ctc !== null ? (
            <span className="flex items-center gap-1 text-white/30 text-sm select-none">
              <Lock className="w-3 h-3" />
              <span className="blur-[3px] tracking-widest">9.9 LPA</span>
            </span>
          ) : (
            <span className="text-white/30 text-xs">CTC not disclosed</span>
          )}
        </div>

        {/* LinkedIn icon */}
        {candidate.linkedIn && (
          <button
            onClick={handleLinkedIn}
            aria-label={`${candidate.name}'s LinkedIn`}
            className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-600/40 hover:border-blue-500/40 transition-all duration-200"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* ── Bottom gradient accent line ── */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </article>
  )
}

function MetaItem({
  icon,
  label,
  className = '',
}: {
  icon: React.ReactNode
  label: string
  className?: string
}) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className="text-white/30 flex-shrink-0">{icon}</span>
      <span className="text-white/50 text-xs truncate">{label}</span>
    </div>
  )
}
