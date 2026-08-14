'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

import TypewriterHeading from '@/components/TypewriterHeading';

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
          {/* Left-Aligned Headline with Keyboard Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="mb-3.5 sm:mb-5"
          >
            <TypewriterHeading
              as="h1"
              lines={['Batı’ya', 'geçelim mi?']}
              speed={45}
              delay={150}
              className="text-4xl sm:text-6xl md:text-7xl font-heading font-light sm:font-normal tracking-[-0.035em] text-white leading-[1.08] drop-shadow-lg"
            />
          </motion.div>

          {/* Subtitle - Extra Small Apple-Style Punto & Dot Removed */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="text-xs sm:text-sm md:text-base text-zinc-100/90 font-sans font-light max-w-lg leading-relaxed mb-6 sm:mb-8 drop-shadow-md"
          >
            Zekeriyaköy’de 7 gün 24 saat kesintisiz mutfak, açık balkon terası, oyun salonu ve dingin lounge atmosferi
          </motion.p>

          {/* Action Buttons (Wider & Stretched Layout) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-2 gap-4 w-full max-w-lg sm:max-w-xl"
          >
            <button
              onClick={handleScrollNext}
              className="apple-btn w-full px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white hover:bg-zinc-100 text-[#1D1D1F] font-heading font-medium text-xs sm:text-sm tracking-tight shadow-apple-md flex items-center justify-center gap-2"
            >
              <span>Keşfet</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/menu"
              className="apple-btn w-full px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/35 text-white font-heading font-medium text-xs sm:text-sm tracking-tight shadow-md flex items-center justify-center text-center"
            >
              <span>Menüyü Gör</span>
            </a>
          </motion.div>
        </div>
      </div>



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
