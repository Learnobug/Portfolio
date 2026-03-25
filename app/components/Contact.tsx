"use client";

import { FadeUp, Stagger, motion, fadeUp } from "./motion";
import TypeWriter from "./TypeWriter";
import MagneticButton from "./MagneticButton";

const FONT_HEADLINE = "var(--font-space-grotesk), Space Grotesk, sans-serif";
const FONT_MONO = "var(--font-roboto-mono), Roboto Mono, monospace";
const FONT_LABEL = "var(--font-space-grotesk), Space Grotesk, sans-serif";

const LABEL_CLS = "block text-[0.6875rem] uppercase tracking-widest text-[#b9c9cb] mb-2";
const INPUT_CLS =
  "w-full bg-[#0c0e11] border-0 border-b-2 border-[#3b494b] focus:border-[#00edff] focus:outline-none focus:ring-0 text-sm p-4 placeholder:opacity-30 transition-all duration-200 rounded-t-lg text-[#e2e2e6]";

const logLines = [
  { tag: "SECURE_LINK", text: "initializing port 8080..." },
  { tag: "QUERY", text: "identity: Gunjan Aggarwal" },
  { tag: "RESOLVE", text: "role: Senior_Backend_Engineer" },
  { tag: "LOAD", text: "components: MERN, Next.js, Node.js, AWS, Linux..." },
  { tag: "SUCCESS", text: "handshake_complete: status_200", cyan: true },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32 relative">
      {/* Header */}
      <FadeUp className="mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#282a2d] rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#00edff] animate-pulse" />
          <span className="text-[0.6875rem] uppercase tracking-widest text-[#00dbec]" style={{ fontFamily: FONT_LABEL }}>
            Node Status: Operational
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#e2e2e6] mb-6" style={{ fontFamily: FONT_HEADLINE }}>
          Initialize{" "}
          <span style={{ backgroundImage: "linear-gradient(to right, #00dbec, #006770)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Communication
          </span>
        </h2>
        <p className="max-w-2xl text-[#b9c9cb] text-base md:text-lg leading-relaxed">
          I&apos;m always open to discussing distributed systems, architecture, or high-performance engineering opportunities. Request a secure handshake below.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

        {/* Left Column */}
        <FadeUp className="lg:col-span-5" delay={0.1}>
          <div className="space-y-8">
            {/* Status card */}
            <div className="bg-[#1a1c1f] p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00edff]" />
              <h3 className="text-[0.6875rem] uppercase tracking-widest text-[#849495] mb-4" style={{ fontFamily: FONT_LABEL }}>Diagnostic Result</h3>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#282a2d] rounded-lg text-[#00edff] shrink-0">
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>Available for High-Impact Projects</p>
                  <p className="text-sm text-[#00dbec] opacity-70 mt-1" style={{ fontFamily: FONT_MONO }}>Ready for deployment (EST/IST shifts)</p>
                </div>
              </div>
            </div>

            {/* System log */}
            <div className="bg-[#0c0e11] border-l border-[#3b494b]/30 p-6 rounded-lg text-xs leading-loose text-[#b9c9cb]/80" style={{ fontFamily: FONT_MONO }}>
              <div className="flex items-center justify-between mb-4 border-b border-[#3b494b]/10 pb-2">
                <span className="text-[#00dbec]">[SYSTEM_LOG]</span>
                <span className="opacity-40">v4.0.2-stable</span>
              </div>
              <TypeWriter lines={logLines} speed={22} lineDelay={180} className="space-y-1" />
            </div>

            {/* Access nodes */}
            <div className="space-y-4">
              <h3 className="text-[0.6875rem] uppercase tracking-widest text-[#849495]" style={{ fontFamily: FONT_LABEL }}>Direct Access Nodes</h3>
              <motion.a href="mailto:aggarwalgunjan597@gmail.com" className="flex items-center gap-4 p-4 bg-[#1a1c1f] rounded-lg group" whileHover={{ backgroundColor: "#282a2d", x: 4 }}>
                <span className="material-symbols-outlined text-[#00edff]">mail</span>
                <span className="text-sm group-hover:text-[#00edff] transition-colors" style={{ fontFamily: FONT_MONO }}>aggarwalgunjan597@gmail.com</span>
              </motion.a>
              <div className="flex items-center gap-4 p-4 bg-[#1a1c1f] rounded-lg">
                <span className="material-symbols-outlined text-[#00edff]">location_on</span>
                <span className="text-sm" style={{ fontFamily: FONT_MONO }}>Delhi, India</span>
              </div>
              <div className="flex gap-4">
                {[
                  { label: "GitHub", href: "https://github.com/Learnobug" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/gunjan-aggarwal-066a16256" },
                ].map((link) => (
                  <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 p-4 bg-[#1a1c1f] rounded-lg group" whileHover={{ backgroundColor: "#282a2d" }}>
                    <span className="text-[0.6875rem] uppercase tracking-widest" style={{ fontFamily: FONT_LABEL }}>{link.label}</span>
                    <motion.span className="material-symbols-outlined text-xs" whileHover={{ x: 2, y: -2 }}>arrow_outward</motion.span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Right: Form */}
        <FadeUp className="lg:col-span-7" delay={0.2}>
          <div className="bg-[#1a1c1f] p-8 md:p-12 rounded-2xl relative overflow-hidden glow-cyan">
            <div className="scanline" />
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>Transmission Portal</h3>
              <p className="text-xs text-[#849495] tracking-wider" style={{ fontFamily: FONT_MONO }}>ENCRYPTED END-TO-END CONNECTION</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-8" fast>
                {[
                  { label: "Origin Entity [Name]", placeholder: "GUEST_USER", type: "text" },
                  { label: "Return Address [Email]", placeholder: "USER@NODE.COM", type: "email" },
                ].map((field) => (
                  <motion.div key={field.label} variants={fadeUp}>
                    <label className={LABEL_CLS} style={{ fontFamily: FONT_LABEL }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} className={INPUT_CLS} style={{ fontFamily: FONT_MONO }} />
                  </motion.div>
                ))}
              </Stagger>

              <FadeUp delay={0.1}>
                <label className={LABEL_CLS} style={{ fontFamily: FONT_LABEL }}>Signal Subject</label>
                <input type="text" placeholder="DISTRIBUTED_SYSTEMS_CONSULTATION" className={INPUT_CLS} style={{ fontFamily: FONT_MONO }} />
              </FadeUp>

              <FadeUp delay={0.15}>
                <label className={LABEL_CLS} style={{ fontFamily: FONT_LABEL }}>Encrypted Payload [Message]</label>
                <textarea rows={6} placeholder="TYPE_TRANSMISSION_HERE..." className={`${INPUT_CLS} resize-none`} style={{ fontFamily: FONT_MONO }} />
              </FadeUp>

              <FadeUp delay={0.2}>
                <MagneticButton
                  type="submit"
                  className="w-full bg-[#00edff] text-[#006770] py-5 rounded-lg font-bold text-base md:text-lg tracking-widest uppercase flex items-center justify-center gap-3"
                  style={{ fontFamily: FONT_HEADLINE }}
                >
                  <span>Execute Transmission</span>
                  <motion.span className="material-symbols-outlined" animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>send</motion.span>
                </MagneticButton>
              </FadeUp>

              <div className="flex flex-wrap items-center justify-center gap-3 text-[#849495] text-[0.65rem] opacity-50" style={{ fontFamily: FONT_MONO }}>
                <span>SSL_ENCRYPTED</span><span>•</span>
                <span>FIREWALL_BYPASS_ACTIVE</span><span>•</span>
                <span>PARALLEL_PROCESSING</span>
              </div>
            </form>
          </div>
        </FadeUp>
      </div>

      {/* Ambient glows */}
      <div className="fixed top-1/4 right-0 w-64 h-64 bg-[#00edff]/5 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-64 h-64 bg-[#ffd237]/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
