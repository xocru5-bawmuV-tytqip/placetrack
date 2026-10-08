"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Placement Data", href: "/placements" },
    { label: "Company Directory", href: "/companies" },
    { label: "University Search", href: "/universities" },
    { label: "SevenAI Assistant", href: "/ai" },
    { label: "Interview Simulator", href: "/ai/interview" },
    { label: "Pricing", href: "/pricing" },
  ],
  "Poornima Campuses": [
    { label: "Poornima University (PU)", href: "/universities/poornima" },
    { label: "Poornima College of Engg. (PCE)", href: "/universities/pce" },
    { label: "Poornima Inst. of Engg. & Tech. (PIET)", href: "/universities/piet" },
    { label: "Placement Statistics", href: "/placements" },
  ],
  Resources: [
    { label: "Placement Guide", href: "/resources/guide" },
    { label: "Resume Builder", href: "/resources/resume" },
    { label: "Aptitude Practice", href: "/resources/aptitude" },
    { label: "Mock Interviews", href: "/ai/mock" },
    { label: "Salary Calculator", href: "/resources/salary" },
    { label: "Blog", href: "/blog" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
};

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/placetrack_edu",
    icon: Twitter,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/placetrack",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/placetrack",
    icon: Github,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#061120] text-slate-300 border-t border-white/10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="pt-16 pb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white p-1 border border-white/20 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <img
                  src="/images/logos/poornima-group.jpg"
                  alt="Poornima Group"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-extrabold text-lg text-white">Poornima</span>
                  <span className="font-bold text-lg text-blue-400">PlaceTrack</span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider mt-1 uppercase">
                  Central Placement Portal
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The official placement intelligence platform for Poornima Group of Colleges
              (Poornima University, PCE & PIET). Connecting 10,000+ students with 109 global recruiters.
            </p>

            {/* Accreditation Badges */}
            <div className="flex items-center gap-2 pt-1">
              <div className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5 text-[11px] text-slate-300">
                <img src="/images/logos/aicte.png" alt="AICTE" className="h-4 w-auto object-contain" />
                <span>AICTE Approved</span>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5 text-[11px] text-slate-300">
                <img src="/images/logos/rtu-logo.png" alt="RTU" className="h-4 w-auto object-contain" />
                <span>RTU Affiliated</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#0066FF] border border-white/10 text-slate-400 hover:text-white transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Column 2: Campuses */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">
              Campuses
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/universities/poornima" className="text-slate-400 hover:text-white transition-colors">
                  Poornima University (PU)
                </Link>
              </li>
              <li>
                <Link href="/universities/pce" className="text-slate-400 hover:text-white transition-colors">
                  PCE Jaipur (Estd. 2000)
                </Link>
              </li>
              <li>
                <Link href="/universities/piet" className="text-slate-400 hover:text-white transition-colors">
                  PIET Autonomous (NAAC 'A')
                </Link>
              </li>
              <li>
                <Link href="/placements" className="text-slate-400 hover:text-white transition-colors">
                  Central TPO Office
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/placements" className="text-slate-400 hover:text-white transition-colors">
                  109 Partner Companies
                </Link>
              </li>
              <li>
                <Link href="/ai" className="text-slate-400 hover:text-white transition-colors">
                  SevenAI Copilot
                </Link>
              </li>
              <li>
                <Link href="/questions" className="text-slate-400 hover:text-white transition-colors">
                  Interview Question Bank
                </Link>
              </li>
              <li>
                <Link href="/resources/resume" className="text-slate-400 hover:text-white transition-colors">
                  ATS Resume Scoring
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Subscribe Box (matching reference image) */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">
              Placement Alerts
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get notified of new recruiter visits, eligibility criteria, and interview dates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your college email..."
                  className="w-full px-3 py-2 text-xs rounded-l-lg bg-white/10 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-bold bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-r-lg transition-colors shrink-0 uppercase tracking-wide"
                >
                  Join
                </button>
              </div>
              <p className="text-[10px] text-slate-500">Official PU / PCE / PIET student updates.</p>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Poornima Group PlaceTrack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-slate-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
