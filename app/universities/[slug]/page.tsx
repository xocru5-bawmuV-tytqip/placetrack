"use client";

import { useMemo, useState } from "react";
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
  Search,
  Filter,
  Briefcase,
  FileText,
  BookOpen,
  Check,
  Star,
  Zap,
  Phone,
  Mail,
  ShieldCheck,
  Compass,
} from "lucide-react";

export default function UniversityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<string>("ALL");
  const [visibleCount, setVisibleCount] = useState<number>(30);
  const [selectedReqCompany, setSelectedReqCompany] = useState<string>("ALL");

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

  // Filtered official offers (e.g. 109 companies)
  const filteredOffers = useMemo(() => {
    if (!uni.officialOffers) return [];
    return uni.officialOffers.filter((item) => {
      const matchesSearch = item.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTier = selectedTier === "ALL" || item.tier === selectedTier;
      return matchesSearch && matchesTier;
    });
  }, [uni.officialOffers, searchQuery, selectedTier]);

  // Filtered company requirements
  const companyReqs = useMemo(() => {
    if (!uni.companyRequirements) return [];
    if (selectedReqCompany === "ALL") return uni.companyRequirements;
    return uni.companyRequirements.filter((c) => c.company === selectedReqCompany);
  }, [uni.companyRequirements, selectedReqCompany]);

  return (
    <div className="min-h-screen bg-[#07172C] text-white overflow-x-hidden selection:bg-[#0066FF] selection:text-white">
      <Navbar />

      {/* University Header Hero */}
      <section className="relative pt-28 pb-16 border-b border-white/10 overflow-hidden bg-[#07172C]">
        {/* Real Campus Architectural Backdrop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-25 mix-blend-luminosity scale-105"
          style={{ backgroundImage: 'url("/images/poornima-campus-4k.jpg")' }}
        />
        {/* Dark Navy Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07172C] via-[#07172C]/85 to-[#07172C]/70 pointer-events-none" />

        <div className="section-container relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Link
              href="/universities"
              className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-white transition-colors"
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
                    {uni.type}
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
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {uni.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-blue-400" /> {uni.location}
                  </span>
                  <a
                    href={uni.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Globe size={13} /> {uni.website.replace("https://", "")}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/ai"
                className="px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                <Sparkles size={15} /> Ask SevenAI
              </Link>
              <Link
                href="/resources/resume"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs transition-all flex items-center gap-2"
              >
                <FileText size={15} className="text-blue-300" /> ATS Screener
              </Link>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-black text-white">{uni.placed}+</p>
              <p className="text-xs text-slate-400 uppercase font-semibold mt-1">Students Placed</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">{uni.avgCTC}</p>
              <p className="text-xs text-slate-400 uppercase font-semibold mt-1">Average Package</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">{uni.highestCTC}</p>
              <p className="text-xs text-slate-400 uppercase font-semibold mt-1">Peak Offer (Amazon)</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-black text-blue-400">{uni.companies} Drives</p>
              <p className="text-xs text-slate-400 uppercase font-semibold mt-1">Audited Recruiters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="section-container py-14 space-y-16">
        {/* ══════════════════════════════════════════════════════════════════
            1. REAL MARQUEE PLACEMENT STARS (Direct from poornima.edu.in/online)
        ══════════════════════════════════════════════════════════════════ */}
        {uni.marqueeOffers && uni.marqueeOffers.length > 0 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Trophy size={14} className="text-amber-400" /> Official Record Offers (poornima.edu.in)
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Top Placements &amp; Marquee Package Achievers
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Individual student recruitment milestones verified by Poornima University Central Placement Cell.
                </p>
              </div>

              <Link
                href="/placements"
                className="text-xs font-bold uppercase tracking-wider text-[#0066FF] hover:text-blue-300 flex items-center gap-1"
              >
                Browse All Candidates <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {uni.marqueeOffers.map((offer, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.04] border border-white/15 hover:border-blue-400 hover:bg-white/[0.07] p-5 rounded-2xl transition-all shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-[#0066FF]/20 text-blue-300 border border-blue-400/30">
                        {offer.company}
                      </span>
                      <span className="text-base sm:text-lg font-black text-amber-300">
                        ₹{offer.packageLPA.toFixed(2)} LPA
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {offer.studentName}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {offer.role || "Software Development Engineer"}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCircle2 size={13} /> Verified Offer
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      Poornima Group Record
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            2. INSTITUTIONAL TELEMETRY & RESEARCH IMPACT (poornima.edu.in)
        ══════════════════════════════════════════════════════════════════ */}
        {uni.institutionalTelemetry && (
          <div className="space-y-6 pt-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Compass size={14} className="text-blue-400" /> Official Institutional Telemetry
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Poornima University at a Glance
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Verified academic, global exchange, funding, and corporate board metrics from the official university portal.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {[
                { title: "Alumni Network", val: "17,500+", desc: "Alumni thriving across the globe", icon: Users, color: "text-blue-400" },
                { title: "R&D Ventures", val: "₹2.25 Cr.", desc: "Funding for innovation & research", icon: Zap, color: "text-amber-400" },
                { title: "Global Exchanges", val: "200+", desc: "International university collaborations", icon: Globe, color: "text-purple-400" },
                { title: "Corporate Board", val: "200+", desc: "Industrialists on advisory board", icon: Building2, color: "text-blue-300" },
                { title: "Incubated Startups", val: "100+", desc: "Student & faculty startups supported", icon: TrendingUp, color: "text-emerald-400" },
                { title: "Merit Scholarships", val: "Upto 40%", desc: "Academic excellence scholarships", icon: Award, color: "text-amber-300" },
                { title: "Patents & IP", val: "200+", desc: "Registered copyrights & patents", icon: ShieldCheck, color: "text-indigo-400" },
                { title: "Hiring Recruiters", val: "350+", desc: "Corporate recruiters eager to hire", icon: Briefcase, color: "text-emerald-300" },
                { title: "Scopus Research", val: "1,000+", desc: "High-quality Scopus/SCI publications", icon: BookOpen, color: "text-rose-400" },
                { title: "Library Assets", val: "50,000+", desc: "Books, journals & digital resources", icon: FileText, color: "text-cyan-400" },
              ].map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all text-center flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-white/5 mx-auto flex items-center justify-center mb-2">
                        <Icon size={16} className={m.color} />
                      </div>
                      <p className={`text-xl font-black ${m.color}`}>{m.val}</p>
                      <p className="text-[11px] font-bold text-white uppercase mt-1">{m.title}</p>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 leading-tight">{m.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            3. COMPANY REQUIREMENTS & ELIGIBILITY MATRIX
        ══════════════════════════════════════════════════════════════════ */}
        {uni.companyRequirements && uni.companyRequirements.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck size={14} className="text-emerald-400" /> Placement Cell (PMTPO) Standards
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Company Hiring Requirements &amp; Eligibility Criteria
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Required CGPA cutoffs, 10th/12th percentages, backlog rules, selection rounds, and mandatory skills for visiting companies.
                </p>
              </div>

              {/* Company Filter Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                <button
                  onClick={() => setSelectedReqCompany("ALL")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    selectedReqCompany === "ALL"
                      ? "bg-[#0066FF] text-white"
                      : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  All Recruiters
                </button>
                {uni.companyRequirements.slice(0, 5).map((c) => (
                  <button
                    key={c.company}
                    onClick={() => setSelectedReqCompany(c.company)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                      selectedReqCompany === c.company
                        ? "bg-[#0066FF] text-white"
                        : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {c.company.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {companyReqs.map((req, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-white/15 p-6 rounded-2xl space-y-4 hover:border-blue-400 transition-all shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white">{req.company}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-md font-bold uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
                          {req.tier}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Eligible: {req.eligibleBranches.join(", ")}
                      </p>
                    </div>

                    <span className="text-sm font-black text-amber-300 bg-amber-400/10 px-3 py-1 rounded-xl border border-amber-400/20">
                      ₹{req.packageLPA.toFixed(2)} LPA
                    </span>
                  </div>

                  {/* Cutoff Badges */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs py-2 bg-white/[0.02] rounded-xl border border-white/5">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase block">Min CGPA</span>
                      <span className="font-extrabold text-white text-sm">{req.minCGPA} / 10</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase block">10th &amp; 12th</span>
                      <span className="font-extrabold text-white text-sm">{req.min10th12th}% Min</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase block">Backlogs</span>
                      <span className={`font-extrabold text-xs ${req.backlogsAllowed ? 'text-amber-300' : 'text-emerald-400'}`}>
                        {req.backlogsAllowed ? "1 Reviewable" : "0 Active"}
                      </span>
                    </div>
                  </div>

                  {/* Selection Rounds */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-2">
                      Selection Process (Rounds)
                    </span>
                    <ol className="space-y-1.5 text-xs text-slate-300">
                      {req.selectionRounds.map((round, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-300 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                            {rIdx + 1}
                          </span>
                          <span>{round}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Mandatory Skills */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                      Required Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {req.mandatorySkills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-200 font-medium"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            4. EMINENT FACULTY LEADERSHIP & ACADEMIC MENTORS
        ══════════════════════════════════════════════════════════════════ */}
        {uni.facultyLeadership && uni.facultyLeadership.length > 0 && (
          <div className="space-y-6 pt-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Users size={14} className="text-purple-400" /> Academic Leadership (poornima.edu.in)
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Faculty Leadership &amp; Department Mentors
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Distinguished researchers, Ph.D. professors, and corporate placement directors steering academic curriculum and industry interface.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {uni.facultyLeadership.map((f, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-white/15 p-5 rounded-2xl hover:border-purple-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center font-black text-base text-purple-300 shrink-0">
                        {f.name.split(" ")[1]?.charAt(0) || "D"}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">{f.name}</h3>
                        <p className="text-xs text-purple-300 font-medium">{f.designation}</p>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                      <p>
                        <strong className="text-slate-400">Department:</strong> {f.department}
                      </p>
                      <p>
                        <strong className="text-slate-400">Qualification:</strong> {f.qualification}
                      </p>
                      <p>
                        <strong className="text-slate-400">Specialization:</strong> {f.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-emerald-400 font-semibold">{f.experience} Experience</span>
                    <span className="text-[11px]">Poornima Faculty</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            5. ACADEMIC DEGREE PROGRAMS & SPECIALIZATIONS (poornima.edu.in/online)
        ══════════════════════════════════════════════════════════════════ */}
        {uni.degreePrograms && uni.degreePrograms.length > 0 && (
          <div className="space-y-6 pt-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
                <GraduationCap size={14} className="text-cyan-400" /> Degrees &amp; Curriculum (poornima.edu.in/online)
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Academic Degrees &amp; Specializations
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Official undergraduate, postgraduate, and doctoral degree paths offered at Poornima University.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {uni.degreePrograms.map((prog, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-white/15 p-5 rounded-2xl space-y-3"
                >
                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
                    <BookOpen size={16} className="text-blue-400" />
                    {prog.level}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {prog.courses.map((course, cIdx) => (
                      <li
                        key={cIdx}
                        className="text-xs text-slate-300 p-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span className="truncate">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            6. 109 VERIFIED RECRUITER DRIVES TABLE
        ══════════════════════════════════════════════════════════════════ */}
        {uni.officialOffers && uni.officialOffers.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-2">
                  🎓 Official Audited Records
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
                  <Building2 className="text-blue-400" /> Verified Campus Placement Drives ({uni.officialOffers.length} Companies)
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Authentic compensation records and recruitment offers at {uni.name}.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-extrabold">
                  Peak: ₹44.10 LPA
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-extrabold">
                  17 Super Dream (&gt;10 LPA)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-extrabold">
                  {uni.officialOffers.length} Partner Recruiters
                </span>
              </div>
            </div>

            {/* Search & Tier Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white/[0.03] border border-white/10 p-3.5 rounded-2xl">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search among 109 companies (e.g. Amazon, Tekion, VMWARE, Locus, Groww, TCS)..."
                  className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {['ALL', 'Marquee', 'Super Dream', 'Dream', 'Prime'].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => {
                      setSelectedTier(tier);
                      setVisibleCount(30);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                      selectedTier === tier
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    {tier === 'ALL' ? 'All (109)' : tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Table Display */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-xs text-slate-400 uppercase tracking-wider border-b border-white/10">
                  <tr>
                    <th className="px-5 py-3.5 text-center w-16">S. No.</th>
                    <th className="px-5 py-3.5">Name of Company</th>
                    <th className="px-5 py-3.5">Category Tier</th>
                    <th className="px-5 py-3.5 text-right">Package Offered (LPA)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  {filteredOffers.slice(0, visibleCount).map((item) => (
                    <tr key={item.sNo} className="hover:bg-white/[0.03] transition-colors">
                      <td className="px-5 py-3.5 text-center text-xs font-bold text-slate-400">
                        #{item.sNo}
                      </td>
                      <td className="px-5 py-3.5 font-bold text-white flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-black text-xs text-blue-300 shrink-0">
                          {item.company.charAt(0)}
                        </div>
                        <span>{item.company}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                            item.tier === 'Marquee'
                              ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                              : item.tier === 'Super Dream'
                              ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                              : item.tier === 'Dream'
                              ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                              : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          }`}
                        >
                          {item.tier}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-right font-extrabold text-sm sm:text-base">
                        <span
                          className={
                            item.ctc >= 20
                              ? 'text-amber-400 font-black'
                              : item.ctc >= 10
                              ? 'text-purple-300 font-extrabold'
                              : item.ctc >= 6
                              ? 'text-blue-300 font-bold'
                              : 'text-emerald-400 font-bold'
                          }
                        >
                          ₹{item.ctc.toFixed(2).replace(/\.00$/, '')} LPA
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredOffers.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-5 py-10 text-center text-slate-400 text-sm">
                        No companies match your search &quot;{searchQuery}&quot;.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Load More Button */}
            {filteredOffers.length > visibleCount && (
              <div className="flex justify-center pt-1">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 30)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs sm:text-sm font-semibold text-white transition flex items-center gap-2"
                >
                  <span>Show Next 30 Companies ({visibleCount} of {filteredOffers.length} shown)</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            7. DEPARTMENT-WISE PLACEMENT BREAKDOWN
        ══════════════════════════════════════════════════════════════════ */}
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
                      <td className="px-5 py-3.5 text-amber-400 font-bold">{dept.highestCTC}</td>
                      <td className="px-5 py-3.5 text-blue-300 font-semibold">{dept.placementRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            8. HISTORICAL YEAR-OVER-YEAR TRENDS
        ══════════════════════════════════════════════════════════════════ */}
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
                  <p className="text-xs text-amber-300 font-medium">Peak: {trend.highestCTC}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════
            9. VERIFIED PLACED ALUMNI
        ══════════════════════════════════════════════════════════════════ */}
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
