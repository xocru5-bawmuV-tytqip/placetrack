"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  INTERVIEW_QUESTIONS_DATA,
  COMPANIES_DATA,
  InterviewQuestionData,
} from "@/lib/placement-data";
import {
  Search,
  Code2,
  Database,
  Users2,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  CheckCircle2,
  Clock,
  Briefcase,
  Copy,
  Check,
} from "lucide-react";

export default function QuestionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCompany, setSelectedCompany] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("q1");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [upvotes, setUpvotes] = useState<Record<string, number>>({});

  const filteredQuestions = useMemo(() => {
    return INTERVIEW_QUESTIONS_DATA.filter((q) => {
      const matchesSearch =
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        selectedCategory === "all" || q.category === selectedCategory;

      const matchesComp =
        selectedCompany === "all" || q.company.toLowerCase() === selectedCompany.toLowerCase();

      const matchesDiff =
        selectedDifficulty === "all" || q.difficulty === selectedDifficulty;

      return matchesSearch && matchesCat && matchesComp && matchesDiff;
    });
  }, [searchQuery, selectedCategory, selectedCompany, selectedDifficulty]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleCopy = (id: string, code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleUpvote = (id: string, initial: number) => {
    setUpvotes((prev) => ({
      ...prev,
      [id]: (prev[id] ?? initial) + 1,
    }));
  };

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
              <Code2 size={14} className="text-blue-400" />
              Verified Technical Interview Questions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Company-Wise <span className="gradient-text">Interview Bank</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Real interview problems, SQL queries, system design trade-offs, and STAR behavioral answers asked in recent Google, Microsoft, Amazon, and TCS campus rounds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-container py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {[
            { id: "all", label: "All Categories", icon: Layers },
            { id: "CODING", label: "Coding & DSA", icon: Code2 },
            { id: "SYSTEM_DESIGN", label: "System Design", icon: Layers },
            { id: "SQL", label: "SQL & DBMS", icon: Database },
            { id: "HR", label: "HR & Behavioral", icon: Users2 },
          ].map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                <Icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search & Sub-filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by problem name, keyword, or concept (e.g. LRU, Window functions)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 text-sm transition-all"
            />
          </div>

          {/* Company filter */}
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 focus:outline-none focus:border-blue-500/50"
          >
            <option value="all" className="bg-[#0A0F1E]">All Companies</option>
            {COMPANIES_DATA.map((c) => (
              <option key={c.slug} value={c.name} className="bg-[#0A0F1E]">
                {c.name}
              </option>
            ))}
          </select>

          {/* Difficulty filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 focus:outline-none focus:border-blue-500/50"
          >
            <option value="all" className="bg-[#0A0F1E]">All Difficulties</option>
            <option value="EASY" className="bg-[#0A0F1E]">Easy</option>
            <option value="MEDIUM" className="bg-[#0A0F1E]">Medium</option>
            <option value="HARD" className="bg-[#0A0F1E]">Hard</option>
          </select>
        </div>

        {/* Questions Accordion List */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const isExpanded = expandedId === q.id;
            const currentVotes = upvotes[q.id] ?? q.upvotes;

            return (
              <GlassCard
                key={q.id}
                padding="md"
                glow={isExpanded}
                glowColor="blue"
                className="border-white/10 transition-all duration-300"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="cursor-pointer select-none"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {q.company}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          q.difficulty === "HARD"
                            ? "bg-red-500/20 text-red-300 border border-red-500/30"
                            : q.difficulty === "MEDIUM"
                            ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                            : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        }`}
                      >
                        {q.difficulty}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {q.round} ({q.year})
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpvote(q.id, q.upvotes);
                        }}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-colors"
                      >
                        <ThumbsUp size={12} className="text-blue-400" />
                        <span>{currentVotes}</span>
                      </button>
                      {isExpanded ? (
                        <ChevronUp size={18} className="text-slate-400" />
                      ) : (
                        <ChevronDown size={18} className="text-slate-400" />
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-white text-base sm:text-lg hover:text-blue-300 transition-colors">
                    {q.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {q.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-slate-400 font-medium"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Solution Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-5 pt-4 border-t border-white/10 space-y-4"
                    >
                      {/* Problem Statement */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Problem Statement:
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-white/[0.02] p-3.5 rounded-xl border border-white/5 whitespace-pre-wrap">
                          {q.question}
                        </p>
                      </div>

                      {/* Complexity Badges */}
                      {(q.timeComplexity || q.spaceComplexity) && (
                        <div className="flex flex-wrap gap-3">
                          {q.timeComplexity && (
                            <div className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                              ⏱️ <strong>Time:</strong> {q.timeComplexity}
                            </div>
                          )}
                          {q.spaceComplexity && (
                            <div className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                              💾 <strong>Space:</strong> {q.spaceComplexity}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Detailed Solution Explanation */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center gap-1.5">
                          <CheckCircle2 size={13} /> Verified Solution &amp; Approach:
                        </h4>
                        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-3.5 rounded-xl border border-white/5 whitespace-pre-line">
                          {q.solution}
                        </div>
                      </div>

                      {/* Code Snippet (if available) */}
                      {q.codeSnippet && (
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Production Implementation:
                            </span>
                            <button
                              onClick={() => handleCopy(q.id, q.codeSnippet)}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-slate-300 transition-colors"
                            >
                              {copiedId === q.id ? (
                                <>
                                  <Check size={12} className="text-emerald-400" />
                                  <span className="text-emerald-400">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy size={12} />
                                  <span>Copy Code</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="p-4 rounded-xl bg-[#060913] border border-white/10 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                            <code>{q.codeSnippet}</code>
                          </pre>
                        </div>
                      )}

                      {/* Simulator Prompt */}
                      <div className="pt-2 flex items-center justify-between text-xs">
                        <span className="text-slate-400">
                          Want real-time feedback on your own solution?
                        </span>
                        <Link
                          href="/ai"
                          className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                        >
                          <Sparkles size={12} className="text-amber-400" />
                          Simulate in SevenAI
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
