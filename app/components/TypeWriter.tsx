"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "./motion";

interface Line {
  tag?: string;
  text: string;
  cyan?: boolean;
}

interface TypeWriterProps {
  lines: Line[];
  speed?: number; // ms per char
  lineDelay?: number; // ms between lines
  className?: string;
}

export default function TypeWriter({
  lines,
  speed = 28,
  lineDelay = 200,
  className = "",
}: TypeWriterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [rendered, setRendered] = useState<{ tag?: string; text: string; done: boolean; cyan?: boolean }[]>([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    if (!inView) return;
    setRendered([]);
    let lineIdx = 0;
    let charIdx = 0;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      if (lineIdx >= lines.length) {
        // blink cursor after done
        const blink = setInterval(() => setCursor((c) => !c), 530);
        return () => clearInterval(blink);
      }

      const currentLine = lines[lineIdx];

      if (charIdx === 0) {
        setRendered((prev) => [
          ...prev,
          { tag: currentLine.tag, text: "", done: false, cyan: currentLine.cyan },
        ]);
      }

      if (charIdx < currentLine.text.length) {
        charIdx++;
        setRendered((prev) =>
          prev.map((l, i) =>
            i === lineIdx ? { ...l, text: currentLine.text.slice(0, charIdx) } : l
          )
        );
        timer = setTimeout(type, speed);
      } else {
        setRendered((prev) =>
          prev.map((l, i) => (i === lineIdx ? { ...l, done: true } : l))
        );
        lineIdx++;
        charIdx = 0;
        timer = setTimeout(type, lineDelay);
      }
    };

    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [inView, lines, speed, lineDelay]);

  const FONT_MONO = "var(--font-roboto-mono), Roboto Mono, monospace";

  return (
    <div ref={ref} className={className} style={{ fontFamily: FONT_MONO }}>
      {rendered.map((line, i) => (
        <p key={i}>
          {line.tag && (
            <span className={line.cyan ? "text-[#00dbec]" : "text-[#edc225]"}>
              {line.tag}{" "}
            </span>
          )}
          <span>{line.text}</span>
          {i === rendered.length - 1 && !line.done && (
            <span className="text-[#00dbec]">▌</span>
          )}
        </p>
      ))}
      {rendered.length === lines.length && rendered[rendered.length - 1]?.done && (
        <p>
          <span
            className="text-[#00dbec]"
            style={{ opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
          >
            ▌
          </span>
        </p>
      )}
    </div>
  );
}
