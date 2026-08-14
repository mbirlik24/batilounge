'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterHeading from '@/components/TypewriterHeading';

export default function StoryAtmosphere() {
  const [activeCycle, setActiveCycle] = useState(0);

  const cycles = [
    {
      id: 'morning',
      tabLabel: 'Sabah & Kahvaltı',
      title: 'Sabah & Zekeriyaköy Kahvaltısı',
      subtitle: 'Balkonda doğa manzarası ve taze serpme kahvaltı',
      desc: 'Zekeriyaköy’ün tertemiz havasında güne huzurla başlayın. Doğal petek balı, sıcak simitler, bakır sahanda sucuklu köy yumurtaları, taze demlenmiş çay ve özel filtre kahveler.',
      specs: [
        '2 Kişilik Zengin Serpme Kahvaltı Çeşitleri',
        'Özel Bitki Çayları & Taze Demlemeler',
        'Ferah Açık Balkon & Teras Keyfi',
      ],
      image: '/images/terrace.jpg',
    },
    {
      id: 'afternoon',
      tabLabel: 'Öğle & Oyun Salonu',
      title: 'Öğle & Oyun / Cafe Keyfi',
      subtitle: 'Okey, masa oyunları, kahve ve sıcak lezzetler',
      desc: 'Dostlarınızla keyifli vakit geçirebileceğiniz geniş oyun salonumuzda okey ve masa oyunları için herhangi bir masa ücreti alınmaz. Taş fırın pizzalar ve gurme burgerler eşliğinde sohbet keyfi.',
      specs: [
        'Özel Oyun Salonu (Masa Ücreti Alınmaz)',
        'Taş Fırın Pizza & Burger Çeşitleri',
        'Taze İtalyan Kahveleri & Dondurma',
      ],
      image: '/images/vip.jpg',
    },
    {
      id: 'evening',
      tabLabel: 'Akşam Gastronomisi',
      title: 'Akşam Gastronomisi & Şef Menüsü',
      subtitle: 'Şefin özel et yemekleri, tatlılar ve sıcak ambiyans',
      desc: 'Günün yorgunluğunu unutturan sıcak ahşap ve deri dekorasyon. Cafe de Paris soslu dinlendirilmiş bonfile, çıtır atıştırmalıklar ve fırından sıcak çıkan Belçika çikolatalı sufle.',
      specs: [
        'Cafe de Paris & Lokum Bonfile',
        'Ev Yapımı Çikolatalı Sıcak Sufle',
        'Geniş Balkon & İç Salon Masaları',
      ],
      image: '/images/steak.jpg',
    },
    {
      id: 'night',
      tabLabel: 'Gece Nargile & Lounge',
      title: 'Gece Nargile & 7/24 Mutfak',
      subtitle: '7/24 kesintisiz sıcak mutfak ve premium nargile',
      desc: 'Zekeriyaköy’de gece hayatının ve sessizliğin en nezih noktası. Gece saatlerinde sıcak mutfak, buzlu ferahlatıcı imza içecekler, premium nargile harmanları ve dinlendirici müzikler.',
      specs: [
        '7/24 Kesintisiz Sıcak Mutfak Hizmeti',
        'Premium İthal Nargile Harmanları',
        'Oyun & Sohbet İçin Kesintisiz Alan',
      ],
      image: '/images/mixology.jpg',
    },
  ];

  const currentTab = cycles[activeCycle];

  return (
    <section id="hikaye" className="snap-section py-12 sm:py-20 bg-[#F5F5F7] dark:bg-black border-t border-b border-black/[0.06] dark:border-white/[0.08] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <TypewriterHeading
            lines={['Zekeriyaköy’de Muhteşem', 'Bir Deneyim.']}
            as="h2"
            speed={20}
            className="text-2xl sm:text-4xl lg:text-5xl font-heading font-light sm:font-normal text-[#1D1D1F] dark:text-white tracking-tight leading-[1.1]"
          />
          <p className="mt-2 text-xs sm:text-sm font-sans font-light text-[#86868B] dark:text-zinc-400 max-w-2xl">
            Doğayla iç içe açık hava balkonu, geniş oyun salonu ve lezzetli şef mutfağımızla 7/24 hizmetinizdeyiz.
          </p>
        </div>

        {/* Master Birleşik Sade, Şık & Kompakt Hikaye Kartı */}
        <div className="rounded-2xl sm:rounded-3xl border border-black/[0.08] dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xl sm:shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Segmented Controls (Compact) */}
          <div className="p-2.5 sm:p-3.5 bg-zinc-50/80 dark:bg-zinc-950/60 border-b border-black/[0.06] dark:border-zinc-800">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2.5">
              {cycles.map((item, idx) => {
                const isActive = activeCycle === idx;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveCycle(idx)}
                    className={`py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-heading font-medium transition-all duration-200 text-center ${
                      isActive
                        ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-apple-sm scale-[1.01]'
                        : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-black/[0.05] dark:border-zinc-800'
                    }`}
                  >
                    <span className="truncate block">{item.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Unified Content Panel */}
          <div className="p-5 sm:p-7 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCycle}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
              >
                {/* Left Side Info */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-1">
                      {currentTab.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-zinc-500 dark:text-zinc-400 font-medium mb-3">
                      {currentTab.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm font-sans font-light text-[#86868B] dark:text-zinc-300 leading-relaxed mb-4">
                      {currentTab.desc}
                    </p>
                  </div>

                  {/* Feature Bullets (Simple Dots, No Icons) */}
                  <div className="space-y-2 pt-3 border-t border-black/[0.06] dark:border-zinc-800">
                    {currentTab.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-sans text-[#1D1D1F] dark:text-zinc-200 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-white shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 mt-4 pt-3 border-t border-black/[0.06] dark:border-zinc-800">
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-black/[0.05] dark:border-zinc-800">
                      <h4 className="font-heading font-medium text-xs text-[#1D1D1F] dark:text-white mb-0.5">
                        Masa Ücreti Yoktur
                      </h4>
                      <p className="text-[11px] font-sans text-zinc-500 dark:text-zinc-400 font-light">
                        Okey ve masa oyunları için ekstra ücret alınmaz.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-black/[0.05] dark:border-zinc-800">
                      <h4 className="font-heading font-medium text-xs text-[#1D1D1F] dark:text-white mb-0.5">
                        Teras & Açık Balkon
                      </h4>
                      <p className="text-[11px] font-sans text-zinc-500 dark:text-zinc-400 font-light">
                        Zekeriyaköy doğasında ferah açık hava keyfi.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side Compact Image */}
                <div className="lg:col-span-5">
                  <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] max-h-[260px] sm:max-h-[300px] bg-zinc-100 dark:bg-zinc-950 border border-black/[0.08] dark:border-zinc-800 shadow-md">
                    <img
                      src={currentTab.image}
                      alt={currentTab.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="text-xs sm:text-sm font-heading font-normal drop-shadow-sm truncate">
                        {currentTab.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
