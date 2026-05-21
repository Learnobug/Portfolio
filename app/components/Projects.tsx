"use client";

import { FadeUp, Stagger, motion, fadeUp } from "./motion";
import TiltCard from "./TiltCard";

const FONT_HEADLINE = "var(--font-space-grotesk), Space Grotesk, sans-serif";
const FONT_MONO = "var(--font-roboto-mono), Roboto Mono, monospace";
const FONT_LABEL = "var(--font-space-grotesk), Space Grotesk, sans-serif";
const TAG_CLS = "px-2 py-1 bg-[#1e2023] text-[#b4cad6] text-[10px] rounded";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-8 max-w-7xl mx-auto mb-24 md:mb-32 relative">
      <div className="absolute inset-0 micro-grid -z-10 pointer-events-none" />

      {/* Header */}
      <FadeUp>
        <header className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#00dbec]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#b4cad6]" style={{ fontFamily: FONT_LABEL }}>
              The Portfolio Repository
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6" style={{ fontFamily: FONT_HEADLINE }}>
            ENGINEERED
            <br />
            <span style={{ backgroundImage: "linear-gradient(to right, #00dbec, #006770)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              SOLUTIONS.
            </span>
          </h2>
          <p className="max-w-2xl text-[#b9c9cb] leading-relaxed text-base md:text-lg">
            Technical showcase of high-performance systems, distributed architecture, and immersive digital environments.
          </p>
        </header>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* RelayEdge */}
        <FadeUp className="md:col-span-8" delay={0.05}>
          <TiltCard className="h-full">
          <div
            className="glass-card rounded-xl p-8 h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] uppercase tracking-[0.1em] px-3 py-1 bg-[#00edff]/10 text-[#00dbec] rounded-full border border-[#00dbec]/20" style={{ fontFamily: FONT_LABEL }}>
                  Reverse Proxy
                </span>
                <div className="flex items-center gap-2">
                  <motion.span className="material-symbols-outlined text-[#edc225] text-sm" animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 2 }}>star</motion.span>
                  <span className="text-xs text-[#b9c9cb]" style={{ fontFamily: FONT_MONO }}>v2.4.0</span>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#e2e2e6] hover:text-[#00dbec] transition-colors" style={{ fontFamily: FONT_HEADLINE }}>RelayEdge</h3>
              <p className="text-[#b9c9cb] mb-8 line-clamp-3">
                Asynchronous reverse proxy built with Node.js. Engineered a custom hybrid caching layer (in-memory L1 + disk L2) for extreme throughput with minimal latency overhead.
              </p>
              <div className="flex gap-8 mb-8">
                {[{ val: "-40%", label: "P95 Latency", color: "text-[#00dbec]" }, { val: "99.9%", label: "Reliability", color: "text-[#e2e2e6]" }].map(m => (
                  <div key={m.label}>
                    <div className={`${m.color} text-2xl font-bold`} style={{ fontFamily: FONT_HEADLINE }}>{m.val}</div>
                    <div className="text-[10px] uppercase text-[#b4cad6]" style={{ fontFamily: FONT_LABEL }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Node.js", "Express", "Redis", "AWS"].map(t => (
                  <span key={t} className={TAG_CLS} style={{ fontFamily: FONT_MONO }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <motion.a
                href="https://github.com/Learnobug/CacheProxy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#00dbec] text-xs uppercase tracking-widest"
                style={{ fontFamily: FONT_LABEL }}
                whileHover={{ gap: "16px" }}
              >
                View Source <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </motion.a>
              <div className="h-10 w-10 rounded-full border border-[#3b494b]/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">code</span>
              </div>
            </div>
          </div>
          </TiltCard>
        </FadeUp>

        {/* Sentinel */}
        <FadeUp className="md:col-span-4" delay={0.15}>
          <TiltCard className="h-full">
          <div className="bg-[#1a1c1f] rounded-xl p-8 h-full flex flex-col group hover:bg-[#1e2023] transition-colors duration-300">
            <div className="mb-6 h-48 overflow-hidden rounded-lg bg-[#0c0e11] shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-LTsWZCXCC6Bt9TWK6TXTgyXg9mb9jw0zdGyUfyZa9Y6VMmMAF7Zo5LyqXUwNlLAfj5YLJNC332bim2H5pJdSz1EXSFC2Yzn0MCf6pvKq7V8PTWZCPlZlJIYLZn1tFfgVfB0xwc0IpPkDkfR1IXuvgsIb3lqEsERdgk0Qp-dLMS64UObexBSaltlmwRmkCgYVoPn-1a2MwwLTdKM5LxdVYSQfsmXh7zz5Ofm-ICe5o7LvMt6CYphGDfYiI5LIXGF-SLmuF2Xuw6U"
                alt="Technical dashboard with real-time graphs"
                className="w-full h-full object-cover opacity-50"
                whileHover={{ opacity: 0.8, scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>Sentinel</h3>
            <p className="text-[#b9c9cb] text-sm mb-6 flex-grow">
              Advanced VM monitoring platform. Utilizes a Node.js-based agent, Redis Streams for message bus, and ClickHouse for OLAP analytics.
            </p>
            <div className="text-[10px] text-[#00dbec] mb-4 tracking-tighter uppercase" style={{ fontFamily: FONT_MONO }}>Node.js • Redis Streams • Clickhouse</div>
            <motion.a
              href="https://github.com/notSumit25/Sentinel/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded border border-[#3b494b] text-[10px] uppercase tracking-widest text-[#e2e2e6] flex items-center justify-center gap-2"
              style={{ fontFamily: FONT_LABEL }}
              whileHover={{ borderColor: "#00dbec", color: "#00dbec" }}
            >
              View on GitHub <span className="material-symbols-outlined text-xs">open_in_new</span>
            </motion.a>
          </div>
          </TiltCard>
        </FadeUp>

        {/* API Monitor */}
        <FadeUp className="md:col-span-12" delay={0.1}>
          <motion.div
            className="bg-[#1a1c1f] border border-[#3b494b]/10 rounded-xl p-8 md:p-10 overflow-hidden relative"
            whileHover={{ borderColor: "rgba(0,219,236,0.3)" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
              <div className="flex-1 z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#00dbec] text-lg">monitoring</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#b4cad6]" style={{ fontFamily: FONT_LABEL }}>Event-Driven Architecture</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>
                  API Monitor — Real-time Health Platform
                </h3>
                <p className="text-[#b9c9cb] text-base md:text-lg mb-8 max-w-xl">
                  Built a full-stack, event-driven API monitoring platform using a scalable queue-based architecture for real-time uptime/latency tracking and fault isolation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-[10px] uppercase text-[#00dbec] tracking-widest mb-4" style={{ fontFamily: FONT_LABEL }}>Key Features</h4>
                    <ul className="space-y-2 text-sm text-[#b9c9cb]">
                      {["Real-time dashboard", "Instant email alerts (Mailjet)", "Asynchronous health checks"].map(f => (
                        <motion.li key={f} className="flex items-center gap-2" whileHover={{ x: 4 }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00dbec] shrink-0" />{f}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase text-[#00dbec] tracking-widest mb-4" style={{ fontFamily: FONT_LABEL }}>Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "Node.js", "RabbitMQ", "PostgreSQL", "Prisma", "Turborepo"].map(t => (
                        <span key={t} className={TAG_CLS} style={{ fontFamily: FONT_MONO }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <motion.button className="flex items-center gap-3 bg-[#00edff] text-[#006770] px-6 py-3 rounded text-xs uppercase font-bold tracking-[0.2em]" style={{ fontFamily: FONT_LABEL }} whileHover={{ opacity: 0.9, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    Documentation <span className="material-symbols-outlined text-sm">menu_book</span>
                  </motion.button>
                  <motion.a href="https://blissful-passion-production-813a.up.railway.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-[#00dbec]/30 text-[#00dbec] px-6 py-3 rounded text-xs uppercase font-bold tracking-[0.2em]" style={{ fontFamily: FONT_LABEL }} whileHover={{ backgroundColor: "rgba(0,219,236,0.1)", borderColor: "#00dbec" }}>
                    Live Demo <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </motion.a>
                </div>
              </div>
              {/* Live dashboard mock */}
              <div className="flex-1 bg-[#0c0e11]/50 rounded-lg border border-[#3b494b]/20 min-h-[200px] lg:min-h-[300px] flex flex-col gap-3 p-6">
                {[
                  { ok: true, path: "/api/health", ms: "23ms" },
                  { ok: true, path: "/api/users", ms: "41ms" },
                  { ok: false, path: "/api/payments", ms: "timeout" },
                  { ok: true, path: "/api/metrics", ms: "18ms" },
                  { ok: true, path: "/api/events", ms: "55ms" },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <motion.div
                      className={`w-2 h-2 rounded-full shrink-0 ${row.ok ? "bg-[#00dbec]" : "bg-[#ffb4ab]"}`}
                      animate={row.ok ? { opacity: [1, 0.4, 1] } : { scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                    />
                    <span className="text-[10px] text-[#b9c9cb] flex-1" style={{ fontFamily: FONT_MONO }}>{row.path}</span>
                    <span className={`text-[9px] shrink-0 ${row.ok ? "text-[#00dbec]" : "text-[#ffb4ab]"}`} style={{ fontFamily: FONT_MONO }}>{row.ms}</span>
                  </motion.div>
                ))}
                <div className="mt-auto pt-4 border-t border-[#3b494b]/20">
                  <motion.div className="text-[9px] text-[#b9c9cb] uppercase tracking-widest" style={{ fontFamily: FONT_MONO }} animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                    // RabbitMQ consumer active — queue depth: 0
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00dbec]/5 blur-[120px] pointer-events-none" />
          </motion.div>
        </FadeUp>

        {/* VR-Connect */}
        <FadeUp className="md:col-span-4" delay={0.05}>
          <TiltCard className="h-full">
          <div className="bg-[#1e2023] rounded-xl p-8 h-full flex flex-col">
            <motion.span className="material-symbols-outlined text-[#00dbec] mb-4" animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              settings_input_component
            </motion.span>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>VR-Connect</h3>
            <p className="text-[#b9c9cb] text-sm mb-6 flex-grow">
              2D Virtual Space with WebRTC spatial audio integration. Real-time communication via WebSockets and PostgreSQL persistence.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-[#b9c9cb] text-xs">group</span>
              <span className="text-[10px] text-[#b9c9cb]" style={{ fontFamily: FONT_MONO }}>WebRTC Spatial Audio</span>
            </div>
            <motion.a
              href="https://vrworld-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center gap-2 text-[#d4faff] text-xs uppercase"
              style={{ fontFamily: FONT_LABEL }}
              whileHover={{ gap: "12px" }}
            >
              View Project <span className="material-symbols-outlined text-sm">open_in_new</span>
            </motion.a>
          </div>
          </TiltCard>
        </FadeUp>

        {/* Hobostays */}
        <FadeUp className="md:col-span-8" delay={0.1}>
          <div className="bg-gradient-to-br from-[#1a1c1f] to-[#333538] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center border border-[#3b494b]/10 h-full">
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase text-[#edc225] mb-2" style={{ fontFamily: FONT_LABEL }}>Ecosystem Spotlight</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>Hobostays Network</h3>
              <p className="text-[#b9c9cb] mb-6 text-sm">
                A full-stack hospitality infrastructure comprising three critical platforms for property management and data extraction.
              </p>
              <div className="space-y-3">
                {[
                  { icon: "home_work", url: "pms.hobostays.in", href: "https://pms.hobostays.in", label: "Management" },
                  { icon: "query_stats", url: "scrapper.hobostays.in", href: "https://scrapper.hobostays.in", label: "Extraction" },
                  { icon: "shopping_bag", url: "hobostays.in", href: "https://hobostays.in", label: "Consumer" },
                  { icon: "android", url: "Play Store — Live", href: "https://play.google.com/store/apps/details?id=com.hobopmssorganization.hobostays", label: "Android App" },
                  { icon: "phone_iphone", url: "App Store — Live", href: "https://apps.apple.com/in/app/hobostays/id6760900613", label: "iOS App" },
                ].map((item) => (
                  <motion.a
                    key={item.url}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#0c0e11]/50 rounded"
                    whileHover={{ backgroundColor: "rgba(12,14,17,0.9)", x: 4 }}
                  >
                    <span className="material-symbols-outlined text-[#00dbec] text-sm">{item.icon}</span>
                    <span className="text-xs" style={{ fontFamily: FONT_MONO }}>{item.url}</span>
                    <span className="ml-auto text-[10px] text-[#b4cad6] uppercase shrink-0" style={{ fontFamily: FONT_LABEL }}>{item.label}</span>
                    <span className="material-symbols-outlined text-[#b4cad6] text-xs">open_in_new</span>
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="w-full md:w-64 h-64 bg-[#0c0e11] rounded-lg overflow-hidden border border-[#3b494b]/20 relative shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVFdX-kIe3oHPonaZRTtdrkFvQ9yJ1q87m8PfGkKEU6GZSfFc4d75JlJWfZY-sPz5KK6D_yzztpXgiVONuHFF3qW87ZfkYdh_01WXPV22TgrD4mQJtaP__YVo8e_-LlMCP0IXKcMQgBHYNJ3De2Jn-gATkHwnkE9Ai-eDCFgpK-2_l9MfT_mhw6FxVl5-5go5h2DUF95op_5zh_5qBlU8n-6ufZnRUkjPVLgy0YffTRCK0VGua_e-jyI-ASJ-M-x3RLafIUNtVOzI" alt="Network graph" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e11] to-transparent" />
            </div>
          </div>
        </FadeUp>

        {/* Code Snippet */}
        <FadeUp className="md:col-span-12" delay={0.05}>
          <div className="bg-[#0c0e11] rounded-xl p-6 md:p-8 border border-[#3b494b]/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-1.5">
                {["bg-[#ffb4ab]/20", "bg-[#edc225]/20", "bg-[#00dbec]/20"].map((c, i) => (
                  <motion.div key={i} className={`w-3 h-3 rounded-full ${c}`} whileHover={{ scale: 1.3 }} />
                ))}
              </div>
              <span className="text-[10px] text-[#b9c9cb]" style={{ fontFamily: FONT_MONO }}>RelayEdge/proxyHandler.js</span>
            </div>
            <pre className="text-xs text-[#b9c9cb] overflow-x-auto p-4 leading-relaxed" style={{ fontFamily: FONT_MONO }}>
              <span className="text-[#b9c9cb]">{"// Custom Asynchronous Caching Strategy Implementation"}{"\n"}</span>
              <span className="text-[#00dbec]">const </span>
              <span className="text-[#b4cad6]">routeRequest</span>
              <span className="text-[#e2e2e6]"> = </span>
              <span className="text-[#00dbec]">async </span>
              <span className="text-[#e2e2e6]">(req, res) =&gt; {"{"}{"\n"}</span>
              <span className="text-[#00dbec]">  const </span>
              <span className="text-[#e2e2e6]">cached = </span>
              <span className="text-[#00dbec]">await </span>
              <span className="text-[#e2e2e6]">cacheProvider.get(req.path);{"\n"}</span>
              <span className="text-[#00dbec]">  if </span>
              <span className="text-[#e2e2e6]">(cached) </span>
              <span className="text-[#00dbec]">return </span>
              <span className="text-[#e2e2e6]">res.json(cached);{"\n"}</span>
              <span className="text-[#00dbec]">  const </span>
              <span className="text-[#e2e2e6]">data = </span>
              <span className="text-[#00dbec]">await </span>
              <span className="text-[#e2e2e6]">origin.fetch(req);{"\n"}</span>
              <span className="text-[#00dbec]">  await </span>
              <span className="text-[#e2e2e6]">cacheProvider.set(req.path, data);{"\n"}</span>
              <span className="text-[#00dbec]">  return </span>
              <span className="text-[#e2e2e6]">res.json(data);{"\n"}</span>
              <span className="text-[#e2e2e6]">{"}"}</span>
            </pre>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
