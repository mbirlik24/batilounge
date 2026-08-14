'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      
      const forcePlay = () => {
        if (video.paused) {
          video.play().catch((e) => console.log('Autoplay play error:', e));
        }
      };

      forcePlay();
      video.addEventListener('canplaythrough', forcePlay);
      video.addEventListener('loadedmetadata', forcePlay);

      return () => {
        video.removeEventListener('canplaythrough', forcePlay);
        video.removeEventListener('loadedmetadata', forcePlay);
      };
    }
  }, []);

  const handleScrollNext = () => {
    const nextSection = document.getElementById('google-reviews') || document.querySelector('.snap-section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="snap-section relative h-[100dvh] min-h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-32 lg:pt-36 pb-4 sm:pb-6 overflow-hidden bg-[#0A0A0C]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0C] overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Slightly Darkened Overlays for Optimum Video Clarity & Text Legibility */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/50 pointer-events-none" />
      </div>

      {/* Main Content Container (Positioned High Up Right Under Navbar) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-left flex flex-col items-start justify-start mt-2 sm:mt-4">
        <div className="w-full max-w-2xl">
          {/* Left-Aligned Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-light sm:font-normal tracking-[-0.035em] text-white leading-[1.08] mb-3.5 sm:mb-5 drop-shadow-lg"
          >
            Batı’ya <br />
            geçelim mi?
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="text-sm sm:text-base md:text-lg text-zinc-100 font-sans font-light max-w-lg leading-relaxed mb-6 sm:mb-8 drop-shadow-md"
          >
            Zekeriyaköy’de 7 gün 24 saat kesintisiz mutfak, açık balkon terası, oyun salonu ve dingin lounge atmosferi.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <button
              onClick={handleScrollNext}
              className="apple-btn px-7 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-[#1D1D1F] font-heading font-medium text-xs tracking-tight shadow-apple-md flex items-center gap-2"
            >
              <span>Keşfet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenReservation}
              className="apple-btn px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-heading font-medium text-xs tracking-tight"
            >
              Masa Ayırt
            </button>
          </motion.div>
        </div>
      </div>

      {/* Sleek Single-Row Glass Pill Bar (Positioned Further Down, Zero Icons) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full flex justify-center px-4 mt-auto mb-2"
      >
        <div className="inline-flex items-center gap-2.5 sm:gap-4 px-4 sm:px-6 py-2 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/15 text-white/90 text-[10px] sm:text-xs font-sans font-light shadow-apple-sm text-center">
          <span>7/24 Sıcak Mutfak</span>
          <span className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
          <span>Ücretsiz Oyun Salonu</span>
          <span className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
          <span>Açık Balkon Terası</span>
        </div>
      </motion.div>

      {/* Minimal Bouncing Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 w-full flex justify-center pb-2 sm:pb-4"
      >
        <button
          onClick={handleScrollNext}
          aria-label="Aşağı Kaydır"
          className="group p-2 rounded-full text-white/70 hover:text-white transition-colors focus:outline-none"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.5]" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
