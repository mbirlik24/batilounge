'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Menü', href: '/menu' },
    { label: 'Galeri', href: '/#galeri' },
    { label: 'Yorumlar', href: '/#yorumlar' },
    { label: 'Instagram', href: '/#instagram' },
    { label: 'Rezervasyon', href: '/#rezervasyon' },
    { label: 'İletişim', href: '/#iletisim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'apple-glass-nav border-b border-black/[0.08] dark:border-white/[0.12] shadow-apple-sm'
          : 'bg-gradient-to-b from-black/60 to-transparent border-b-0 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" prefetch={true} className="flex items-center group">
          <img
            src={scrolled && resolvedTheme !== 'dark' ? '/images/logo-dark.png' : '/images/logo-white.png'}
            alt="Batı Lounge"
            className="h-6 sm:h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              className={`text-xs font-sans font-medium transition-colors ${
                scrolled
                  ? 'text-[#1D1D1F]/75 dark:text-[#F5F5F7]/75 hover:text-[#1D1D1F] dark:hover:text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Tema"
              className={`p-2 rounded-full transition-colors ${
                scrolled
                  ? 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <button
            onClick={onOpenReservation}
            className={`apple-btn px-5 py-2 rounded-full font-heading font-medium text-xs tracking-tight transition-all ${
              scrolled
                ? 'bg-[#1D1D1F] hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-[#1D1D1F] shadow-sm'
                : 'bg-white hover:bg-zinc-100 text-[#1D1D1F] shadow-md'
            }`}
          >
            Masa Ayırt
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
            className={`md:hidden p-2 rounded-full ${
              scrolled ? 'text-zinc-800 dark:text-zinc-200' : 'text-white'
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Always Dark when at top of page over Hero Video) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className={`md:hidden border-b backdrop-blur-2xl px-6 py-5 shadow-2xl transition-colors duration-200 ${
              !scrolled
                ? 'bg-zinc-950/95 border-zinc-800 text-white'
                : 'bg-white dark:bg-zinc-950 border-black/[0.08] dark:border-white/[0.12] text-[#1D1D1F] dark:text-[#F5F5F7]'
            }`}
          >
            <div className="flex flex-col gap-3">
              <span className={`text-[11px] font-sans font-light ${!scrolled ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'}`}>
                7/24 Kesintisiz Hizmet
              </span>

              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-heading text-sm font-medium py-1 transition-colors ${
                    !scrolled ? 'text-white hover:text-zinc-300' : 'text-[#1D1D1F] dark:text-[#F5F5F7]'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className={`pt-3 border-t ${!scrolled ? 'border-zinc-800' : 'border-black/[0.06] dark:border-white/[0.08]'}`}>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenReservation();
                  }}
                  className={`w-full py-2.5 rounded-full font-heading font-medium text-xs tracking-tight transition-all ${
                    !scrolled
                      ? 'bg-white text-zinc-950 hover:bg-zinc-100 shadow-md'
                      : 'bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F]'
                  }`}
                >
                  Masa Ayırt
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
