'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowLeft, Clock, Flame, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '@/data/menuData';
import TypewriterHeading from '@/components/TypewriterHeading';
import ReservationModal from '@/components/ReservationModal';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        if (!searchQuery) {
          setIsSearchOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === 'k' && (e.metaKey || e.ctrlKey)) ||
        (e.key === '/' && document.activeElement?.tagName !== 'INPUT')
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === 'Escape') {
        setSearchQuery('');
        setIsSearchOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isManualClickRef = useRef(false);
  const categoryPillsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const categoriesWithItems = useMemo(() => {
    const relevantCategories = MENU_CATEGORIES.filter((c) => c.id !== 'all');
    const query = searchQuery.trim().toLowerCase();

    return relevantCategories
      .map((cat) => {
        const items = MENU_ITEMS.filter((item) => {
          const matchesCategory = item.category === cat.id;
          const matchesSearch =
            !query ||
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query);
          return matchesCategory && matchesSearch;
        });

        return {
          ...cat,
          items,
        };
      })
      .filter((cat) => cat.items.length > 0);
  }, [searchQuery]);

  const totalFilteredCount = useMemo(() => {
    return categoriesWithItems.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [categoriesWithItems]);

  // Scroll Spy: Update active category pill as user scrolls through sections
  useEffect(() => {
    const handleScrollSpy = () => {
      if (isManualClickRef.current) return;

      if (window.scrollY < 220) {
        setActiveCategory('all');
        return;
      }

      const categorySections = MENU_CATEGORIES.filter((c) => c.id !== 'all');
      const offset = 180;

      let currentActive = 'all';
      for (let i = 0; i < categorySections.length; i++) {
        const cat = categorySections[i];
        const el = document.getElementById(cat.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            currentActive = cat.id;
          }
        }
      }

      setActiveCategory(currentActive);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Keep active category pill in view inside the horizontal bar
  useEffect(() => {
    const pill = categoryPillsRef.current[activeCategory];
    if (pill) {
      pill.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeCategory]);

  const handleCategoryClick = (catId: string) => {
    setSearchQuery('');
    setIsSearchOpen(false);
    setActiveCategory(catId);
    isManualClickRef.current = true;

    if (catId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(catId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    setTimeout(() => {
      isManualClickRef.current = false;
    }, 850);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 apple-glass-nav border-b border-black/[0.08] dark:border-white/[0.12] shadow-apple-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-sans font-medium text-[#1D1D1F]/70 dark:text-[#F5F5F7]/70 hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ana Sayfa</span>
          </Link>

          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-dark.png"
              alt="Batı Lounge Logo"
              width={140}
              height={28}
              className="h-6 sm:h-7 w-auto object-contain dark:hidden"
            />
            <Image
              src="/images/logo-white.png"
              alt="Batı Lounge Logo"
              width={140}
              height={28}
              className="h-6 sm:h-7 w-auto object-contain hidden dark:block"
            />
          </Link>

          <button
            onClick={() => setIsReservationOpen(true)}
            className="apple-btn px-4 sm:px-5 py-2 rounded-full bg-[#1D1D1F] hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-[#1D1D1F] font-heading font-medium text-xs tracking-tight shadow-sm"
          >
            Masa Ayırt
          </button>
        </div>
      </header>

      {/* Hero / Page Title Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-4">
        <div className="pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <TypewriterHeading
            text="Batı Lounge Gurme Menü"
            as="h1"
            speed={20}
            className="text-3xl sm:text-5xl font-heading font-light sm:font-normal text-[#1D1D1F] dark:text-white tracking-tight mb-2"
          />
          <p className="text-xs sm:text-sm font-sans font-light text-[#86868B]">
            Zekeriyaköy • 7/24 Kesintisiz Mutfak • Fotoğraflı Güncel Menü & Fiyat Listesi
          </p>
        </div>
      </div>

      {/* Sticky Full-Width Category Filter Bar with Edge-to-Edge Fluid Flow */}
      <div
        id="category-bar"
        className="sticky top-16 z-30 w-full bg-[#F5F5F7]/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-apple-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {/* Circular Expandable Search Button */}
          <motion.div
            ref={searchContainerRef}
            animate={{
              width: isSearchOpen || searchQuery ? 270 : 38,
            }}
            transition={{ type: 'spring', stiffness: 450, damping: 32 }}
            className={`h-[38px] shrink-0 flex items-center rounded-full bg-white dark:bg-zinc-900 border overflow-hidden ${
              isSearchOpen || searchQuery
                ? 'border-zinc-900/30 dark:border-white/40 shadow-sm'
                : 'border-black/[0.08] dark:border-white/[0.1] hover:border-black/20 dark:hover:border-white/20'
            }`}
          >
            {/* Circular Search Icon Button */}
            <button
              type="button"
              onClick={() => {
                if (!isSearchOpen && !searchQuery) {
                  setIsSearchOpen(true);
                  setTimeout(() => inputRef.current?.focus(), 50);
                } else {
                  inputRef.current?.focus();
                }
              }}
              aria-label="Menüde ara"
              className="w-[38px] h-[38px] shrink-0 flex items-center justify-center text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Expanding Input & Controls */}
            {(isSearchOpen || searchQuery) && (
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.15 }}
                className="flex items-center flex-1 pr-2.5 min-w-0"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setSearchQuery('');
                      setIsSearchOpen(false);
                      inputRef.current?.blur();
                    }
                  }}
                  placeholder="Menüde ara..."
                  className="w-full bg-transparent text-xs font-sans text-[#1D1D1F] dark:text-white placeholder:text-[#86868B] focus:outline-none py-1"
                />

                {searchQuery && (
                  <span className="text-[10px] font-sans font-medium px-1.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[#86868B] dark:text-zinc-300 shrink-0 mr-1.5">
                    {totalFilteredCount}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setIsSearchOpen(false);
                  }}
                  aria-label="Aramayı Kapat"
                  className="p-1 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Category Pills */}
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  categoryPillsRef.current[cat.id] = el;
                }}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] font-medium shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white border border-black/[0.04] dark:border-white/[0.06]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Menu Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
        {/* Menu Items Grouped by Category */}
        <div className="space-y-12 sm:space-y-16">
          {categoriesWithItems.length > 0 ? (
            categoriesWithItems.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-36">
                {/* Category Section Header */}
                <div className="flex items-baseline justify-between mb-4 pb-2.5 border-b border-black/[0.08] dark:border-white/[0.1]">
                  <div className="flex items-center gap-2.5">
                    <h2 className="text-xl sm:text-2xl font-heading font-normal text-[#1D1D1F] dark:text-white tracking-tight">
                      {category.name}
                    </h2>
                    <span className="text-[11px] font-sans font-medium px-2 py-0.5 rounded-full bg-black/[0.05] dark:bg-white/[0.08] text-[#86868B] dark:text-zinc-400">
                      {category.items.length} lezzet
                    </span>
                  </div>
                  {category.description && (
                    <p className="hidden sm:block text-xs font-sans font-light text-[#86868B]">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Grid - 4 to 5 per row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-3.5 lg:gap-4">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: Math.min(index * 0.015, 0.2), ease: [0.23, 1, 0.32, 1] }}
                      onClick={() => setSelectedItem(item)}
                      className="group rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-zinc-900 hover:border-black/[0.2] dark:hover:border-white/[0.2] transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between shadow-apple-sm hover:shadow-apple-md"
                    >
                      {/* Item Image - Full Square (1:1) No Crop */}
                      {item.image && (
                        <div className="relative aspect-square w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                          {item.tag && (
                            <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-sans font-medium bg-black/60 backdrop-blur-md text-white border border-white/10">
                              {item.tag}
                            </span>
                          )}
                          <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md text-[#1D1D1F] dark:text-white shadow-apple-sm">
                            {item.price} ₺
                          </span>
                        </div>
                      )}

                      <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-heading font-normal text-xs sm:text-sm text-[#1D1D1F] dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                            {item.name}
                          </h4>

                          <p className="text-[11px] font-sans font-light text-[#86868B] dark:text-zinc-400 leading-snug line-clamp-2 mb-2 sm:mb-2.5">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-black/[0.04] dark:border-white/[0.06] text-[10px] font-sans text-[#86868B]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-2.5 h-2.5" />
                            {item.prepTime || '8-12 dk'}
                          </span>
                          <span className="text-[#1D1D1F] dark:text-white font-medium flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                            İncele <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="py-16 text-center rounded-2xl border border-dashed border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-900">
              <p className="font-heading font-light text-sm text-[#86868B]">
                Aramanıza uygun lezzet bulunamadı.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Selected Item Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-900 shadow-2xl scrollbar-none"
            >
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Kapat"
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black text-white backdrop-blur-md transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Image - Full Square (1:1) No Crop */}
              {selectedItem.image && (
                <div className="relative aspect-square w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 448px"
                    className="object-cover"
                  />
                  {selectedItem.tag && (
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-sans font-medium bg-black/70 backdrop-blur-md text-white">
                      {selectedItem.tag}
                    </span>
                  )}
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl sm:text-2xl font-heading font-normal text-[#1D1D1F] dark:text-white">
                    {selectedItem.name}
                  </h3>
                  <span className="text-xl font-sans font-semibold text-[#1D1D1F] dark:text-white shrink-0">
                    {selectedItem.price} ₺
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-sans font-light text-[#86868B] dark:text-zinc-300 leading-relaxed mb-5">
                  {selectedItem.description}
                </p>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F5F5F7] dark:bg-zinc-800 text-xs font-sans text-[#86868B]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    Hazırlanma: {selectedItem.prepTime || '8-12 dk'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    {selectedItem.calories || 'Özel Reçete'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
