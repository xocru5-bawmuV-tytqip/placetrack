"use client";

import { useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  COMPANIES_DATA,
  PLACEMENTS_DATA,
  INTERVIEW_QUESTIONS_DATA,
  CompanyData,
} from "@/lib/placement-data";
import {
  Building2,
  MapPin,
  Globe,
  TrendingUp,
  Award,
  ChevronLeft,
  Sparkles,
  CheckCircle2,
  Clock,
  Briefcase,
  AlertCircle,
  HelpCircle,
  GraduationCap,
  ArrowRight,
  Linkedin,
} from "lucide-react";

export default function CompanyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Find company
  const company = useMemo(() => {
    return (
      COMPANIES_DATA.find((c) => c.slug === slug || c.id === slug) ||
      COMPANIES_DATA[0] // fallback to Google
    );
  }, [slug]);

  // Find placed students at this company
  const placedCandidates = useMemo(() => {
    return PLACEMENTS_DATA.filter((p) => p.companySlug === company.slug);
  }, [company]);

  // Find questions asked by this company
  const companyQuestions = useMemo(() => {
    return INTERVIEW_QUESTIONS_DATA.filter(
      (q) => q.company.toLowerCase() === company.name.toLowerCase()
    );
  }, [company]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 pb-14 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="mb-6">
            <Link
              href="/companies"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={14} /> Back to All Companies
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white p-2.5 border border-white/30 flex items-center justify-center text-3xl sm:text-4xl font-black text-white shadow-xl shadow-blue-500/10 shrink-0 overflow-hidden">
                {company.logo.startsWith('/') ? (
                  <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-slate-900 font-bold text-xl">{company.logo}</span>
                )}
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {company.sector}
                  </span>
                  {company.activeHiring && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Campus Recruitment
                    </span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  {company.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-slate-500" />
                    {company.hqLocation}
                  </span>
                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 underline"
                    >
                      <Globe size={14} /> Careers Page
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* SevenAI Mock Simulation CTA */}
            <div className="w-full md:w-auto">
              <Link
                href="/ai"
                className="btn-primary flex items-center justify-center gap-2 text-xs sm:text-sm px-5 py-3 w-full"
              >
                <Sparkles size={16} className="text-amber-400" />
                Simulate {company.name} Interview
              </Link>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <GlassCard glow glowColor="gold" padding="md" className="text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Peak Package</p>
              <p className="text-3xl font-extrabold gradient-text-gold">{company.highestCTC}</p>
              <p className="text-xs text-slate-500 mt-1">Campus Super Dream Offer</p>
            </GlassCard>

            <GlassCard glow glowColor="blue" padding="md" className="text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Average CTC</p>
              <p className="text-3xl font-extrabold text-blue-300">{company.avgCTC}</p>
              <p className="text-xs text-slate-500 mt-1">Fresh Graduate Entry</p>
            </GlassCard>

            <GlassCard padding="md" className="text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Eligibility Criteria</p>
              <p className="text-2xl font-extrabold text-emerald-400">
                {company.eligibility.minCGPA} CGPA
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {company.eligibility.backlogsAllowed ? "Backlogs Permitted" : "No Active Backlogs"}
              </p>
            </GlassCard>

            <GlassCard padding="md" className="text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Hiring Rounds</p>
              <p className="text-2xl font-extrabold text-purple-300">
                {company.selectionRounds.length} Stages
              </p>
              <p className="text-xs text-slate-500 mt-1">Online &amp; In-Person</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container py-12 space-y-12">
        {/* Overview & Roles */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Building2 className="text-blue-400" /> About {company.name} Campus Hiring
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {company.overview}
            </p>

            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Eligible Academic Branches:
              </h3>
              <div className="flex flex-wrap gap-2">
                {company.eligibility.branches.map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-semibold"
                  >
                    B.Tech {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Roles Card */}
          <GlassCard padding="md" className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Briefcase size={18} className="text-purple-400" /> Engineering Roles Offered
            </h3>
            <div className="space-y-2">
              {company.roles.map((r, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200 font-medium flex items-center justify-between"
                >
                  <span>{r}</span>
                  <span className="text-[10px] text-emerald-400 font-bold">Full-Time</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Step-by-Step Selection Process */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Award className="text-emerald-400" /> Step-by-Step Selection Process ({company.selectionRounds.length} Rounds)
            </h2>
            <p className="text-xs text-slate-400">
              Verified evaluation stages from recent on-campus recruitment cycles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {company.selectionRounds.map((round) => (
              <GlassCard key={round.roundNumber} padding="md" glow glowColor="blue">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-extrabold bg-blue-600 text-white shadow-sm">
                    Round {round.roundNumber}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={12} className="text-amber-400" /> {round.duration}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mt-2 mb-1">{round.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {round.description}
                </p>

                <div className="pt-2 border-t border-white/5 space-y-1">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    Core Focus Topics:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {round.focusAreas.map((fa, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-blue-300 font-medium"
                      >
                        {fa}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Real Interview Questions Asked at this Company */}
        {companyQuestions.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="text-amber-400" /> Recent {company.name} Interview Questions
              </h2>
              <Link
                href="/questions"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                Full Question Bank <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {companyQuestions.map((q) => (
                <GlassCard key={q.id} padding="md">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 text-amber-300 border border-white/10">
                      {q.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{q.round}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2">{q.title}</h4>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-3">
                    {q.question}
                  </p>
                  <Link
                    href="/questions"
                    className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                  >
                    View Verified Solution <ArrowRight size={12} />
                  </Link>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* Placed Students at this Company */}
        {placedCandidates.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="text-blue-400" /> Placed Seniors at {company.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {placedCandidates.map((c) => (
                <GlassCard key={c.id} padding="sm" glow glowColor="blue">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                        {c.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-white text-xs truncate">{c.name}</p>
                        <p className="text-[10px] text-slate-400 truncate">{c.university}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-bold text-emerald-400">₹{c.ctc} LPA</span>
                      {c.linkedIn && (
                        <a
                          href={c.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg bg-[#0A66C2]/20 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white flex items-center justify-center transition-all duration-200 border border-[#0A66C2]/30"
                          title={`Connect with ${c.name} on LinkedIn`}
                        >
                          <Linkedin size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
