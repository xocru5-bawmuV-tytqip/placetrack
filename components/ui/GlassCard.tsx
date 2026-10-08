"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glowColor?: "blue" | "gold" | "green" | "purple" | "serendale" | "pink";
  padding?: "none" | "sm" | "md" | "lg";
}

const glowColors: Record<string, string> = {
  blue: "hover:shadow-blue-500/20",
  gold: "hover:shadow-amber-400/20",
  green: "hover:shadow-emerald-500/20",
  purple: "hover:shadow-purple-500/20",
  serendale: "hover:shadow-[0_0_35px_rgba(217,70,239,0.35)] hover:border-fuchsia-500/40",
  pink: "hover:shadow-[0_0_35px_rgba(255,46,147,0.35)] hover:border-pink-500/40",
};

const glowStaticColors: Record<string, string> = {
  blue: "shadow-blue-500/10",
  gold: "shadow-amber-400/10",
  green: "shadow-emerald-500/10",
  purple: "shadow-purple-500/10",
  serendale: "shadow-[0_0_25px_rgba(217,70,239,0.2)] border-fuchsia-500/20",
  pink: "shadow-[0_0_25px_rgba(255,46,147,0.2)] border-pink-500/20",
};

const paddingMap: Record<string, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function GlassCard({
  children,
  className,
  hover = false,
  glow = false,
  glowColor = "serendale",
  padding = "md",
  ...motionProps
}: GlassCardProps) {
  const baseClasses = cn(
    "relative backdrop-blur-2xl bg-[#060813]/80 border border-white/[0.08] rounded-3xl",
    paddingMap[padding],
    glow && ["shadow-xl", glowStaticColors[glowColor]],
    hover && [
      "transition-all duration-300",
      "hover:bg-[#0c1022]/90 hover:border-white/20",
      "hover:shadow-2xl",
      glowColors[glowColor],
      "cursor-pointer",
    ],
    className
  );

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...motionProps}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={baseClasses} {...motionProps}>
      {children}
    </motion.div>
  );
}
