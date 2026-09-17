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

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 apple-glass-nav border-b border-black/[0.08] dark:border-white/[0.12] shadow-apple-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
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

      {/* Main Menu Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14">
        {/* Title */}
        <div className="mb-8 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
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

        {/* Segmented Category Filter with Circular Expandable Search */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {/* Circular Expandable Search Button */}
          <motion.div
            ref={searchContainerRef}
            layout
            animate={{
              width: isSearchOpen || searchQuery ? 270 : 38,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            className={`h-[38px] shrink-0 flex items-center rounded-full bg-white dark:bg-zinc-900 border transition-all shadow-apple-sm overflow-hidden ${
              isSearchOpen || searchQuery
                ? 'border-black/20 dark:border-white/30 ring-2 ring-black/5 dark:ring-white/10'
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
                    {filteredItems.length}
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
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery('');
                  setIsSearchOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-xs font-sans whitespace-nowrap transition-all duration-150 shadow-apple-sm ${
                  isActive
                    ? 'bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] font-medium'
                    : 'bg-white dark:bg-zinc-900 text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white border border-black/[0.04] dark:border-white/[0.06]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

            {/* Menu Items Grid with Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {item.tag && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-sans font-medium bg-black/60 backdrop-blur-md text-white border border-white/10">
                        {item.tag}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-sans font-semibold bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md text-[#1D1D1F] dark:text-white shadow-apple-sm">
                      {item.price} ₺
                    </span>
                  </div>
                )}

                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading font-normal text-base text-[#1D1D1F] dark:text-white mb-1.5 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h4>

                        <p className="text-xs font-sans font-light text-[#86868B] dark:text-zinc-400 leading-relaxed line-clamp-2 mb-3">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-black/[0.04] dark:border-white/[0.06] text-[11px] font-sans text-[#86868B]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.prepTime || '8-12 dk'}
                        </span>
                        <span className="text-[#1D1D1F] dark:text-white font-medium flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          İncele <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center rounded-2xl border border-dashed border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-900">
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
