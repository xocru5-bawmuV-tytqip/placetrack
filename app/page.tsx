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
  Send,
  Linkedin,
  Award,
  FileText,
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
    logo: "/images/logos/poornima-group.jpg",
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
    text: "Over 109 verified companies visit Poornima Group campuses! Top recruiters include Amazon (₹42.10 LPA), Flipkart (₹32.57 LPA), Morgan Stanley (₹25.33 LPA), VMware (₹23.8 LPA), and rtCamp Solutions (₹18 LPA). Want me to filter by CSE branch?",
  },
  { role: "user" as const, text: "Yes, show me CSE branch data" },
  {
    role: "ai" as const,
    text: "For CSE branch at Poornima: 🎯 Placed: 1,850+ students · 📊 Avg CTC: ₹5.85 LPA · 🏆 Highest: ₹42.10 LPA (Amazon) · 🏢 Top recruiters: Amazon, Morgan Stanley, VMware, Groww, Josh Tech, Kickdrum",
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
  const [activeWhyTab, setActiveWhyTab] = useState<"insights" | "leadership" | "ctc">("leadership");

  const statsRef = useRef<HTMLDivElement>(null);

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
    } catch {
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
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-[#0066FF] selection:text-white">
      <Navbar />

      {/* ════════════════════════════════════════════════════════════════════════
          1. CORPORATE ARCHITECTURAL HERO SECTION
          Exact match to user's uploaded reference:
          Deep navy campus perspective + uppercase centered headline + white pill CTA
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[560px] sm:min-h-[640px] flex flex-col items-center justify-center pt-28 pb-28 sm:pb-32 overflow-hidden bg-[#07172C]">
        {/* Real Campus Architecture with Dramatic Navy Shading */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-30 mix-blend-luminosity scale-105"
          style={{ backgroundImage: 'url("/images/poornima-campus-4k.jpg")' }}
        />
        {/* Rich deep navy gradient overlays matching reference */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07172C]/90 via-[#07172C]/85 to-[#07172C] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Top Subtitle with Wide Letter-Spacing */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-blue-200">
              ACCELERATING CAREERS
            </span>
          </motion.div>

          {/* Bold Centered Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase mb-8 leading-[1.08]"
          >
            AROUND THE WORLD
          </motion.h1>

          {/* Centered White Pill CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              href="/placements"
              className="inline-flex items-center justify-center px-9 py-3 rounded-full bg-white hover:bg-slate-100 text-[#07172C] font-extrabold text-xs tracking-widest uppercase shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              EXPLORE 109 DRIVES
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          2. SIGNATURE 5-CARD HORIZONTAL FLOATING DOCK
          Exact match to reference image:
          Overlaps the dark hero bottom boundary into the white section.
          Card 4 is VIBRANT ROYAL BLUE (#0066FF) with white text & circle arrow button.
      ════════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-14 sm:-mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl">
          {/* Card 1: Verified CTC */}
          <Link
            href="/placements"
            className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:shadow-lg text-center flex flex-col items-center justify-center group transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#0066FF] transition-colors">
              <TrendingUp size={20} />
            </div>
            <h4 className="text-xs font-black tracking-wider text-slate-900 uppercase mt-3">
              VERIFIED CTC
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">
              ₹42.10 LPA Peak Offer
            </p>
          </Link>

          {/* Card 2: Poornima University */}
          <Link
            href="/universities/poornima"
            className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:shadow-lg text-center flex flex-col items-center justify-center group transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#0066FF] transition-colors">
              <GraduationCap size={20} />
            </div>
            <h4 className="text-xs font-black tracking-wider text-slate-900 uppercase mt-3">
              POORNIMA UNIV
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">
              State Private University
            </p>
          </Link>

          {/* Card 3: PCE Jaipur */}
          <Link
            href="/universities/pce"
            className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:shadow-lg text-center flex flex-col items-center justify-center group transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#0066FF] transition-colors">
              <Building2 size={20} />
            </div>
            <h4 className="text-xs font-black tracking-wider text-slate-900 uppercase mt-3">
              PCE JAIPUR
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">
              Estd. 2000 · NBA Accredited
            </p>
          </Link>

          {/* Card 4: FEATURED ROYAL BLUE (#0066FF) -> SEVENAI COPILOT */}
          <Link
            href="/ai"
            className="bg-[#0066FF] text-white p-5 rounded-xl shadow-xl shadow-blue-500/30 text-center flex flex-col items-center justify-center group transform lg:-translate-y-2.5 lg:scale-105 z-10 transition-all hover:bg-[#0052CC]"
          >
            <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center text-white">
              <Sparkles size={20} />
            </div>
            <h4 className="text-xs font-black tracking-wider text-white uppercase mt-3">
              SEVENAI COPILOT
            </h4>
            <p className="text-[11px] text-blue-100 font-medium mt-0.5">
              AI Placement Intelligence
            </p>
            {/* Prominent Circular White Button with Blue Arrow inside */}
            <div className="w-7 h-7 rounded-full bg-white text-[#0066FF] flex items-center justify-center mt-3 shadow-md group-hover:scale-110 transition-transform">
              <ChevronRight size={16} strokeWidth={3} />
            </div>
          </Link>

          {/* Card 5: PIET Jaipur */}
          <Link
            href="/universities/piet"
            className="bg-white p-5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:shadow-lg text-center flex flex-col items-center justify-center group transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#0066FF] transition-colors">
              <Award size={20} />
            </div>
            <h4 className="text-xs font-black tracking-wider text-slate-900 uppercase mt-3">
              PIET AUTONOMOUS
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">
              NAAC &apos;A&apos; Grade College
            </p>
          </Link>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════════
          3. "WHY CHOOSE US?" SECTION
          Exact match to reference image:
          Pure crisp white background + 3 centered tabs + layered photo composition
          + corporate editorial typography
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white text-slate-900 pt-24 pb-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Us?
            </h2>

            {/* 3 Interactive Horizontal Tabs */}
            <div className="flex items-center justify-center gap-8 sm:gap-14 mt-6 border-b border-slate-100 pb-3 max-w-lg mx-auto">
              <button
                onClick={() => setActiveWhyTab("insights")}
                className={`text-xs sm:text-sm uppercase tracking-wider transition-all relative pb-2 ${
                  activeWhyTab === "insights"
                    ? "font-extrabold text-[#0066FF] after:absolute after:-bottom-3.5 after:left-0 after:right-0 after:h-0.5 after:bg-[#0066FF]"
                    : "font-semibold text-slate-400 hover:text-slate-700"
                }`}
              >
                In-Depth Insights
              </button>
              <button
                onClick={() => setActiveWhyTab("leadership")}
                className={`text-xs sm:text-sm uppercase tracking-wider transition-all relative pb-2 ${
                  activeWhyTab === "leadership"
                    ? "font-extrabold text-[#0066FF] after:absolute after:-bottom-3.5 after:left-0 after:right-0 after:h-0.5 after:bg-[#0066FF]"
                    : "font-semibold text-slate-400 hover:text-slate-700"
                }`}
              >
                Excellence &amp; Leadership
              </button>
              <button
                onClick={() => setActiveWhyTab("ctc")}
                className={`text-xs sm:text-sm uppercase tracking-wider transition-all relative pb-2 ${
                  activeWhyTab === "ctc"
                    ? "font-extrabold text-[#0066FF] after:absolute after:-bottom-3.5 after:left-0 after:right-0 after:h-0.5 after:bg-[#0066FF]"
                    : "font-semibold text-slate-400 hover:text-slate-700"
                }`}
              >
                Competitive CTCs
              </button>
            </div>
          </div>

          {/* Content Area: Layered Photo Collage on Left, Editorial Text on Right */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Layered Photographic Collage */}
            <div className="lg:col-span-6 relative">
              {/* Background Layer: Modern Campus Architecture */}
              <div className="w-[88%] h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="/images/poornima-campus-4k.jpg"
                  alt="Poornima Campus Architecture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Foreground Layer: Real Students Collaborating */}
              <div className="absolute top-10 sm:top-12 left-10 sm:left-14 w-[85%] h-64 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/images/poornima-students.jpg"
                  alt="Poornima Students Working on Placement Prep"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Corporate Editorial Typography */}
            <div className="lg:col-span-6 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              {activeWhyTab === "leadership" && (
                <>
                  <p>
                    <strong className="text-slate-900 font-bold">Poornima Group</strong> is
                    positioned as one of Rajasthan&apos;s premier educational conglomerates,
                    backed by renowned academicians and corporate mentors who have decades of
                    experience in technical and professional education. Experience verified
                    campus recruitment across software engineering, AI, analytics, and leadership roles.
                  </p>
                  <p>
                    Where the centralized Training &amp; Placement Cells are headquartered in
                    Jaipur (Poornima University, PCE, and PIET), connecting over 5,000+ graduates
                    annually with premier national and international recruiters including Amazon,
                    Flipkart, Morgan Stanley, and VMware.
                  </p>
                </>
              )}

              {activeWhyTab === "insights" && (
                <>
                  <p>
                    <strong className="text-slate-900 font-bold">PlaceTrack Intelligence</strong> delivers
                    authentic, verifiable recruitment logs directly from students who cracked
                    on-campus selection drives. Browse round-by-round interview questions, technical test patterns,
                    and coding problem banks.
                  </p>
                  <p>
                    With real-time CTC verification, students can analyze company performance trends,
                    stipend benchmarks, and branch-specific placement ratios with 100% data integrity.
                  </p>
                </>
              )}

              {activeWhyTab === "ctc" && (
                <>
                  <p>
                    <strong className="text-slate-900 font-bold">Premier CTC Milestones:</strong> Poornima
                    students consistently achieve record-setting offers, highlighted by Amazon&apos;s
                    ₹42.10 LPA package, Flipkart&apos;s ₹32.57 LPA, Morgan Stanley&apos;s ₹25.33 LPA,
                    and VMware&apos;s ₹23.8 LPA offers.
                  </p>
                  <p>
                    Our structured aptitude bootcamps, coding hackathons, and corporate mentorship
                    ensure graduates enter the industry in the top compensation percentiles.
                  </p>
                </>
              )}

              <div className="pt-2">
                <Link
                  href="/universities"
                  className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0066FF] hover:text-[#0052CC] group"
                >
                  <span>Explore Institutional Network</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          4. "PLACEMENT EXCELLENCE WITH A DIFFERENCE. INNOVATION." SECTION
          Exact match to reference image:
          Clean slate #F8FAFC background + 2 side-by-side photographic cards with circle buttons
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8FAFC] text-slate-900 py-24 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading, Paragraph, and Director Signature */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-[1.15]">
                Placement Excellence<br />
                With a Difference.<br />
                Innovation.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Poornima Group is one of the region&apos;s foremost educational networks as it
                continues to expand its horizons by providing innovative placement intelligence,
                supported by bold mentorship and decisive career training. We are aiming with
                confidence to be the best institutional placement &amp; career ecosystem.
              </p>
              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs font-black tracking-wider text-slate-900 uppercase block">
                  ARUN DEV CHOUDHARY
                </span>
                <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                  Director — Training &amp; Placements, Poornima Group
                </span>
              </div>
            </div>

            {/* Right Column: 2 Photographic Cards Side-by-Side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: WHO WE ARE */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="h-44 w-full rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <img
                      src="/images/poornima-campus-4k.jpg"
                      alt="Who We Are - Poornima Campus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-black text-[#0066FF] tracking-wider uppercase block mb-1">
                    WHO WE ARE
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Poornima Group stands as a pioneer in technical and higher education, transforming 5,000+ graduates into industry leaders.
                  </p>
                </div>
                <div className="pt-4">
                  <Link
                    href="/universities"
                    className="w-8 h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                  >
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>

              {/* Card 2: PLACEMENTS REDEFINED */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="h-44 w-full rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <img
                      src="/images/poornima-event.jpg"
                      alt="Placements Redefined - Auditorium Event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-black text-[#0066FF] tracking-wider uppercase block mb-1">
                    PLACEMENTS REDEFINED
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Driven by SevenAI placement coaching, verified CTC registries, and 109+ top corporate recruiter drives.
                  </p>
                </div>
                <div className="pt-4">
                  <Link
                    href="/placements"
                    className="w-8 h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                  >
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          5. "UNMATCHED SERVICES. UNMATCHED EXCELLENCE." SECTION
          Exact match to reference image:
          Deep royal navy #07172C background + 6 outlined glass cards grid
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#07172C] text-white py-24 relative overflow-hidden">
        {/* Subtle geometric watermark motif in bottom-right corner */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Bold White Title & Circular Indicator */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Unmatched<br />
                Services.<br />
                Unmatched<br />
                Excellence.
              </h2>
              {/* Circular Dot Indicator Matching Reference */}
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            </div>

            {/* Right Column: 6 Outlined Navy Glass Cards in 3x2 Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1: Campus Drives */}
              <div className="border border-white/20 bg-white/[0.04] p-5 rounded-xl hover:border-white/40 hover:bg-white/[0.08] transition-all">
                <Briefcase size={20} className="text-blue-300 mb-3" />
                <h4 className="text-xs font-black text-white tracking-wider uppercase mb-1.5">
                  CAMPUS DRIVES
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Verified on-campus and virtual recruitment drives for 109+ Fortune 500 and product startups.
                </p>
              </div>

              {/* Card 2: SevenAI Copilot */}
              <div className="border border-white/20 bg-white/[0.04] p-5 rounded-xl hover:border-white/40 hover:bg-white/[0.08] transition-all">
                <BrainCircuit size={20} className="text-blue-300 mb-3" />
                <h4 className="text-xs font-black text-white tracking-wider uppercase mb-1.5">
                  SEVENAI COPILOT
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  24/7 AI-driven mock interviews, salary intelligence, and company-specific aptitude coaching.
                </p>
              </div>

              {/* Card 3: CTC Benchmarking */}
              <div className="border border-white/20 bg-white/[0.04] p-5 rounded-xl hover:border-white/40 hover:bg-white/[0.08] transition-all">
                <IndianRupee size={20} className="text-blue-300 mb-3" />
                <h4 className="text-xs font-black text-white tracking-wider uppercase mb-1.5">
                  CTC BENCHMARKING
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Transparent, verified salary analytics, branch-wise CTC percentiles, and stipend tracking.
                </p>
              </div>

              {/* Card 4: Resume Optimization */}
              <Link
                href="/resources/resume"
                className="border border-white/20 bg-white/[0.04] p-5 rounded-xl hover:border-blue-400 hover:bg-white/[0.08] transition-all block group"
              >
                <div className="flex items-center justify-between mb-3">
                  <FileText size={20} className="text-blue-300 group-hover:text-blue-200" />
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    Live Tool
                  </span>
                </div>
                <h4 className="text-xs font-black text-white tracking-wider uppercase mb-1.5 group-hover:text-blue-200 transition-colors">
                  RESUME SCREENER &amp; ATS
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  ATS-optimized resume screening tailored specifically to match dream company role descriptions.
                </p>
              </Link>

              {/* Card 5: Alumni Network */}
              <div className="border border-white/20 bg-white/[0.04] p-5 rounded-xl hover:border-white/40 hover:bg-white/[0.08] transition-all">
                <Users size={20} className="text-blue-300 mb-3" />
                <h4 className="text-xs font-black text-white tracking-wider uppercase mb-1.5">
                  ALUMNI NETWORK
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Direct connection with placed seniors at Amazon, Microsoft, Flipkart, Morgan Stanley, and TCS.
                </p>
              </div>

              {/* Card 6: Accredited Excellence */}
              <div className="border border-white/20 bg-white/[0.04] p-5 rounded-xl hover:border-white/40 hover:bg-white/[0.08] transition-all">
                <Award size={20} className="text-blue-300 mb-3" />
                <h4 className="text-xs font-black text-white tracking-wider uppercase mb-1.5">
                  ACCREDITATION
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  NAAC &apos;A&apos; Grade, NBA accredited programs, and RTU/State University recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          6. FEATURED RECRUITERS MARQUEE (109 DRIVES)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-y border-slate-200/80 overflow-hidden">
        <div className="mb-6 text-center">
          <span className="text-xs text-slate-500 uppercase tracking-widest font-extrabold">
            109 Partner Recruiters Visiting Poornima Campuses
          </span>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...companyLogos, ...companyLogos].map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="inline-flex items-center gap-3 mx-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-white transition-all shadow-sm"
              >
                {company.logo ? (
                  <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-sm border border-slate-100">
                    <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <Building2 size={16} className={company.color || "text-[#0066FF]"} />
                )}
                <span className="font-bold text-xs text-slate-800">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          7. UNIVERSITY EXPLORER & SEARCH SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
              <GraduationCap size={14} />
              Poornima Group Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Campus Placement Portals
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Explore placement records, peak CTC distributions, and recruitment drives across Poornima University, PCE, and PIET.
            </p>
          </div>

          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search campus or branch (e.g., PCE, CSE, MBA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-500/20 shadow-sm text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredUniversities.map((uni) => (
                <Link key={uni.id + uni.name} href={`/universities/${uni.id}`}>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-blue-500 hover:shadow-lg transition-all h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 p-1 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                          <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#0066FF] transition-colors leading-snug">
                            {uni.name}
                          </h3>
                          <div className="flex items-center gap-1.5 mt-1">
                            <MapPin size={11} className="text-slate-400" />
                            <span className="text-xs text-slate-500">{uni.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100">
                        <div className="text-center">
                          <p className="text-sm font-extrabold text-[#0066FF]">
                            {uni.placed.toLocaleString("en-IN")}
                          </p>
                          <p className="text-[10px] text-slate-500 uppercase font-medium mt-0.5">Placed</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-extrabold text-purple-600">
                            {uni.companies}+
                          </p>
                          <p className="text-[10px] text-slate-500 uppercase font-medium mt-0.5">Drives</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-extrabold text-emerald-600">
                            {uni.avgCTC}
                          </p>
                          <p className="text-[10px] text-slate-500 uppercase font-medium mt-0.5">Avg CTC</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">{uni.topCompany}</span>
                      <ChevronRight size={16} className="text-[#0066FF] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          8. SEVENAI PLACEMENT INTELLIGENCE COACH SECTION
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Chat Console */}
            <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center text-white shadow-sm">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">SevenAI Placement Intelligence</h4>
                    <p className="text-[10px] text-slate-500">Powered by Google Gemini 2.5 Flash</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-200">
                  Online
                </span>
              </div>

              {/* Messages Container */}
              <div className="p-5 space-y-4 max-h-80 overflow-y-auto bg-slate-50/50">
                {aiMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[#0066FF] text-white rounded-br-none"
                          : "bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-sm whitespace-pre-line"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isAiLoading && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200 w-fit">
                    <Sparkles size={14} className="text-[#0066FF] animate-spin" />
                    <span>Analyzing verified Poornima placement records...</span>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-slate-100 bg-white">
                <div className="flex items-center gap-2 p-1.5 pl-3 rounded-xl border border-slate-200 focus-within:border-[#0066FF]">
                  <input
                    type="text"
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAiSend()}
                    placeholder="Ask about highest package, Amazon questions, or CSE trends..."
                    className="flex-1 bg-transparent text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                  <button
                    onClick={handleAiSend}
                    className="w-8 h-8 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white flex items-center justify-center transition-colors"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right side explanation */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} />
                Instant Career Copilot
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Ask Anything About Poornima Placement Drives
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                SevenAI analyzes 109 verified recruitment records from Poornima University,
                Poornima College of Engineering (PCE), and PIET. Get instant answers about eligibility
                criteria, selection rounds, coding questions, and package breakdowns.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <p className="text-lg font-black text-[#0066FF]">100%</p>
                  <p className="text-xs text-slate-600 mt-1">Verified Placement Records</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <p className="text-lg font-black text-[#0066FF]">Gemini 2.5</p>
                  <p className="text-xs text-slate-600 mt-1">Flash Model Powered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          9. RECENT PLACEMENTS (CLASS OF 2024 SHOWCASE)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-50 text-[#0066FF] text-xs font-bold uppercase tracking-wider mb-2">
                <Briefcase size={12} />
                Verified Student Offers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Recent Placements
              </h2>
            </div>
            <Link
              href="/placements"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066FF] hover:text-[#0052CC]"
            >
              View All Offers <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentPlacements.map((placement, i) => (
              <div
                key={placement.id}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                        avatarColors[i % avatarColors.length]
                      } flex items-center justify-center text-xs font-bold text-white shadow-sm`}
                    >
                      {placement.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-xs text-slate-900 leading-tight">
                        {placement.name}
                      </p>
                      <p className="text-[11px] text-slate-500">{placement.branch}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs font-bold text-[#0066FF]">{placement.company}</p>
                    <p className="text-[11px] text-slate-600 truncate">{placement.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs font-extrabold text-emerald-600">
                    {placement.ctc}
                  </span>
                  <a
                    href={placement.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white text-[11px] font-bold transition-colors"
                  >
                    <Linkedin size={11} />
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Deep Navy Footer */}
      <Footer />
    </div>
  );
}
