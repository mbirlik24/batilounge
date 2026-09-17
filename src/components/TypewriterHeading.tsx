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
  speed = 50,
  delay = 150,
  showCursor = true,
}: TypewriterHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.01 });
  const [started, setStarted] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const targetLines = lines || (text ? text.split('\n') : []);
  const fullText = targetLines.join('\n');

  useEffect(() => {
    if (isInView) {
      setStarted(true);
      return;
    }
    // Fallback for initial load if element is inside viewport
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setStarted(true);
      }
    }
  }, [isInView]);

  useEffect(() => {
    if (!started) return;

    let timer: NodeJS.Timeout;
    const delayTimer = setTimeout(() => {
      let current = 0;
      timer = setInterval(() => {
        current++;
        setCharIndex(current);
        if (current >= fullText.length) {
          clearInterval(timer);
          setIsDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(delayTimer);
      if (timer) clearInterval(timer);
    };
  }, [started, fullText, speed, delay]);

  const Tag = as;
  const currentText = fullText.slice(0, charIndex);
  const remainingText = fullText.slice(charIndex);

  const currentLines = currentText.split('\n');
  const remainingLines = remainingText.split('\n');

  return (
    <Tag ref={ref} className={className}>
      <span>
        {currentLines.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < currentLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
      {showCursor && (
        <span
          className={`inline-block w-[3px] h-[0.82em] bg-amber-400 ml-1.5 align-baseline select-none ${
            isDone ? 'animate-pulse opacity-60' : 'animate-pulse opacity-100'
          }`}
        />
      )}
      <span className="invisible select-none pointer-events-none" aria-hidden="true">
        {remainingLines.map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < remainingLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
    </Tag>
  );
}
