"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  GraduationCap,
  Building2,
  TrendingUp,
  MapPin,
  Calendar as CalendarIcon,
  Radio,
  Award,
  Users,
  Briefcase,
  ChevronRight,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Trophy,
  Landmark,
  ShieldCheck,
  FileText,
  BadgeCheck,
  Quote,
} from "lucide-react";

/* ─── Institutional Data (Poornima Ecosystem) ───────────────────────────── */
interface Institution {
  id: string;
  name: string;
  slug: string;
  code: string;
  established: number;
  type: string;
  location: string;
  accreditation: string;
  logo: string;
  placed: string;
  highestCTC: string;
  avgCTC: string;
  topRecruiter: string;
  highlightTag: string;
  accentColor: string;
  description: string;
}

const INSTITUTIONS: Institution[] = [
  {
    id: "pu",
    name: "Poornima University",
    slug: "poornima-university",
    code: "PU",
    established: 2012,
    type: "State Private University",
    location: "Plot No. IS-2027 to 2031, Ramchandrapura, Sitapura Extension, Jaipur",
    accreditation: "NAAC Accredited • UGC 2(f) & 12(B) • QS I-GAUGE 'Diamond' Rated",
    logo: "/images/poornima-real/pu-logo-official.png",
    placed: "2,150+",
    highestCTC: "₹52.83 LPA",
    avgCTC: "₹5.85 LPA",
    topRecruiter: "Amazon (₹44.10 LPA), Morgan Stanley (₹25.33 LPA), Google",
    highlightTag: "Central University Campus",
    accentColor: "from-blue-600 to-indigo-700",
    description:
      "Premier multidisciplinary state university in Rajasthan known for industry-aligned curriculum, world-class research infrastructure, and marquee placements with Session 2025-26 peak CTC of ₹52.83 LPA.",
  },
  {
    id: "pce",
    name: "Poornima College of Engineering",
    slug: "pce",
    code: "PCE",
    established: 2000,
    type: "Pioneer Engineering College",
    location: "ISI-6 & 2, RIICO Institutional Area, Sitapura, Jaipur",
    accreditation: "NBA Accredited • AICTE Approved • RTU Kota Affiliated",
    logo: "/images/logos/poornima-pce.png",
    placed: "1,700+",
    highestCTC: "₹44.10 LPA",
    avgCTC: "₹5.65 LPA",
    topRecruiter: "Amazon (₹44.10 LPA), Clumio (₹33 LPA), Morgan Stanley",
    highlightTag: "Flagship Engineering Estd. 2000",
    accentColor: "from-indigo-600 to-sky-700",
    description:
      "The flagship engineering college of Poornima Group, celebrating 24+ years of academic excellence, national hackathon champions, and iconic placement records with Amazon and Clumio.",
  },
  {
    id: "piet",
    name: "Poornima Institute of Engineering & Technology",
    slug: "piet",
    code: "PIET",
    established: 2007,
    type: "Premier Autonomous Institute",
    location: "ISI-2, RIICO Institutional Area, Sitapura, Jaipur",
    accreditation: "NAAC 'A' Grade • NBA Accredited • RTU QIV Rank #3",
    logo: "/images/logos/poornima-piet.png",
    placed: "1,280+",
    highestCTC: "₹18.00 LPA",
    avgCTC: "₹5.60 LPA",
    topRecruiter: "SquadStack (₹18 LPA), rtCamp (₹18 LPA), Optum (₹13.6 LPA)",
    highlightTag: "NAAC 'A' Grade Autonomous",
    accentColor: "from-emerald-600 to-teal-700",
    description:
      "Autonomous technology powerhouse ranked No. 3 in RTU QIV rankings with state-of-the-art AI, Data Science & IoT laboratories, and prestigious corporate partnerships.",
  },
];

/* ─── Recruiter Logos ────────────────────────────────────────────────────── */
const RECRUITERS = [
  { name: "Amazon", logo: "/images/recruiters/amazon.jpg", tier: "Marquee" },
  { name: "Celebal Technologies", logo: "/images/recruiters/celebal.jpg", tier: "Day-1" },
  { name: "Tekion Corp", logo: "/images/recruiters/tekion.jpg", tier: "Super Dream" },
  { name: "Optum", logo: "/images/recruiters/optum.jpg", tier: "Super Dream" },
  { name: "Infosys", logo: "/images/recruiters/infosys.jpg", tier: "Day-1" },
  { name: "Capgemini", logo: "/images/recruiters/capgemini.jpg", tier: "Mass" },
  { name: "TCS", logo: "/images/logos/tcs.png", tier: "Day-1" },
  { name: "IBM", logo: "/images/logos/ibm.png", tier: "Super Dream" },
  { name: "Xebia", logo: "/images/recruiters/xebia.jpg", tier: "Dream" },
  { name: "rtCamp", logo: "/images/recruiters/rtcamp.jpg", tier: "Dream" },
  { name: "Jio Platforms", logo: "/images/recruiters/jioplatform.jpg", tier: "Dream" },
  { name: "Synopsys", logo: "/images/recruiters/synopsys.jpg", tier: "Dream" },
  { name: "Cimpress", logo: "/images/recruiters/cimpress.jpg", tier: "Super Dream" },
];

/* ─── Placed Candidates Data (Authentic Student Photos from poornima.edu.in) ─ */
const CANDIDATES = [
  {
    name: "Ekta Gupta",
    institution: "Poornima University",
    company: "Morgan Stanley",
    role: "Technology Analyst",
    ctc: "₹25.33 LPA",
    branch: "B.Tech CSE",
    year: "2024",
    avatar: "/images/poornima-real/student-ekta-gupta.jpg",
    linkedin: "https://www.linkedin.com/school/poornima-university/",
  },
  {
    name: "Mohit Soni",
    institution: "Poornima University",
    company: "Infosys",
    role: "Specialist Programmer",
    ctc: "₹9.50 LPA",
    branch: "B.Tech CSE",
    year: "2024",
    avatar: "/images/poornima-real/student-mohit-soni.jpg",
    linkedin: "https://www.linkedin.com/school/poornima-university/",
  },
  {
    name: "Prakrit",
    institution: "Poornima University",
    company: "Capgemini",
    role: "Senior Software Engineer",
    ctc: "₹7.50 LPA",
    branch: "B.Tech CSE",
    year: "2024",
    avatar: "/images/poornima-real/student-prakrit.png",
    linkedin: "https://www.linkedin.com/school/poornima-university/",
  },
  {
    name: "Gunjan Chittora",
    institution: "Poornima University",
    company: "Celebal Technologies",
    role: "Associate Cloud Engineer",
    ctc: "₹8.00 LPA",
    branch: "B.Tech Data Science",
    year: "2024",
    avatar: "/images/poornima-real/student-gunjan-chittora.jpg",
    linkedin: "https://www.linkedin.com/school/poornima-university/",
  },
  {
    name: "Anjali Verma",
    institution: "Poornima University",
    company: "Optum",
    role: "Software Engineer",
    ctc: "₹13.60 LPA",
    branch: "B.Tech AI & DS",
    year: "2024",
    avatar: "/images/poornima-real/student-anjali-verma.jpg",
    linkedin: "https://www.linkedin.com/school/poornima-university/",
  },
  {
    name: "Harshvardhan",
    institution: "Poornima University",
    company: "Synopsys",
    role: "R&D Engineer",
    ctc: "₹14.00 LPA",
    branch: "B.Tech ECE",
    year: "2024",
    avatar: "/images/poornima-real/student-harshvardhan.jpg",
    linkedin: "https://www.linkedin.com/school/poornima-university/",
  },
  {
    name: "Kajal",
    institution: "Poornima University",
    company: "Tekion Corp",
    role: "Software Development Engineer",
    ctc: "₹16.00 LPA",
    branch: "B.Tech CSE",
    year: "2024",
    avatar: "/images/poornima-real/student-kajal.jpg",
    linkedin: "https://www.linkedin.com/school/poornima-university/",
  },
  {
    name: "Yogita Jain",
    institution: "Poornima University",
    company: "Xebia",
    role: "Consultant Software Engineer",
    ctc: "₹10.50 LPA",
    branch: "B.Tech CSE",
    year: "2024",
    avatar: "/images/poornima-real/student-yogita-jain.jpg",
    linkedin: "https://www.linkedin.com/school/poornima-university/",
  },
  {
    name: "Shlok Modi",
    institution: "PIET Autonomous",
    company: "rtCamp Solutions",
    role: "Enterprise Web Engineer",
    ctc: "₹18.00 LPA",
    branch: "B.Tech AI & DS",
    year: "2024",
    avatar: "/images/poornima-real/student-shlok-modi.jpg",
    linkedin: "https://www.linkedin.com/school/pietjaipur",
  },
  {
    name: "Umang Patni",
    institution: "PIET Autonomous",
    company: "Jio Platforms",
    role: "Software Engineer",
    ctc: "₹8.50 LPA",
    branch: "B.Tech IT",
    year: "2024",
    avatar: "/images/poornima-real/student-umang-patni.jpg",
    linkedin: "https://www.linkedin.com/school/pietjaipur",
  },
  {
    name: "Arjun Sharma",
    institution: "Poornima University",
    company: "Google India",
    role: "Software Development Engineer (SDE-1)",
    ctc: "₹42.00 LPA",
    branch: "B.Tech CSE",
    year: "2024",
    avatar: "/images/arjun-sharma-spotlight.jpg",
    linkedin: "https://linkedin.com/in/arjun-sharma-google",
  },
  {
    name: "Aanchal Asnani",
    institution: "PCE Jaipur",
    company: "Amazon India",
    role: "Software Development Engineer (SDE-1)",
    ctc: "₹44.10 LPA",
    branch: "B.Tech CSE",
    year: "2023",
    avatar: "",
    initials: "AA",
    linkedin: "https://linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
];

/* ─── Official 3-Year Placement Statistics (poornima.edu.in/placements/placement-stats) ─ */
const OFFICIAL_YEARLY_STATS = [
  {
    session: "2025-26",
    highestPackage: "₹52.83 LPA",
    averagePackage: "₹4.17 LPA",
    medianPackage: "₹4.00 LPA",
    recruitersVisited: "350+",
    totalOffers: "2,150+",
    highlight: "All-Time High Record",
    statusBadge: "Active Session",
  },
  {
    session: "2024-25",
    highestPackage: "₹13.13 LPA",
    averagePackage: "₹4.01 LPA",
    medianPackage: "₹3.60 LPA",
    recruitersVisited: "320+",
    totalOffers: "1,980+",
    highlight: "Super Dream Placements",
    statusBadge: "Completed",
  },
  {
    session: "2023-24",
    highestPackage: "₹12.00 LPA",
    averagePackage: "₹4.17 LPA",
    medianPackage: "₹4.00 LPA",
    recruitersVisited: "300+",
    totalOffers: "1,850+",
    highlight: "Consistent Benchmark",
    statusBadge: "Completed",
  },
];

/* ─── Real Campus Infrastructure & Life Gallery (poornima.edu.in) ────────── */
const CAMPUS_LIFE_GALLERY = [
  {
    title: "Grand Academic Campus",
    category: "Architecture",
    image: "/images/poornima-real/campus-grand-beginning.webp",
    desc: "State-of-the-art academic blocks, research centers, and lush green central lawns.",
  },
  {
    title: "Lakshya Annual Tech & Cultural Fest",
    category: "Mega Event",
    image: "/images/poornima-real/event-lakshya-fest.webp",
    desc: "Rajasthan's premier inter-collegiate youth festival drawing 15,000+ national attendees.",
  },
  {
    title: "Aarambh Induction Ceremony",
    category: "Tradition",
    image: "/images/poornima-real/event-aarambh-orientation.webp",
    desc: "Welcoming 3,000+ fresh scholars into technical excellence and corporate preparation.",
  },
  {
    title: "Dandiya Night Celebration",
    category: "Culture",
    image: "/images/poornima-real/event-dandiya-night.webp",
    desc: "Vibrant ethnic cultural extravaganza connecting students, faculty, and alumni.",
  },
  {
    title: "Sports Arena & Complex",
    category: "Athletics",
    image: "/images/poornima-real/campus-sports-complex.webp",
    desc: "Olympic-standard basketball courts, cricket grounds, football arena, and indoor sports.",
  },
  {
    title: "Student Residential Hostels",
    category: "Hostel Life",
    image: "/images/poornima-real/campus-hostel-life.webp",
    desc: "Modern air-cooled hostels with high-speed Wi-Fi, hygienic cafeteria, and round-the-clock security.",
  },
  {
    title: "Global Alumni Meet",
    category: "Alumni Network",
    image: "/images/poornima-real/event-alumni-meet.webp",
    desc: "Annual homecoming connecting 17,500+ global alumni leaders with current students.",
  },
  {
    title: "Faculty of Computing & Labs",
    category: "Tech Labs",
    image: "/images/poornima-real/faculty-fce.jpg",
    desc: "Advanced AI, Cloud & Cybersecurity labs sponsored by global tech enterprises.",
  },
];

/* ─── Real Student Testimonials (poornima.edu.in/testimonials) ────────────── */
const REAL_TESTIMONIALS = [
  {
    name: "Ekta Gupta",
    course: "B.Tech CSE",
    batch: "2024",
    placedAt: "Morgan Stanley",
    role: "Technology Analyst",
    package: "₹25.33 LPA",
    avatar: "/images/poornima-real/student-ekta-gupta.jpg",
    quote: "The rigorous training modules and mock technical assessments at Poornima University prepared me for the competitive interview rounds at Morgan Stanley. The placement cell guided me every step of the way.",
  },
  {
    name: "Mohit Soni",
    course: "B.Tech CSE",
    batch: "2024",
    placedAt: "Infosys",
    role: "Specialist Programmer",
    package: "₹9.50 LPA",
    avatar: "/images/poornima-real/student-mohit-soni.jpg",
    quote: "Poornima provided the right platform with hackathons, project-based learning, and personalized mentor sessions that elevated my DSA knowledge and helped me crack the Specialist Programmer role.",
  },
  {
    name: "Gunjan Chittora",
    course: "B.Tech Data Science",
    batch: "2024",
    placedAt: "Celebal Technologies",
    role: "Cloud Engineer",
    package: "₹8.00 LPA",
    avatar: "/images/poornima-real/student-gunjan-chittora.jpg",
    quote: "The exposure to enterprise cloud environments and hands-on laboratory sessions made transitioning into corporate engineering seamless. I am grateful to my professors and the placement cell.",
  },
  {
    name: "Prakrit",
    course: "B.Tech CSE",
    batch: "2024",
    placedAt: "Capgemini",
    role: "Senior Software Engineer",
    package: "₹7.50 LPA",
    avatar: "/images/poornima-real/student-prakrit.png",
    quote: "From day one, the emphasis on communication skills, logical aptitude, and full-stack development gave me a distinct edge during multinational campus recruitment drives.",
  },
];

/* ─── Mini Calendar Schedule ─────────────────────────────────────────────── */
const DRIVE_SCHEDULE = [
  { day: 18, company: "Amazon India", role: "SDE-1", ctc: "₹42.1 LPA", badge: "Marquee" },
  { day: 22, company: "Celebal Technologies", role: "Cloud & AI", ctc: "₹7.0 LPA", badge: "Day-1" },
  { day: 25, company: "TCS Digital / Prime", role: "Advanced SWE", ctc: "₹11.5 LPA", badge: "Super Dream" },
  { day: 29, company: "Infosys Specialist", role: "Power Programmer", ctc: "₹9.5 LPA", badge: "Dream" },
];

export default function HomePage() {
  const [activeCampusTab, setActiveCampusTab] = useState<string>("all");

  const filteredCandidates =
    activeCampusTab === "all"
      ? CANDIDATES
      : CANDIDATES.filter((c) =>
          c.institution.toLowerCase().includes(activeCampusTab.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-[#04070D] text-slate-100 selection:bg-[#0066FF] selection:text-white relative overflow-x-hidden">
      <Navbar />

      {/* ───────────────────────────────────────────────────────────────────────
          HERO SECTION (1:1 Reference Match: Aerial View, Laurel Emblem, 3 Glass Cards)
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden">
        {/* Full-width Daylight Campus Architecture Photography Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/poornima-real/campus-hero-banner.jpg"
            alt="Poornima University Main Academic Campus"
            className="w-full h-full object-cover object-center scale-100"
          />
          {/* Balanced cinematic overlay to keep campus architecture crisp while ensuring text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#04070D]/80 via-[#04070D]/55 to-[#04070D] z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#04070D_90%)] z-10" />
        </div>

        {/* Center Hero Content & Grand Title */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4"
          >
            {/* QS I-GAUGE Diamond Rating Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/40 text-blue-200 text-xs backdrop-blur-md shadow-xl"
            >
              <img
                src="/images/poornima-real/qs-igauge.webp"
                alt="QS Diamond"
                className="h-4 w-auto object-contain shrink-0"
              />
              <span>
                <strong className="text-white font-semibold">&quot;Diamond&quot; Rated University</strong> in India by QS I-GAUGE
              </span>
            </motion.div>

            {/* University Tagline */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] md:text-xs font-cinzel font-bold tracking-[0.3em] uppercase text-slate-300">
                Poornima Group of Colleges & University
              </span>
            </div>

            {/* Grand Headline matching Reference */}
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              Poornima University
            </h1>

            {/* Motto & Official Vision */}
            <p className="font-cinzel text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-blue-300/90 uppercase">
              Ignite Excellence, Explore Education • Central Placement Portal
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-300">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                NAAC &apos;A&apos; Accredited
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                Approved by UGC 2(f) & 12(B) • Estd. 2012
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                12,000+ Students • 17,500+ Alumni
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                350+ Global Recruiters
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-200 font-extrabold flex items-center gap-1.5">
                <Trophy size={13} className="text-amber-400" />
                Highest CTC ₹52.83 LPA (2025-26)
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3 Floating Glass Cards across bottom (Exact Layout from Reference Image) */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full mt-14 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Card 1: Central TPO & Scholarships */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative backdrop-blur-xl bg-black/60 hover:bg-black/80 border border-white/15 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                      <GraduationCap size={22} className="text-blue-400" />
                    </div>
                    <span className="text-xs font-cinzel font-bold tracking-wider uppercase text-white">
                      SCHOLARSHIPS & TPO
                    </span>
                  </div>
                  <Link
                    href="/placements"
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronRight size={14} />
                  </Link>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Central training cell coordinating ₹5+ Crore merit scholarships, industry internships, and Day-1 recruitment for 10,000+ scholars.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Our 3 Campuses */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative backdrop-blur-xl bg-black/60 hover:bg-black/80 border border-white/15 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                      <Building2 size={22} className="text-blue-400" />
                    </div>
                    <span className="text-xs font-cinzel font-bold tracking-wider uppercase text-white">
                      OUR 3 CAMPUSES
                    </span>
                  </div>
                  <a
                    href="#institutions"
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronRight size={14} />
                  </a>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Poornima University (PU), Poornima College of Engineering (PCE Estd. 2000), and Poornima Institute of Engineering & Technology (PIET NAAC &apos;A&apos;).
                </p>
              </div>
            </motion.div>

            {/* Card 3: Placement Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative backdrop-blur-xl bg-black/60 hover:bg-black/80 border border-white/15 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                      <Briefcase size={22} className="text-blue-400" />
                    </div>
                    <span className="text-xs font-cinzel font-bold tracking-wider uppercase text-white">
                      PLACEMENT DRIVES
                    </span>
                  </div>
                  <Link
                    href="/candidates"
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronRight size={14} />
                  </Link>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ₹52.83 LPA peak salary, 2,150+ placement offers, with high-velocity hiring from Amazon, Google, Flipkart, Morgan Stanley & Celebal.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Center Mouse Scroll Indicator */}
          <div className="flex justify-center mt-10">
            <div className="w-5 h-9 rounded-full border border-white/30 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-blue-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────
          SECTION 2: STORY & OVERLAPPING GRADUATE PORTRAIT (1:1 Reference Match)
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#06090F] pt-20 pb-28 border-t border-white/10 z-20 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-cinzel font-semibold tracking-wider uppercase">
                Academic & Placement Legacy • Jaipur, Rajasthan
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
                Poornima University &<br />Group of Colleges
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                <p>
                  Established with a vision of technical pre-eminence and industry alignment, Poornima represents Rajasthan&apos;s premier collegiate ecosystem. Across more than two decades, our campus network has transformed over 30,000 engineering and tech graduates into global technical leaders.
                </p>
                <p>
                  Our three constituent institutions — <strong>Poornima University (PU)</strong>, <strong>Poornima College of Engineering (PCE Estd. 2000)</strong>, and <strong>Poornima Institute of Engineering & Technology (PIET NAAC &apos;A&apos;)</strong> — cultivate nation-builders, software architects, and innovators who lead Fortune 500 engineering teams globally.
                </p>
                <p>
                  With 350+ annual visiting recruiters, an AICTE-endorsed Central TPO, and seven specialized career accelerator tracks, our graduates consistently achieve life-changing career milestones.
                </p>
              </div>

              {/* Stat Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl lg:text-3xl font-extrabold text-amber-300">₹52.83</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">LPA Peak CTC (25-26)</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl lg:text-3xl font-extrabold text-white">2,150+</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Total Offers</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl lg:text-3xl font-extrabold text-blue-400">350+</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Corporates</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl lg:text-3xl font-extrabold text-emerald-400">NAAC &apos;A&apos;</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Accredited</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/placements"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/30 group"
                >
                  Explore Placement Records
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/universities"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm transition-all"
                >
                  View All 3 Campuses
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Tall Overlapping Graduate Portrait (Exact match from reference image) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              {/* Overlapping Container dropping down into the next section */}
              <div className="relative -mb-10 lg:-mb-24 z-30 group">
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.8)] bg-slate-900 aspect-[16/11] sm:aspect-[4/3]">
                  <img
                    src="/images/poornima-student-scholar.png"
                    alt="Poornima University Student in Official Uniform Celebrating Placement Victory"
                    className="w-full h-full object-cover object-[30%_center] group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  
                  {/* Card Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">
                          Poornima Scholar • Placed 2024
                        </span>
                        <h4 className="text-white font-serif-luxury text-base sm:text-lg">
                          Excellence in Engineering
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/40">
                        <Award size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────
          SECTION 3: NEWS, EVENTS & PLACEMENTS BENTO GRID (1:1 Reference Match)
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#070D18] pt-32 pb-24 border-t border-white/10 z-10 overflow-hidden">
        {/* Background Architectural Glow */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/poornima-campus-4k.jpg"
            alt="Campus Backdrop"
            className="w-full h-full object-cover filter blur-md"
          />
          <div className="absolute inset-0 bg-[#070D18]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Blue Dot Accent */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-cinzel font-bold tracking-[0.25em] uppercase text-blue-400">
                News & Placement Drives
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Communication Center | TPO Live Feed
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mt-2 font-normal">
              Real-time campus recruitment drives, marquee placement announcements, and student success features.
            </p>
          </div>

          {/* Bento Grid Layout exactly matching reference */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left 8 Columns: 4 Bento Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Tile 1: Top Left Wide Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 group p-6 flex flex-col justify-between min-h-[220px]"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/poornima-event.jpg"
                    alt="Campus Drive Event"
                    className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-red-600/90 text-white mb-2">
                    HOT | TODAY
                  </span>
                  <h3 className="text-white font-serif-luxury text-lg sm:text-xl font-medium leading-snug">
                    Amazon & Google Conclude Day-1 Drives: 15+ Students Land Dream Offers up to ₹45.00 LPA
                  </h3>
                </div>
                <div className="relative z-10 pt-4">
                  <Link
                    href="/placements"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    READ NEWS <span className="text-[10px]">»</span>
                  </Link>
                </div>
              </motion.div>

              {/* Tile 4: Top Right / Center Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 group p-6 flex flex-col justify-between min-h-[220px]"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/poornima-real.jpg"
                    alt="PIET Drive"
                    className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-blue-600 text-white mb-2">
                    HOT | TODAY
                  </span>
                  <h3 className="text-white font-serif-luxury text-lg sm:text-xl font-medium leading-snug">
                    PIET Autonomous (NAAC &apos;A&apos;) Completes Super Dream Drive with 100+ Recruiter Visits
                  </h3>
                </div>
                <div className="relative z-10 pt-4">
                  <Link
                    href="/universities/piet"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    READ NEWS <span className="text-[10px]">»</span>
                  </Link>
                </div>
              </motion.div>

              {/* Tile 2: Bottom Left Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 group p-6 flex flex-col justify-between min-h-[260px]"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/poornima-campus-4k.jpg"
                    alt="PCE Campus"
                    className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-emerald-600 text-white mb-2">
                    PLACEMENT UPDATE
                  </span>
                  <h3 className="text-white font-serif-luxury text-lg sm:text-xl font-medium leading-snug">
                    PCE Jaipur Achieves 93.4% Overall Placements: 1,700+ Offers Distributed Across CSE & AI/DS
                  </h3>
                </div>
                <div className="relative z-10 pt-4">
                  <Link
                    href="/universities/pce"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    READ NEWS <span className="text-[10px]">»</span>
                  </Link>
                </div>
              </motion.div>

              {/* Tile 3: Center Spotlight Card with Arjun Sharma Photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 group p-6 flex flex-col justify-between min-h-[260px]"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src="/images/arjun-sharma-spotlight.jpg"
                    alt="Arjun Sharma Spotlight"
                    className="w-full h-full object-cover object-top opacity-50 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-black mb-2">
                    HOT | SPOTLIGHT
                  </span>
                  <h3 className="text-white font-serif-luxury text-lg sm:text-xl font-medium leading-snug drop-shadow-md">
                    From Poornima to Google: Arjun Sharma&apos;s SDE-1 Journey (₹42 LPA) & DSA Preparation Guide
                  </h3>
                </div>
                <div className="relative z-10 pt-4">
                  <Link
                    href="/candidates"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    READ NEWS <span className="text-[10px]">»</span>
                  </Link>
                </div>
              </motion.div>

              {/* Tile 5: Vibrant Solid Royal Blue CTA Card (1:1 Reference Match) */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="rounded-2xl bg-[#0066FF] text-white p-6 md:p-8 shadow-2xl shadow-blue-600/40 flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/20 text-white">
                      INFO | 2026-2027 RECRUITMENT CALENDAR
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury">
                      JOIN NOW! | Register for Upcoming On-Campus Drives & Mock AI Interviews
                    </h3>
                    <p className="text-xs text-blue-100 max-w-xl">
                      Central TPO portal for students of Poornima University, PCE, and PIET to register for Day-1 companies and run automated ATS resume scores.
                    </p>
                  </div>
                  <Link
                    href="/register"
                    className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#0066FF] font-extrabold text-xs tracking-wider uppercase transition-transform hover:scale-105 shrink-0 shadow-lg"
                  >
                    REGISTRATION »
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right 4 Columns: Streaming Pill, Drive Calendar Widget, Contact Widget (Exact 1:1 Reference Match) */}
            <div className="lg:col-span-4 space-y-5">
              {/* Widget 1: TPO Live Stream Pill */}
              <div className="rounded-2xl border border-white/15 bg-black/60 backdrop-blur-md p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <Radio size={18} className="animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      TPO Live Broadcast
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      12 Active Drives Scheduled Next Week
                    </p>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Widget 2: Interactive Monthly Placement Calendar (Matching Reference) */}
              <div className="rounded-2xl border border-white/15 bg-black/70 backdrop-blur-xl p-5 shadow-2xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon size={16} className="text-blue-400" />
                    <span className="text-xs font-cinzel font-bold text-white tracking-widest uppercase">
                      October 2026
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">Placement Month</span>
                </div>

                {/* Days of week */}
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400 uppercase mb-2">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>

                {/* Dates grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-300">
                  <span className="p-1.5 text-slate-600">28</span>
                  <span className="p-1.5 text-slate-600">29</span>
                  <span className="p-1.5 text-slate-600">30</span>
                  <span className="p-1.5">1</span>
                  <span className="p-1.5">2</span>
                  <span className="p-1.5">3</span>
                  <span className="p-1.5">4</span>

                  <span className="p-1.5">5</span>
                  <span className="p-1.5">6</span>
                  <span className="p-1.5">7</span>
                  <span className="p-1.5">8</span>
                  <span className="p-1.5">9</span>
                  <span className="p-1.5">10</span>
                  <span className="p-1.5">11</span>

                  <span className="p-1.5">12</span>
                  <span className="p-1.5">13</span>
                  <span className="p-1.5">14</span>
                  <span className="p-1.5">15</span>
                  <span className="p-1.5">16</span>
                  <span className="p-1.5">17</span>
                  <span className="p-1.5 rounded-full bg-blue-600 text-white font-extrabold relative">
                    18
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </span>

                  <span className="p-1.5">19</span>
                  <span className="p-1.5">20</span>
                  <span className="p-1.5">21</span>
                  <span className="p-1.5 rounded-full bg-blue-600 text-white font-extrabold">22</span>
                  <span className="p-1.5">23</span>
                  <span className="p-1.5">24</span>
                  <span className="p-1.5 rounded-full bg-blue-600 text-white font-extrabold">25</span>

                  <span className="p-1.5">26</span>
                  <span className="p-1.5">27</span>
                  <span className="p-1.5">28</span>
                  <span className="p-1.5 rounded-full bg-blue-600 text-white font-extrabold">29</span>
                  <span className="p-1.5">30</span>
                  <span className="p-1.5">31</span>
                  <span className="p-1.5 text-slate-600">1</span>
                </div>

                {/* Upcoming Drives Ticker */}
                <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Upcoming On-Campus Drives:
                  </div>
                  {DRIVE_SCHEDULE.map((drive) => (
                    <div
                      key={drive.company}
                      className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-500/20 text-blue-400">
                          Oct {drive.day}
                        </span>
                        <span className="text-white font-medium">{drive.company}</span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-400">{drive.ctc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget 3: Quick Location & Social info */}
              <div className="rounded-2xl border border-white/15 bg-black/60 backdrop-blur-md p-4 text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                </div>
                <p className="text-xs text-white font-serif-luxury font-medium">
                  Poornima University Central TPO
                </p>
                <p className="text-[11px] text-slate-400">
                  IS-2027 to 2031, Sitapura Extension, Jaipur, Rajasthan 302022
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────
          SECTION 4: THE 3 CONSTITUENT INSTITUTIONS (Real PNG Logos & Exact Data)
         ─────────────────────────────────────────────────────────────────────── */}
      <section id="institutions" className="relative bg-[#04070D] py-24 border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-cinzel font-bold tracking-widest uppercase bg-blue-600/10 text-blue-400 border border-blue-500/20">
              POORNIMA ACADEMIC ECOSYSTEM
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Our Three Premier Institutions
            </h2>
            <p className="text-sm text-slate-300">
              Explore verified placement records, accreditation rankings, and corporate recruiters for each constituent university, college, and institute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INSTITUTIONS.map((inst) => (
              <motion.div
                key={inst.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl bg-black/60 border border-white/15 hover:border-blue-500/50 backdrop-blur-xl p-8 flex flex-col justify-between shadow-2xl transition-all group overflow-hidden"
              >
                {/* Top Subtle Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${inst.accentColor}`}
                />

                <div className="space-y-6">
                  {/* Logo & Badge Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-18 h-18 p-2 rounded-2xl bg-white border border-white/20 shadow-lg flex items-center justify-center shrink-0">
                      <img
                        src={inst.logo}
                        alt={`${inst.name} Official PNG Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/10 text-right">
                      {inst.highlightTag}
                    </span>
                  </div>

                  {/* Title & Accreditation */}
                  <div>
                    <h3 className="text-2xl font-serif-luxury font-normal text-white group-hover:text-blue-300 transition-colors">
                      {inst.name}
                    </h3>
                    <p className="text-xs text-blue-400 font-medium mt-1">
                      {inst.type} • Estd. {inst.established}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                      {inst.accreditation}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {inst.description}
                  </p>

                  {/* Telemetry Metric Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                    <div className="p-3 rounded-xl bg-white/5">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Highest Package
                      </div>
                      <div className="text-lg font-extrabold text-blue-400 mt-0.5">
                        {inst.highestCTC}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Total Placed
                      </div>
                      <div className="text-lg font-extrabold text-white mt-0.5">
                        {inst.placed}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Average Package
                      </div>
                      <div className="text-base font-extrabold text-slate-200 mt-0.5">
                        {inst.avgCTC}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Campus Location
                      </div>
                      <div className="text-[11px] font-medium text-slate-300 mt-0.5 truncate">
                        Jaipur, Raj.
                      </div>
                    </div>
                  </div>

                  {/* Recruiter Callout */}
                  <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs">
                    <span className="font-bold text-blue-300">Marquee Recruiter:</span>{" "}
                    <span className="text-slate-300">{inst.topRecruiter}</span>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6">
                  <Link
                    href={`/universities/${inst.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md group-hover:bg-[#0066FF]"
                  >
                    View Campus Placement Profile
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────
          SECTION 4B: OFFICIAL 3-YEAR PLACEMENT STATS (poornima.edu.in/placements/placement-stats)
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#060A14] py-24 border-t border-white/10 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-cinzel font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 inline-flex items-center gap-2 mb-3">
                <ShieldCheck size={14} className="text-emerald-400" />
                Verified Placement Records • poornima.edu.in
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight">
                Official 3-Year Placement Progression
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl font-normal">
                Audited package milestones and corporate visits from the central placement office. Peak CTC reached <strong className="text-amber-300">₹52.83 LPA</strong> in the 2025-26 recruitment season.
              </p>
            </div>

            <a
              href="https://www.poornima.edu.in/placements/placement-stats"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#0066FF] border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-all self-start lg:self-auto shrink-0 shadow-lg"
            >
              Verify on Official Portal
              <ExternalLink size={14} />
            </a>
          </div>

          {/* 3 Metric Progression Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {OFFICIAL_YEARLY_STATS.map((stat, idx) => (
              <motion.div
                key={stat.session}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-3xl p-7 border transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden ${
                  idx === 0
                    ? "bg-gradient-to-b from-blue-950/80 via-black/80 to-black/95 border-blue-500/50 shadow-blue-950/40"
                    : "bg-black/60 border-white/15 hover:border-white/30"
                }`}
              >
                {/* Accent top stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    idx === 0
                      ? "bg-gradient-to-r from-amber-400 to-blue-500"
                      : "bg-gradient-to-r from-slate-700 to-slate-500"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-cinzel font-bold tracking-widest text-blue-400 uppercase">
                      Session {stat.session}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        idx === 0
                          ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                          : "bg-white/10 text-slate-300"
                      }`}
                    >
                      {stat.highlight}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                        Highest Salary Package
                      </span>
                      <span className="text-3xl font-extrabold text-amber-300 font-serif-luxury mt-1 block">
                        {stat.highestPackage}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-[10px] uppercase text-slate-400 font-semibold block">
                          Median Package
                        </span>
                        <span className="text-base font-bold text-white mt-0.5 block">
                          {stat.medianPackage}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <span className="text-[10px] uppercase text-slate-400 font-semibold block">
                          Average Package
                        </span>
                        <span className="text-base font-bold text-emerald-400 mt-0.5 block">
                          {stat.averagePackage}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Recruiters: <strong className="text-white">{stat.recruitersVisited}</strong></span>
                  <span>Total Offers: <strong className="text-white">{stat.totalOffers}</strong></span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Official Audit Comparison Table */}
          <div className="rounded-3xl border border-white/15 overflow-hidden bg-black/50 backdrop-blur-md shadow-2xl">
            <div className="px-6 py-4 bg-white/[0.03] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white font-cinzel">
                Audited Placement Progression (3-Year Comparative Matrix)
              </span>
              <span className="text-[11px] text-blue-400 font-semibold">
                Source: Office of Training &amp; Placements (PMTPO)
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-white/[0.02] text-slate-400 font-semibold uppercase tracking-wider text-[11px] border-b border-white/10">
                  <tr>
                    <th className="px-6 py-3.5">Academic Session</th>
                    <th className="px-6 py-3.5 text-amber-300">Highest Package</th>
                    <th className="px-6 py-3.5 text-blue-300">Median Package</th>
                    <th className="px-6 py-3.5 text-emerald-300">Average Package</th>
                    <th className="px-6 py-3.5">Visiting Companies</th>
                    <th className="px-6 py-3.5">Total Offers</th>
                    <th className="px-6 py-3.5 text-right">Audit Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  {OFFICIAL_YEARLY_STATS.map((row) => (
                    <tr key={row.session} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 font-bold text-white flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                        Session {row.session}
                      </td>
                      <td className="px-6 py-4 font-extrabold text-amber-300 text-base">{row.highestPackage}</td>
                      <td className="px-6 py-4 font-bold text-white">{row.medianPackage}</td>
                      <td className="px-6 py-4 font-bold text-emerald-400">{row.averagePackage}</td>
                      <td className="px-6 py-4 text-slate-300">{row.recruitersVisited}</td>
                      <td className="px-6 py-4 text-slate-300">{row.totalOffers}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {row.statusBadge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────
          SECTION 4C: CAMPUS LIFE & REAL INFRASTRUCTURE GALLERY (poornima.edu.in)
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#04070D] py-24 border-t border-white/10 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-cinzel font-bold tracking-widest uppercase bg-blue-600/10 text-blue-400 border border-blue-500/20 inline-flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-amber-400" />
                Vibrant Collegiate Life • poornima.edu.in/life-at-pu
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight">
                Campus Infrastructure &amp; Student Life
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl font-normal">
                Authentic campus facilities, annual youth festivals, sports arenas, residential hostels, and state-of-the-art engineering laboratories.
              </p>
            </div>

            <a
              href="https://www.poornima.edu.in/life-at-pu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#0066FF] border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-all self-start lg:self-auto shrink-0 shadow-lg"
            >
              Explore Campus Life
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAMPUS_LIFE_GALLERY.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="group rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-xl flex flex-col justify-between hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-blue-300 border border-white/20">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="font-bold text-white text-base font-serif-luxury group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────
          SECTION 5: 350+ VISITING CORPORATE RECRUITERS (Marquee Logo Strip)
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#060A12] py-16 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-xs font-cinzel font-bold tracking-[0.25em] text-blue-400 uppercase">
            350+ Annual Corporate Recruiters
          </p>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white mt-1">
            Top Hiring Partners Across All 3 Poornima Institutions
          </h3>
        </div>

        {/* Marquee Row */}
        <div className="flex gap-6 overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-6 shrink-0 animate-marquee items-center">
            {RECRUITERS.concat(RECRUITERS).map((recruiter, idx) => (
              <div
                key={`${recruiter.name}-${idx}`}
                className="w-36 h-20 rounded-2xl bg-white/5 border border-white/10 p-3 flex flex-col items-center justify-center gap-1 shrink-0 hover:bg-white/10 transition-colors"
              >
                <img
                  src={recruiter.logo}
                  alt={recruiter.name}
                  className="h-9 w-auto max-w-[90px] object-contain filter brightness-95"
                />
                <span className="text-[10px] font-semibold text-slate-400 truncate max-w-full">
                  {recruiter.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────
          SECTION 5B: AUTHENTIC STUDENT TESTIMONIALS (poornima.edu.in/testimonials)
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#060910] py-24 border-t border-white/10 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-cinzel font-bold tracking-widest uppercase bg-amber-400/10 text-amber-300 border border-amber-400/20 inline-flex items-center gap-2 mb-3">
                <Quote size={14} className="text-amber-400" />
                Student Voices • poornima.edu.in/testimonials
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight">
                Authentic Placement Testimonials
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl font-normal">
                Hear firsthand from placed students who navigated technical interview rounds at Morgan Stanley, Infosys, Celebal, and Capgemini with support from Poornima Central TPO.
              </p>
            </div>

            <a
              href="https://www.poornima.edu.in/testimonials"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#0066FF] border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-all self-start lg:self-auto shrink-0 shadow-lg"
            >
              All Testimonials
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REAL_TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-3xl border border-white/15 bg-black/60 hover:border-blue-400/50 p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-blue-400/40 shrink-0 shadow-md"
                    />
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-white text-base font-serif-luxury group-hover:text-blue-300 transition-colors truncate">
                        {t.name}
                      </h4>
                      <p className="text-xs text-blue-400 font-semibold truncate">{t.course} • {t.batch}</p>
                      <p className="text-xs font-bold text-emerald-400 truncate mt-0.5">
                        {t.placedAt} ({t.package})
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-5 font-normal">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 size={13} /> Verified Offer
                  </span>
                  <span>{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────
          SECTION 6: VERIFIED PLACED CANDIDATES WALL (Real Student Records)
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#04070D] py-24 border-t border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-cinzel font-bold tracking-widest uppercase bg-blue-600/10 text-blue-400 border border-blue-500/20">
                VERIFIED ALUMNI RECORD
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white tracking-tight mt-2">
                Placement Hall of Fame
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                Real student records from Poornima University, PCE Jaipur, and PIET Autonomous.
              </p>
            </div>

            {/* Filter Tabs by Institution */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 self-start md:self-auto">
              <button
                onClick={() => setActiveCampusTab("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCampusTab === "all" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                All Campuses
              </button>
              <button
                onClick={() => setActiveCampusTab("University")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCampusTab === "University" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                PU
              </button>
              <button
                onClick={() => setActiveCampusTab("PCE")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCampusTab === "PCE" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                PCE
              </button>
              <button
                onClick={() => setActiveCampusTab("PIET")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCampusTab === "PIET" ? "bg-[#0066FF] text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                PIET
              </button>
            </div>
          </div>

          {/* Candidate Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((c) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-black/60 border border-white/15 hover:border-blue-500/40 p-5 flex flex-col justify-between shadow-xl transition-all group"
              >
                <div className="flex items-start gap-4">
                  {c.avatar ? (
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="w-14 h-14 rounded-2xl object-cover object-top border border-white/20 shrink-0"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center font-bold text-lg text-white shrink-0 border border-white/20">
                      {c.initials}
                    </div>
                  )}

                  <div className="space-y-1 overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-white text-base truncate">{c.name}</h4>
                      <BadgeCheck size={16} className="text-blue-400 shrink-0" />
                    </div>
                    <p className="text-xs text-blue-300 font-semibold truncate">{c.company}</p>
                    <p className="text-[11px] text-slate-400 truncate">{c.role}</p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Package
                    </span>
                    <span className="text-base font-extrabold text-emerald-400">{c.ctc}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Campus
                    </span>
                    <span className="font-semibold text-slate-200">{c.institution}</span>
                  </div>
                </div>

                <div className="mt-4 pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{c.branch} • {c.year}</span>
                  <a
                    href={c.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    LinkedIn <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/candidates"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-[#0066FF] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              View All 109+ Placed Seniors & Interview Insights
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────────────
          SECTION 7: CENTRAL TPO CTA BANNER
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0066FF] text-white py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4 relative z-10">
          <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-white/20 text-white">
            POORNIMA PLACEMENT ACCELERATOR
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal tracking-tight">
            Ready to Land Your Dream Placement?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto font-normal">
            Analyze your resume with the ATS Score Engine, practice technical coding rounds with SevenAI, and track active Day-1 campus drives.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/resources/resume"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#0066FF] font-extrabold text-xs uppercase tracking-wider transition-transform hover:scale-105 shadow-xl"
            >
              Analyze Resume ATS Score »
            </Link>
            <Link
              href="/ai"
              className="px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              Practice AI Interview Coach »
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
