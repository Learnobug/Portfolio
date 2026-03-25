"use client";

import { FadeUp, Stagger, motion, fadeUp } from "./motion";

export default function Architecture() {
  return (
    <section id="architecture" className="px-6 md:px-8 max-w-7xl mx-auto mb-24 md:mb-32">
      {/* Header */}
      <FadeUp>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
          <div className="max-w-xl">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-[#e2e2e6]"
              style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
            >
              Systems Architecture
            </h2>
            <p className="text-[#b9c9cb]">
              Visualizing high-concurrency patterns and distributed infrastructure
              modules designed for resilience.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            {[
              { color: "bg-gradient-to-br from-[#00dbec] to-[#006770]", label: "Active Path" },
              { color: "bg-[#3b494b]", label: "Data Stream" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 ${l.color}`} />
                <span
                  className="text-[10px] uppercase tracking-widest text-[#b9c9cb]"
                  style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
                >
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Cards */}
      <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* 1. Event-Driven Monitoring */}
        <motion.div
          variants={fadeUp}
          className="bg-[#0c0e11] border border-[#3b494b]/10 p-8 flex flex-col group"
          whileHover={{ borderColor: "rgba(0,219,236,0.2)" }}
        >
          <h4
            className="text-lg md:text-xl mb-2 text-[#e2e2e6]"
            style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
          >
            Event-Driven Monitoring
          </h4>
          <p className="text-sm text-[#b9c9cb] mb-8">
            Real-time ingestion and telemetry processing pipeline.
          </p>

          <div className="flex-grow flex flex-col items-center justify-center min-h-[280px] space-y-5">
            <motion.div
              className="w-24 h-12 border border-[#849495] flex items-center justify-center bg-[#111316] group-hover:border-[#00dbec] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span
                className="text-[10px] uppercase tracking-tighter text-[#e2e2e6]"
                style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
              >
                Ingress App
              </span>
            </motion.div>

            <div className="w-px h-8 bg-[#3b494b] group-hover:bg-[#00dbec] transition-colors relative">
              <motion.span
                className="absolute top-1/2 -translate-y-1/2 -right-3 material-symbols-outlined text-[#00dbec]"
                style={{ fontSize: "14px" }}
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
              >
                arrow_downward
              </motion.span>
            </div>

            <motion.div
              className="w-32 h-16 border-2 border-dashed border-[#00dbec]/50 flex items-center justify-center bg-[#282a2d] rounded-full"
              animate={{ scale: [1, 1.03, 1], borderColor: ["rgba(0,219,236,0.5)", "rgba(0,219,236,0.9)", "rgba(0,219,236,0.5)"] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <span
                className="text-[10px] font-bold text-[#00dbec]"
                style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
              >
                KAFKA / REDIS
              </span>
            </motion.div>

            <div className="w-px h-8 bg-[#3b494b] group-hover:bg-[#00dbec] transition-colors" />

            <div className="grid grid-cols-2 gap-4 w-full">
              {["Analytics Worker", "Alerting Engine"].map((label) => (
                <motion.div
                  key={label}
                  className="p-3 border border-[#3b494b] text-center"
                  whileHover={{ borderColor: "#00dbec", backgroundColor: "rgba(0,219,236,0.05)" }}
                >
                  <span
                    className="text-[8px] uppercase text-[#b9c9cb] opacity-60"
                    style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
                  >
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2. Queue-Based API Logic */}
        <motion.div
          variants={fadeUp}
          className="bg-[#0c0e11] border border-[#3b494b]/10 p-8 flex flex-col group"
          whileHover={{ borderColor: "rgba(0,219,236,0.2)" }}
        >
          <h4
            className="text-lg md:text-xl mb-2 text-[#e2e2e6]"
            style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
          >
            Queue-Based API Logic
          </h4>
          <p className="text-sm text-[#b9c9cb] mb-8">
            Asynchronous task management and load balancing.
          </p>

          <div className="flex-grow flex flex-col items-center justify-center min-h-[280px]">
            <div className="w-full flex justify-around mb-4">
              {["devices", "public"].map((icon) => (
                <motion.span
                  key={icon}
                  className="material-symbols-outlined text-[#3b494b] group-hover:text-[#d4faff] transition-colors"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: icon === "public" ? 0.4 : 0 }}
                >
                  {icon}
                </motion.span>
              ))}
            </div>

            <div className="w-full h-px bg-[#3b494b] group-hover:bg-[#00dbec] transition-colors mb-6 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 w-1/3 bg-[#d4faff] opacity-60"
                animate={{ x: ["-100%", "400%"] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
              />
            </div>

            <div className="w-40 h-24 bg-[#282a2d] flex flex-col p-2 gap-1 border-l-4 border-[#00dbec]">
              {[1, 0.4, 0.3, 1].map((opacity, i) => (
                <motion.div
                  key={i}
                  className="h-4 rounded-sm bg-[#3b494b]"
                  style={{ width: i === 2 ? "75%" : "100%", opacity }}
                  animate={{ opacity: [opacity, opacity * 0.5, opacity] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                />
              ))}
            </div>

            <div className="mt-6 flex gap-2">
              {[false, false, true].map((active, i) => (
                <motion.div
                  key={i}
                  className={`w-6 h-6 rounded-sm border ${active ? "border-[#00dbec] bg-[#00dbec]/10" : "border-[#3b494b]"}`}
                  animate={active ? { borderColor: ["#00dbec", "#00edff", "#00dbec"] } : {}}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. Edge Proxy */}
        <motion.div
          variants={fadeUp}
          className="bg-[#0c0e11] border border-[#3b494b]/10 p-8 flex flex-col group"
          whileHover={{ borderColor: "rgba(0,219,236,0.2)" }}
        >
          <h4
            className="text-lg md:text-xl mb-2 text-[#e2e2e6]"
            style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
          >
            Edge Proxy (NGINX/Envoy)
          </h4>
          <p className="text-sm text-[#b9c9cb] mb-8">
            Global distribution and TLS termination at the edge.
          </p>

          <div className="flex-grow min-h-[280px] flex items-center justify-center relative">
            <motion.div
              className="absolute w-48 h-48 border border-[#3b494b]/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            />
            <motion.div
              className="absolute w-32 h-32 border border-[#00dbec]/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
            <motion.div
              className="z-10 bg-[#282a2d] p-4 border border-[#00dbec]/50 flex flex-col items-center"
              whileHover={{ scale: 1.05, borderColor: "#00dbec" }}
              animate={{ boxShadow: ["0 0 0px rgba(0,219,236,0.2)", "0 0 20px rgba(0,219,236,0.4)", "0 0 0px rgba(0,219,236,0.2)"] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <span className="material-symbols-outlined text-[#00dbec] text-3xl mb-1">shield</span>
              <span
                className="text-[10px] font-bold tracking-widest text-white uppercase"
                style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
              >
                Edge Node
              </span>
            </motion.div>
            <div className="absolute top-0 right-0">
              <span
                className="text-[8px] text-[#b9c9cb]"
                style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
              >
                GEO: AP-SOUTH-1
              </span>
            </div>
            <div className="absolute bottom-0 left-0">
              <motion.span
                className="text-[8px] text-[#b9c9cb]"
                style={{ fontFamily: "var(--font-roboto-mono), Roboto Mono, monospace" }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                LATENCY: &lt;12ms
              </motion.span>
            </div>
          </div>
        </motion.div>

      </Stagger>
    </section>
  );
}
