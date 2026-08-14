'use client';

import React from 'react';
import Script from 'next/script';
import { Instagram, ArrowUpRight } from 'lucide-react';
import TypewriterHeading from '@/components/TypewriterHeading';

export default function InstagramFeed() {
  return (
    <section id="instagram" className="snap-section py-16 sm:py-24 bg-white dark:bg-[#09090B] border-t border-zinc-200/80 dark:border-zinc-800/80 relative overflow-hidden">
      {/* Elfsight Platform Script */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 text-xs font-sans font-medium mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>@batilounge</span>
            </div>

            <TypewriterHeading
              lines={['Sosyal Medyada', 'Batı Lounge.']}
              as="h2"
              speed={22}
              className="text-2xl sm:text-4xl lg:text-5xl font-heading font-light sm:font-normal text-zinc-950 dark:text-white tracking-tight"
            />
          </div>

          <a
            href="https://instagram.com/batilounge"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-sans font-medium hover:opacity-90 transition-all inline-flex items-center gap-2 self-start sm:self-auto shadow-apple-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>Takip Et</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Official Elfsight Instagram Feed Container */}
        <div className="rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-2 sm:p-4 shadow-apple-sm min-h-[300px]">
          <div className="elfsight-app-08ec1551-e48b-4c45-9287-ca831c5c4c0e" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
