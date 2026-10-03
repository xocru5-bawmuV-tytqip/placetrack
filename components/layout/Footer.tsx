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
    <footer className="relative bg-[#060A14] border-t border-white/8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-48 bg-amber-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="pt-16 pb-12 grid grid-cols-1 gap-12 lg:grid-cols-6"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/95 p-1 border border-white/20 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <img
                  src="/images/logos/poornima-royal.png"
                  alt="Poornima Group"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">
                  <span className="text-white">Poornima </span>
                  <span className="gradient-text">PlaceTrack</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide mt-1 uppercase">
                  Official Placement Portal
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              The official placement intelligence platform for Poornima Group of Colleges
              (Poornima University, PCE & PIET) — powered by SevenAI to guide students to dream careers.
            </p>

            {/* Accreditation Badges */}
            <div className="flex items-center gap-2 mb-6">
              <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5 text-[11px] text-slate-300">
                <img src="/images/logos/aicte.png" alt="AICTE" className="h-4 w-auto object-contain" />
                <span>AICTE Approved</span>
              </div>
              <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5 text-[11px] text-slate-300">
                <img src="/images/logos/rtu-logo.png" alt="RTU" className="h-4 w-auto object-contain" />
                <span>RTU Affiliated</span>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={14} className="text-blue-400 shrink-0" />
                <span>Sitapura & Ramchandrapura, Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <a
                  href="mailto:placement@poornima.org"
                  className="hover:text-blue-400 transition-colors"
                >
                  placement@poornima.org
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <GraduationCap size={14} className="text-blue-400 shrink-0" />
                <span>Poornima Group (PU • PCE • PIET)</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* SevenAI banner */}
        <div className="border-t border-white/8 py-6">
          <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/20">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-400/30 shrink-0">
              <Sparkles size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-amber-300">
                SevenAI — Powered by Google Gemini
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Your AI-powered placement coach, resume reviewer &amp; interview
                simulator.
              </p>
            </div>
            <Link
              href="/ai"
              className="shrink-0 px-4 py-2 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-black rounded-xl transition-all duration-200"
            >
              Try Free
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {currentYear} PlaceTrack. Built for Poornima University. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <Link
              href="/terms"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Terms of Service
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <Link
              href="/security"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
