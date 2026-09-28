"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glowColor?: "blue" | "gold" | "green" | "purple";
  padding?: "none" | "sm" | "md" | "lg";
}

const glowColors: Record<string, string> = {
  blue: "hover:shadow-blue-500/20",
  gold: "hover:shadow-amber-400/20",
  green: "hover:shadow-emerald-500/20",
  purple: "hover:shadow-purple-500/20",
};

const glowStaticColors: Record<string, string> = {
  blue: "shadow-blue-500/10",
  gold: "shadow-amber-400/10",
  green: "shadow-emerald-500/10",
  purple: "shadow-purple-500/10",
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
  glowColor = "blue",
  padding = "md",
  ...motionProps
}: GlassCardProps) {
  const baseClasses = cn(
    "relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl",
    paddingMap[padding],
    glow && ["shadow-xl", glowStaticColors[glowColor]],
    hover && [
      "transition-all duration-300",
      "hover:bg-white/[0.08] hover:border-white/20",
      "hover:shadow-xl",
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
