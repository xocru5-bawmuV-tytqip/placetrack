import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  Users, Building2, GraduationCap, TrendingUp,
  MessageSquare, Bot, Bell, ChevronRight, Star,
  ArrowUpRight, Briefcase, BookOpen
} from 'lucide-react'

async function getDashboardData(userId: string) {
  // In production this would use prisma queries
  return {
    totalPlaced: 5234,
    totalCompanies: 214,
    avgCTC: 8.4,
    highestCTC: 42,
    recentPlacements: [
      { name: 'Arjun Sharma', company: 'Google', ctc: 42, role: 'SDE-2', year: 2024, avatar: 'AS' },
      { name: 'Priya Verma', company: 'Microsoft', ctc: 38, role: 'Software Engineer', year: 2024, avatar: 'PV' },
      { name: 'Rohit Jain', company: 'Amazon', ctc: 32, role: 'SDE-1', year: 2024, avatar: 'RJ' },
      { name: 'Sneha Gupta', company: 'Adobe', ctc: 28, role: 'Frontend Engineer', year: 2024, avatar: 'SG' },
      { name: 'Karan Mehta', company: 'TCS', ctc: 7, role: 'System Engineer', year: 2024, avatar: 'KM' },
    ],
    topCompanies: [
      { name: 'TCS', placed: 89, avgCTC: 6.5 },
      { name: 'Infosys', placed: 67, avgCTC: 7.2 },
      { name: 'Wipro', placed: 54, avgCTC: 6.8 },
      { name: 'Google', placed: 3, avgCTC: 35 },
      { name: 'Microsoft', placed: 5, avgCTC: 32 },
    ],
  }
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/login')

  const data = await getDashboardData(session.user.id)

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">
              Welcome back, <span className="text-blue-400">{session.user.name?.split(' ')[0]}</span> 👋
            </h1>
            <p className="text-sm text-white/50">Poornima University Placement Portal</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <Bell className="w-5 h-5 text-white/70" />
            </button>
            <Link
              href="/ai"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all text-sm font-medium"
            >
              <Bot className="w-4 h-4" />
              Ask SevenAI
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Placed', value: data.totalPlaced.toLocaleString(), icon: Users, color: 'blue', change: '+12%' },
            { label: 'Companies Visited', value: data.totalCompanies, icon: Building2, color: 'purple', change: '+8%' },
            { label: 'Avg CTC', value: `₹${data.avgCTC} LPA`, icon: TrendingUp, color: 'green', change: '+5%' },
            { label: 'Highest CTC', value: `₹${data.highestCTC} LPA`, icon: Star, color: 'gold', change: 'Google 2024' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${
                  stat.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                  stat.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                  stat.color === 'green' ? 'bg-green-500/20 text-green-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Placements */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Recent Placements</h2>
              <Link href="/candidates" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {data.recentPlacements.map((p) => (
                <div key={p.name} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {p.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">{p.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <div className="text-sm text-white/50">{p.role} at {p.company}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-sm font-semibold text-green-400">₹{p.ctc} LPA</div>
                    <div className="text-xs text-white/30">{p.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            {/* Top Companies */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4">Top Recruiters</h2>
              <div className="space-y-3">
                {data.topCompanies.slice(0, 4).map((c) => (
                  <div key={c.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-blue-400">
                        {c.name[0]}
                      </div>
                      <span className="text-sm font-medium">{c.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/50">{c.placed} placed</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/companies" className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-sm text-white/70 hover:text-white transition-all">
                View all companies
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                {[
                  { href: '/ai', icon: Bot, label: 'Ask SevenAI', color: 'bg-blue-500/20 text-blue-400' },
                  { href: '/ai/interview', icon: BookOpen, label: 'Practice Interview', color: 'bg-purple-500/20 text-purple-400' },
                  { href: '/chat', icon: MessageSquare, label: 'Chat with Seniors', color: 'bg-green-500/20 text-green-400' },
                  { href: '/candidates', icon: Users, label: 'Browse Candidates', color: 'bg-orange-500/20 text-orange-400' },
                ].map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <action.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">{action.label}</span>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 ml-auto" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
