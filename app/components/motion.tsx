"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

/* ─── Shared Variants ─────────────────────────────────────── */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

/* ─── FadeUp wrapper (scroll-triggered) ───────────────────── */

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function FadeUp({ children, className, delay = 0, once = true }: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger container (scroll-triggered) ────────────────── */

interface StaggerProps {
  children: ReactNode;
  className?: string;
  fast?: boolean;
  once?: boolean;
}

export function Stagger({ children, className, fast = false, once = true }: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fast ? staggerFast : staggerContainer}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated count-up number ────────────────────────────── */

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function CountUp({ to, suffix = "", prefix = "", className, duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, to, motionVal]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

/* ─── Animated progress bar ───────────────────────────────── */

interface BarProps {
  pct: string; // e.g. "85%"
  color?: string;
}

export function AnimatedBar({ pct, color = "#00dbec" }: BarProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="h-1 w-full bg-[#333538] overflow-hidden">
      <motion.div
        className="h-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: inView ? pct : 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
      />
    </div>
  );
}

/* ─── Re-export motion for direct use ─────────────────────── */
export { motion, useInView };
