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

          <Link
            href="/menu"
            className={`apple-btn px-5 py-2 rounded-full font-heading font-medium text-xs tracking-tight transition-all flex items-center justify-center ${
              scrolled
                ? 'bg-[#1D1D1F] hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-[#1D1D1F] shadow-sm'
                : 'bg-white hover:bg-zinc-100 text-[#1D1D1F] shadow-md'
            }`}
          >
            Menüyü Gör
          </Link>

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

      {/* Mobile Drawer (Apple-Style Staggered Motion & Glass Entrance) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className={`md:hidden border-b backdrop-blur-3xl px-6 py-6 shadow-2xl overflow-hidden transition-colors duration-300 ${
              !scrolled
                ? 'bg-zinc-950/95 border-zinc-800 text-white'
                : 'bg-white/95 dark:bg-zinc-950/95 border-black/[0.08] dark:border-white/[0.12] text-[#1D1D1F] dark:text-[#F5F5F7]'
            }`}
          >
            <div className="flex flex-col gap-3.5">
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.04 }}
                className={`text-[10px] font-sans font-medium uppercase tracking-wider ${
                  !scrolled ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                7/24 Kesintisiz Hizmet
              </motion.span>

              {links.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.06 + idx * 0.04, ease: [0.23, 1, 0.32, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-heading text-base font-medium py-1.5 flex items-center justify-between group transition-colors ${
                      !scrolled
                        ? 'text-white hover:text-amber-400'
                        : 'text-[#1D1D1F] dark:text-[#F5F5F7] hover:text-amber-600 dark:hover:text-amber-400'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className={`pt-4 mt-1 border-t ${
                  !scrolled ? 'border-zinc-800' : 'border-black/[0.06] dark:border-white/[0.08]'
                }`}
              >
                <Link
                  href="/menu"
                  onClick={() => setMobileOpen(false)}
                  className={`w-full py-3 rounded-full font-heading font-medium text-xs tracking-tight shadow-apple-md transition-all active:scale-[0.98] text-center block ${
                    !scrolled
                      ? 'bg-white text-zinc-950 hover:bg-zinc-100'
                      : 'bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F]'
                  }`}
                >
                  Menüyü Gör
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
