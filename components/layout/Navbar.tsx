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
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Universities",
    href: "/universities",
    icon: GraduationCap,
  },
  {
    label: "Companies",
    href: "/companies",
    icon: Building2,
  },
  {
    label: "Candidates",
    href: "/placements",
    icon: Users,
  },
  {
    label: "SevenAI",
    href: "/ai",
    icon: Sparkles,
    highlight: true,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "backdrop-blur-xl bg-[#07172C]/95 border-b border-white/15 shadow-xl shadow-slate-950/30"
            : "bg-[#07172C]/80 backdrop-blur-md border-b border-white/10"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-1 border border-white/20 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <img
                src="/images/logos/poornima-group.jpg"
                alt="Poornima Group"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-extrabold text-base tracking-tight text-white group-hover:text-blue-300 transition-colors">
                  Poornima
                </span>
                <span className="font-bold text-base text-blue-400">
                  PlaceTrack
                </span>
              </div>
              <span className="text-[10px] text-slate-300 font-medium tracking-wider mt-1 uppercase">
                Central Placement Portal
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-200",
                    link.highlight
                      ? "text-white bg-[#0066FF] hover:bg-[#0052CC] shadow-md shadow-blue-500/20"
                      : isActive
                      ? "text-white bg-white/15"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  )}
                >
                  <Icon
                    size={14}
                    className={link.highlight ? "text-white" : ""}
                  />
                  {link.label}
                  {link.highlight && (
                    <span className="ml-0.5 px-1.5 py-0.2 text-[9px] font-extrabold bg-white text-[#0066FF] rounded-full">
                      AI
                    </span>
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
              <div className="flex items-center gap-2.5">
                <Link
                  href="/login"
                  className="px-4 py-2 text-xs font-semibold rounded-lg text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 uppercase tracking-wide"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2 text-xs font-bold rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-md shadow-blue-600/30 transition-all duration-200 hover:scale-105 active:scale-95 uppercase tracking-wide"
                >
                  Get Started
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
