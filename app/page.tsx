"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  Search,
  ArrowRight,
  Sparkles,
  MapPin,
  TrendingUp,
  Building2,
  GraduationCap,
  Users,
  Star,
  CheckCircle2,
  Zap,
  MessageSquare,
  ChevronRight,
  Trophy,
  BrainCircuit,
  Target,
  BadgeCheck,
  Briefcase,
  IndianRupee,
  Clock,
  Send,
  Linkedin,
  Globe,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface UniversityCard {
  id: string;
  name: string;
  location: string;
  placed: number;
  companies: number;
  avgCTC: string;
  topCompany: string;
  logo: string;
}

interface PlacementCard {
  id: string;
  name: string;
  company: string;
  role: string;
  ctc: string;
  year: number;
  branch: string;
  avatar: string;
  linkedIn: string;
}

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  highlight: boolean;
  badge?: string;
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const universities: UniversityCard[] = [
  {
    id: "poornima",
    name: "Poornima University (PU Main)",
    location: "Ramchandrapura, Sitapura Ext., Jaipur",
    placed: 1850,
    companies: 350,
    avgCTC: "₹5.85 LPA",
    topCompany: "₹52.83 LPA (Peak CTC)",
    logo: "/images/logos/poornima-university.png",
  },
  {
    id: "pce",
    name: "Poornima College of Engineering (PCE)",
    location: "ISI-6 & 2, Sitapura, Jaipur",
    placed: 1700,
    companies: 350,
    avgCTC: "₹5.65 LPA",
    topCompany: "Amazon (₹44.10 LPA)",
    logo: "/images/logos/poornima-pce.jpg",
  },
  {
    id: "piet",
    name: "Poornima Institute of Engg. & Tech. (PIET)",
    location: "ISI-2, Sitapura, Jaipur",
    placed: 1280,
    companies: 100,
    avgCTC: "₹5.60 LPA",
    topCompany: "SquadStack (₹18.00 LPA)",
    logo: "/images/logos/poornima-piet.png",
  },
  {
    id: "poornima",
    name: "Faculty of Computer Science & Engineering",
    location: "Poornima University, Jaipur",
    placed: 850,
    companies: 240,
    avgCTC: "₹7.80 LPA",
    topCompany: "Amazon / Microsoft (₹44+ LPA)",
    logo: "/images/logos/poornima-university.png",
  },
  {
    id: "piet",
    name: "Dept. of AI & Data Science (PIET & PU)",
    location: "Poornima Tech Campuses, Jaipur",
    placed: 460,
    companies: 110,
    avgCTC: "₹8.20 LPA",
    topCompany: "Morgan Stanley (₹25.33 LPA)",
    logo: "/images/logos/poornima-piet.png",
  },
  {
    id: "poornima",
    name: "Faculty of Management & Commerce (MBA)",
    location: "Poornima University, Jaipur",
    placed: 360,
    companies: 85,
    avgCTC: "₹6.80 LPA",
    topCompany: "Nimai Fintech (₹18.00 LPA)",
    logo: "/images/logos/poornima-university.png",
  },
];

const recentPlacements: PlacementCard[] = [
  {
    id: "1",
    name: "Aanchal Asnani",
    company: "Amazon India",
    role: "Software Development Engineer (SDE-1)",
    ctc: "₹44.10 LPA",
    year: 2023,
    branch: "B.Tech CSE (PCE)",
    avatar: "AA",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "2",
    name: "Hardik Khanchandani",
    company: "Clumio Technologies",
    role: "Member of Technical Staff",
    ctc: "₹33.00 LPA",
    year: 2022,
    branch: "B.Tech CS (PCE)",
    avatar: "HK",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "3",
    name: "Ekta Gupta",
    company: "Morgan Stanley",
    role: "Technology Analyst",
    ctc: "₹25.33 LPA",
    year: 2022,
    branch: "B.Tech DS (PCE)",
    avatar: "EG",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "4",
    name: "Upadhyayula Aparna",
    company: "Nimai Fintech 360tf",
    role: "Fintech Strategist",
    ctc: "₹18.00 LPA",
    year: 2022,
    branch: "MBA (PU)",
    avatar: "UA",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
  {
    id: "5",
    name: "Kiran Gaira",
    company: "SquadStack",
    role: "Software Engineer",
    ctc: "₹14.00 LPA",
    year: 2022,
    branch: "B.Tech CS (PIET)",
    avatar: "KG",
    linkedIn: "https://www.linkedin.com/school/pietjaipur",
  },
  {
    id: "6",
    name: "Pathan Amaankhan",
    company: "rtCamp Solutions",
    role: "Enterprise Web Engineer",
    ctc: "₹12.00 LPA",
    year: 2022,
    branch: "B.Tech CS (PIET)",
    avatar: "PA",
    linkedIn: "https://www.linkedin.com/school/pietjaipur",
  },
  {
    id: "7",
    name: "Deepak Saini",
    company: "Tekion Corp",
    role: "MTS Cloud",
    ctc: "₹12.50 LPA",
    year: 2024,
    branch: "B.Tech CSE (PIET)",
    avatar: "DS",
    linkedIn: "https://www.linkedin.com/school/pietjaipur",
  },
  {
    id: "8",
    name: "Anjali Shrivastava",
    company: "Optum",
    role: "Software Engineer",
    ctc: "₹10.00 LPA",
    year: 2022,
    branch: "B.Tech CS (PCE)",
    avatar: "AS",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
];

interface RecruiterLogo {
  name: string;
  color?: string;
  logo?: string;
}

const companyLogos: RecruiterLogo[] = [
  { name: "Amazon", logo: "/images/recruiters/amazon.jpg" },
  { name: "Tekion Corp", logo: "/images/recruiters/tekion.jpg" },
  { name: "Optum", logo: "/images/recruiters/optum.jpg" },
  { name: "Celebal Technologies", logo: "/images/recruiters/celebal.jpg" },
  { name: "Capgemini", logo: "/images/recruiters/capgemini.jpg" },
  { name: "Infosys", logo: "/images/recruiters/infosys.jpg" },
  { name: "Xebia", logo: "/images/recruiters/xebia.jpg" },
  { name: "rtCamp", logo: "/images/recruiters/rtcamp.jpg" },
  { name: "Jio Platforms", logo: "/images/recruiters/jioplatform.jpg" },
  { name: "Synopsys", logo: "/images/recruiters/synopsys.jpg" },
  { name: "Cimpress", logo: "/images/recruiters/cimpress.jpg" },
  { name: "TCS", logo: "/images/logos/tcs.png" },
  { name: "IBM", logo: "/images/logos/ibm.png" },
  { name: "Locus", logo: "/images/recruiters/locus.jpg" },
  { name: "Freecharge", logo: "/images/recruiters/freecharge.jpg" },
  { name: "Sierra Cloud", logo: "/images/recruiters/sierracloud.jpg" },
];

const plans: Plan[] = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Get started with basic placement data access.",
    features: [
      { text: "Browse university profiles", included: true },
      { text: "View top 10 placements per college", included: true },
      { text: "Company directory access", included: true },
      { text: "SevenAI (5 messages/day)", included: true },
      { text: "Full placement history", included: false },
      { text: "Salary filters & analytics", included: false },
      { text: "Interview simulator", included: false },
      { text: "Senior connect", included: false },
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Basic",
    price: "₹99",
    period: "per month",
    description: "Everything you need to ace campus placements.",
    badge: "Popular",
    features: [
      { text: "Browse university profiles", included: true },
      { text: "Full placement history (3 yrs)", included: true },
      { text: "Salary filters & CTC analytics", included: true },
      { text: "SevenAI (100 messages/day)", included: true },
      { text: "Resume review by AI", included: true },
      { text: "Interview simulator (10/mo)", included: true },
      { text: "Senior connect", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Basic",
    highlight: true,
  },
  {
    name: "Pro",
    price: "₹299",
    period: "per month",
    description: "Unlimited access for serious placement aspirants.",
    features: [
      { text: "Everything in Basic", included: true },
      { text: "Full placement history (all yrs)", included: true },
      { text: "SevenAI unlimited messages", included: true },
      { text: "Interview simulator unlimited", included: true },
      { text: "Senior connect & mentorship", included: true },
      { text: "Company-specific prep kits", included: true },
      { text: "Aptitude & coding mock tests", included: true },
      { text: "Priority 24/7 support", included: true },
    ],
    cta: "Go Pro",
    highlight: false,
  },
];

const steps = [
  {
    step: "01",
    icon: GraduationCap,
    title: "Register Your Account",
    description:
      "Sign up with your university email. We verify your institution automatically and connect you to your campus placement network.",
    color: "from-blue-500 to-blue-700",
    shadowColor: "shadow-blue-500/30",
  },
  {
    step: "02",
    icon: TrendingUp,
    title: "Explore Placement Data",
    description:
      "Dive into rich placement analytics — company-wise offers, CTC distributions, branch-wise data, and year-over-year trends.",
    color: "from-purple-500 to-purple-700",
    shadowColor: "shadow-purple-500/30",
  },
  {
    step: "03",
    icon: Users,
    title: "Connect with Seniors",
    description:
      "Chat directly with placed alumni from your branch. Get insider tips, referrals, and guidance from those who've been there.",
    color: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/30",
  },
];

const aiChatMessages = [
  {
    role: "user" as const,
    text: "What companies visit Poornima University for placements?",
  },
  {
    role: "ai" as const,
    text: "Over 210 companies visited Poornima University in 2024! Top recruiters include Google, Microsoft, Amazon, Razorpay, Zomato, and TCS. The highest package offered was ₹32 LPA by Google for the SWE role. Want me to filter by branch?",
  },
  { role: "user" as const, text: "Yes, show me CSE branch data" },
  {
    role: "ai" as const,
    text: "For CSE branch at Poornima (2024): 🎯 Placed: 487/510 students · 📊 Avg CTC: ₹7.8 LPA · 🏆 Highest: ₹32 LPA (Google) · 🏢 Top recruiters: Google, Amazon, Flipkart, Razorpay, TCS",
  },
];

/* ─── Animation Variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

/* ─── Avatar color helper ────────────────────────────────────────────────── */
const avatarColors = [
  "from-blue-500 to-blue-700",
  "from-purple-500 to-purple-700",
  "from-emerald-500 to-emerald-700",
  "from-rose-500 to-rose-700",
  "from-amber-500 to-orange-600",
  "from-cyan-500 to-cyan-700",
  "from-pink-500 to-pink-700",
  "from-indigo-500 to-indigo-700",
];

/* ─────────────────────────────────────────────────────────────────────────── */
/*  HOMEPAGE COMPONENT                                                         */
/* ─────────────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [aiInput, setAiInput] = useState("");
  const [aiMessages, setAiMessages] = useState(aiChatMessages);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true });

  const filteredUniversities = universities.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAiSend = async () => {
    if (!aiInput.trim() || isAiLoading) return;
    const query = aiInput.trim();
    setAiMessages((prev) => [...prev, { role: "user", text: query }]);
    setAiInput("");
    setIsAiLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });
      const data = await res.json();
      setAiMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply || "I am currently analyzing placement trends. Please try again.",
        },
      ]);
    } catch (err) {
      setAiMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "SevenAI placement intelligence is ready. Please try asking your question again.",
        },
      ]);
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020408] text-white overflow-x-hidden selection:bg-[#D946EF] selection:text-white">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════
          SERENDALE DARK NEON HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-[#020408]">
        {/* Serendale Cosmic Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-[#D946EF]/20 via-[#8B5CF6]/20 to-[#00F0FF]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-12 left-10 w-96 h-96 bg-[#FF2E93]/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-[130px] pointer-events-none" />

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/[0.12] bg-[#060813]/80 backdrop-blur-xl shadow-[0_0_25px_rgba(217,70,239,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#FF2E93] animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90">
                Poornima University Official Intelligence
              </span>
              <span className="text-white/30">•</span>
              <span className="text-xs sm:text-sm font-semibold gradient-text-serendale">
                109 Verified Drives
              </span>
            </div>
          </motion.div>

          {/* Main Headline (Serendale typography) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2 mb-6"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
              <span className="gradient-text-serendale block">A Fast Placement.</span>
              <span className="text-white block mt-1">Scalable AI.</span>
            </h1>
          </motion.div>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-normal"
          >
            Our technology powers verified campus placement intelligence (109 Partner Companies · ₹42.10 LPA Peak), company interview preparation, and AI career acceleration across Poornima institutions.
          </motion.p>

          {/* Dual Serendale Pill CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <Link
              href="/placements"
              className="serendale-btn-primary px-9 py-3.5 rounded-full text-base font-semibold inline-flex items-center gap-2 group transition-all"
            >
              <span>Get started</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/placements"
              className="serendale-btn-secondary px-9 py-3.5 rounded-full text-base font-semibold inline-flex items-center gap-2 transition-all group"
            >
              <span>Ecosystems</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-fuchsia-300 group-hover:bg-[#D946EF]/20">
                109
              </span>
            </Link>
            <Link
              href="/ai"
              className="px-6 py-3.5 rounded-full text-sm font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-black/40 backdrop-blur-md inline-flex items-center gap-2 transition-all"
            >
              <Sparkles size={16} className="text-amber-400" />
              <span>Ask SevenAI</span>
            </Link>
          </motion.div>

          {/* 3D Cyberpunk AI Robot Graphic with floating telemetry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative w-full max-w-4xl mx-auto"
          >
            {/* Ambient neon backglow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF2E93]/30 via-[#D946EF]/20 to-[#8B5CF6]/30 rounded-3xl blur-3xl -z-10 scale-95" />

            {/* Graphic card container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#030508]/80 shadow-[0_0_50px_rgba(217,70,239,0.25)]">
              <img
                src="/images/serendale-hero.jpg"
                alt="Serendale AI Placement Exploration - Cyberpunk AI Robots"
                className="w-full h-auto max-h-[520px] object-cover object-center"
              />

              {/* Serendale dark vignette bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020408] via-[#020408]/60 to-transparent pointer-events-none" />

              {/* Floating Stat Badge 1: Top Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#060813]/85 backdrop-blur-xl border border-white/15 shadow-[0_0_20px_rgba(255,46,147,0.35)]"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF2E93] to-[#8B5CF6] flex items-center justify-center text-white shadow-lg">
                  <Trophy size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-400 font-medium">Highest Package</div>
                  <div className="text-sm font-bold text-white">
                    ₹42.10 LPA <span className="text-[#FF2E93] font-semibold text-xs">Amazon</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2: Top Right */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#060813]/85 backdrop-blur-xl border border-white/15 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#00F0FF] flex items-center justify-center text-white shadow-lg">
                  <Building2 size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-400 font-medium">Verified Recruitment</div>
                  <div className="text-sm font-bold text-white">
                    109 Companies <span className="text-emerald-400 font-semibold text-xs">100%</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Badge 3: Bottom Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#060813]/85 backdrop-blur-xl border border-white/15 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#8B5CF6] flex items-center justify-center text-slate-900 font-bold">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-400 font-medium">SevenAI Placement Intelligence</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    Flash 2.5 Active
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Badge 4: Bottom Right */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.8, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#060813]/85 backdrop-blur-xl border border-white/15 shadow-[0_0_20px_rgba(217,70,239,0.35)]"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF2E93] to-[#D946EF] flex items-center justify-center text-white">
                  <TrendingUp size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-400 font-medium">CSE Batch Placed</div>
                  <div className="text-sm font-bold text-emerald-400">
                    95.6% <span className="text-slate-400 font-normal text-xs">Poornima Univ</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Serendale Stats Counter Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
          >
            {[
              { label: "Partner Companies", end: 109, suffix: "", prefix: "" },
              { label: "Highest CTC Offer", end: 42.1, suffix: " LPA", prefix: "₹", decimals: 1 },
              { label: "Placed Students", end: 5000, suffix: "+", prefix: "" },
              { label: "Average CTC", end: 5.85, suffix: " LPA", prefix: "₹", decimals: 2 },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl bg-[#060813]/80 border border-white/[0.08] backdrop-blur-xl hover:border-white/20 transition-all text-center group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold gradient-text-serendale">
                  <AnimatedCounter
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium group-hover:text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom subtle divider fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════
          UNIVERSITY SEARCH SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="section-container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-10"
          >
            <motion.div variants={fadeUp} className="text-center space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/8 text-blue-400 text-sm">
                <GraduationCap size={14} />
                Poornima Group Institutions
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Poornima Group <span className="gradient-text">Institutions</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Explore placement records, top CTC distributions, NIRF achievements, and premier recruiting companies across Poornima University, Poornima Institute of Engineering & Technology, and Poornima College of Engineering.
              </p>
            </motion.div>

            {/* Search bar */}
            <motion.div variants={fadeUp} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Search universities by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
            </motion.div>

            {/* University cards grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              <AnimatePresence>
                {filteredUniversities.map((uni) => (
                  <motion.div
                    key={uni.id}
                    variants={fadeUp}
                    layout
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <Link href={`/universities/${uni.id}`}>
                      <GlassCard hover glow glowColor="blue" padding="md" className="h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-white p-1 border border-white/20 flex items-center justify-center shrink-0 shadow-md">
                            {uni.logo.startsWith('/') ? (
                              <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain" />
                            ) : (
                              <span className="text-xs font-bold text-slate-800">{uni.logo}</span>
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-white text-base leading-tight">
                              {uni.name}
                            </h3>
                            <div className="flex items-center gap-1.5 mt-1">
                              <MapPin size={11} className="text-slate-500" />
                              <span className="text-xs text-slate-500">
                                {uni.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-center p-2 rounded-lg bg-white/3 border border-white/8">
                            <p className="text-base font-bold text-blue-400">
                              {uni.placed.toLocaleString("en-IN")}
                            </p>
                            <p className="text-[10px] text-slate-500 mt-0.5">
                              Placed
                            </p>
                          </div>
                          <div className="text-center p-2 rounded-lg bg-white/3 border border-white/8">
                            <p className="text-base font-bold text-purple-400">
                              {uni.companies}+
                            </p>
                            <p className="text-[10px] text-slate-500 mt-0.5">
                              Companies
                            </p>
                          </div>
                          <div className="text-center p-2 rounded-lg bg-white/3 border border-white/8">
                            <p className="text-base font-bold text-emerald-400">
                              {uni.avgCTC}
                            </p>
                            <p className="text-[10px] text-slate-500 mt-0.5">
                              Avg CTC
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <Star size={12} className="text-amber-400 fill-amber-400" />
                            <span className="text-xs text-slate-400">
                              Top:{" "}
                              <span className="text-white font-medium">
                                {uni.topCompany}
                              </span>
                            </span>
                          </div>
                          <ChevronRight size={14} className="text-blue-400" />
                        </div>
                      </GlassCard>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div variants={fadeUp} className="text-center">
              <Link href="/universities" className="btn-ghost">
                View All Universities
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS SECTION
      ══════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-[#0A0F1E] to-purple-950/30 pointer-events-none" />
        <div className="section-container relative z-10">
          <motion.div
            ref={statsRef}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Users,
                end: 5000,
                suffix: "+",
                prefix: "",
                label: "Students Placed",
                color: "text-blue-400",
                bg: "from-blue-500/20 to-blue-700/10",
              },
              {
                icon: Building2,
                end: 200,
                suffix: "+",
                prefix: "",
                label: "Hiring Companies",
                color: "text-purple-400",
                bg: "from-purple-500/20 to-purple-700/10",
              },
              {
                icon: GraduationCap,
                end: 50,
                suffix: "+",
                prefix: "",
                label: "Universities",
                color: "text-amber-400",
                bg: "from-amber-500/20 to-amber-700/10",
              },
              {
                icon: IndianRupee,
                end: 32,
                suffix: " LPA",
                prefix: "₹",
                label: "Highest Package",
                color: "text-emerald-400",
                bg: "from-emerald-500/20 to-emerald-700/10",
              },
            ].map(({ icon: Icon, end, suffix, prefix, label, color, bg }) => (
              <motion.div key={label} variants={fadeUp}>
                <GlassCard padding="lg" glow className="text-center">
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${bg} flex items-center justify-center mb-4`}
                  >
                    <Icon size={26} className={color} />
                  </div>
                  <div className={`text-4xl font-bold ${color} mb-1`}>
                    <AnimatedCounter
                      end={end}
                      prefix={prefix}
                      suffix={suffix}
                      duration={2.5}
                    />
                  </div>
                  <p className="text-slate-400 text-sm">{label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED COMPANIES MARQUEE
      ══════════════════════════════════════════ */}
      <section className="py-16 relative overflow-hidden border-y border-white/5">
        <div className="mb-8 text-center">
          <span className="text-sm text-slate-500 uppercase tracking-widest font-medium">
            Trusted by graduates at
          </span>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...companyLogos, ...companyLogos].map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="inline-flex items-center gap-3 mx-4 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 whitespace-nowrap hover:border-blue-500/40 hover:bg-white/[0.08] transition-all"
              >
                {company.logo ? (
                  <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                    <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <Building2 size={16} className={company.color || "text-blue-400"} />
                )}
                <span className="font-semibold text-sm text-slate-200">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="section-container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-16"
          >
            <motion.div variants={fadeUp} className="text-center space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/8 text-purple-400 text-sm">
                <Zap size={14} />
                Simple as 1-2-3
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                How <span className="gradient-text">PlaceTrack</span> Works
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                From sign-up to your first offer — PlaceTrack makes every step
                of the placement journey simple and data-driven.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-amber-500/50" />

              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div key={step.step} variants={fadeUp}>
                    <GlassCard padding="lg" hover glow className="text-center relative">
                      <div
                        className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} shadow-xl ${step.shadowColor} flex items-center justify-center mb-5 relative z-10`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <div className="text-xs font-mono text-slate-600 mb-2">
                        STEP {step.step}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEVENAI FEATURE SECTION
      ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-[#0A0F1E] to-blue-950/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Chat preview */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlassCard padding="none" glow glowColor="gold" className="border-amber-400/20 overflow-hidden">
                {/* Chat header */}
                <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-400/30">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">SevenAI</p>
                    <p className="text-[11px] text-slate-500">
                      Powered by Google Gemini
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-emerald-400">Online</span>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-5 space-y-4 max-h-80 overflow-y-auto">
                  {aiMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.role === "ai" && (
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mr-2 mt-1 shrink-0">
                          <Sparkles size={12} className="text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-blue-500/20 text-blue-100 border border-blue-500/20 rounded-br-md"
                            : "bg-white/5 text-slate-200 border border-white/10 rounded-bl-md whitespace-pre-line"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isAiLoading && (
                    <div className="flex justify-start items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
                        <Sparkles size={12} className="text-white animate-spin" />
                      </div>
                      <div className="px-4 py-2 rounded-2xl bg-white/5 text-xs text-amber-300 border border-amber-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        SevenAI is analyzing placement records...
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat input */}
                <div className="px-5 pb-5">
                  <div className="flex items-center gap-2 p-2 pl-4 rounded-xl bg-white/5 border border-white/10">
                    <input
                      type="text"
                      value={aiInput}
                      onChange={(e) => setAiInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAiSend()}
                      placeholder="Ask about placements..."
                      className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                    <button
                      onClick={handleAiSend}
                      className="w-8 h-8 rounded-lg bg-amber-400 hover:bg-amber-300 flex items-center justify-center transition-colors"
                    >
                      <Send size={14} className="text-black" />
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-600 text-center mt-2">
                    Only placement &amp; study topics allowed
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Right — Features */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-sm font-medium mb-4">
                  <Sparkles size={14} />
                  Introducing SevenAI
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  Your AI-Powered{" "}
                  <span className="gradient-text-gold">Placement Coach</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  SevenAI is built on Google Gemini and trained on verified placement data
                  from Poornima University and Poornima Group campuses. Ask anything about placements, companies,
                  salaries, or interview prep.
                </p>
              </motion.div>

              <div className="space-y-4">
                {[
                  {
                    icon: BrainCircuit,
                    title: "Interview Simulator",
                    description:
                      "Practice with company-specific interview questions powered by real past interview data.",
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                  },
                  {
                    icon: Target,
                    title: "Resume Reviewer",
                    description:
                      "Get actionable feedback on your resume tailored to your target company and role.",
                    color: "text-purple-400",
                    bg: "bg-purple-500/10",
                  },
                  {
                    icon: MessageSquare,
                    title: "Placement Q&A",
                    description:
                      "Ask about any company's placement history, salary ranges, or selection process.",
                    color: "text-amber-400",
                    bg: "bg-amber-400/10",
                  },
                  {
                    icon: BookOpen,
                    title: "Study Roadmaps",
                    description:
                      "Get customized preparation roadmaps based on your target company's requirements.",
                    color: "text-emerald-400",
                    bg: "bg-emerald-500/10",
                  },
                ].map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div key={feature.title} variants={fadeUp}>
                      <GlassCard padding="sm" hover className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center shrink-0`}
                        >
                          <Icon size={18} className={feature.color} />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{feature.title}</p>
                          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div variants={fadeUp}>
                <Link
                  href="/ai"
                  className="btn-primary w-full justify-center text-base py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 shadow-amber-500/30"
                >
                  <Sparkles size={18} />
                  Try SevenAI for Free
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SUBSCRIPTION PLANS
      ══════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="section-container">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-14"
          >
            <motion.div variants={fadeUp} className="text-center space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-emerald-400 text-sm">
                <BadgeCheck size={14} />
                Transparent Pricing
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Simple, <span className="gradient-text">Affordable</span> Plans
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Start free forever. Upgrade when you need more data, AI sessions,
                or senior connections.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 items-start">
              {plans.map((plan) => (
                <motion.div key={plan.name} variants={fadeUp} className="relative">
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className="px-4 py-1 text-xs font-bold bg-blue-500 text-white rounded-full shadow-lg shadow-blue-500/30">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <GlassCard
                    padding="lg"
                    glow={plan.highlight}
                    glowColor="blue"
                    className={
                      plan.highlight
                        ? "border-blue-500/40 shadow-xl shadow-blue-500/10"
                        : ""
                    }
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                      <p className="text-slate-400 text-sm mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold gradient-text">
                          {plan.price}
                        </span>
                        <span className="text-slate-500 text-sm mb-1">
                          /{plan.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li
                          key={feature.text}
                          className="flex items-center gap-2.5"
                        >
                          <CheckCircle2
                            size={16}
                            className={
                              feature.included
                                ? "text-blue-400 shrink-0"
                                : "text-slate-700 shrink-0"
                            }
                          />
                          <span
                            className={`text-sm ${
                              feature.included
                                ? "text-slate-200"
                                : "text-slate-600 line-through"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={
                        plan.name === "Free"
                          ? "/register"
                          : `/pricing?plan=${plan.name.toLowerCase()}`
                      }
                      className={
                        plan.highlight
                          ? "btn-primary w-full justify-center"
                          : "btn-ghost w-full justify-center"
                      }
                    >
                      {plan.cta}
                    </Link>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              className="text-center text-sm text-slate-500"
            >
              All plans include 7-day free trial. Cancel anytime. Payments
              secured by{" "}
              <span className="text-blue-400">Razorpay</span>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RECENT PLACEMENTS
      ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-blue-950/10 to-[#0A0F1E] pointer-events-none" />
        <div className="section-container relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-end justify-between"
            >
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/8 text-blue-400 text-sm mb-3">
                  <Briefcase size={14} />
                  Class of 2024
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  Recent <span className="gradient-text">Placements</span>
                </h2>
              </div>
              <Link
                href="/placements"
                className="hidden sm:flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                View all <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {recentPlacements.map((placement, i) => (
                <motion.div key={placement.id} variants={fadeUp}>
                  <GlassCard
                    hover
                    glow
                    glowColor="blue"
                    padding="md"
                    className="h-full"
                  >
                    {/* Avatar */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-11 h-11 rounded-full bg-gradient-to-br ${
                          avatarColors[i % avatarColors.length]
                        } flex items-center justify-center text-sm font-bold text-white`}
                      >
                        {placement.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{placement.name}</p>
                        <p className="text-[11px] text-slate-500">
                          {placement.branch}
                        </p>
                      </div>
                    </div>

                    {/* Company & Role */}
                    <div className="mb-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Building2 size={12} className="text-blue-400" />
                        <span className="text-sm font-semibold text-blue-300">
                          {placement.company}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{placement.role}</p>
                    </div>

                    {/* Stats & LinkedIn Connect */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center gap-1">
                        <IndianRupee
                          size={12}
                          className="text-emerald-400"
                        />
                        <span className="text-sm font-bold text-emerald-400">
                          {placement.ctc}
                        </span>
                      </div>
                      <a
                        href={placement.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0A66C2]/15 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#0A66C2]/30 text-xs font-semibold transition-all duration-200"
                        title={`Connect with ${placement.name} on LinkedIn`}
                      >
                        <Linkedin size={12} />
                        <span>Connect</span>
                      </a>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="text-center sm:hidden">
              <Link href="/placements" className="btn-ghost">
                View all placements <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard
              padding="lg"
              glow
              glowColor="blue"
              className="text-center border-blue-500/20 relative overflow-hidden"
            >
              {/* Background effects inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

              <div className="relative z-10 space-y-5 py-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-sm">
                  <Sparkles size={14} className="text-amber-400" />
                  Join 5,000+ students on PlaceTrack
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  Ready to land your{" "}
                  <span className="gradient-text">dream job?</span>
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg">
                  Start for free today. Access real placement data, practice
                  with SevenAI, and connect with seniors who&apos;ve already
                  made it.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <Link
                    href="/register"
                    className="btn-primary text-base px-8 py-4"
                  >
                    Create Free Account
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/placements"
                    className="btn-ghost text-base px-8 py-4"
                  >
                    Browse Placements
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Need BookOpen imported
function BookOpen(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const size = props.size ?? 24;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
