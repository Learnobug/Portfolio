"use client";

import { motion } from "./motion";

const links = [
  { label: "GitHub", href: "https://github.com/Learnobug" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gunjan-aggarwal-066a16256" },
  { label: "LeetCode", href: "https://leetcode.com/u/lerno_breed/" },
  { label: "Email", href: "mailto:aggarwalgunjan597@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#111316]">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-10 md:py-12 w-full max-w-7xl mx-auto gap-6 md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          <motion.div
            className="font-bold text-[#00edff] mb-2 text-lg"
            style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
            whileHover={{ letterSpacing: "0.1em" }}
            transition={{ duration: 0.3 }}
          >
            G.AGGARWAL
          </motion.div>
          <p
            className="text-[10px] tracking-[0.1em] uppercase text-slate-500 text-center md:text-left"
            style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
          >
            © 2024 GUNJAN AGGARWAL. ALL RIGHTS RESERVED. COMMIT_HASH: 7F3A2B
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[10px] tracking-[0.1em] uppercase text-slate-500 opacity-80"
              style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
              whileHover={{ color: "#ffffff", opacity: 1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
