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
    name: "Poornima University",
    location: "Jaipur, Rajasthan",
    placed: 1842,
    companies: 210,
    avgCTC: "₹6.4 LPA",
    topCompany: "Google",
    logo: "PU",
  },
  {
    id: "vit-jaipur",
    name: "VIT Jaipur",
    location: "Jaipur, Rajasthan",
    placed: 2130,
    companies: 185,
    avgCTC: "₹7.2 LPA",
    topCompany: "Microsoft",
    logo: "VJ",
  },
  {
    id: "mnit",
    name: "MNIT Jaipur",
    location: "Jaipur, Rajasthan",
    placed: 980,
    companies: 156,
    avgCTC: "₹12.8 LPA",
    topCompany: "Amazon",
    logo: "MN",
  },
  {
    id: "bits-pilani",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    placed: 1560,
    companies: 240,
    avgCTC: "₹18.5 LPA",
    topCompany: "Goldman Sachs",
    logo: "BP",
  },
  {
    id: "jnu-jaipur",
    name: "Jaipur National Univ.",
    location: "Jaipur, Rajasthan",
    placed: 720,
    companies: 98,
    avgCTC: "₹4.8 LPA",
    topCompany: "TCS",
    logo: "JN",
  },
  {
    id: "jecrc",
    name: "JECRC University",
    location: "Jaipur, Rajasthan",
    placed: 890,
    companies: 120,
    avgCTC: "₹5.2 LPA",
    topCompany: "Infosys",
    logo: "JE",
  },
];

const recentPlacements: PlacementCard[] = [
  {
    id: "1",
    name: "Amit Sharma",
    company: "Google",
    role: "SWE II",
    ctc: "₹32 LPA",
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "AS",
  },
  {
    id: "2",
    name: "Priya Meena",
    company: "Microsoft",
    role: "Software Engineer",
    ctc: "₹28 LPA",
    year: 2024,
    branch: "B.Tech IT",
    avatar: "PM",
  },
  {
    id: "3",
    name: "Arjun Singh",
    company: "Amazon",
    role: "SDE I",
    ctc: "₹24 LPA",
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "AS",
  },
  {
    id: "4",
    name: "Anjali Gupta",
    company: "Flipkart",
    role: "Data Analyst",
    ctc: "₹18 LPA",
    year: 2024,
    branch: "B.Sc. DS",
    avatar: "AG",
  },
  {
    id: "5",
    name: "Vikram Patel",
    company: "Razorpay",
    role: "Backend Engineer",
    ctc: "₹22 LPA",
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "VP",
  },
  {
    id: "6",
    name: "Neha Joshi",
    company: "Zomato",
    role: "Product Manager",
    ctc: "₹20 LPA",
    year: 2024,
    branch: "MBA",
    avatar: "NJ",
  },
  {
    id: "7",
    name: "Rohan Agarwal",
    company: "Meesho",
    role: "Full Stack Dev",
    ctc: "₹16 LPA",
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "RA",
  },
  {
    id: "8",
    name: "Divya Verma",
    company: "Paytm",
    role: "SDE II",
    ctc: "₹19 LPA",
    year: 2024,
    branch: "B.Tech ECE",
    avatar: "DV",
  },
];

const companyLogos = [
  { name: "Google", color: "text-blue-400" },
  { name: "Microsoft", color: "text-green-400" },
  { name: "Amazon", color: "text-amber-400" },
  { name: "Flipkart", color: "text-yellow-400" },
  { name: "Razorpay", color: "text-blue-500" },
  { name: "Zomato", color: "text-red-400" },
  { name: "CRED", color: "text-emerald-400" },
  { name: "Swiggy", color: "text-orange-400" },
  { name: "PhonePe", color: "text-purple-400" },
  { name: "Infosys", color: "text-blue-300" },
  { name: "TCS", color: "text-blue-500" },
  { name: "Wipro", color: "text-cyan-400" },
  { name: "HCL", color: "text-indigo-400" },
  { name: "Byju's", color: "text-violet-400" },
  { name: "Ola", color: "text-yellow-500" },
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
    <div className="min-h-screen bg-[#0A0F1E] text-white overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 section-container w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
                  <Sparkles size={14} className="text-amber-400" />
                  Poornima University&apos;s Official Placement Portal
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fadeUp} className="space-y-3">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                  <span className="text-white">Find Your</span>
                  <br />
                  <span className="gradient-text-hero">Placement</span>
                  <br />
                  <span className="gradient-text">Path.</span>
                </h1>
                <p className="text-slate-400 text-lg sm:text-xl max-w-lg leading-relaxed">
                  Real placement data, AI-powered prep, and senior connections —
                  everything you need to land your dream job at{" "}
                  <span className="text-blue-400 font-medium">
                    Poornima University
                  </span>{" "}
                  and beyond.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/placements"
                  className="btn-primary group text-base px-7 py-3.5"
                >
                  Explore Placements
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/ai"
                  className="btn-ghost group text-base px-7 py-3.5 border-amber-400/30 hover:border-amber-400/50"
                >
                  <Sparkles size={16} className="text-amber-400" />
                  <span>Try SevenAI</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-amber-400/20 text-amber-300 rounded-md">
                    FREE
                  </span>
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
              >
                {[
                  {
                    end: 5000,
                    suffix: "+",
                    label: "Placed Students",
                    prefix: "",
                  },
                  {
                    end: 200,
                    suffix: "+",
                    label: "Companies",
                    prefix: "",
                  },
                  {
                    end: 50,
                    suffix: "+",
                    label: "Universities",
                    prefix: "",
                  },
                  {
                    end: 32,
                    suffix: " LPA",
                    label: "Highest CTC",
                    prefix: "₹",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-xl bg-white/3 border border-white/8"
                  >
                    <div className="text-2xl font-bold gradient-text">
                      <AnimatedCounter
                        end={stat.end}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Floating placement cards */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:flex items-center justify-center h-[520px]"
            >
              {/* Central glow orb */}
              <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />

              {/* Floating cards */}
              <div className="relative w-full h-full">
                {/* Card 1 — top left */}
                <motion.div
                  className="absolute top-8 left-0 w-64"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <GlassCard padding="sm" glow glowColor="blue">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-xs font-bold">
                        AS
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Amit Sharma</p>
                        <p className="text-xs text-slate-400">
                          Google · SWE II
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-xs font-bold text-emerald-400">
                          ₹32 LPA
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Card 2 — top right */}
                <motion.div
                  className="absolute top-24 right-0 w-60"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    delay: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <GlassCard padding="sm" glow glowColor="purple">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-xs font-bold">
                        PM
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Priya Meena</p>
                        <p className="text-xs text-slate-400">
                          Microsoft · SWE
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-400">
                        ₹28 LPA
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-emerald-400/15 text-emerald-400 rounded-md">
                        2024
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Central card */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <GlassCard padding="md" glow glowColor="blue" className="border-blue-500/30">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles size={16} className="text-amber-400" />
                      <span className="text-sm font-semibold text-amber-300">
                        SevenAI Insight
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      📈 <span className="text-white font-medium">CSE 2024 batch</span>{" "}
                      at Poornima University had{" "}
                      <span className="text-blue-400 font-semibold">
                        95.6% placement rate
                      </span>{" "}
                      with avg CTC of{" "}
                      <span className="text-emerald-400 font-semibold">
                        ₹7.8 LPA
                      </span>
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] text-slate-500">
                        Updated 2h ago
                      </span>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] text-emerald-400">Live</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Card 3 — bottom left */}
                <motion.div
                  className="absolute bottom-16 left-4 w-56"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4.5,
                    delay: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <GlassCard padding="sm" glow glowColor="gold">
                    <div className="flex items-center gap-2 mb-1">
                      <Trophy size={14} className="text-amber-400" />
                      <span className="text-xs font-semibold text-amber-300">
                        Highest Package
                      </span>
                    </div>
                    <p className="text-2xl font-bold gradient-text-gold">
                      ₹32 LPA
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Google · Poornima University
                    </p>
                  </GlassCard>
                </motion.div>

                {/* Card 4 — bottom right */}
                <motion.div
                  className="absolute bottom-8 right-0 w-56"
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 3.8,
                    delay: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <GlassCard padding="sm">
                    <div className="text-xs text-slate-400 mb-1">
                      Companies this season
                    </div>
                    <div className="text-xl font-bold text-white">
                      210+
                    </div>
                    <div className="mt-2 flex -space-x-1">
                      {["G", "M", "A", "F", "R"].map((l, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-full border border-[#0A0F1E] flex items-center justify-center text-[9px] font-bold text-white bg-gradient-to-br ${avatarColors[i]}`}
                        >
                          {l}
                        </div>
                      ))}
                      <div className="w-6 h-6 rounded-full border border-[#0A0F1E] bg-white/10 flex items-center justify-center text-[9px] text-slate-300">
                        +
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1E] to-transparent pointer-events-none" />
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
                50+ Universities Listed
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Find Your{" "}
                <span className="gradient-text">University</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Search from 50+ universities across Rajasthan and India. Compare
                placement stats, salaries, and top recruiters.
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
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-300 shrink-0">
                            {uni.logo}
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
                className="inline-flex items-center gap-2.5 mx-8 px-6 py-3 rounded-xl bg-white/3 border border-white/8 whitespace-nowrap"
              >
                <Building2 size={16} className={company.color} />
                <span className={`font-semibold text-sm ${company.color}`}>
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
                  SevenAI is built on Google Gemini and trained on placement data
                  from 50+ universities. Ask anything about placements, companies,
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

                    {/* Stats */}
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
                      <div className="flex items-center gap-1">
                        <Clock size={11} className="text-slate-500" />
                        <span className="text-[11px] text-slate-500">
                          {placement.year}
                        </span>
                      </div>
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
