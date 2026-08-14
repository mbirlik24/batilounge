'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface TypewriterHeadingProps {
  text?: string;
  lines?: string[];
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  speed?: number;
  delay?: number;
  showCursor?: boolean;
}

export default function TypewriterHeading({
  text,
  lines,
  className = '',
  as = 'h2',
  speed = 22,
  delay = 80,
  showCursor = true,
}: TypewriterHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const targetLines = lines || (text ? text.split('\n') : []);
  const fullText = targetLines.join('\n');

  const [charCount, setCharCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let count = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (count < fullText.length) {
          count++;
          setCharCount(count);
        } else {
          clearInterval(interval);
          setIsDone(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, fullText, speed, delay]);

  const Tag = as;

  return (
    <Tag ref={ref} className={`relative ${className}`}>
      {/* Invisible full text reserve to guarantee ZERO Layout Shift (CLS) */}
      <span className="invisible select-none pointer-events-none aria-hidden:true block">
        {targetLines.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < targetLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>

      {/* Visible Typing Character Layer */}
      <span className="absolute inset-0 top-0 left-0">
        {targetLines.map((line, idx) => {
          let previousLinesLength = 0;
          for (let i = 0; i < idx; i++) {
            previousLinesLength += targetLines[i].length + 1;
          }
          const currentLineChars = Math.max(
            0,
            Math.min(line.length, charCount - previousLinesLength)
          );
          const lineText = line.slice(0, currentLineChars);

          return (
            <React.Fragment key={idx}>
              {lineText}
              {idx < targetLines.length - 1 && currentLineChars === line.length && <br />}
            </React.Fragment>
          );
        })}
        {!isDone && isInView && showCursor && (
          <span className="inline-block w-[2px] h-[0.82em] bg-current ml-0.5 align-middle animate-pulse" />
        )}
      </span>
    </Tag>
  );
}
