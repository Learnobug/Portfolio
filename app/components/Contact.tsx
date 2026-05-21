"use client";

import { FadeUp, Stagger, motion, fadeUp } from "./motion";
import MagneticButton from "./MagneticButton";

const FONT_HEADLINE = "var(--font-space-grotesk), Space Grotesk, sans-serif";
const FONT_MONO = "var(--font-roboto-mono), Roboto Mono, monospace";
const FONT_LABEL = "var(--font-space-grotesk), Space Grotesk, sans-serif";

const LABEL_CLS = "block text-[0.6875rem] uppercase tracking-widest text-[#849495] mb-2";
const INPUT_CLS =
  "w-full bg-transparent border-0 border-b-2 border-[#3b494b] focus:border-[#00edff] focus:outline-none focus:ring-0 text-base py-3 placeholder:text-[#5a6668] transition-all duration-200 text-[#e2e2e6]";

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32 relative">
      {/* Header */}
      <FadeUp className="mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#282a2d] rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#00edff] animate-pulse" />
          <span className="text-[0.6875rem] uppercase tracking-widest text-[#00dbec]" style={{ fontFamily: FONT_LABEL }}>
            Available for new work
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#e2e2e6] mb-6" style={{ fontFamily: FONT_HEADLINE }}>
          Let&apos;s build{" "}
          <span style={{ backgroundImage: "linear-gradient(to right, #00dbec, #006770)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            something
          </span>
        </h2>
        <p className="max-w-2xl text-[#b9c9cb] text-base md:text-lg leading-relaxed">
          Have a project, a role, or an idea you want to talk through? Send me a message and I&apos;ll get back to you, usually within a day.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

        {/* Left: contact details */}
        <FadeUp className="lg:col-span-5" delay={0.1}>
          <div className="space-y-8">
            {/* Status card */}
            <div className="bg-[#1a1c1f] p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00edff]" />
              <h3 className="text-[0.6875rem] uppercase tracking-widest text-[#849495] mb-4" style={{ fontFamily: FONT_LABEL }}>Currently</h3>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#282a2d] rounded-lg text-[#00edff] shrink-0">
                  <span className="material-symbols-outlined">work</span>
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>Open to backend &amp; full-stack projects</p>
                  <p className="text-sm text-[#b9c9cb] mt-1">Freelance, contract, or full-time. EST / IST hours.</p>
                </div>
              </div>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              <h3 className="text-[0.6875rem] uppercase tracking-widest text-[#849495]" style={{ fontFamily: FONT_LABEL }}>Reach me directly</h3>
              <motion.a href="mailto:aggarwalgunjan597@gmail.com" className="flex items-center gap-4 p-4 bg-[#1a1c1f] rounded-lg group" whileHover={{ backgroundColor: "#282a2d", x: 4 }}>
                <span className="material-symbols-outlined text-[#00edff]">mail</span>
                <span className="text-sm group-hover:text-[#00edff] transition-colors">aggarwalgunjan597@gmail.com</span>
              </motion.a>
              <div className="flex items-center gap-4 p-4 bg-[#1a1c1f] rounded-lg">
                <span className="material-symbols-outlined text-[#00edff]">location_on</span>
                <span className="text-sm">Delhi, India</span>
              </div>
              <div className="flex gap-4">
                {[
                  { label: "GitHub", href: "https://github.com/Learnobug" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/gunjan-aggarwal-066a16256" },
                ].map((link) => (
                  <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 p-4 bg-[#1a1c1f] rounded-lg group" whileHover={{ backgroundColor: "#282a2d" }}>
                    <span className="text-[0.6875rem] uppercase tracking-widest group-hover:text-[#00edff] transition-colors" style={{ fontFamily: FONT_LABEL }}>{link.label}</span>
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
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#e2e2e6]" style={{ fontFamily: FONT_HEADLINE }}>Send a message</h3>
              <p className="text-sm text-[#849495]">Fill in a few details and hit send.</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-8" fast>
                {[
                  { label: "First name", placeholder: "Jane", type: "text", autoComplete: "given-name" },
                  { label: "Last name", placeholder: "Doe", type: "text", autoComplete: "family-name" },
                ].map((field) => (
                  <motion.div key={field.label} variants={fadeUp}>
                    <label className={LABEL_CLS} style={{ fontFamily: FONT_LABEL }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} autoComplete={field.autoComplete} className={INPUT_CLS} />
                  </motion.div>
                ))}
              </Stagger>

              <FadeUp delay={0.1}>
                <label className={LABEL_CLS} style={{ fontFamily: FONT_LABEL }}>Email</label>
                <input type="email" placeholder="you@company.com" autoComplete="email" className={INPUT_CLS} />
              </FadeUp>

              <FadeUp delay={0.15}>
                <label className={LABEL_CLS} style={{ fontFamily: FONT_LABEL }}>Message</label>
                <textarea rows={6} placeholder="Tell me about the project, role, or idea…" className={`${INPUT_CLS} resize-none`} />
              </FadeUp>

              <FadeUp delay={0.2} className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 pt-2">
                <p className="text-xs text-[#849495] leading-relaxed max-w-xs">
                  By sending this you agree to me reading it and probably replying within 24 hours.
                </p>
                <MagneticButton
                  type="submit"
                  className="bg-[#00edff] text-[#006770] px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 shrink-0"
                  style={{ fontFamily: FONT_HEADLINE }}
                >
                  <span>Send message</span>
                  <motion.span className="material-symbols-outlined text-lg" animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>arrow_forward</motion.span>
                </MagneticButton>
              </FadeUp>
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
