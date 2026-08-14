'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ExternalLink, MessageSquare, Filter, MapPin, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import TypewriterHeading from '@/components/TypewriterHeading';

interface Review {
  id: string;
  authorName: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime: string;
  text: string;
  tag?: string;
  verified: boolean;
}

interface GooglePhoto {
  url: string;
  width: number;
  height: number;
}

interface ReviewsApiResponse {
  placeName: string;
  formattedAddress: string;
  overallRating: number;
  totalRatingsCount: number;
  reviews: Review[];
  photos: GooglePhoto[];
  googleMapsUrl: string;
}

function GoogleLogoIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
        fill="#4285F4"
      />
      <path
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"
        fill="#34A853"
      />
      <path
        d="M5.28 14.24a7.135 7.135 0 0 1 0-4.48V6.61H1.29a11.96 11.96 0 0 0 0 10.78l3.99-3.15z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ReviewAvatar({
  src,
  name,
  index,
}: {
  src?: string;
  name: string;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const initial = name ? name.charAt(0).toUpperCase() : 'G';

  const avatarBgColors = [
    'bg-blue-600',
    'bg-emerald-600',
    'bg-amber-600',
    'bg-purple-600',
    'bg-rose-600',
    'bg-indigo-600',
  ];
  const bgClass = avatarBgColors[index % avatarBgColors.length];

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt=""
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-zinc-200 dark:border-zinc-700 shadow-sm shrink-0"
      />
    );
  }

  return (
    <div
      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${bgClass} text-white font-sans font-semibold text-xs sm:text-sm flex items-center justify-center shadow-sm shrink-0 border border-white/20`}
    >
      {initial}
    </div>
  );
}

export default function Testimonials() {
  const [data, setData] = useState<ReviewsApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<string>('Tümü');
  
  // Lightbox Modal state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        const json = await res.json();
        if (json.success && json.data) {
          setData(json.data);
        }
      } catch (err) {
        console.error('Reviews fetch failed:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, []);

  const googleMapsUrl = data?.googleMapsUrl || 'https://www.google.com/maps/place/?q=place_id:ChIJU3RgEYvhn0ARRzRkoC05-vo';
  const placeName = data?.placeName || 'Batı Lounge';
  const formattedAddress = data?.formattedAddress || 'Alya Evleri, Zekeriyaköy, Tatar Sk. No:3, Sarıyer / İstanbul';
  const overallRating = data?.overallRating || 5.0;
  const totalCount = data?.totalRatingsCount || 5;
  const reviewsList = data?.reviews || [];
  const photosList = data?.photos || [];

  // Keyboard navigation for Lightbox Gallery (Left Arrow, Right Arrow, ESC)
  useEffect(() => {
    if (!isLightboxOpen || photosList.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === photosList.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? photosList.length - 1 : prev - 1));
      } else if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, photosList.length]);

  const filters = ['Tümü', '5 Yıldız'];

  const filteredReviews = reviewsList.filter((rev) => {
    if (activeFilter === 'Tümü') return true;
    if (activeFilter === '5 Yıldız') return rev.rating === 5;
    return true;
  });

  return (
    <section id="google-reviews" className="snap-section py-10 sm:py-20 bg-zinc-50 dark:bg-[#08080A] border-t border-zinc-200/80 dark:border-zinc-800/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] bg-amber-500/5 dark:bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <TypewriterHeading
            text="Google Haritalar İşletme Profilimiz & Yorumlar"
            as="h2"
            speed={20}
            className="text-2xl sm:text-4xl lg:text-5xl font-heading font-light sm:font-normal text-zinc-950 dark:text-white tracking-tight"
          />
        </div>

        {/* Master Bütünleşik Google Business & Reviews Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="rounded-2xl sm:rounded-3xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/95 shadow-xl sm:shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          
          {/* Top Google Business Header */}
          <div className="p-4 sm:p-8 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            
            {/* Left: Round Profile Avatar Logo + Title & Address */}
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-zinc-950 dark:bg-black border border-zinc-800 dark:border-zinc-700 flex items-center justify-center p-2 sm:p-2.5 shadow-md shrink-0"
              >
                <img
                  src="/images/logo-white.png"
                  alt="Batı Lounge Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <div>
                <h3 className="text-xl sm:text-3xl font-heading font-semibold text-zinc-950 dark:text-white tracking-tight mb-0.5">
                  {placeName}
                </h3>
                <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400 font-light flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                  <span>Zekeriyaköy, Sarıyer / İstanbul</span>
                </p>
              </div>
            </div>

            {/* Right: Minimal 5-Star Rating Badge & Blue Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 shrink-0 pt-2 sm:pt-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 shadow-sm"
              >
                <GoogleLogoIcon className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-heading font-semibold leading-none">{overallRating.toFixed(1)}</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-[10px] font-sans text-zinc-500 dark:text-zinc-400 font-medium">({totalCount})</span>
              </motion.div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline inline-flex items-center gap-1 px-1"
              >
                <span>Google Haritalar'da Aç</span>
                <ExternalLink className="w-3 h-3 text-blue-500" />
              </a>
            </div>

          </div>

          {/* Compact Dikey (Portrait) Interactive Gallery Grid - Single row on mobile */}
          {photosList.length > 0 && (
            <div className="px-3 pb-4 sm:px-8 sm:pb-8 bg-zinc-50/50 dark:bg-zinc-900/50">
              <div className="grid grid-cols-4 gap-1.5 sm:gap-4">
                {photosList.slice(0, 4).map((photo, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setLightboxIndex(i);
                      setIsLightboxOpen(true);
                    }}
                    className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800/80 shadow-apple-sm cursor-pointer"
                  >
                    <img
                      src={photo.url}
                      alt="Google Business Place Photo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="p-1.5 sm:p-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg transform group-hover:scale-110 transition-transform">
                        <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                    </div>
                    <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 p-0.5 sm:p-1 rounded-md bg-black/40 backdrop-blur-md border border-white/10">
                      <GoogleLogoIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Bitişik / Connected Reviews Area */}
          <div className="p-4 sm:p-8 bg-zinc-50/30 dark:bg-zinc-950/40">
            
            {/* Filter Bar */}
            <div className="flex items-center justify-between gap-4 mb-5 sm:mb-8 pb-3 sm:pb-4 border-b border-zinc-200/60 dark:border-zinc-800/60 overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans font-medium text-zinc-400 flex items-center gap-1 shrink-0">
                  <Filter className="w-3.5 h-3.5" /> Filtrele:
                </span>
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-sans transition-all duration-200 shrink-0 ${
                      activeFilter === filter
                        ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-medium shadow-apple-sm'
                        : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <span className="text-[11px] font-sans text-zinc-400 md:hidden shrink-0 flex items-center gap-1">
                Yatay kaydırın →
              </span>
            </div>

            {/* Loading Skeletons */}
            {isLoading ? (
              <div className="flex overflow-x-auto scrollbar-none gap-3.5 md:grid md:grid-cols-3 md:gap-6 pb-2 md:pb-0">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="w-[82vw] max-w-[310px] sm:w-[340px] md:w-auto shrink-0 p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 animate-pulse space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />
                      <div className="h-4 w-12 bg-zinc-200 dark:bg-zinc-800 rounded" />
                    </div>
                    <div className="h-16 bg-zinc-200 dark:bg-zinc-800 rounded" />
                    <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded" />
                  </div>
                ))}
              </div>
            ) : (
              /* Review Cards Grid inside Master Card with Sweet Micro-Animations - Single horizontal row on mobile */
              <motion.div layout className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-3.5 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 pb-2 md:pb-0">
                <AnimatePresence mode="popLayout">
                  {filteredReviews.map((review, idx) => {
                    return (
                      <motion.div
                        key={review.id}
                        layout
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                        className="w-[82vw] max-w-[310px] sm:w-[340px] md:w-auto shrink-0 snap-start p-4 sm:p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-apple-sm relative group"
                      >
                        <div>
                          {/* Top Author Bar */}
                          <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <ReviewAvatar
                                  src={review.profilePhotoUrl}
                                  name={review.authorName}
                                  index={idx}
                                />
                                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-zinc-900 rounded-full p-0.5 shadow-sm border border-zinc-200 dark:border-zinc-800">
                                  <GoogleLogoIcon className="w-3 h-3" />
                                </div>
                              </div>

                              <div>
                                <h4 className="font-heading font-medium text-xs sm:text-sm text-zinc-950 dark:text-white">
                                  {review.authorName}
                                </h4>
                                <span className="text-[10px] sm:text-[11px] font-sans text-zinc-400 block mt-0.5">
                                  {review.relativeTime}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Stars */}
                          <div className="flex items-center gap-1 mb-2.5 sm:mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500 text-amber-500" />
                            ))}
                          </div>

                          {/* Review Content */}
                          <p className="text-xs sm:text-sm font-sans font-light text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4 sm:mb-6">
                            "{review.text}"
                          </p>
                        </div>

                        {/* Card Footer */}
                        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[10px] sm:text-[11px] font-sans text-zinc-400">
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                            Doğrulanmış Google Yorumu
                          </span>
                          <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-zinc-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                          >
                            <span>Haritalar</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Master Card Bottom Bar CTA */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-zinc-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
              <span>Google Haritalar Canlı Verileri ({placeName})</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white font-sans font-medium hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all inline-flex items-center justify-center gap-2 shadow-apple-sm hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                <span>Google Haritalar'da Yeni Yorum Bırakın</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>

          </div>

        </motion.div>

      </div>

      {/* Interactive Fullscreen Gallery Lightbox Modal with Touch/Mobile & Keyboard Navigation */}
      <AnimatePresence>
        {isLightboxOpen && photosList.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20"
              aria-label="Kapat"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Previous Button */}
            {photosList.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev === 0 ? photosList.length - 1 : prev - 1));
                }}
                className="absolute left-2 sm:left-8 p-2.5 sm:p-3 rounded-full bg-black/50 sm:bg-white/10 text-white hover:bg-white/20 transition-all z-20 backdrop-blur-md"
                aria-label="Önceki Görsel"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Active Image Container */}
            <div
              className="relative max-w-full sm:max-w-4xl max-h-[80vh] sm:max-h-[85vh] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photosList[lightboxIndex].url}
                alt="Batı Lounge Google Photo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[80vh] sm:max-h-[85vh] rounded-xl sm:rounded-2xl"
              />
              {/* Single Clean Line Info Footer */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between text-[10px] sm:text-xs text-white/90 font-sans px-2.5 py-1.5 sm:px-3 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 gap-2 overflow-hidden">
                <span className="whitespace-nowrap font-medium shrink-0">
                  Görsel {lightboxIndex + 1} / {photosList.length}
                </span>
                <span className="flex items-center gap-1.5 whitespace-nowrap truncate text-white/80">
                  <GoogleLogoIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> Google Fotoğrafı
                </span>
              </div>
            </div>

            {/* Next Button */}
            {photosList.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev === photosList.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-2 sm:right-8 p-2.5 sm:p-3 rounded-full bg-black/50 sm:bg-white/10 text-white hover:bg-white/20 transition-all z-20 backdrop-blur-md"
                aria-label="Sonraki Görsel"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
