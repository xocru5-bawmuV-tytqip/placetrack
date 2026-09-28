'use client'

import { useState, useMemo } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {
  Search, SlidersHorizontal, ChevronLeft, ChevronRight,
  Users, Lock, X, Building2, GraduationCap, Calendar,
  TrendingUp, Linkedin, MapPin, Filter, ArrowUpDown
} from 'lucide-react'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

type SubscriptionTier = 'FREE' | 'BASIC' | 'PRO' | 'ENTERPRISE'

interface Candidate {
  id: string
  name: string
  company: string
  role: string
  ctc: number
  year: number
  course: string
  university: string
  avatar: string
  isPlaced: boolean
  location: string
  skills: string[]
}

// ─── Sample Data (20 candidates) ──────────────────────────────────────────────

const ALL_CANDIDATES: Candidate[] = [
  {
    id: '1', name: 'Arjun Sharma', company: 'Google', role: 'Software Engineer',
    ctc: 42.0, year: 2024, course: 'B.Tech CSE', university: 'Poornima University',
    avatar: 'AS', isPlaced: true, location: 'Bangalore',
    skills: ['React', 'Node.js', 'Python', 'System Design']
  },
  {
    id: '2', name: 'Priya Patel', company: 'Microsoft', role: 'SDE-1',
    ctc: 38.5, year: 2024, course: 'B.Tech CSE', university: 'Poornima University',
    avatar: 'PP', isPlaced: true, location: 'Hyderabad',
    skills: ['C++', 'Azure', 'TypeScript', 'Algorithms']
  },
  {
    id: '3', name: 'Amit Verma', company: 'Amazon', role: 'SDE-1',
    ctc: 35.0, year: 2024, course: 'B.Tech IT', university: 'Poornima University',
    avatar: 'AV', isPlaced: true, location: 'Bangalore',
    skills: ['Java', 'AWS', 'Microservices', 'DSA']
  },
  {
    id: '4', name: 'Sneha Gupta', company: 'Adobe', role: 'Member of Technical Staff',
    ctc: 32.0, year: 2024, course: 'B.Tech CSE', university: 'Poornima University',
    avatar: 'SG', isPlaced: true, location: 'Noida',
    skills: ['JavaScript', 'React', 'GraphQL', 'CSS']
  },
  {
    id: '5', name: 'Vikram Singh', company: 'TCS', role: 'Systems Engineer',
    ctc: 7.5, year: 2024, course: 'B.Tech CSE', university: 'Poornima University',
    avatar: 'VS', isPlaced: true, location: 'Mumbai',
    skills: ['Java', 'SQL', 'Agile', 'Testing']
  },
  {
    id: '6', name: 'Ananya Joshi', company: 'Infosys', role: 'Software Engineer',
    ctc: 6.8, year: 2024, course: 'B.Tech IT', university: 'Poornima University',
    avatar: 'AJ', isPlaced: true, location: 'Pune',
    skills: ['Python', 'Django', 'MySQL', 'Linux']
  },
  {
    id: '7', name: 'Rohan Mehta', company: 'Wipro', role: 'Project Engineer',
    ctc: 6.5, year: 2024, course: 'B.Tech CSE', university: 'Poornima University',
    avatar: 'RM', isPlaced: true, location: 'Bangalore',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Git']
  },
  {
    id: '8', name: 'Kavita Rao', company: 'Deloitte', role: 'Analyst',
    ctc: 12.0, year: 2024, course: 'B.Tech CSE', university: 'Poornima University',
    avatar: 'KR', isPlaced: true, location: 'Gurgaon',
    skills: ['SAP', 'Business Analysis', 'SQL', 'Excel']
  },
  {
    id: '9', name: 'Amit Tiwari', company: 'HCL', role: 'Software Engineer',
    ctc: 5.5, year: 2023, course: 'B.Tech ECE', university: 'Poornima University',
    avatar: 'AT', isPlaced: true, location: 'Noida',
    skills: ['Embedded C', 'VLSI', 'Python', 'IoT']
  },
  {
    id: '10', name: 'Nisha Agarwal', company: 'Tech Mahindra', role: 'Associate Engineer',
    ctc: 4.8, year: 2023, course: 'B.Tech IT', university: 'Poornima University',
    avatar: 'NA', isPlaced: true, location: 'Pune',
    skills: ['HTML/CSS', 'JavaScript', 'Angular', 'MongoDB']
  },
  {
    id: '11', name: 'Deepak Kumar', company: 'Google', role: 'Cloud Engineer',
    ctc: 28.0, year: 2023, course: 'B.Tech CSE', university: 'BITS Pilani',
    avatar: 'DK', isPlaced: true, location: 'Bangalore',
    skills: ['GCP', 'Kubernetes', 'Terraform', 'Go']
  },
  {
    id: '12', name: 'Sakshi Dubey', company: 'Microsoft', role: 'Program Manager',
    ctc: 30.0, year: 2023, course: 'B.Tech CSE', university: 'VIT University',
    avatar: 'SD', isPlaced: true, location: 'Hyderabad',
    skills: ['Product Management', 'SQL', 'Agile', 'UX Research']
  },
  {
    id: '13', name: 'Manish Yadav', company: 'Amazon', role: 'Data Engineer',
    ctc: 26.0, year: 2023, course: 'B.Tech CSE', university: 'Manipal University',
    avatar: 'MY', isPlaced: true, location: 'Bangalore',
    skills: ['Spark', 'Hadoop', 'Python', 'AWS Redshift']
  },
  {
    id: '14', name: 'Riya Sharma', company: 'HDFC Bank', role: 'Technology Analyst',
    ctc: 8.5, year: 2024, course: 'B.Tech IT', university: 'Poornima University',
    avatar: 'RS', isPlaced: true, location: 'Mumbai',
    skills: ['Java', 'Oracle', 'Banking Systems', 'SQL']
  },
  {
    id: '15', name: 'Karan Malhotra', company: 'Jio', role: 'Network Engineer',
    ctc: 9.0, year: 2024, course: 'B.Tech ECE', university: 'Poornima University',
    avatar: 'KM', isPlaced: true, location: 'Mumbai',
    skills: ['5G', 'Networking', 'Python', 'Cloud']
  },
  {
    id: '16', name: 'Pooja Sinha', company: 'EY', role: 'Technology Consultant',
    ctc: 11.5, year: 2024, course: 'B.Tech CSE', university: 'Amity University',
    avatar: 'PS', isPlaced: true, location: 'Gurgaon',
    skills: ['SAP', 'ABAP', 'Business Intelligence', 'Tableau']
  },
  {
    id: '17', name: 'Aditya Raj', company: 'Airtel', role: 'Software Developer',
    ctc: 8.0, year: 2023, course: 'B.Tech CSE', university: 'Poornima University',
    avatar: 'AR', isPlaced: true, location: 'Gurgaon',
    skills: ['React Native', 'Node.js', 'MongoDB', 'Firebase']
  },
  {
    id: '18', name: 'Meera Nair', company: 'KPMG', role: 'Associate Consultant',
    ctc: 10.0, year: 2024, course: 'MBA', university: 'Poornima University',
    avatar: 'MN', isPlaced: true, location: 'Mumbai',
    skills: ['Financial Analysis', 'Excel', 'PowerBI', 'Strategy']
  },
  {
    id: '19', name: 'Saurabh Pandey', company: 'Adobe', role: 'Frontend Developer',
    ctc: 22.0, year: 2023, course: 'B.Tech CSE', university: 'BITS Pilani',
    avatar: 'SP', isPlaced: true, location: 'Noida',
    skills: ['React', 'TypeScript', 'WebGL', 'Performance']
  },
  {
    id: '20', name: 'Tanvi Kapoor', company: 'TCS', role: 'Digital Engineer',
    ctc: 7.0, year: 2024, course: 'B.Tech IT', university: 'Poornima University',
    avatar: 'TK', isPlaced: true, location: 'Chennai',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL']
  },
]

const ITEMS_PER_PAGE = 8

const COMPANIES = Array.from(new Set(ALL_CANDIDATES.map(c => c.company))).sort()
const COURSES = Array.from(new Set(ALL_CANDIDATES.map(c => c.course))).sort()
const YEARS = Array.from(new Set(ALL_CANDIDATES.map(c => c.year))).sort((a, b) => b - a)
const UNIVERSITIES = Array.from(new Set(ALL_CANDIDATES.map(c => c.university))).sort()

// ─── Page Component ───────────────────────────────────────────────────────────

export default function CandidatesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // State
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCompany, setSelectedCompany] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedUniversity, setSelectedUniversity] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState<'name' | 'ctc' | 'year'>('ctc')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const tier: SubscriptionTier = (session?.user as any)?.subscriptionTier ?? 'FREE'

  // Filter + Sort + Paginate
  const filtered = useMemo(() => {
    let result = [...ALL_CANDIDATES]

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.skills.some(s => s.toLowerCase().includes(q))
      )
    }

    // Filters
    if (selectedCompany) result = result.filter(c => c.company === selectedCompany)
    if (selectedCourse) result = result.filter(c => c.course === selectedCourse)
    if (selectedYear) result = result.filter(c => c.year === parseInt(selectedYear))
    if (selectedUniversity) result = result.filter(c => c.university === selectedUniversity)

    // Sort
    result.sort((a, b) => {
      let cmp = 0
      if (sortBy === 'name') cmp = a.name.localeCompare(b.name)
      else if (sortBy === 'ctc') cmp = a.ctc - b.ctc
      else if (sortBy === 'year') cmp = a.year - b.year
      return sortOrder === 'desc' ? -cmp : cmp
    })

    return result
  }, [searchQuery, selectedCompany, selectedCourse, selectedYear, selectedUniversity, sortBy, sortOrder])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const paginated = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE)

  const activeFilterCount = [selectedCompany, selectedCourse, selectedYear, selectedUniversity].filter(Boolean).length

  function clearFilters() {
    setSelectedCompany('')
    setSelectedCourse('')
    setSelectedYear('')
    setSelectedUniversity('')
    setSearchQuery('')
    setCurrentPage(1)
  }

  function goToPage(page: number) {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function formatCTC(ctc: number): string {
    if (ctc >= 100) return `₹${(ctc / 100).toFixed(1)} Cr`
    return `₹${ctc.toFixed(1)} LPA`
  }

  // Loading
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-white/60 text-sm">Loading candidates...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* ── Header ── */}
      <div className="border-b border-white/10 bg-white/[0.02] backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Placed Candidates</h1>
                <p className="text-xs text-white/50">{filtered.length} candidates found</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
                  setCurrentPage(1)
                }}
                className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 hover:bg-white/10 transition flex items-center gap-1.5"
              >
                <ArrowUpDown className="w-3.5 h-3.5" />
                {sortBy === 'ctc' ? 'CTC' : sortBy === 'name' ? 'Name' : 'Year'} {sortOrder === 'desc' ? '↓' : '↑'}
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-3 py-2 rounded-lg border text-xs transition flex items-center gap-1.5 ${
                  showFilters || activeFilterCount > 0
                    ? 'bg-blue-500/20 border-blue-500/30 text-blue-400'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search by name, company, role, or skill..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition"
            />
            {searchQuery && (
              <button onClick={() => { setSearchQuery(''); setCurrentPage(1) }} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-white/40 hover:text-white/70" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Filters Panel ── */}
      {showFilters && (
        <div className="border-b border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/40 mb-1 block">Company</label>
                <select
                  value={selectedCompany}
                  onChange={(e) => { setSelectedCompany(e.target.value); setCurrentPage(1) }}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0A0F1E]">All Companies</option>
                  {COMPANIES.map(c => <option key={c} value={c} className="bg-[#0A0F1E]">{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/40 mb-1 block">Course</label>
                <select
                  value={selectedCourse}
                  onChange={(e) => { setSelectedCourse(e.target.value); setCurrentPage(1) }}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0A0F1E]">All Courses</option>
                  {COURSES.map(c => <option key={c} value={c} className="bg-[#0A0F1E]">{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/40 mb-1 block">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => { setSelectedYear(e.target.value); setCurrentPage(1) }}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0A0F1E]">All Years</option>
                  {YEARS.map(y => <option key={y} value={y.toString()} className="bg-[#0A0F1E]">{y}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-white/40 mb-1 block">University</label>
                <select
                  value={selectedUniversity}
                  onChange={(e) => { setSelectedUniversity(e.target.value); setCurrentPage(1) }}
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0A0F1E]">All Universities</option>
                  {UNIVERSITIES.map(u => <option key={u} value={u} className="bg-[#0A0F1E]">{u}</option>)}
                </select>
              </div>
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="mt-3 text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition"
              >
                <X className="w-3 h-3" /> Clear all filters
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Candidates Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {paginated.length === 0 ? (
          <div className="text-center py-20">
            <Users className="w-12 h-12 text-white/20 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white/60">No candidates found</h3>
            <p className="text-sm text-white/40 mt-1">Try adjusting your search or filters</p>
            <button onClick={clearFilters} className="mt-4 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 text-sm hover:bg-blue-500/30 transition">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginated.map((candidate) => (
              <Link
                key={candidate.id}
                href={`/candidates/${candidate.id}`}
                className="group block"
              >
                <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:bg-white/[0.08] hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 h-full">
                  {/* Placed Badge */}
                  {candidate.isPlaced && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-[10px] text-green-400 font-medium">Placed</span>
                    </div>
                  )}

                  {/* Avatar + Info */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {candidate.avatar}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-white text-sm group-hover:text-blue-400 transition truncate">
                        {candidate.name}
                      </h3>
                      <p className="text-xs text-white/50 truncate">{candidate.role}</p>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span className="text-xs text-white/70 font-medium">{candidate.company}</span>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3 h-3 text-white/30" />
                      <span className="text-[11px] text-white/50 truncate">{candidate.course}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-white/30" />
                      <span className="text-[11px] text-white/50">{candidate.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-white/30" />
                      <span className="text-[11px] text-white/50 truncate">{candidate.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3 text-amber-400" />
                      {tier === 'FREE' ? (
                        <span className="text-[11px] text-white/30 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" /> Hidden
                        </span>
                      ) : (
                        <span className="text-[11px] text-amber-400 font-semibold">{formatCTC(candidate.ctc)}</span>
                      )}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-white/50">
                        {skill}
                      </span>
                    ))}
                    {candidate.skills.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-white/40">
                        +{candidate.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage <= 1}
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition ${
                  page === safePage
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage >= totalPages}
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center gap-1"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Page Info */}
        <div className="mt-3 text-center text-xs text-white/30">
          Showing {(safePage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(safePage * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} candidates
          {tier === 'FREE' && (
            <span className="ml-2">
              · <Link href="/subscription" className="text-blue-400 hover:text-blue-300 transition">Upgrade</Link> to view CTC & full profiles
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
