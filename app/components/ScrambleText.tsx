"use client";

import { useEffect, useRef, useState } from "react";
import type { JSX } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger?: boolean;       // re-trigger when this changes
  delay?: number;          // ms before starting
  duration?: number;       // total ms
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrambleText({
  text,
  className = "",
  trigger = true,
  delay = 0,
  duration = 900,
  as: Tag = "span",
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const raf = useRef<number>(0);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!trigger) return;

    timeout.current = setTimeout(() => {
      const start = performance.now();
      const resolved = new Array(text.length).fill(false);

      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);

        // Resolve characters left-to-right
        const resolveUpTo = Math.floor(progress * text.length * 1.3);

        const next = text.split("").map((char, i) => {
          if (char === " ") return " ";
          if (i <= resolveUpTo - 1) {
            resolved[i] = true;
            return char;
          }
          if (resolved[i]) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        });

        setDisplay(next.join(""));

        if (progress < 1) {
          raf.current = requestAnimationFrame(animate);
        } else {
          setDisplay(text);
        }
      };

      raf.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout.current);
      cancelAnimationFrame(raf.current);
    };
  }, [text, trigger, delay, duration]);

  return <Tag className={className}>{display}</Tag>;
}
