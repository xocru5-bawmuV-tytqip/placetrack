"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { UNIVERSITIES_DATA, UniversityData } from "@/lib/placement-data";
import {
  GraduationCap,
  Search,
  MapPin,
  TrendingUp,
  Building2,
  Award,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Trophy,
} from "lucide-react";

export default function UniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES_DATA.filter((uni) => {
      const matchesSearch =
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.topCompany.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        selectedType === "all" || uni.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide uppercase">
              <GraduationCap size={14} className="text-blue-400" />
              Verified Institutional Database
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Compare <span className="gradient-text">University Placements</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore authentic campus placement statistics, branch-wise salary distributions, NIRF rankings, and recruiter trends across premier universities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Section */}
      <section className="section-container py-12">
        {/* Search & Type Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          {/* Search Box */}
          <div className="relative w-full sm:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by university name, city, or recruiter..."
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

          {/* Type Selector Tabs */}
          <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10 w-full sm:w-auto">
            {["all", "private", "government", "deemed"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all flex-1 sm:flex-initial ${
                  selectedType === type
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {type === "all" ? "All Types" : type}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="text-xs text-slate-400 mb-6">
          Showing <strong className="text-white">{filteredUniversities.length}</strong> accredited universities
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredUniversities.map((uni, idx) => (
              <motion.div
                key={uni.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Link href={`/universities/${uni.slug}`} className="block h-full">
                  <GlassCard
                    hover
                    glow
                    glowColor="blue"
                    padding="md"
                    className="h-full flex flex-col justify-between group border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-700/30 border border-blue-500/30 flex items-center justify-center text-lg font-black text-blue-300 shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                          {uni.logo}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-white/5 text-slate-300 border border-white/10">
                              {uni.type}
                            </span>
                            {uni.nirfRank && (
                              <span className="text-[10px] text-amber-300 font-semibold truncate">
                                {uni.nirfRank}
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-white text-lg leading-snug group-hover:text-blue-400 transition-colors mt-1">
                            {uni.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                            <MapPin size={12} className="text-slate-500 shrink-0" />
                            <span className="truncate">{uni.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                        {uni.description}
                      </p>

                      {/* 2x2 Metric Grid */}
                      <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider">Highest CTC</p>
                          <p className="text-sm font-bold gradient-text-gold">{uni.highestCTC}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider">Average CTC</p>
                          <p className="text-sm font-bold text-emerald-400">{uni.avgCTC}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider">Placement Rate</p>
                          <p className="text-sm font-bold text-white">{uni.placementRate}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider">Recruiters</p>
                          <p className="text-sm font-bold text-blue-300">{uni.companies}+</p>
                        </div>
                      </div>

                      {/* Top Recruiters Tags */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                          Key Recruiters:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {uni.topRecruiters.slice(0, 4).map((r, rIdx) => (
                            <span
                              key={rIdx}
                              className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-300 border border-white/5"
                            >
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Button */}
                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-blue-400 group-hover:text-blue-300 font-semibold">
                      <span>View Detailed Placement Analytics</span>
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
