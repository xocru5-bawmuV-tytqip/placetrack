"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { COMPANIES_DATA, CompanyData } from "@/lib/placement-data";
import {
  Building2,
  Search,
  MapPin,
  TrendingUp,
  Briefcase,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<string>("all");

  const sectors = useMemo(() => {
    return ["all", ...Array.from(new Set(COMPANIES_DATA.map((c) => c.sector)))];
  }, []);

  const filteredCompanies = useMemo(() => {
    return COMPANIES_DATA.filter((comp) => {
      const matchesSearch =
        comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.roles.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesSector =
        selectedSector === "all" || comp.sector === selectedSector;

      return matchesSearch && matchesSector;
    });
  }, [searchQuery, selectedSector]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide uppercase">
              <Building2 size={14} className="text-blue-400" />
              Corporate Hiring Directory
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Recruiting <span className="gradient-text">Companies</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore tier-1 product enterprises, fintech startups, and IT consultancy giants actively visiting Poornima University and partner campuses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-container py-12">
        {/* Search & Sector Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full sm:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search companies by name, sector, or role..."
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

          {/* Sector Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSector === sec
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {sec === "all" ? "All Sectors" : sec}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="text-xs text-slate-400 mb-6">
          Showing <strong className="text-white">{filteredCompanies.length}</strong> top recruiting partners
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCompanies.map((company, idx) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Link href={`/companies/${company.slug}`} className="block h-full">
                  <GlassCard
                    hover
                    glow
                    glowColor="blue"
                    padding="md"
                    className="h-full flex flex-col justify-between group border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/30 border border-blue-500/30 flex items-center justify-center text-lg font-black text-white shadow-inner group-hover:scale-105 transition-transform">
                            {company.logo}
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-lg leading-tight group-hover:text-blue-400 transition-colors">
                              {company.name}
                            </h3>
                            <span className="text-xs text-slate-400">{company.sector}</span>
                          </div>
                        </div>

                        {company.activeHiring && (
                          <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Hiring
                          </span>
                        )}
                      </div>

                      {/* Overview */}
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                        {company.overview}
                      </p>

                      {/* Compensation Metric Bar */}
                      <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider">Average CTC</p>
                          <p className="text-sm font-bold text-emerald-400">{company.avgCTC}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider">Peak Package</p>
                          <p className="text-sm font-bold gradient-text-gold">{company.highestCTC}</p>
                        </div>
                      </div>

                      {/* Roles Offered */}
                      <div className="space-y-1.5 mb-4">
                        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                          Key Campus Profiles:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {company.roles.slice(0, 3).map((r, rIdx) => (
                            <span
                              key={rIdx}
                              className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-300 border border-white/5"
                            >
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Selection Process Overview */}
                      <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <Briefcase size={12} className="text-blue-400" />
                        <span>{company.selectionRounds.length} Evaluation Rounds</span>
                        <span className="text-slate-600">·</span>
                        <span>Min {company.eligibility.minCGPA} CGPA</span>
                      </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-blue-400 group-hover:text-blue-300 font-semibold">
                      <span>View Rounds &amp; Prep Guide</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
