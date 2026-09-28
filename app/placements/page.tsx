"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  PLACEMENTS_DATA,
  UNIVERSITIES_DATA,
  COMPANIES_DATA,
  CandidatePlacement,
} from "@/lib/placement-data";
import {
  Search,
  Building2,
  GraduationCap,
  Sparkles,
  TrendingUp,
  MapPin,
  Calendar,
  Filter,
  CheckCircle2,
  ArrowUpDown,
  Code2,
  FolderGit2,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";

export default function PlacementsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [minCTC, setMinCTC] = useState<number>(0);
  const [sortBy, setSortBy] = useState<"ctc-desc" | "ctc-asc" | "year-desc" | "name">("ctc-desc");

  // Filtering logic
  const filteredPlacements = useMemo(() => {
    return PLACEMENTS_DATA.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesUni =
        selectedUniversity === "all" || item.universitySlug === selectedUniversity;

      const matchesComp =
        selectedCompany === "all" || item.companySlug === selectedCompany;

      const matchesYear =
        selectedYear === "all" || item.year.toString() === selectedYear;

      const matchesCTC = item.ctc >= minCTC;

      return matchesSearch && matchesUni && matchesComp && matchesYear && matchesCTC;
    }).sort((a, b) => {
      if (sortBy === "ctc-desc") return b.ctc - a.ctc;
      if (sortBy === "ctc-asc") return a.ctc - b.ctc;
      if (sortBy === "year-desc") return b.year - a.year;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [searchQuery, selectedUniversity, selectedCompany, selectedYear, minCTC, sortBy]);

  // Aggregate stats
  const totalOffers = PLACEMENTS_DATA.length;
  const highestPackage = Math.max(...PLACEMENTS_DATA.map((p) => p.ctc));
  const avgPackage = (
    PLACEMENTS_DATA.reduce((acc, curr) => acc + curr.ctc, 0) / totalOffers
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles size={13} className="text-amber-400" />
              Verified Placement Intelligence
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Explore <span className="gradient-text">Placement Records</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Transparent, student-verified placement records, CTC packages, engineering roles, and capstone projects from Poornima University and premier institutions.
            </p>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          >
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">₹{highestPackage} LPA</p>
              <p className="text-xs text-slate-400 mt-1">Highest Package</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-emerald-400">₹{avgPackage} LPA</p>
              <p className="text-xs text-slate-400 mt-1">Average Top CTC</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-amber-300">210+</p>
              <p className="text-xs text-slate-400 mt-1">Recruiters Visited</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-400">100%</p>
              <p className="text-xs text-slate-400 mt-1">Verified Placements</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content & Filters */}
      <section className="section-container py-12">
        {/* Search & Filter Toolbar */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search candidates by name, company, role, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 text-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50 appearance-none pr-8 cursor-pointer"
                >
                  <option value="ctc-desc" className="bg-[#0A0F1E]">Package: Highest First</option>
                  <option value="ctc-asc" className="bg-[#0A0F1E]">Package: Lowest First</option>
                  <option value="year-desc" className="bg-[#0A0F1E]">Graduation Year</option>
                  <option value="name" className="bg-[#0A0F1E]">Candidate Name</option>
                </select>
                <ArrowUpDown
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* University Filter */}
            <select
              value={selectedUniversity}
              onChange={(e) => setSelectedUniversity(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-blue-500/50"
            >
              <option value="all" className="bg-[#0A0F1E]">All Universities</option>
              {UNIVERSITIES_DATA.map((u) => (
                <option key={u.slug} value={u.slug} className="bg-[#0A0F1E]">
                  {u.name}
                </option>
              ))}
            </select>

            {/* Company Filter */}
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-blue-500/50"
            >
              <option value="all" className="bg-[#0A0F1E]">All Companies</option>
              {COMPANIES_DATA.map((c) => (
                <option key={c.slug} value={c.slug} className="bg-[#0A0F1E]">
                  {c.name}
                </option>
              ))}
            </select>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 focus:outline-none focus:border-blue-500/50"
            >
              <option value="all" className="bg-[#0A0F1E]">All Years</option>
              <option value="2024" className="bg-[#0A0F1E]">2024 Batch</option>
              <option value="2023" className="bg-[#0A0F1E]">2023 Batch</option>
            </select>

            {/* CTC Range Filter */}
            <div className="flex items-center gap-1.5">
              {[
                { label: "All CTC", value: 0 },
                { label: "₹10+ LPA", value: 10 },
                { label: "₹20+ LPA", value: 20 },
                { label: "₹30+ LPA", value: 30 },
              ].map((tier) => (
                <button
                  key={tier.value}
                  onClick={() => setMinCTC(tier.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    minCTC === tier.value
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>

            {/* Clear Filters Button */}
            {(selectedUniversity !== "all" ||
              selectedCompany !== "all" ||
              selectedYear !== "all" ||
              minCTC > 0 ||
              searchQuery) && (
              <button
                onClick={() => {
                  setSelectedUniversity("all");
                  setSelectedCompany("all");
                  setSelectedYear("all");
                  setMinCTC(0);
                  setSearchQuery("");
                }}
                className="text-xs text-red-400 hover:text-red-300 underline ml-auto"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <span>
            Showing <strong className="text-white">{filteredPlacements.length}</strong> verified student placement offers
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 size={13} /> Official Campus Placement Cell Audited
          </span>
        </div>

        {/* Placements Cards Grid */}
        {filteredPlacements.length === 0 ? (
          <div className="text-center py-20 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
            <p className="text-xl font-bold text-slate-300">No placements match your criteria</p>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Try adjusting your package filter or search term to discover placed students.
            </p>
            <button
              onClick={() => {
                setSelectedUniversity("all");
                setSelectedCompany("all");
                setMinCTC(0);
                setSearchQuery("");
              }}
              className="btn-primary text-xs px-5 py-2.5"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPlacements.map((candidate, idx) => (
                <motion.div
                  key={candidate.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                >
                  <GlassCard
                    glow
                    glowColor={candidate.ctc >= 30 ? "gold" : "blue"}
                    padding="md"
                    className="h-full flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center font-bold text-white text-base shadow-md">
                            {candidate.avatar}
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-base leading-tight group-hover:text-blue-300 transition-colors">
                              {candidate.name}
                            </h3>
                            <p className="text-xs text-slate-400 mt-0.5">{candidate.branch}</p>
                          </div>
                        </div>

                        {/* CTC Badge */}
                        <div className="text-right">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-lg text-xs font-extrabold ${
                              candidate.ctc >= 30
                                ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                                : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            }`}
                          >
                            ₹{candidate.ctc} LPA
                          </span>
                        </div>
                      </div>

                      {/* Recruiter & Role Row */}
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5 mb-4">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <Building2 size={13} className="text-blue-400" />
                            Recruiter
                          </span>
                          <span className="font-semibold text-white">{candidate.company}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <Code2 size={13} className="text-purple-400" />
                            Designation
                          </span>
                          <span className="font-medium text-slate-200">{candidate.role}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-400 flex items-center gap-1.5">
                            <GraduationCap size={13} className="text-amber-400" />
                            Institution
                          </span>
                          <span className="text-slate-300 font-medium truncate max-w-[170px]">
                            {candidate.university}
                          </span>
                        </div>
                      </div>

                      {/* Project Highlight */}
                      {candidate.projectTitle && (
                        <div className="mb-4 space-y-1">
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                            <FolderGit2 size={12} className="text-emerald-400" />
                            Capstone Project:
                          </div>
                          <p className="text-xs text-slate-300 font-medium line-clamp-1">
                            {candidate.projectTitle}
                          </p>
                          <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                            {candidate.projectDescription}
                          </p>
                        </div>
                      )}

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {candidate.skills.slice(0, 4).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {candidate.skills.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-500 font-medium">
                            +{candidate.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={11} className="text-slate-500" />
                        <span>{candidate.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400 font-medium">
                        <CheckCircle2 size={12} /> Verified Offer ({candidate.year})
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* AI Assistant Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-amber-900/20 border border-white/10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold">
            <Sparkles size={13} />
            Ask SevenAI Placement Intelligence
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Want to Know How to Crack Google or Microsoft at Poornima?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our AI analyzes past questions, capstone projects, and round-wise evaluation criteria of placed seniors.
          </p>
          <div className="pt-2">
            <Link href="/ai" className="btn-primary text-sm px-6 py-3">
              Chat with SevenAI
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
