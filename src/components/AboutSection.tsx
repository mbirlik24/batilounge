'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TypewriterHeading from '@/components/TypewriterHeading';

export default function AboutSection() {
  const highlights = [
    {
      label: 'Açılış Tarihi',
      value: 'Temmuz 2026',
      sub: 'Zekeriyaköy Alya Evleri',
    },
    {
      label: 'Hizmet Standartı',
      value: '7/24 Kesintisiz',
      sub: 'Sıcak Mutfak & Nargile',
    },
    {
      label: 'Oyun Salonu',
      value: 'Masa Ücreti Yok',
      sub: 'Okey & Kutu Oyunları',
    },
    {
      label: 'Açık Hava',
      value: 'Geniş Balkon',
      sub: 'Doğa Manzaralı Teras',
    },
  ];

  return (
    <section id="hakkimizda" className="snap-section py-10 sm:py-20 bg-white dark:bg-[#09090B] border-t border-black/[0.06] dark:border-white/[0.08] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Story Text */}
          <div className="lg:col-span-7">
            <div className="inline-block px-3.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-sans font-medium mb-4">
              Hakkımızda
            </div>

            <TypewriterHeading
              lines={['Zekeriyaköy’de Yeni', 'Bir Buluşma Noktası.']}
              as="h2"
              speed={20}
              className="text-3xl sm:text-5xl font-heading font-light sm:font-normal text-zinc-950 dark:text-white tracking-tight leading-[1.1] mb-6"
            />

            <div className="space-y-4 text-xs sm:text-sm font-sans font-light text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
              <p>
                Temmuz 2026'da Zekeriyaköy Alya Evleri bünyesinde kapılarını açan Batı Lounge; günün her anına eşlik eden sıcak ambiyansı, doğayla iç içe açık hava balkonu ve özenle tasarlanmış iç mekanlarıyla hizmet vermektedir.
              </p>
              <p>
                Amacımız; dostlarınızla keyifli vakit geçirebileceğiniz, masa ücreti ödemeden okey ve masa oyunları oynayabileceğiniz, günün 24 saati lezzetli gurme yemeklere ve premium nargile harmanlarına ulaşabileceğiniz nezih bir yaşam alanı sunmaktır.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Grid Stat Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-apple-sm flex flex-col justify-between"
                >
                  <span className="text-[11px] font-sans text-zinc-400 font-medium block mb-2">
                    {item.label}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-heading font-semibold text-zinc-950 dark:text-white tracking-tight leading-tight">
                      {item.value}
                    </h4>
                    <p className="text-[11px] font-sans font-light text-zinc-500 dark:text-zinc-400 mt-1">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
