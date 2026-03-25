"use client";

import { FadeUp, Stagger, AnimatedBar, motion, fadeUp } from "./motion";

const backendSkills = [
  { name: "JavaScript / TypeScript", pct: "95%" },
  { name: "Node.js / Express", pct: "93%" },
  { name: "React / Next.js", pct: "90%" },
  { name: "MERN Stack", pct: "92%" },
  { name: "REST APIs", pct: "94%" },
  { name: "Microservices", pct: "85%" },
];

const frontendSkills = [
  { icon: "rebase_edit", name: "React / Next.js" },
  { icon: "code", name: "JavaScript / TypeScript" },
  { icon: "palette", name: "Tailwind CSS" },
];

const databases = ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "SQL"];

const cloudTools = [
  { icon: "cloud", label: "AWS" },
  { icon: "view_in_ar", label: "Docker" },
  { icon: "terminal", label: "Linux" },
  { icon: "hub", label: "K8s" },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-8 max-w-7xl mx-auto mb-24 md:mb-32">
      {/* Header */}
      <FadeUp>
        <div className="inline-block mb-6 px-3 py-1 bg-[#282a2d] border-l-2 border-[#00dbec]">
          <span
            className="text-xs tracking-[0.2em] text-[#00dbec] uppercase"
            style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
          >
            Technical Stack &amp; Infrastructure
          </span>
        </div>
        <h2
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 text-[#e2e2e6]"
          style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
        >
          Engineering <span className="text-[#00dbec] italic">Scalable</span> Systems.
        </h2>
      </FadeUp>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Backend — col-span-8 */}
        <FadeUp className="md:col-span-8" delay={0.05}>
          <div className="bg-[#1a1c1f] p-8 relative overflow-hidden group h-full">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none select-none">
              <span className="material-symbols-outlined" style={{ fontSize: "9rem" }}>dns</span>
            </div>
            <h3
              className="text-xs tracking-widest text-[#b4cad6] mb-6 uppercase"
              style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
            >
              Backend &amp; Systems
            </h3>
            <Stagger className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 relative z-10" fast>
              {backendSkills.map((s) => (
                <motion.div key={s.name} variants={fadeUp}>
                  <p
                    className="text-base md:text-lg mb-2 text-[#e2e2e6]"
                    style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
                  >
                    {s.name}
                  </p>
                  <AnimatedBar pct={s.pct} />
                </motion.div>
              ))}
            </Stagger>
          </div>
        </FadeUp>

        {/* Frontend — col-span-4 */}
        <FadeUp className="md:col-span-4" delay={0.15}>
          <div className="bg-[#282a2d] p-8 flex flex-col justify-between h-full">
            <div>
              <h3
                className="text-xs tracking-widest text-[#b4cad6] mb-6 uppercase"
                style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
              >
                Frontend
              </h3>
              <Stagger className="space-y-6">
                {frontendSkills.map((s) => (
                  <motion.div
                    key={s.name}
                    variants={fadeUp}
                    className="flex items-center gap-4"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="material-symbols-outlined text-[#00dbec]">{s.icon}</span>
                    <span
                      className="text-lg md:text-xl text-[#e2e2e6]"
                      style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
                    >
                      {s.name}
                    </span>
                  </motion.div>
                ))}
              </Stagger>
            </div>
            <div className="mt-8 pt-6 border-t border-[#3b494b]/20">
              <p className="text-sm text-[#b9c9cb] leading-relaxed">
                Focusing on high-performance, accessible, and responsive interfaces
                with a developer-first approach.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Databases — col-span-5 */}
        <FadeUp className="md:col-span-5" delay={0.1}>
          <div className="bg-[#282a2d] p-8 border-l-4 border-[#edc225] h-full">
            <h3
              className="text-xs tracking-widest text-[#b4cad6] mb-6 uppercase"
              style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
            >
              Databases &amp; Storage
            </h3>
            <Stagger className="flex flex-wrap gap-3 mb-8" fast>
              {databases.map((db) => (
                <motion.span
                  key={db}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, backgroundColor: "#3b494b" }}
                  className="px-4 py-2 bg-[#0c0e11] text-sm uppercase tracking-wider text-[#e2e2e6] cursor-default"
                  style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
                >
                  {db}
                </motion.span>
              ))}
            </Stagger>
            <div className="bg-[#0c0e11] p-4 rounded-lg overflow-x-auto">
              <code
                className="text-xs text-[#edc225] whitespace-nowrap"
                style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
              >
                SELECT performance FROM stack WHERE type = &apos;OLAP&apos; AND engine = &apos;ClickHouse&apos;;
              </code>
            </div>
          </div>
        </FadeUp>

        {/* Cloud & DevOps — col-span-7 */}
        <FadeUp className="md:col-span-7" delay={0.2}>
          <div className="bg-[#1a1c1f] p-8 relative overflow-hidden h-full">
            <div className="absolute inset-0 micro-grid" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3
                  className="text-xs tracking-widest text-[#b4cad6] mb-6 uppercase"
                  style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
                >
                  Cloud &amp; DevOps
                </h3>
                <Stagger className="grid grid-cols-2 sm:grid-cols-4 gap-4" fast>
                  {cloudTools.map((t) => (
                    <motion.div
                      key={t.label}
                      variants={fadeUp}
                      whileHover={{ y: -4, backgroundColor: "#333538" }}
                      className="text-center p-4 bg-[#1e2023] transition-colors cursor-default"
                    >
                      <span className="material-symbols-outlined text-[#d4faff] mb-2 block">{t.icon}</span>
                      <p
                        className="text-xs font-bold text-[#e2e2e6]"
                        style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
                      >
                        {t.label}
                      </p>
                    </motion.div>
                  ))}
                </Stagger>
              </div>
              <p
                className="mt-6 text-sm text-[#b9c9cb]"
                style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
              >
                Infrastructure as Code: Terraform, CI/CD Pipelines (GitHub Actions, Jenkins), AWS EC2 / S3 / Lambda
              </p>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
