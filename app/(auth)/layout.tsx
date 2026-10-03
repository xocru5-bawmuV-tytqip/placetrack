import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    template: '%s | PlaceTrack',
    default: 'PlaceTrack — Placement Intelligence Platform',
  },
  description:
    'PlaceTrack by Poornima University — Track placements, connect with companies, and accelerate your career with SevenAI.',
}

function AuthBranding() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#060913] via-[#0d1630] to-[#152347] border-r border-slate-800 p-12 flex flex-col justify-between relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

      {/* Header Logo */}
      <div className="relative z-10">
        <Link href="/" className="inline-flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white p-1 border border-white/20 flex items-center justify-center shadow-lg shadow-blue-500/30 overflow-hidden shrink-0">
            <img src="/images/logos/poornima-royal.png" alt="Poornima Group" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-white">Poornima PlaceTrack</span>
            <span className="block text-[11px] text-blue-400 font-semibold">Poornima Group of Colleges</span>
          </div>
        </Link>
      </div>

      {/* Main Pitch */}
      <div className="relative z-10 space-y-6 my-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
          🎓 Official Poornima Placement Portal
        </div>
        <h2 className="text-3xl xl:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Where Poornima Students Crack <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
            Dream Placements.
          </span>
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-md">
          Explore authentic placement records, senior capstone projects, recruiter drives, and AI interview simulation across Poornima University, PCE, and PIET.
        </p>

        {/* Featured Placement Card */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 shadow-2xl backdrop-blur-xl max-w-md space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 font-bold flex items-center justify-center text-white text-xs shadow-md">
                AA
              </div>
              <div>
                <div className="font-bold text-xs text-white">Aanchal Asnani</div>
                <div className="text-[11px] text-slate-400">Amazon India • SDE</div>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              ₹44.10 LPA
            </span>
          </div>
          <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800 flex items-center justify-between">
            <span>Poornima College of Engg. (PCE)</span>
            <span className="text-blue-400 font-medium">B.Tech CSE</span>
          </div>
        </div>
      </div>

      {/* Bottom Metrics */}
      <div className="relative z-10 grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
        <div>
          <div className="text-xl font-bold text-white">5,000+</div>
          <div className="text-[11px] text-slate-400">Offers Generated</div>
        </div>
        <div>
          <div className="text-xl font-bold text-white">350+</div>
          <div className="text-[11px] text-slate-400">Recruiters</div>
        </div>
        <div>
          <div className="text-xl font-bold text-amber-400">₹52.83 LPA</div>
          <div className="text-[11px] text-slate-400">Peak CTC</div>
        </div>
      </div>
    </div>
  )
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex bg-[#060913] text-slate-100">
      {/* Left: Branding Panel (hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 xl:w-[52%]">
        <AuthBranding />
      </div>

      {/* Right: Form Panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-12 relative">
        <div className="relative z-10 w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}
