"use client";

import { motion } from "./motion";
import ScrambleText from "./ScrambleText";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-8 max-w-7xl mx-auto mb-16 md:mb-24"
    >
      {/* Background grid */}
      <div className="absolute inset-0 micro-grid -z-10" />

      <motion.div
        className="max-w-4xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Status Indicator */}
        <motion.div variants={item} className="flex items-center gap-3 mb-6 md:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00dbec] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00dbec]" />
          </span>
          <span
            className="text-[10px] tracking-[0.2em] text-[#b9c9cb] uppercase"
            style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
          >
            System Active // Kernel v7.3.2
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-[#e2e2e6] mb-4 md:mb-6 leading-[0.9]"
          style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
        >
          <ScrambleText text="Gunjan" delay={400} duration={700} />{" "}
          <span className="text-[#00dbec] text-glow">
            <ScrambleText text="Aggarwal" delay={600} duration={900} />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl lg:text-2xl text-[#b9c9cb] max-w-2xl mb-8 md:mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
        >
          Pre-final year student shipping production-grade distributed systems,
          real-time applications, and scalable backend architectures.
        </motion.p>

        {/* Stats Row */}
        <motion.div variants={item} className="flex flex-wrap gap-6 md:gap-8">
          <div className="flex flex-col">
            <span
              className="text-[10px] tracking-[0.15em] text-[#b4cad6] uppercase mb-2"
              style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
            >
              Core Focus
            </span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00dbec] text-sm">terminal</span>
              <span
                className="text-sm text-[#e2e2e6]"
                style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
              >
                Full Stack / Backend
              </span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-[#3b494b] opacity-40" />

          <div className="flex flex-col">
            <span
              className="text-[10px] tracking-[0.15em] text-[#b4cad6] uppercase mb-2"
              style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
            >
              Current Stack
            </span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00dbec] text-sm">database</span>
              <span
                className="text-sm text-[#e2e2e6]"
                style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
              >
                MERN / Next.js / AWS
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 right-8 hidden lg:flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-right mb-8 text-[#b9c9cb]"
          style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
        >
          Scroll to explore
        </span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-[#00dbec] to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
