"use client";

import { FadeUp, Stagger, CountUp, AnimatedBar, motion, fadeUp } from "./motion";

const philosophy = [
  "Scalability is not an afterthought; it is the foundation of the architecture.",
  "Reliability over hype. Boring technology is often the most robust.",
  "Code is read more than it is written. Precision in naming and structure.",
];

const metrics = [
  { label: "Request Latency", value: "< 45ms", icon: "speed" },
  { label: "Concurrency", value: "1.2M req/sec", icon: "hub" },
  { label: "Build Integrity", value: "Verified", icon: "verified_user" },
];

const stats = [
  { label: "Education", value: "Pre-Final Year" },
  { label: "Uptime Goal", value: "99.99%" },
  { label: "Location", value: "Delhi, India" },
  { label: "Status", value: "Available", highlight: true },
];

export default function About() {
  return (
    <section id="about-detail" className="px-6 md:px-8 max-w-7xl mx-auto mb-24 md:mb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Biography Card */}
        <FadeUp className="md:col-span-8" delay={0}>
          <div className="bg-[#1a1c1f] p-8 md:p-12 relative overflow-hidden group h-full">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none select-none">
              <span className="material-symbols-outlined" style={{ fontSize: "9rem" }}>engineering</span>
            </div>

            <h2
              className="text-[10px] tracking-[0.2em] text-[#00dbec] uppercase mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
            >
              <span className="w-8 h-px bg-[#00dbec] inline-block" />
              The Engineer
            </h2>

            <p
              className="text-lg md:text-xl text-[#b9c9cb] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
            >
              Pre-final year engineering student and backend-focused developer with
              hands-on production experience building distributed systems and scalable
              architectures. Currently engineering at Radiant Horizon Hospitality while
              shipping real-world systems that serve live users. My approach is rooted
              in the belief that software should be as durable as physical infrastructure.
            </p>

            <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-[#3b494b]/20 pt-8" fast>
              {stats.map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <span
                    className="block text-[10px] text-[#b4cad6] uppercase tracking-widest mb-1"
                    style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`text-base md:text-lg ${item.highlight ? "text-[#00edff]" : "text-[#e2e2e6]"}`}
                    style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
                  >
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </FadeUp>

        {/* Philosophy Card */}
        <FadeUp className="md:col-span-4" delay={0.15}>
          <div className="bg-[#282a2d] p-8 flex flex-col justify-between border-l-2 border-[#00dbec]/20 h-full">
            <div>
              <h2
                className="text-[10px] tracking-[0.2em] text-[#00dbec] uppercase mb-8"
                style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
              >
                Philosophy
              </h2>
              <Stagger className="space-y-6">
                {philosophy.map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex gap-4 list-none">
                    <span
                      className="text-xs text-[#00dbec] shrink-0"
                      style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
                    >
                      0{i + 1}
                    </span>
                    <p className="text-sm text-[#e2e2e6] leading-snug">{item}</p>
                  </motion.li>
                ))}
              </Stagger>
            </div>

            <div className="mt-8 pt-6 border-t border-[#3b494b]/10">
              <div className="flex justify-between items-center mb-2">
                <span
                  className="text-[10px] uppercase text-[#b4cad6]"
                  style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
                >
                  Complexity Mitigation
                </span>
                <span
                  className="text-[10px] text-[#00dbec]"
                  style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
                >
                  OPTIMAL
                </span>
              </div>
              <AnimatedBar pct="92%" />
            </div>
          </div>
        </FadeUp>

        {/* Metrics Row */}
        <Stagger className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              custom={i}
              className="bg-[#0c0e11] p-6 border border-[#3b494b]/10 flex items-center justify-between"
            >
              <div>
                <span
                  className="text-[10px] tracking-widest text-[#b4cad6] uppercase block mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
                >
                  {m.label}
                </span>
                <span
                  className="text-xl md:text-2xl text-[#e2e2e6] tracking-tighter"
                  style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
                >
                  {m.value}
                </span>
              </div>
              <motion.span
                className="material-symbols-outlined text-[#00dbec] opacity-40 text-3xl"
                whileHover={{ opacity: 0.8, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {m.icon}
              </motion.span>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
