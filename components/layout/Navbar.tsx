"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  LogOut,
  LayoutDashboard,
  Sparkles,
  GraduationCap,
  Building2,
  Users,
  BookOpen,
  Home,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  {
    label: "HOME",
    sub: "Main Page",
    href: "/",
  },
  {
    label: "CORPORATE",
    sub: "About Us",
    href: "/about",
  },
  {
    label: "WE OFFER",
    sub: "Colleges",
    href: "/universities",
  },
  {
    label: "PARTNERS",
    sub: "109 Recruiters",
    href: "/companies",
  },
  {
    label: "PACKAGES",
    sub: "Top CTCs",
    href: "/placements",
  },
  {
    label: "SEVENAI",
    sub: "AI Copilot",
    href: "/ai",
    highlight: true,
  },
  {
    label: "CONTACT US",
    sub: "Get In Touch",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const userInitials = session?.user?.name
    ? session.user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans",
          isScrolled
            ? "bg-[#071933]/95 backdrop-blur-xl border-b border-blue-900/40 shadow-xl shadow-black/30"
            : "bg-gradient-to-b from-[#071933] via-[#071933]/80 to-transparent"
        )}
      >
        {/* Top Corporate Micro-Bar */}
        <div className="border-b border-blue-900/30 text-[11px] text-blue-200/80 py-1.5 px-4 sm:px-8 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <span className="text-[#0066FF] font-bold">📞</span>
                <span>+91 141 3983200</span>
                <span className="text-blue-400/50">|</span>
                <span className="text-slate-400">24X7 Placement Cell Desk</span>
              </span>
              <span className="text-blue-300/80">Jaipur, Rajasthan, India</span>
            </div>
            <div className="flex items-center gap-5 font-medium tracking-wide">
              <Link href="/companies" className="hover:text-white transition-colors">
                TRACK 109 RECRUITMENT DRIVES
              </Link>
              <span className="text-blue-400/50">•</span>
              <Link href="/placements" className="hover:text-white transition-colors">
                STUDENT PLACEMENT PORTAL
              </Link>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo with Poornima University Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white px-3 py-1.5 rounded-lg shadow-md border border-slate-200/60 flex items-center gap-2 group-hover:scale-102 transition-transform">
              <img
                src="/images/logos/poornima-university.png"
                alt="Poornima University"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="font-extrabold text-xs tracking-wider text-white uppercase leading-none">
                POORNIMA GROUP
              </span>
              <span className="text-[10px] text-blue-300/80 font-medium tracking-wider mt-1 uppercase">
                Central Placement Portal
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Two-Tier Corporate Typography Matching Reference Image */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex flex-col items-center group py-1 text-center transition-all"
                >
                  <span
                    className={cn(
                      "text-xs font-bold tracking-wider transition-colors uppercase",
                      link.highlight
                        ? "text-blue-400 group-hover:text-blue-300"
                        : isActive
                        ? "text-white"
                        : "text-slate-300 group-hover:text-white"
                    )}
                  >
                    {link.label}
                  </span>
                  <span
                    className={cn(
                      "text-[10px] tracking-tight transition-colors leading-tight",
                      link.highlight
                        ? "text-blue-400/70"
                        : isActive
                        ? "text-blue-400"
                        : "text-slate-400/80 group-hover:text-slate-300"
                    )}
                  >
                    {link.sub}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {status === "loading" ? (
              <div className="w-20 h-8 rounded-xl bg-white/5 animate-pulse" />
            ) : session ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen((v) => !v)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name ?? "User"}
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-xs font-bold text-white">
                      {userInitials}
                    </div>
                  )}
                  <span className="text-sm text-slate-200 max-w-[100px] truncate">
                    {session.user?.name?.split(" ")[0] ?? "Account"}
                  </span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      "text-slate-400 transition-transform duration-200",
                      userMenuOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-48 backdrop-blur-xl bg-[#0F1829]/95 border border-white/10 rounded-2xl shadow-xl shadow-black/40 overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-xs text-slate-400">Signed in as</p>
                        <p className="text-sm font-medium text-white truncate">
                          {session.user?.email}
                        </p>
                      </div>
                      <div className="p-2">
                        <Link
                          href="/dashboard"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/8 transition-all duration-150"
                        >
                          <LayoutDashboard size={15} />
                          Dashboard
                        </Link>
                        <Link
                          href="/ai"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 transition-all duration-150"
                        >
                          <Sparkles size={15} />
                          SevenAI
                        </Link>
                        <button
                          onClick={() => {
                            setUserMenuOpen(false);
                            signOut({ callbackUrl: "/" });
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-150"
                        >
                          <LogOut size={15} />
                          Sign out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-xs font-semibold rounded-full text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/12 border border-white/15 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2 text-xs font-bold rounded-full bg-[#0066FF] hover:bg-blue-600 text-white shadow-md shadow-blue-900/30 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Portal Access
                </Link>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-white/10 backdrop-blur-xl bg-[#0A0F1E]/95"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                          link.highlight
                            ? "text-amber-400 hover:bg-amber-400/10"
                            : isActive
                            ? "text-blue-400 bg-blue-500/10"
                            : "text-slate-300 hover:text-white hover:bg-white/8"
                        )}
                      >
                        <Icon size={18} />
                        {link.label}
                        {link.highlight && (
                          <span className="ml-auto px-1.5 py-0.5 text-[10px] font-semibold bg-amber-400/20 text-amber-300 rounded-md">
                            AI
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="pt-3 border-t border-white/10 space-y-2">
                  {session ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/8 transition-all"
                      >
                        <LayoutDashboard size={18} />
                        Dashboard
                      </Link>
                      <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
                      >
                        <LogOut size={18} />
                        Sign out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
                      >
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-sm font-semibold bg-blue-500 hover:bg-blue-400 text-white transition-all shadow-lg shadow-blue-500/25"
                      >
                        Get Started
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Overlay to close user menu */}
      {userMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setUserMenuOpen(false)}
        />
      )}
    </>
  );
}
