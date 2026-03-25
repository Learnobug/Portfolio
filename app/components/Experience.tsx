"use client";

import { useRef } from "react";
import { FadeUp, Stagger, CountUp, AnimatedBar, motion, fadeUp, useInView } from "./motion";
import { AnimatePresence } from "framer-motion";

const FONT_HEADLINE = "var(--font-space-grotesk), Space Grotesk, sans-serif";
const FONT_MONO = "var(--font-roboto-mono), Roboto Mono, monospace";
const FONT_LABEL = "var(--font-space-grotesk), Space Grotesk, sans-serif";

const roles = [
  {
    title: "Software Engineer",
    company: "Radiant Horizon Hospitality",
    badge: "PRESENT",
    period: null,
    location: null,
    team: null,
    badgeActive: true,
    nodeActive: true,
    isGoogle: false,
    achievements: [
      "Architected and maintained proprietary Property Management System (PMS).",
      <span key="a2">Engineered microservices architecture leading to a <span className="text-[#00dbec] font-bold">140% improvement</span> in system throughput.</span>,
      "Optimized database queries and message broker implementation for real-time synchronization.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Google",
    badge: "SUMMER 2024",
    period: "June — September 2024",
    location: "Bangalore, India",
    team: "Application Integration — GCP",
    badgeActive: false,
    nodeActive: false,
    isGoogle: true,
    achievements: [
      "Contributed to GCP Application Integration modules under the core platform engineering team.",
      <span key="b2">Identified and resolved latency bottlenecks, resulting in a <span className="text-[#4ade80] font-bold">30% performance boost</span>.</span>,
      "Operated within a high-velocity Agile environment with daily deployments and code reviews.",
    ],
  },
];

/* Animated vertical timeline line */
function TimelineLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className="absolute left-[5px] top-2 bottom-0 w-[2px] origin-top"
      style={{ background: "linear-gradient(to bottom, #00dbec, rgba(59,73,75,0.2))" }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: inView ? 1 : 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    />
  );
}

/* Scanline sweep that runs once on mount */
function ScanlineSweep() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.4 }}
    >
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00dbec]/60 to-transparent"
        initial={{ top: 0 }}
        animate={{ top: "100%" }}
        transition={{ duration: 1.4, ease: "linear" }}
      />
    </motion.div>
  );
}

/* Particle dots that float up from the Google card */
function FloatingParticles() {
  const particles = [
    { x: "20%", delay: 0, size: 3 },
    { x: "50%", delay: 0.3, size: 2 },
    { x: "75%", delay: 0.6, size: 3 },
    { x: "35%", delay: 0.9, size: 2 },
    { x: "60%", delay: 1.2, size: 2 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 rounded-full bg-[#4285f4]/40"
          style={{ left: p.x, width: p.size, height: p.size }}
          animate={{ y: [0, -120], opacity: [0, 0.8, 0] }}
          transition={{
            duration: 3,
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32">
      {/* Header */}
      <FadeUp className="mb-16 md:mb-20">
        <p className="text-[#00dbec] tracking-[0.2em] text-xs mb-4 uppercase" style={{ fontFamily: FONT_LABEL }}>
          /root/career_history
        </p>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#e2e2e6] mb-6" style={{ fontFamily: FONT_HEADLINE }}>
          Professional{" "}
          <span style={{ backgroundImage: "linear-gradient(to right, #00dbec, #006770)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Timeline
          </span>
        </h2>
        <div className="w-24 h-1 bg-[#00dbec]" />
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

        {/* ── Timeline ── */}
        <div className="lg:col-span-8 space-y-4">

          {/* Terminal bar */}
          <FadeUp>
            <div className="flex items-center gap-4 mb-8 bg-[#1a1c1f] p-4 rounded-lg border border-[#3b494b]/20">
              <motion.span
                className="material-symbols-outlined text-[#00dbec]"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                terminal
              </motion.span>
              <span className="text-sm text-[#b4cad6]" style={{ fontFamily: FONT_MONO }}>
                system_exec --verbose --log-path=&quot;/exp/history&quot;
              </span>
            </div>
          </FadeUp>

          <Stagger>
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                variants={fadeUp}
                className={`relative pl-10 md:pl-12 ${i < roles.length - 1 ? "pb-16" : "pb-4"}`}
              >
                {/* Timeline line */}
                {i === 0 ? <TimelineLine /> : (
                  <div className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-[#3b494b]/20" />
                )}

                {/* Node dot */}
                <motion.div
                  className="absolute left-0 top-1 w-3 h-3 z-10"
                  style={{ backgroundColor: role.nodeActive ? "#00dbec" : role.isGoogle ? "#4285f4" : "#3b494b" }}
                  animate={
                    role.nodeActive
                      ? { boxShadow: ["0 0 0px rgba(0,219,236,0.6)", "0 0 14px rgba(0,219,236,0.9)", "0 0 0px rgba(0,219,236,0.6)"] }
                      : role.isGoogle
                      ? { boxShadow: ["0 0 0px rgba(66,133,244,0.5)", "0 0 12px rgba(66,133,244,0.8)", "0 0 0px rgba(66,133,244,0.5)"] }
                      : {}
                  }
                  transition={{ repeat: Infinity, duration: 2.5 }}
                />

                {/* ── Google card — special highlighted treatment ── */}
                {role.isGoogle ? (
                  <motion.div
                    className="relative rounded-xl overflow-hidden"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    whileHover={{ scale: 1.01 }}
                  >
                    {/* Animated border glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(66,133,244,0)",
                          "0 0 24px rgba(66,133,244,0.25), inset 0 0 24px rgba(66,133,244,0.05)",
                          "0 0 0px rgba(66,133,244,0)",
                        ],
                      }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />

                    {/* Google colour bar across top */}
                    <div className="h-1 w-full flex">
                      {["#4285f4", "#ea4335", "#fbbc04", "#34a853"].map((c) => (
                        <motion.div
                          key={c}
                          className="flex-1 h-full"
                          style={{ backgroundColor: c }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        />
                      ))}
                    </div>

                    {/* Card body */}
                    <div className="bg-[#1a1c1f] p-6 md:p-8 border border-[#4285f4]/20 border-t-0 rounded-b-xl">
                      <ScanlineSweep />
                      <FloatingParticles />

                      {/* Header row */}
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-5 gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            {/* Google G */}
                            <span className="text-lg font-black leading-none" style={{ fontFamily: FONT_HEADLINE }}>
                              <span style={{ color: "#4285f4" }}>G</span>
                              <span style={{ color: "#ea4335" }}>o</span>
                              <span style={{ color: "#fbbc04" }}>o</span>
                              <span style={{ color: "#4285f4" }}>g</span>
                              <span style={{ color: "#34a853" }}>l</span>
                              <span style={{ color: "#ea4335" }}>e</span>
                            </span>
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>
                            {role.title}
                          </h3>
                          <p className="text-[#4285f4] font-medium uppercase text-xs tracking-widest mt-1" style={{ fontFamily: FONT_LABEL }}>
                            {role.company}
                          </p>
                        </div>

                        {/* Badge */}
                        <motion.span
                          className="self-start text-xs px-3 py-1 rounded-full border font-bold"
                          style={{
                            fontFamily: FONT_MONO,
                            backgroundColor: "rgba(66,133,244,0.1)",
                            borderColor: "rgba(66,133,244,0.3)",
                            color: "#4285f4",
                          }}
                          animate={{ borderColor: ["rgba(66,133,244,0.3)", "rgba(66,133,244,0.7)", "rgba(66,133,244,0.3)"] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          {role.badge}
                        </motion.span>
                      </div>

                      {/* Meta chips */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {[
                          { icon: "calendar_month", text: role.period! },
                          { icon: "location_on", text: role.location! },
                          { icon: "group_work", text: role.team! },
                        ].map((chip) => (
                          <motion.div
                            key={chip.text}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] border"
                            style={{
                              fontFamily: FONT_MONO,
                              backgroundColor: "rgba(66,133,244,0.06)",
                              borderColor: "rgba(66,133,244,0.2)",
                              color: "#a8c7fa",
                            }}
                            whileHover={{ backgroundColor: "rgba(66,133,244,0.15)", borderColor: "rgba(66,133,244,0.4)" }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: "12px" }}>{chip.icon}</span>
                            {chip.text}
                          </motion.div>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {role.achievements.map((ach, j) => (
                          <motion.div
                            key={j}
                            className="flex gap-3"
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + j * 0.12, duration: 0.5 }}
                          >
                            <span className="shrink-0 opacity-60 text-sm text-[#4285f4]" style={{ fontFamily: FONT_MONO }}>
                              0{j + 1}
                            </span>
                            <p className="text-sm text-[#b9c9cb] leading-relaxed" style={{ fontFamily: FONT_MONO }}>
                              {ach}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Regular card ── */
                  <motion.div
                    className="bg-[#1a1c1f] p-6 md:p-8 rounded-lg"
                    whileHover={{ backgroundColor: "#1e2023" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>
                          {role.title}
                        </h3>
                        <p className="text-[#00dbec] font-medium uppercase text-xs tracking-widest mt-1" style={{ fontFamily: FONT_LABEL }}>
                          {role.company}
                        </p>
                      </div>
                      <span
                        className="text-xs px-3 py-1 self-start bg-[#00edff]/10 text-[#00dbec] rounded-full"
                        style={{ fontFamily: FONT_MONO }}
                      >
                        {role.badge}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {role.achievements.map((ach, j) => (
                        <div key={j} className="flex gap-3">
                          <span className="shrink-0 opacity-50 text-sm text-[#00dbec]" style={{ fontFamily: FONT_MONO }}>
                            0{j + 1}
                          </span>
                          <p className="text-sm text-[#b9c9cb] leading-relaxed" style={{ fontFamily: FONT_MONO }}>{ach}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </Stagger>
        </div>

        {/* ── Sidebar ── */}
        <div className="lg:col-span-4 space-y-6">
          <FadeUp delay={0.2}>
            <div className="bg-[#282a2d] p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none select-none">
                <span className="material-symbols-outlined" style={{ fontSize: "7rem" }}>code</span>
              </div>
              <p className="text-[10px] tracking-[0.2em] text-[#b4cad6] mb-4 uppercase" style={{ fontFamily: FONT_LABEL }}>
                Metrics &amp; Honors
              </p>

              <div className="space-y-10">
                <div>
                  <h4 className="text-4xl font-extrabold text-[#00dbec] flex items-baseline gap-1" style={{ fontFamily: FONT_HEADLINE }}>
                    <CountUp to={1000} suffix="+" />
                  </h4>
                  <p className="text-xs uppercase tracking-wider text-[#b9c9cb]" style={{ fontFamily: FONT_LABEL }}>Problems Solved</p>
                  <div className="mt-2"><AnimatedBar pct="85%" /></div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-4xl font-extrabold text-[#edc225]" style={{ fontFamily: FONT_HEADLINE }}>
                      <CountUp to={1880} />
                    </h4>
                    <a href="https://leetcode.com/u/lerno_breed/" target="_blank" rel="noopener noreferrer">
                      <motion.span
                        className="text-[10px] px-2 py-0.5 bg-[#edc225]/10 text-[#edc225] border border-[#edc225]/30 uppercase tracking-wider cursor-pointer"
                        style={{ fontFamily: FONT_MONO }}
                        whileHover={{ backgroundColor: "rgba(237,194,37,0.2)" }}
                      >
                        ♞ Knight
                      </motion.span>
                    </a>
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[#b9c9cb]" style={{ fontFamily: FONT_LABEL }}>LeetCode Rating</p>
                  <div className="mt-2"><AnimatedBar pct="72%" color="#edc225" /></div>
                </div>

                <div className="pt-6 border-t border-[#3b494b]/30 space-y-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-10 h-10 rounded bg-[#00edff]/10 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0,237,255,0.2)" }}
                    >
                      <span className="material-symbols-outlined text-[#00dbec]">workspace_premium</span>
                    </motion.div>
                    <div>
                      <h5 className="text-lg font-bold text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>3rd Place</h5>
                      <p className="text-[10px] uppercase text-[#b4cad6]" style={{ fontFamily: FONT_LABEL }}>CodeCadet National Finalist</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#edc225]/10 flex items-center justify-center shrink-0">
                      <span className="text-[#edc225] text-base">♟</span>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>Rank 781</h5>
                      <p className="text-[10px] uppercase text-[#b4cad6]" style={{ fontFamily: FONT_LABEL }}>LeetCode Biweekly Contest</p>
                    </div>
                  </div>

                  {/* Google internship quick-stat */}
                  <motion.div
                    className="flex items-center gap-4 p-3 rounded-lg border border-[#4285f4]/20 bg-[#4285f4]/5"
                    whileHover={{ borderColor: "rgba(66,133,244,0.4)", backgroundColor: "rgba(66,133,244,0.1)" }}
                  >
                    <div className="w-10 h-10 rounded bg-[#4285f4]/10 flex items-center justify-center shrink-0 text-base font-black leading-none">
                      <span style={{ color: "#4285f4" }}>G</span>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>Google SWE Intern</h5>
                      <p className="text-[10px] uppercase text-[#a8c7fa]" style={{ fontFamily: FONT_LABEL }}>Bangalore · Summer 2024</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="bg-[#0c0e11] rounded-xl overflow-hidden aspect-square relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-_pDl3jBkm3sBe_GzU28v_NKf5rBYXjKGmlmJb9kcqKf5fy5p1NLwi01NwiqQq2nEztTd8-5cLf7VH1nF-2s45786lKip3Dqgzlysp73exyAPB8xMFJy7cd2UIyNbjBphNKkKNNDbS9pkR5zLgoXVPOYuJ6QCar84kqvHZlks4yPpZ-hjcqKDLBFc4BL0m5sR6BgZiJMieZ3NzwpUV_KfwmdFWnT3lTx_O0DyAR9WiXsGwJeSxqMNg4uJ0HGPfE3DvbR9ajD4aPk"
                alt="Source code on monitor"
                className="w-full h-full object-cover opacity-40"
                whileHover={{ opacity: 0.7, scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111316] to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] text-[#00dbec] mb-2 uppercase tracking-tighter" style={{ fontFamily: FONT_MONO }}>
                  // Core_Architecture.vsh
                </p>
                <p className="text-sm font-medium text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>
                  Systematically optimizing for high-concurrency environments.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
