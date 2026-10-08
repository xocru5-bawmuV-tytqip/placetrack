"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  FileText,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Upload,
  RefreshCw,
  Building2,
  Briefcase,
  Copy,
  Check,
  ChevronDown,
  Award,
  Zap,
  TrendingUp,
  BrainCircuit,
  ExternalLink,
} from "lucide-react";
import { ATSAnalysisResult } from "@/lib/seven-ai";

const sampleResumes = {
  sde: `Aarav Sharma
Jaipur, Rajasthan | +91 98765 43210 | aarav.sharma@poornima.edu.in
LinkedIn: linkedin.com/in/aaravsharma-tech | GitHub: github.com/aarav-sharma

EDUCATION
Poornima College of Engineering (PCE), Jaipur
Bachelor of Technology in Computer Science & Engineering (2021 – 2025)
CGPA: 8.85 / 10.0 | Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management, Computer Networks, Object-Oriented Programming

TECHNICAL SKILLS
Languages: C++, Python, JavaScript, TypeScript, SQL
Frontend: React.js, Next.js, Tailwind CSS, Redux Toolkit
Backend & Cloud: Node.js, Express, PostgreSQL, MongoDB, Redis, Docker, AWS (EC2, S3)
Tools & Core: Git, GitHub, REST APIs, CI/CD, Microservices, Linux

PROJECTS
1. PlaceTrack Distributed Microservices Platform (Next.js, Node.js, Redis, PostgreSQL, Docker)
- Architected a distributed campus placement analytics engine handling 15,000+ candidate queries with sub-50ms endpoint latency.
- Implemented Redis caching and monotonic generation tokens, reducing database read overhead by 48% under concurrent traffic.
- Deployed multi-container architecture using Docker and AWS EC2 with automated GitHub Actions CI/CD pipelines.

2. Real-Time Collaborative Code Playground (React, WebSockets, Python, Docker)
- Engineered a real-time code editor and remote execution sandbox supporting Python, C++, and Java with isolated Docker sandboxing.
- Integrated WebSocket rooms with Operational Transformation, achieving synchrony across 200+ concurrent collaborative sessions.
- Reduced remote execution turnaround time from 3.2s to 850ms by pre-warming lightweight container runtimes.

WORK EXPERIENCE
Software Engineering Intern | Celebal Technologies, Jaipur (May 2024 – July 2024)
- Developed RESTful API microservices for enterprise cloud ingestion pipelines, increasing data synchronization throughput by 35%.
- Optimized complex PostgreSQL relational queries and indexed foreign keys, reducing p99 response times from 420ms to 95ms.
- Collaborated in Agile sprint planning, code reviews, and unit test suites achieving 88% statement coverage.

ACHIEVEMENTS & LEADERSHIP
- Solved 450+ Data Structures & Algorithms problems across LeetCode and Codeforces (Knight Rank).
- Winner, Smart India Hackathon (SIH 2023) - Institutional Round at Poornima Group.`,

  dataScientist: `Priya Verma
Jaipur, Rajasthan | +91 91234 56789 | priya.verma@poornima.edu.in
LinkedIn: linkedin.com/in/priyaverma-ds | GitHub: github.com/priya-ds

EDUCATION
Poornima University, Jaipur
B.Tech in Artificial Intelligence & Data Science (2021 – 2025)
CGPA: 8.92 / 10.0

TECHNICAL SKILLS
Languages & Libs: Python, R, SQL, C++
Data Science / ML: Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, XGBoost, Hugging Face
Tools & Databases: PostgreSQL, MongoDB, Git, Docker, Tableau, FastAPI

PROJECTS
1. Multimodal Medical Diagnosis Assistant (PyTorch, FastAPI, Docker)
- Built a deep learning classification pipeline analyzing radiographic scans, achieving 94.6% AUC-ROC score across 12,000 test images.
- Deployed model inference via FastAPI on AWS EC2 with GPU acceleration, cutting inference latency to 120ms.

2. Algorithmic High-Frequency Stock Forecasting (Python, XGBoost, Pandas)
- Engineered feature extraction pipelines processing 2.5 million financial tick logs using technical indicators and rolling statistics.
- Outperformed benchmark baseline by 18.4% Sharpe ratio in out-of-sample backtesting.`,
};

const companyOptions = [
  { name: "Amazon India", peakCTC: "₹42.10 LPA", role: "Software Development Engineer (SDE-1)" },
  { name: "Flipkart", peakCTC: "₹32.57 LPA", role: "Software Development Engineer" },
  { name: "Morgan Stanley", peakCTC: "₹25.33 LPA", role: "Technology Analyst" },
  { name: "VMware", peakCTC: "₹23.80 LPA", role: "Member of Technical Staff" },
  { name: "Groww", peakCTC: "₹20.00 LPA", role: "Software Engineer" },
  { name: "RTCamp Solutions", peakCTC: "₹18.00 LPA", role: "Enterprise Web Engineer" },
  { name: "Kickdrum", peakCTC: "₹15.73 LPA", role: "Associate Software Engineer" },
  { name: "Josh Technology Group", peakCTC: "₹15.23 LPA", role: "Software Engineer" },
  { name: "TCS (Digital / Prime)", peakCTC: "₹11.50 LPA", role: "System Engineer / Prime" },
  { name: "Celebal Technologies", peakCTC: "₹7.00 LPA", role: "Associate Cloud / AI Engineer" },
];

export default function ResumeATSPage() {
  const [resumeText, setResumeText] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("Amazon India");
  const [targetRole, setTargetRole] = useState("Software Development Engineer (SDE-1)");
  const [customJobDesc, setCustomJobDesc] = useState("");
  const [showJobDesc, setShowJobDesc] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "keywords" | "rewrites" | "checklist">("overview");

  const [result, setResult] = useState<ATSAnalysisResult | null>(null);

  const handleLoadSample = (type: "sde" | "dataScientist") => {
    setResumeText(sampleResumes[type]);
    if (type === "sde") {
      setSelectedCompany("Amazon India");
      setTargetRole("Software Development Engineer (SDE-1)");
    } else {
      setSelectedCompany("Morgan Stanley");
      setTargetRole("Data & Analytics Analyst");
    }
    setErrorMsg("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type === "text/plain" || file.name.endsWith(".txt")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) {
          setResumeText(text);
          setErrorMsg("");
        }
      };
      reader.readAsText(file);
    } else {
      // For PDF or DOCX, inform the user to copy-paste or read text
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text && text.length > 50) {
          // Clean non-printable characters for simple text fallback
          const cleaned = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, " ");
          setResumeText(cleaned.slice(0, 8000));
        } else {
          setErrorMsg("For best ATS accuracy with PDF/DOCX, please paste your resume text directly into the box below.");
        }
      };
      reader.readAsText(file);
    }
  };

  const handleAnalyze = async () => {
    if (!resumeText.trim() || resumeText.trim().length < 50) {
      setErrorMsg("Please enter or paste your resume content (at least 50 characters).");
      return;
    }

    setErrorMsg("");
    setIsAnalyzing(true);

    try {
      const res = await fetch("/api/ai/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resumeText,
          targetCompany: selectedCompany,
          targetRole,
          jobDescription: customJobDesc.trim() || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to analyze resume.");
      }

      setResult(data);
      setActiveTab("overview");
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred while evaluating your ATS score.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#0066FF] selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#07172C] text-white pt-28 pb-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30 mb-4 uppercase tracking-wider">
            <Sparkles size={14} className="text-amber-400" />
            SevenAI Placement Intelligence · 109 Campus Drives
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            ATS Resume Scoring &amp; Optimizer
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Scan your resume against verified ATS filters for <span className="text-white font-bold">Amazon (₹42.10 LPA)</span>,{" "}
            <span className="text-white font-bold">Flipkart</span>, <span className="text-white font-bold">Morgan Stanley</span>, and 109 Poornima partner drives.
            Uncover missing technical keywords, quantified metrics, and Google XYZ bullet rewrites.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => handleLoadSample("sde")}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center gap-2"
            >
              <Zap size={14} className="text-amber-400" />
              <span>Auto-Fill SDE-1 Sample Resume</span>
            </button>
            <button
              onClick={() => handleLoadSample("dataScientist")}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center gap-2"
            >
              <BrainCircuit size={14} className="text-blue-400" />
              <span>Auto-Fill AI / Data Science Resume</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Workspace */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configuration & Input */}
          <div className="lg:col-span-5 space-y-6">
            {/* Target Role & Recruiter Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <Building2 size={18} className="text-[#0066FF]" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Target Recruiter &amp; Role
                </h3>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Select Target Recruiter
                  </label>
                  <select
                    value={selectedCompany}
                    onChange={(e) => {
                      const comp = e.target.value;
                      setSelectedCompany(comp);
                      const found = companyOptions.find((c) => c.name === comp);
                      if (found) setTargetRole(found.role);
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0066FF]"
                  >
                    {companyOptions.map((co) => (
                      <option key={co.name} value={co.name}>
                        {co.name} ({co.peakCTC})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Target Role Title
                  </label>
                  <input
                    type="text"
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    placeholder="e.g. SDE-1, Cloud Engineer, Data Analyst"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0066FF]"
                  />
                </div>

                <div>
                  <button
                    onClick={() => setShowJobDesc(!showJobDesc)}
                    className="text-xs font-semibold text-[#0066FF] hover:underline flex items-center gap-1 mt-1"
                  >
                    <span>{showJobDesc ? "− Hide Job Description" : "+ Add Custom Job Description (Optional)"}</span>
                  </button>
                  {showJobDesc && (
                    <textarea
                      value={customJobDesc}
                      onChange={(e) => setCustomJobDesc(e.target.value)}
                      placeholder="Paste specific requirements from recruiter job listing..."
                      rows={3}
                      className="w-full mt-2 bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-[#0066FF]"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Resume Content Input Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-[#0066FF]" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Resume Content
                  </h3>
                </div>

                <label className="cursor-pointer text-xs font-bold text-[#0066FF] hover:underline flex items-center gap-1">
                  <Upload size={14} />
                  <span>Upload .TXT</span>
                  <input
                    type="file"
                    accept=".txt,.doc,.docx,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="relative">
                <textarea
                  value={resumeText}
                  onChange={(e) => setResumeText(e.target.value)}
                  placeholder="Paste your full resume text here (Education, Skills, Experience, Projects)... or click 'Auto-Fill SDE-1 Sample Resume' above."
                  rows={14}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs leading-relaxed text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0066FF] font-mono"
                />
                <div className="text-[11px] text-slate-400 text-right mt-1">
                  {resumeText.trim().split(/\s+/).filter(Boolean).length} words · {resumeText.length} characters
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertTriangle size={16} className="shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 disabled:opacity-60 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    <span>Analyzing ATS Algorithms...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span>Calculate ATS Score</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Detailed ATS Audit Results */}
          <div className="lg:col-span-7">
            {result ? (
              <div className="space-y-6">
                {/* Score Summary Banner */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                  {/* Circular Score Gauge */}
                  <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="stroke-slate-100"
                        strokeWidth="10"
                        fill="transparent"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke={
                          result.overallScore >= 80
                            ? "#10B981"
                            : result.overallScore >= 65
                            ? "#F59E0B"
                            : "#EF4444"
                        }
                        strokeWidth="10"
                        strokeDasharray={264}
                        strokeDashoffset={264 - (264 * result.overallScore) / 100}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-3xl font-black text-slate-900 leading-none">
                        {result.overallScore}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase mt-1">
                        / 100 ATS
                      </span>
                    </div>
                  </div>

                  {/* Summary Text */}
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                          result.tier === "High"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : result.tier === "Moderate"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-rose-50 text-rose-700 border border-rose-200"
                        }`}
                      >
                        {result.tier === "High"
                          ? "✓ High Shortlist Probability"
                          : result.tier === "Moderate"
                          ? "⚠ Moderate ATS Rejection Risk"
                          : "✕ Needs Immediate Optimization"}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {result.targetCompany} · {result.targetRole}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {result.summary}
                    </p>
                  </div>
                </div>

                {/* 4 Pillar Breakdown Bars */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Technical Skills", val: result.breakdown.technicalSkills, color: "bg-blue-600" },
                    { label: "Keyword Match", val: result.breakdown.keywordMatch, color: "bg-purple-600" },
                    { label: "Impact & Metrics", val: result.breakdown.impactAndMetrics, color: "bg-emerald-600" },
                    { label: "Format & Structure", val: result.breakdown.formattingAndStructure, color: "bg-amber-600" },
                  ].map((pillar) => (
                    <div key={pillar.label} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
                      <span className="text-xl font-black text-slate-900 block">{pillar.val}%</span>
                      <span className="text-[11px] font-bold text-slate-500 uppercase block mt-0.5">{pillar.label}</span>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className={`h-full rounded-full ${pillar.color}`} style={{ width: `${pillar.val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Navigation Tabs */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="flex border-b border-slate-200 overflow-x-auto">
                    {[
                      { id: "overview", label: "Executive Checklist" },
                      { id: "keywords", label: "Matched & Missing Keywords" },
                      { id: "rewrites", label: "Google XYZ Bullet Rewrites" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all border-b-2 ${
                          activeTab === tab.id
                            ? "border-[#0066FF] text-[#0066FF] bg-blue-50/30"
                            : "border-transparent text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="p-6">
                    {/* Tab 1: Checklist */}
                    {activeTab === "overview" && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-black text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <CheckCircle2 size={16} />
                            Verified Strengths Detected
                          </h4>
                          <ul className="space-y-2">
                            {result.strengths.map((str, idx) => (
                              <li key={idx} className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 flex items-start gap-2.5">
                                <span className="font-bold text-emerald-600">✓</span>
                                <span>{str}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-black text-rose-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <AlertTriangle size={16} />
                            Critical ATS Improvements Needed
                          </h4>
                          <ul className="space-y-2">
                            {result.improvements.map((imp, idx) => (
                              <li key={idx} className="p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-xs text-rose-900 flex items-start gap-2.5">
                                <span className="font-bold text-rose-600">!</span>
                                <span>{imp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Keywords */}
                    {activeTab === "keywords" && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                            Matched Industry Keywords ({result.matchedKeywords.length})
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {result.matchedKeywords.map((kw) => (
                              <span
                                key={kw}
                                className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1.5"
                              >
                                <Check size={12} className="text-emerald-600" />
                                {kw}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                            Missing Recruiter Keywords (Add these to boost ATS score)
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {result.missingKeywords.map((kw) => (
                              <button
                                key={kw}
                                onClick={() => copyToClipboard(kw)}
                                title="Click to copy keyword"
                                className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition-all"
                              >
                                {copiedKey === kw ? <Check size={12} /> : <Copy size={12} />}
                                {kw}
                              </button>
                            ))}
                          </div>
                          <p className="text-[11px] text-slate-500 mt-2">
                            Tip: Click any missing keyword above to copy it directly into your skills or project descriptions.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Rewrites */}
                    {activeTab === "rewrites" && (
                      <div className="space-y-4">
                        <p className="text-xs text-slate-600">
                          Google&apos;s Engineering Standard: <strong className="text-slate-900">Accomplished [X] as measured by [Y] by doing [Z]</strong>.
                          Below are custom rewrites generated for your resume:
                        </p>

                        {result.bulletRewrites.map((rw, idx) => (
                          <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                            <div>
                              <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider block">
                                Original (Weak / Unmeasured)
                              </span>
                              <p className="text-xs text-slate-500 italic mt-0.5">&ldquo;{rw.original}&rdquo;</p>
                            </div>

                            <div>
                              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                                Recommended High-Impact Rewrite
                              </span>
                              <p className="text-xs font-semibold text-slate-900 mt-0.5">{rw.improved}</p>
                            </div>

                            <div className="pt-1.5 border-t border-slate-200 text-[11px] text-slate-500">
                              <strong>Why it works:</strong> {rw.reason}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Empty Placeholder State */
              <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 text-center shadow-sm flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                  <FileText size={32} />
                </div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                  No Resume Analyzed Yet
                </h3>
                <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                  Paste your resume text on the left or click one of our one-click sample resumes to test our live ATS screening engine.
                </p>
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => handleLoadSample("sde")}
                    className="px-4 py-2 rounded-xl bg-[#0066FF] text-white text-xs font-bold hover:bg-[#0052CC] transition-all"
                  >
                    Test with SDE Sample
                  </button>
                  <Link
                    href="/ai"
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                  >
                    Ask SevenAI
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
