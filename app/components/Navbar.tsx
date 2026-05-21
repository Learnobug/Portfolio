"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (label: string) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-[#111316]/60 backdrop-blur-xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold tracking-tighter text-[#00edff]"
          style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
          whileHover={{ letterSpacing: "0.08em" }}
          transition={{ duration: 0.3 }}
        >
          G.AGGARWAL
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.label)}
              className={`text-sm uppercase ${
                active === link.label
                  ? "text-[#00edff] border-b-2 border-[#00edff] pb-1"
                  : "text-slate-400"
              }`}
              style={{
                fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
                letterSpacing: "0.05em",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              whileHover={{ color: "#ffffff" }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="ml-4"
          >
            <MagneticButton
              as="a"
              href="https://drive.google.com/file/d/1blgTIg-ijwoFHaLZYa46DKS94NJhSDtM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-1.5 bg-[#00edff] text-[#006770] text-xs font-bold uppercase tracking-widest rounded-sm inline-block"
              style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
              strength={0.25}
            >
              Resume
            </MagneticButton>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden text-[#00edff] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className="material-symbols-outlined"
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {menuOpen ? "close" : "menu"}
          </motion.span>
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#111316]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className={`text-sm uppercase ${
                  active === link.label ? "text-[#00edff]" : "text-slate-400"
                }`}
                style={{
                  fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif",
                  letterSpacing: "0.1em",
                }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://drive.google.com/file/d/1blgTIg-ijwoFHaLZYa46DKS94NJhSDtM/view?usp=sharing"
              className="mt-2 px-5 py-2 bg-[#00edff] text-[#006770] text-xs font-bold uppercase tracking-widest rounded-sm text-center"
              style={{ fontFamily: "var(--font-space-grotesk), Space Grotesk, sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              whileTap={{ scale: 0.97 }}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
