"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Search,
  ArrowRight,
  Sparkles,
  Building2,
  GraduationCap,
  Users,
  CheckCircle2,
  Trophy,
  Briefcase,
  X,
  ExternalLink,
} from "lucide-react";
import { POORNIMA_OFFICIAL_RECRUITERS } from "@/lib/placement-data";

export default function HomePage() {
  const [whyChooseTab, setWhyChooseTab] = useState<"excellence" | "prep" | "ctc">("excellence");
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [modalSearchQuery, setModalSearchQuery] = useState("");
  const [modalTierFilter, setModalTierFilter] = useState<string>("All");

  const filteredRecruiters = POORNIMA_OFFICIAL_RECRUITERS.filter((rec) => {
    const matchesSearch = rec.company.toLowerCase().includes(modalSearchQuery.toLowerCase());
    const matchesTier = modalTierFilter === "All" || rec.tier === modalTierFilter;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="min-h-screen bg-[#071933] text-slate-800 overflow-x-hidden selection:bg-[#0066FF] selection:text-white">
      <Navbar />

      {/* ══════════════════════════════════════════
          1. CORPORATE ARCHITECTURAL HERO SECTION
          (Matching the user's mockup: deep architectural perspective,
           centered bold title & clean pill button)
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex flex-col items-center justify-center pt-28 pb-32 overflow-hidden bg-[#071933]">
        {/* Architectural Campus Background with Perspective Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-45 mix-blend-luminosity scale-105"
          style={{ backgroundImage: 'url("/images/poornima-campus-4k.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071933]/90 via-[#0A2548]/85 to-[#071933]/95 pointer-events-none" />

        {/* Diagonal architectural lighting accents */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Subtle Watermark Emblem in Background */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.04] pointer-events-none select-none hidden lg:block">
          <img
            src="/images/logos/poornima-royal.png"
            alt=""
            className="w-full h-full object-contain filter invert"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Poornima University Emblem Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-2xl shadow-black/40 border border-white/40"
          >
            <img
              src="/images/logos/poornima-university.png"
              alt="Poornima University Logo"
              className="h-8 w-auto object-contain"
            />
            <div className="h-4 w-px bg-slate-300" />
            <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-[#071933] uppercase">
              POORNIMA GROUP OF COLLEGES
            </span>
          </motion.div>

          {/* Top Subtitle Kicker */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4"
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-blue-200/90">
              SHAPING FUTURES • EMPOWERING CAREERS
            </span>
          </motion.div>

          {/* Main Display Headline (Matching the mockup exact layout) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl uppercase"
          >
            BUILDING CAREERS
            <br />
            <span className="text-blue-100">AROUND THE WORLD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100/80 text-sm sm:text-base max-w-2xl mx-auto mt-4 mb-8 font-normal"
          >
            Official Placement Portal of Poornima Group (Poornima University, PCE &amp; PIET)
            — 109 Verified Recruiter Drives · ₹42.10 LPA Peak CTC · 5,000+ Placed Students.
          </motion.p>

          {/* Dual Action Buttons (Center Pill matching mockup) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3.5"
          >
            <button
              onClick={() => setIsRecruiterModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#071933] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>EXPLORE 109 RECRUITERS</span>
              <ArrowRight size={15} />
            </button>
            <Link
              href="/placements"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-blue-600/30 hover:bg-blue-600/50 text-white border border-blue-400/30 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
            >
              <span>VIEW PLACEMENT CTCs</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. THE 5 FLOATING OVERLAPPING CARDS BAR
          (Halfway overlapping hero and white section)
      ══════════════════════════════════════════ */}
      <section className="relative z-30 -mt-14 sm:-mt-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-stretch">
          {/* Card 1: Poornima University */}
          <Link
            href="/universities/poornima"
            className="bg-white hover:bg-slate-50 text-slate-800 rounded-xl p-5 shadow-xl shadow-slate-900/10 border border-slate-100 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <GraduationCap size={20} />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1">
              POORNIMA UNIVERSITY
            </h3>
            <p className="text-[11px] text-slate-500">
              State Private Univ · ₹42.10 LPA
            </p>
          </Link>

          {/* Card 2: PCE Jaipur */}
          <Link
            href="/universities/pce"
            className="bg-white hover:bg-slate-50 text-slate-800 rounded-xl p-5 shadow-xl shadow-slate-900/10 border border-slate-100 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Building2 size={20} />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1">
              PCE JAIPUR
            </h3>
            <p className="text-[11px] text-slate-500">
              Estd. 2000 · NBA Accredited
            </p>
          </Link>

          {/* Card 3: PIET Jaipur */}
          <Link
            href="/universities/piet"
            className="bg-white hover:bg-slate-50 text-slate-800 rounded-xl p-5 shadow-xl shadow-slate-900/10 border border-slate-100 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Trophy size={20} />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1">
              PIET JAIPUR
            </h3>
            <p className="text-[11px] text-slate-500">
              NAAC &apos;A&apos; Grade · Autonomous
            </p>
          </Link>

          {/* Card 4: Active Featured Blue Card (SEVENAI COPILOT) */}
          <Link
            href="/ai"
            className="bg-[#0066FF] text-white rounded-xl p-5 shadow-2xl shadow-blue-600/30 border border-blue-500 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-2.5 lg:-translate-y-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform">
              <Sparkles size={20} />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-white mb-1">
              SEVENAI COPILOT
            </h3>
            <p className="text-[11px] text-blue-100 mb-2">
              AI Interview Prep &amp; Mocks
            </p>
            <div className="w-6 h-6 rounded-full bg-white text-[#0066FF] flex items-center justify-center mt-auto font-bold text-xs group-hover:scale-110 transition-transform">
              →
            </div>
          </Link>

          {/* Card 5: 109 Recruiters */}
          <button
            onClick={() => setIsRecruiterModalOpen(true)}
            className="bg-white hover:bg-slate-50 text-slate-800 rounded-xl p-5 shadow-xl shadow-slate-900/10 border border-slate-100 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Briefcase size={20} />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1">
              109 RECRUITERS
            </h3>
            <p className="text-[11px] text-slate-500">
              100% Verified Campus Drives
            </p>
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. "WHY CHOOSE US?" SECTION
          (Clean Pure White #FFFFFF Background)
      ══════════════════════════════════════════ */}
      <section className="bg-white text-slate-900 pt-28 pb-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Heading with Blue Dot */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Why Choose Us?
            </h2>
          </div>

          {/* 3 Tab Filter Buttons */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 border-b border-slate-200 pb-3 mb-14 text-xs sm:text-sm font-semibold text-slate-500">
            <button
              onClick={() => setWhyChooseTab("prep")}
              className={`transition-colors relative pb-3 -mb-3 ${
                whyChooseTab === "prep"
                  ? "text-[#0066FF] font-bold border-b-2 border-[#0066FF]"
                  : "hover:text-slate-800"
              }`}
            >
              In-Depth Knowledge
            </button>
            <button
              onClick={() => setWhyChooseTab("excellence")}
              className={`transition-colors relative pb-3 -mb-3 ${
                whyChooseTab === "excellence"
                  ? "text-[#0066FF] font-bold border-b-2 border-[#0066FF]"
                  : "hover:text-slate-800"
              }`}
            >
              Excellence &amp; Leadership
            </button>
            <button
              onClick={() => setWhyChooseTab("ctc")}
              className={`transition-colors relative pb-3 -mb-3 ${
                whyChooseTab === "ctc"
                  ? "text-[#0066FF] font-bold border-b-2 border-[#0066FF]"
                  : "hover:text-slate-800"
              }`}
            >
              Competitive CTCs
            </button>
          </div>

          {/* 2-Column Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Layered Photography Cards */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 max-h-[380px]">
                <img
                  src="/images/poornima-real.jpg"
                  alt="Poornima Group Campus Students"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Mini-Badge 1 */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  ₹
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-semibold uppercase">Highest Package</p>
                  <p className="text-base font-extrabold text-slate-900">₹42.10 LPA <span className="text-xs text-blue-600">Amazon</span></p>
                </div>
              </div>

              {/* Floating Mini-Badge 2 */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  109
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-semibold uppercase">Recruiting Partners</p>
                  <p className="text-base font-extrabold text-slate-900">100% Verified Drives</p>
                </div>
              </div>
            </div>

            {/* Right: Institutional Corporate Overview */}
            <div className="space-y-6">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Poornima Group is positioned as one of Rajasthan&apos;s foremost multi-disciplinary educational and placement hubs, backed by seasoned training faculties who have decades of corporate synergy in training and placing students across tier-1 software, engineering, and fintech organizations.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Headquartered across lush campuses in Jaipur (Poornima University, PCE, and PIET), Poornima Group actively partners with Fortune 500 multinationals and premier Indian startups, guaranteeing verified placement records and intensive industry mentorship.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "109 Verified Recruiting Companies (Amazon, Flipkart, Morgan Stanley, VMware, TCS)",
                  "Rigorous pre-placement bootcamps & 6-month corporate internships",
                  "Over 5,000+ alumni working in top technological centers globally",
                  "Next-gen SevenAI Interview Simulator powered by Gemini Flash",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#0066FF] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/placements"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0066FF] hover:underline"
                >
                  <span>Explore All 109 Verified Company Packages</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. "PLACEMENT CELL WITH A DIFFERENCE. INNOVATION."
          (Off-White #F8FAFC Background)
      ══════════════════════════════════════════ */}
      <section className="bg-[#F8FAFC] text-slate-900 py-20 border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase">
                INNOVATION &amp; RESULTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
                Placement Cell With a Difference.
                <br />
                Innovation.
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Poornima Group is one of the leader networks in the state and continues to expand its corporate frontiers, providing innovative interview preparation solutions, supported by bold, real-time data and decisive action.
              </p>
              <div className="pt-3 border-t border-slate-200">
                <p className="text-xs font-extrabold text-slate-900 uppercase">
                  DR. SURESH CHOUDHARY
                </p>
                <p className="text-[11px] text-slate-500">
                  Chief Training &amp; Placement Officer, Poornima Group
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): 2 Cards with Blue Circular Arrow Buttons */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {/* Card 1: WHO WE ARE */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/80 flex flex-col group">
                <div className="h-40 overflow-hidden bg-slate-100">
                  <img
                    src="/images/poornima-group-hero.jpg"
                    alt="Who We Are - Poornima Group"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      WHO WE ARE
                    </span>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Poornima Group is one of the leader groups in higher engineering education with 109 verified corporate recruiters.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 flex items-center justify-between">
                    <Link
                      href="/companies"
                      className="w-8 h-8 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white flex items-center justify-center font-bold text-xs transition-colors"
                    >
                      →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: PLACEMENTS REDEFINED */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/80 flex flex-col group">
                <div className="h-40 overflow-hidden bg-slate-100">
                  <img
                    src="/images/poornima-campus-4k.jpg"
                    alt="Placements Redefined - SevenAI"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      PLACEMENTS REDEFINED
                    </span>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      AI-assisted mock interview practice, company-specific test questions, and student CTC transparent statistics.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 flex items-center justify-between">
                    <Link
                      href="/ai"
                      className="w-8 h-8 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white flex items-center justify-center font-bold text-xs transition-colors"
                    >
                      →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. "UNMATCHED SERVICES. UNMATCHED EXCELLENCE."
          (Deep Royal Navy #071933 Background)
      ══════════════════════════════════════════ */}
      <section className="bg-[#071933] text-white py-24 relative overflow-hidden">
        {/* Subtle geometric background watermark */}
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Unmatched Reach.
                <br />
                Unmatched Excellence.
              </h2>
              <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed">
                Comprehensive training &amp; placement architecture powering student outcomes from first semester to final placement offer.
              </p>
              <div className="w-10 h-10 rounded-full border border-blue-400/40 flex items-center justify-center text-blue-300 text-sm">
                ✦
              </div>
            </div>

            {/* Right Column (8 cols): 2x3 Grid of Thin Outlined Navy Cards */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: GraduationCap,
                  title: "CAMPUS PLACEMENTS",
                  desc: "On-campus recruitment drives with Amazon, Flipkart, Morgan Stanley, VMware & 106+ others.",
                },
                {
                  icon: Sparkles,
                  title: "SEVENAI COPILOT",
                  desc: "Instant role-tailored technical & HR mock interviews with feedback powered by Gemini Flash.",
                },
                {
                  icon: Building2,
                  title: "109 VERIFIED CTCS",
                  desc: "Transparent packages from ₹42.10 LPA peak to average tiers across all branches.",
                },
                {
                  icon: Trophy,
                  title: "INTERNSHIP ACCELERATOR",
                  desc: "Structured pre-placement industrial internships with leading IT & core corporations.",
                },
                {
                  icon: Users,
                  title: "SENIOR MENTORSHIP",
                  desc: "Direct connection with 5,000+ placed alumni working at Google, Microsoft, and global hubs.",
                },
                {
                  icon: CheckCircle2,
                  title: "100% VERIFICATION",
                  desc: "Student verified placement records, question archives, and company drive eligibility.",
                },
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-xl border border-blue-400/20 bg-blue-950/20 hover:border-blue-400/60 hover:bg-blue-900/30 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-white mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-blue-200/70 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. 109 VERIFIED RECRUITERS DIRECTORY MODAL
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {isRecruiterModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRecruiterModalOpen(false)}
              className="absolute inset-0 bg-[#071933]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col text-slate-800"
            >
              {/* Modal Header */}
              <div className="p-6 bg-gradient-to-r from-[#071933] to-[#0A2548] text-white flex items-center justify-between border-b border-blue-900/40">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1.5 rounded-lg shadow-sm">
                    <img
                      src="/images/logos/poornima-university.png"
                      alt="Poornima University"
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-white">
                      109 Verified Recruiter Directory
                    </h3>
                    <p className="text-xs text-blue-200/80">
                      Official Campus Placement Records · Poornima Group (PU, PCE &amp; PIET)
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsRecruiterModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Search & Filter Bar */}
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="relative w-full sm:w-80">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search company (e.g. Amazon, VMware)..."
                    value={modalSearchQuery}
                    onChange={(e) => setModalSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                  />
                  {modalSearchQuery && (
                    <button
                      onClick={() => setModalSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                  {["All", "Marquee", "Super Dream", "Dream", "Prime"].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setModalTierFilter(tier)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                        modalTierFilter === tier
                          ? "bg-[#0066FF] text-white"
                          : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {filteredRecruiters.map((item) => (
                    <div
                      key={item.sNo}
                      className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center shrink-0">
                          #{item.sNo}
                        </span>
                        <div className="min-w-0">
                          <p className="font-bold text-xs text-slate-900 truncate group-hover:text-[#0066FF] transition-colors">
                            {item.company}
                          </p>
                          <span
                            className={`inline-block text-[10px] px-1.5 py-0.2 rounded font-medium ${
                              item.tier === "Marquee"
                                ? "bg-amber-50 text-amber-700"
                                : item.tier === "Super Dream"
                                ? "bg-purple-50 text-purple-700"
                                : item.tier === "Dream"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {item.tier}
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <p className="text-xs font-extrabold text-emerald-600">
                          ₹{item.ctc} LPA
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredRecruiters.length === 0 && (
                  <div className="py-12 text-center text-slate-400 text-xs">
                    No verified companies matching &ldquo;{modalSearchQuery}&rdquo;.
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Showing {filteredRecruiters.length} of 109 Verified Recruiter Drives</span>
                <Link
                  href="/placements"
                  className="inline-flex items-center gap-1.5 font-bold text-[#0066FF] hover:underline"
                >
                  <span>Open Full Placements Analytics</span>
                  <ExternalLink size={13} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      <Footer />
    </div>
  );
}

