"use client";

import { useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  UNIVERSITIES_DATA,
  PLACEMENTS_DATA,
  UniversityData,
} from "@/lib/placement-data";
import {
  GraduationCap,
  MapPin,
  Building2,
  TrendingUp,
  Globe,
  Award,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  Sparkles,
  Users,
  Trophy,
  ArrowRight,
  FolderGit2,
  Linkedin,
} from "lucide-react";

export default function UniversityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Find university by slug or id
  const uni = useMemo(() => {
    return (
      UNIVERSITIES_DATA.find((u) => u.slug === slug || u.id === slug) ||
      UNIVERSITIES_DATA[0] // fallback to Poornima if slug not exact
    );
  }, [slug]);

  // Find placed students from this university
  const placedStudents = useMemo(() => {
    return PLACEMENTS_DATA.filter(
      (p) => p.universitySlug === uni.slug || p.university.toLowerCase().includes(uni.name.toLowerCase())
    );
  }, [uni]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">
      <Navbar />

      {/* University Header Hero */}
      <section className="relative pt-28 pb-14 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Link
              href="/universities"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={14} /> Back to All Universities
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white p-2.5 border border-white/30 flex items-center justify-center text-3xl sm:text-4xl font-black text-blue-300 shadow-xl shadow-blue-500/10 shrink-0 overflow-hidden">
                {uni.logo.startsWith('/') ? (
                  <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-slate-900 font-bold text-xl">{uni.logo}</span>
                )}
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {uni.type} University
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                    Est. {uni.established}
                  </span>
                  {uni.nirfRank && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/15 text-amber-300 border border-amber-400/25">
                      {uni.nirfRank}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  {uni.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-slate-500" />
                    {uni.location}
                  </span>
                  {uni.website && (
                    <a
                      href={uni.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 underline"
                    >
                      <Globe size={14} /> Official Portal
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Quick SevenAI Action */}
            <div className="w-full md:w-auto">
              <Link
                href="/ai"
                className="btn-primary flex items-center justify-center gap-2 text-xs sm:text-sm px-5 py-3 w-full"
              >
                <Sparkles size={16} className="text-amber-400" />
                Ask SevenAI About {uni.shortName}
              </Link>
            </div>
          </div>

          {/* 4 Big KPI Metric Banners */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <GlassCard glow glowColor="gold" padding="md" className="text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                <Trophy size={13} className="text-amber-400" /> Highest CTC
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold gradient-text-gold">{uni.highestCTC}</p>
              <p className="text-xs text-slate-500 mt-1">Offered by {uni.topCompany}</p>
            </GlassCard>

            <GlassCard glow glowColor="blue" padding="md" className="text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                <TrendingUp size={13} className="text-blue-400" /> Average Package
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-300">{uni.avgCTC}</p>
              <p className="text-xs text-slate-500 mt-1">Across All Departments</p>
            </GlassCard>

            <GlassCard padding="md" className="text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                <Users size={13} className="text-emerald-400" /> Students Placed
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400">
                {uni.placed.toLocaleString()}+
              </p>
              <p className="text-xs text-slate-500 mt-1">{uni.placementRate} Placement Ratio</p>
            </GlassCard>

            <GlassCard padding="md" className="text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                <Building2 size={13} className="text-purple-400" /> Recruiters Visited
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold text-purple-300">{uni.companies}+</p>
              <p className="text-xs text-slate-500 mt-1">Campus Placement Drives</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="section-container py-12 space-y-12">
        {/* About & Accreditation */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="text-blue-400" /> Placement &amp; Academic Overview
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {uni.description}
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <Award className="text-amber-400 shrink-0" size={24} />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Accreditation &amp; Approvals</p>
                <p className="text-xs text-slate-300">{uni.accreditation}</p>
              </div>
            </div>
          </div>

          {/* Top Recruiters Card */}
          <GlassCard padding="md" className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Building2 size={18} className="text-purple-400" /> Top Recruiting Partners
            </h3>
            <div className="flex flex-wrap gap-2">
              {uni.topRecruiters.map((r) => (
                <span
                  key={r}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 font-semibold"
                >
                  {r}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-500">
              Audited by Placement &amp; Training Cell (Corporate Relations Division).
            </p>
          </GlassCard>
        </div>

        {/* Department-wise Placement Breakdown */}
        {uni.departments && uni.departments.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="text-emerald-400" /> Department-Wise Placement Statistics
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-xs text-slate-400 uppercase tracking-wider border-b border-white/10">
                  <tr>
                    <th className="px-5 py-3.5">Department</th>
                    <th className="px-5 py-3.5">Code</th>
                    <th className="px-5 py-3.5">Average CTC</th>
                    <th className="px-5 py-3.5">Highest Package</th>
                    <th className="px-5 py-3.5">Placement Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  {uni.departments.map((dept, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-5 py-3.5 font-semibold text-white">{dept.name}</td>
                      <td className="px-5 py-3.5 text-xs text-slate-400">{dept.code}</td>
                      <td className="px-5 py-3.5 text-emerald-400 font-bold">{dept.avgCTC}</td>
                      <td className="px-5 py-3.5 gradient-text-gold font-bold">{dept.highestCTC}</td>
                      <td className="px-5 py-3.5 text-blue-300 font-semibold">{dept.placementRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Historical Year-over-Year Trends */}
        {uni.placementTrends && uni.placementTrends.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Calendar className="text-purple-400" /> Year-Over-Year Growth Trends
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {uni.placementTrends.map((trend) => (
                <div
                  key={trend.year}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-1"
                >
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                    {trend.year} Batch
                  </span>
                  <p className="text-xl font-bold text-white mt-2">{trend.placed} Placed</p>
                  <p className="text-xs text-emerald-400 font-medium">Avg: {trend.avgCTC}</p>
                  <p className="text-xs gradient-text-gold font-medium">Peak: {trend.highestCTC}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verified Placed Students from this University */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Users className="text-blue-400" /> Placed Alumni from {uni.shortName}
            </h2>
            <Link
              href="/placements"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              View All Placements <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placedStudents.slice(0, 6).map((student) => (
              <GlassCard key={student.id} padding="md" glow glowColor="blue">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                      {student.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{student.name}</h4>
                      <p className="text-xs text-slate-400">{student.branch}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-lg text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ₹{student.ctc} LPA
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.03] text-xs space-y-1 mb-3">
                  <p className="text-slate-300 font-medium">
                    🏢 {student.company} · <span className="text-slate-400">{student.role}</span>
                  </p>
                </div>

                {student.projectTitle && (
                  <div className="text-[11px] text-slate-400 line-clamp-1 mb-2">
                    📁 <em>{student.projectTitle}</em>
                  </div>
                )}

                {student.linkedIn && (
                  <div className="mb-3 pt-1">
                    <a
                      href={student.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2]/15 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#0A66C2]/30 text-xs font-semibold transition-all duration-200"
                    >
                      <Linkedin size={13} /> Connect on LinkedIn
                    </a>
                  </div>
                )}

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-emerald-400 font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} /> Verified Placement
                  </span>
                  <span className="text-slate-500">{student.year} Batch</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
