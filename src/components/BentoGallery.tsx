'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import TypewriterHeading from '@/components/TypewriterHeading';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  aspect: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-ambiance',
    title: 'Ana Salon & İç Mekan',
    category: 'Lounge',
    src: '/images/hero.jpg',
    aspect: 'col-span-2 row-span-2 md:col-span-2 lg:col-span-8',
  },
  {
    id: 'game-lounge',
    title: 'Oyun Salonu (Okey & Masa Oyunları)',
    category: 'Oyun (Ücretsiz)',
    src: '/images/vip.jpg',
    aspect: 'col-span-1 row-span-1 md:col-span-1 lg:col-span-4',
  },
  {
    id: 'terrace-view',
    title: 'Açık Balkon & Teras Keyfi',
    category: 'Açık Hava',
    src: '/images/terrace.jpg',
    aspect: 'col-span-1 row-span-1 md:col-span-1 lg:col-span-4',
  },
  {
    id: 'mixology-bar',
    title: 'Nargile & İçecekler',
    category: 'Nargile & Cafe',
    src: '/images/mixology.jpg',
    aspect: 'col-span-1 row-span-1 md:col-span-1 lg:col-span-4',
  },
  {
    id: 'culinary-steak',
    title: 'Cafe de Paris Bonfile',
    category: 'Sıcak Mutfak',
    src: '/images/steak.jpg',
    aspect: 'col-span-1 row-span-1 md:col-span-1 lg:col-span-4',
  },
  {
    id: 'artisan-dessert',
    title: 'Sıcak Sufle & Dondurma',
    category: 'Tatlı & Dondurma',
    src: '/images/dessert.jpg',
    aspect: 'col-span-1 row-span-1 md:col-span-1 lg:col-span-4',
  },
  {
    id: 'lounge-extra',
    title: 'Batı Lounge Zekeriyaköy',
    category: 'Atmosfer',
    src: '/images/lounge_extra.jpg',
    aspect: 'col-span-1 row-span-1 md:col-span-1 lg:col-span-4',
  },
];

export default function BentoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="galeri" className="snap-section py-10 sm:py-20 bg-[#F5F5F7] dark:bg-black border-t border-b border-black/[0.06] dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <TypewriterHeading
              text="Galeri & Mekan"
              as="h2"
              speed={20}
              className="text-2xl sm:text-5xl font-heading font-light sm:font-normal text-[#1D1D1F] dark:text-white tracking-tight"
            />
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm font-sans font-light text-[#86868B] max-w-xs">
            Açık hava balkonumuz, özel oyun salonumuz, lezzetli mutfağımız ve nargile keyfi.
          </p>
        </div>

        {/* Mobile & Desktop Asymmetric Bento Grid (2-Columns on Mobile: Bir Büyük, Bir Küçük) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-2.5 sm:gap-3.5 auto-rows-[150px] sm:auto-rows-[260px]">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setLightboxIndex(index)}
              className={`group relative rounded-xl sm:rounded-apple-lg overflow-hidden border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-900 shadow-apple-sm cursor-pointer ${item.aspect}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-apple-ease group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-wider block opacity-80 font-medium">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm font-heading font-normal leading-tight truncate">
                  {item.title}
                </h4>
              </div>

              {/* Mobile Zoom Hint Badge */}
              <div className="absolute top-2 right-2 p-1 rounded-md bg-black/40 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity sm:hidden">
                <Maximize2 className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/92 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-10 max-w-4xl w-full max-h-[85vh] flex flex-col rounded-2xl overflow-hidden border border-white/[0.15] bg-zinc-950 shadow-2xl"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Kapat"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 text-white hover:bg-black border border-white/10 backdrop-blur-md"
              >
                <X className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
                  );
                }}
                aria-label="Önceki"
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 text-white hover:bg-black border border-white/10 backdrop-blur-md"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
                }}
                aria-label="Sonraki"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 text-white hover:bg-black border border-white/10 backdrop-blur-md"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="h-[65vh] w-full bg-black flex items-center justify-center p-2">
                <img
                  src={GALLERY_ITEMS[lightboxIndex].src}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  className="max-h-full max-w-full object-contain rounded-xl"
                />
              </div>

              <div className="p-3.5 sm:p-4 bg-zinc-950 border-t border-white/[0.1] flex items-center justify-between text-white">
                <div>
                  <span className="text-[10px] font-sans text-zinc-400 uppercase tracking-wider block">
                    {GALLERY_ITEMS[lightboxIndex].category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-heading font-normal">
                    {GALLERY_ITEMS[lightboxIndex].title}
                  </h4>
                </div>
                <span className="text-xs font-sans font-light text-zinc-400 shrink-0 ml-2">
                  {lightboxIndex + 1} / {GALLERY_ITEMS.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
