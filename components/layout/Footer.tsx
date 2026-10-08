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
    <footer className="relative bg-[#040D1A] text-slate-400 border-t border-blue-950/60 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Emblem (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200">
              <img
                src="/images/logos/poornima-university.png"
                alt="Poornima University"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Official placement platform of Poornima Group of Colleges (Poornima University, PCE &amp; PIET Jaipur) — empowering students with verified recruitment drives, industry mentorship, and next-gen interview preparation.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#0066FF] text-white flex items-center justify-center text-xs transition-colors"
              >
                𝕏
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#0066FF] text-white flex items-center justify-center text-xs transition-colors"
              >
                in
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#0066FF] text-white flex items-center justify-center text-xs transition-colors"
              >
                f
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#0066FF] text-white flex items-center justify-center text-xs transition-colors"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Column 2: Services (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/companies" className="hover:text-blue-400 transition-colors">
                  • 109 Recruiter Drives
                </Link>
              </li>
              <li>
                <Link href="/ai" className="hover:text-blue-400 transition-colors">
                  • SevenAI Mock Prep
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-blue-400 transition-colors">
                  • Verified Placement CTCs
                </Link>
              </li>
              <li>
                <Link href="/universities" className="hover:text-blue-400 transition-colors">
                  • Campus Directory
                </Link>
              </li>
              <li>
                <Link href="/resources/internships" className="hover:text-blue-400 transition-colors">
                  • Corporate Internships
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Outlook (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Outlook
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/universities/poornima" className="hover:text-blue-400 transition-colors">
                  • Poornima University (PU)
                </Link>
              </li>
              <li>
                <Link href="/universities/pce" className="hover:text-blue-400 transition-colors">
                  • PCE Jaipur (NBA)
                </Link>
              </li>
              <li>
                <Link href="/universities/piet" className="hover:text-blue-400 transition-colors">
                  • PIET Jaipur (NAAC &apos;A&apos;)
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-blue-400 transition-colors">
                  • ₹42.10 LPA Amazon Drive
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  • Placement Office Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Subscribe
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get notified of upcoming company drives, recruitment criteria, and verified package announcements.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center mt-3">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-slate-900/90 text-white placeholder:text-slate-500 text-xs px-3 py-2.5 rounded-l-md border border-slate-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-[#0066FF] hover:bg-blue-600 text-white font-bold px-4 py-2.5 rounded-r-md text-xs transition-colors shrink-0"
              >
                &gt;
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-14 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© {currentYear} Poornima Group of Colleges (Poornima University, PCE, PIET). All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Placement Regulations
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Helpdesk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
