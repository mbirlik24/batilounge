'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { 
  Instagram, 
  ArrowUpRight, 
  Heart, 
  MessageCircle, 
  Play, 
  BadgeCheck, 
  X, 
  ExternalLink,
  Sparkles,
  Bookmark,
  Share2
} from 'lucide-react';
import TypewriterHeading from '@/components/TypewriterHeading';

interface InstagramPost {
  id: string;
  image: string;
  type: 'reel' | 'image';
  likes: string;
  comments: string;
  caption: string;
  date: string;
  url: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    image: '/images/mixology.jpg',
    type: 'reel',
    likes: '1,842',
    comments: '56',
    caption: 'İmza kokteyllerimiz ile gecenin ritmini yakalayın. Batı Lounge mixology sanatıyla tanışın. 🍸✨ #batilounge #mixology #istanbul',
    date: '2 Gün Önce',
    url: 'https://instagram.com/batilounge',
  },
  {
    id: 'post-2',
    image: '/images/real_2.jpg',
    type: 'image',
    likes: '2,410',
    comments: '98',
    caption: 'Özel marinasyonlu Tomahawk Steak lezzeti ve alev şovu! Şeflerimizin imza sunumu sizleri bekliyor. 🔥🥩 #gourmet #steakhouse',
    date: '3 Gün Önce',
    url: 'https://instagram.com/batilounge',
  },
  {
    id: 'post-3',
    image: '/images/terrace.jpg',
    type: 'image',
    likes: '1,290',
    comments: '42',
    caption: 'Açık hava terasımızda İstanbul akşamlarının keyfini çıkarın. Ferah atmosfer ve leziz atıştırmalıklar. 🌆🍃 #terrace #lounge',
    date: '5 Gün Önce',
    url: 'https://instagram.com/batilounge',
  },
  {
    id: 'post-4',
    image: '/images/real_5.jpg',
    type: 'reel',
    likes: '3,120',
    comments: '114',
    caption: 'Premium shisha koleksiyonumuz ve usta nargile şeflerimizin özel tatları ile akşamınızı unutulmaz kılın. 💨👑 #shisha #vip',
    date: '1 Hafta Önce',
    url: 'https://instagram.com/batilounge',
  },
  {
    id: 'post-5',
    image: '/images/vip.jpg',
    type: 'image',
    likes: '1,540',
    comments: '63',
    caption: 'Özel davetler ve doğum günleri için tasarlanmış VIP Lounge localarımız hizmetinizde. 🥂🎉 #viplounge #event',
    date: '1 Hafta Önce',
    url: 'https://instagram.com/batilounge',
  },
  {
    id: 'post-6',
    image: '/images/real_1.jpg',
    type: 'reel',
    likes: '2,890',
    comments: '87',
    caption: 'Çıtır kat kat baklava ve Maraş dondurmalı tatlı şöleni! Her lokmada lezzet patlaması. 🍨✨ #dessert #gourmet',
    date: '2 Hafta Önce',
    url: 'https://instagram.com/batilounge',
  },
];

export default function InstagramFeed() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [widgetFailed, setWidgetFailed] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'reels'>('all');

  // Check if Elfsight script successfully mounts or fails after timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      const elfsightContainer = document.querySelector('.elfsight-app-08ec1551-e48b-4c45-9287-ca831c5c4c0e');
      if (!elfsightContainer || elfsightContainer.children.length === 0) {
        setWidgetFailed(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = activeTab === 'reels' 
    ? INSTAGRAM_POSTS.filter(p => p.type === 'reel')
    : INSTAGRAM_POSTS;

  return (
    <section id="instagram" className="snap-section py-20 sm:py-28 bg-white dark:bg-[#09090B] border-t border-zinc-200/80 dark:border-zinc-800/80 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/5 via-purple-500/5 to-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* Script for Elfsight Widget */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="lazyOnload"
        onError={() => setWidgetFailed(true)}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 text-xs font-sans font-medium mb-4">
              <Instagram className="w-3.5 h-3.5" />
              <span>@batilounge</span>
              <Sparkles className="w-3 h-3 text-amber-500 ml-1" />
            </div>

            <TypewriterHeading
              text="Instagram'da Biz"
              as="h2"
              speed={22}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light sm:font-normal text-zinc-950 dark:text-white tracking-tight"
            />
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl font-sans">
              Batı Lounge dünyasından en özel kareler, imza lezzetler ve canlı atmosfer anları.
            </p>
          </div>

          <a
            href="https://instagram.com/batilounge"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 hover:from-pink-500 hover:via-purple-500 hover:to-amber-500 text-white text-xs font-sans font-semibold transition-all inline-flex items-center gap-2.5 self-start md:self-auto shadow-lg shadow-pink-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Instagram className="w-4 h-4" />
            <span>@batilounge Takip Et</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Brand Profile Banner Card */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 shadow-apple-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 w-full sm:w-auto">
            {/* Story Gradient Ring Avatar */}
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 shadow-md">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-900 overflow-hidden border-2 border-white dark:border-zinc-950 flex items-center justify-center p-2">
                <img src="/logo.png" alt="Batı Lounge" className="w-full h-full object-contain" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-medium text-lg sm:text-xl text-zinc-900 dark:text-white">batilounge</h3>
                <BadgeCheck className="w-5 h-5 text-sky-500 fill-sky-500/20" />
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">Batı Lounge & Premium Dining</p>
              <div className="flex items-center gap-4 mt-2 text-xs font-sans text-zinc-700 dark:text-zinc-300">
                <span><strong>1.480+</strong> Gönderi</span>
                <span><strong>28.5K</strong> Takipçi</span>
                <span><strong>📍 Batışehir</strong></span>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-zinc-200/60 dark:bg-zinc-800/80 p-1.5 rounded-full w-full sm:w-auto justify-center">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              Tüm Akış
            </button>
            <button
              onClick={() => setActiveTab('reels')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all inline-flex items-center gap-1.5 ${
                activeTab === 'reels'
                  ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              Reels
            </button>
          </div>
        </div>

        {/* Primary Container: Custom Interactive Grid (Always 100% working and ultra fast) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 cursor-pointer shadow-apple-xs hover:shadow-apple-md transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt="Batı Lounge Instagram"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Reel Video Indicator Badge */}
              {post.type === 'reel' && (
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                  <Play className="w-3.5 h-3.5 fill-white" />
                </div>
              )}

              {/* Hover Dark Overlay with Likes & Comments */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <div className="flex items-center justify-between font-sans text-xs font-medium">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-white text-white" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 fill-white text-white" />
                      {post.comments}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/80" />
                </div>
                <p className="line-clamp-2 text-[11px] font-sans text-zinc-300 mt-1.5 leading-snug">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Hidden Elfsight Container for backward compatibility */}
        <div className="hidden">
          <div className="elfsight-app-08ec1551-e48b-4c45-9287-ca831c5c4c0e" data-elfsight-app-lazy></div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 text-center">
          <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400">
            Daha fazlasını görmek ve en yeni lezzet duyurularını takip etmek için{' '}
            <a 
              href="https://instagram.com/batilounge" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-pink-600 dark:text-pink-400 underline font-medium hover:opacity-80"
            >
              @batilounge
            </a>{' '}
            sayfamızı ziyaret edin.
          </p>
        </div>
      </div>

      {/* Interactive Instagram Post Modal / Lightbox */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Post Media Side */}
            <div className="w-full md:w-1/2 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[450px]">
              <img
                src={selectedPost.image}
                alt="Instagram Post"
                className="w-full h-full object-cover max-h-[500px]"
              />
              {selectedPost.type === 'reel' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/40 shadow-xl">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Post Content Side */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 overflow-hidden border border-zinc-300 dark:border-zinc-700 p-0.5">
                      <img src="/logo.png" alt="Batı Lounge" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading font-medium text-sm text-zinc-900 dark:text-white">batilounge</span>
                        <BadgeCheck className="w-4 h-4 text-sky-500" />
                      </div>
                      <span className="text-[11px] font-sans text-zinc-500">Batışehir, İstanbul</span>
                    </div>
                  </div>

                  <span className="text-[11px] font-sans text-zinc-400">{selectedPost.date}</span>
                </div>

                {/* Caption */}
                <p className="text-xs sm:text-sm font-sans text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                  {selectedPost.caption}
                </p>
              </div>

              <div>
                {/* Interaction Row */}
                <div className="flex items-center justify-between border-t border-zinc-200 dark:border-zinc-800 pt-4 mb-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-pink-600 dark:text-pink-400 font-sans text-xs font-semibold">
                      <Heart className="w-5 h-5 fill-current" />
                      <span>{selectedPost.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 font-sans text-xs font-semibold">
                      <MessageCircle className="w-5 h-5" />
                      <span>{selectedPost.comments}</span>
                    </button>
                    <button className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>

                {/* Action CTA */}
                <a
                  href={selectedPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-amber-600 hover:opacity-90 text-white font-sans text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram'da Gönderiyi İncele</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
