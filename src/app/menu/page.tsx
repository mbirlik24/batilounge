'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowLeft, ArrowRight, BookOpen, Utensils, Clock, Flame, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '@/data/menuData';
import TypewriterHeading from '@/components/TypewriterHeading';
import ReservationModal from '@/components/ReservationModal';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'interactive' | 'visual'>('interactive');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || item.tag === selectedTag;

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    MENU_ITEMS.forEach((item) => {
      if (item.tag) tags.add(item.tag);
    });
    return Array.from(tags);
  }, []);

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
            <img
              src="/images/logo-dark.png"
              alt="Batı Lounge"
              className="h-6 sm:h-7 w-auto object-contain dark:hidden"
            />
            <img
              src="/images/logo-white.png"
              alt="Batı Lounge"
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
        {/* Title & View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
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

          {/* Apple Segmented View Toggle */}
          <div className="flex apple-segment-track p-1 self-start md:self-auto">
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans transition-all ${
                viewMode === 'interactive'
                  ? 'bg-white dark:bg-zinc-800 text-[#1D1D1F] dark:text-white font-medium shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Fotoğraflı Liste</span>
            </button>

            <button
              onClick={() => setViewMode('visual')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans transition-all ${
                viewMode === 'visual'
                  ? 'bg-white dark:bg-zinc-800 text-[#1D1D1F] dark:text-white font-medium shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Görsel Galeri Modu</span>
            </button>
          </div>
        </div>

        {viewMode === 'visual' ? (
          /* Visual Gallery Mode */
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] shadow-apple-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-normal text-lg text-[#1D1D1F] dark:text-white mb-1">
                  Tüm Menü Fotoğraf Koleksiyonu (110+ Görsel)
                </h3>
                <p className="text-xs font-sans font-light text-[#86868B]">
                  Görsellere tıklayarak tam ekran inceleyebilirsiniz.
                </p>
              </div>
              <span className="text-xs font-sans font-medium px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                113 Fotoğraf Yüklendi
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {MENU_ITEMS.filter((i) => i.image).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxImage(item.image || null)}
                  className="group relative rounded-xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-zinc-900 aspect-square cursor-pointer shadow-apple-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex flex-col justify-end text-white">
                    <p className="text-[11px] font-heading font-medium line-clamp-1">{item.name}</p>
                    <span className="text-[10px] font-sans opacity-90">{item.price} ₺</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Interactive Menu List with Item Photos */
          <>
            {/* Search & Tags */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Menüde ara (örn: Bonfile, Tost, Serpme, Sufle, Limonata)..."
                  className="w-full pl-9 pr-8 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.1] focus:border-black/[0.3] dark:focus:border-white/[0.3] text-[#1D1D1F] dark:text-white placeholder:text-[#86868B] text-xs font-sans focus:outline-none transition-colors shadow-apple-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Tag Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans transition-colors whitespace-nowrap shadow-apple-sm ${
                    selectedTag === null
                      ? 'bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] font-medium'
                      : 'bg-white dark:bg-zinc-900 text-[#86868B] hover:text-[#1D1D1F]'
                  }`}
                >
                  Tümü ({MENU_ITEMS.length})
                </button>
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`px-3 py-1.5 rounded-full text-xs font-sans transition-colors whitespace-nowrap border shadow-apple-sm ${
                      selectedTag === tag
                        ? 'border-[#1D1D1F] dark:border-white bg-[#1D1D1F] text-white dark:bg-white dark:text-[#1D1D1F] font-medium'
                        : 'border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-zinc-900 text-[#86868B] hover:text-[#1D1D1F]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Segmented Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 scrollbar-none">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchQuery('');
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
                    {/* Item Image */}
                    {item.image && (
                      <div className="relative h-44 w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
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
          </>
        )}
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
              className="relative z-10 w-full max-w-lg rounded-2xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-900 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Kapat"
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black text-white backdrop-blur-md transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {selectedItem.image && (
                <div className="h-56 w-full bg-zinc-100 dark:bg-zinc-950 relative">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
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

                <p className="text-xs sm:text-sm font-sans font-light text-[#86868B] dark:text-zinc-300 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F5F5F7] dark:bg-zinc-800 mb-6 text-xs font-sans text-[#86868B]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    Hazırlanma: {selectedItem.prepTime || '8-12 dk'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    {selectedItem.calories || 'Özel Reçete'}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <span className="text-xs font-sans text-emerald-600 dark:text-emerald-400 font-medium">
                    ● 7/24 Sıcak Servis
                  </span>

                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      setIsReservationOpen(true);
                    }}
                    className="apple-btn px-6 py-2.5 rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] font-heading font-medium text-xs tracking-tight"
                  >
                    Masa Ayırt & Sipariş Ver
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Gallery View */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <div className="relative z-10 max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/20">
              <button
                onClick={() => setLightboxImage(null)}
                aria-label="Kapat"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={lightboxImage}
                alt="Menü Lezzeti"
                className="max-h-[80vh] w-auto object-contain bg-black"
              />
            </div>
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
