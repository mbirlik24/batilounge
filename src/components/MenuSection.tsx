'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import TypewriterHeading from '@/components/TypewriterHeading';

const HIGHLIGHT_ITEMS = [
  {
    id: 'kahvalti-serpme',
    name: 'Batı Zengin Serpme Kahvaltı',
    subtitle: '2 Kişilik • Zekeriyaköy Balkon Keyfi',
    description: 'Doğal petek balı, manda kaymağı, bakır sahanda sucuklu köy yumurtası, sıcak pişiler ve sınırsız çay.',
    price: '1.500',
    tag: 'İmza Kahvaltı',
    badge: 'Balkon Favorisi',
  },
  {
    id: 'et-cafe-de-paris',
    name: 'Cafe de Paris Bonfile',
    subtitle: 'Dinlendirilmiş Dana Bonfile • 220g',
    description: 'Gizli tarifli özel tereyağlı sıcak Cafe de Paris sosu, çıtır kibrit patatesler ve roka salatası ile.',
    price: '920',
    tag: 'Şefin İmzası',
    badge: 'Çok Satan',
  },
  {
    id: 'tatli-sufle',
    name: 'Belçika Çikolatalı Sıcak Sufle',
    subtitle: 'Hakiki Callebaut Çikolatası • Vanilyalı Dondurma',
    description: 'Fırından anlık sıcak çıkan akışkan Belçika çikolatası ve Maraş kesme dondurma eşliğinde.',
    price: '360',
    tag: 'Sıcak Tatlı',
    badge: 'Tatlı Klasiği',
  },
  {
    id: 'nargile-special',
    name: 'Batı Signature Nargile',
    subtitle: 'Özel İthal Harman • Doğal Hindistan Cevizi Kömürü',
    description: 'Özel karışım meyve harmanları, buzlu marpuç ve profesyonel köz servisi ile kesintisiz keyif.',
    price: '550',
    tag: 'Premium Lounge',
    badge: '7/24 Servis',
  },
];

interface MenuSectionProps {
  onOpenReservation?: () => void;
}

export default function MenuSection({ onOpenReservation }: MenuSectionProps) {
  return (
    <section id="menu" className="snap-section py-20 sm:py-28 bg-[#F5F5F7] dark:bg-black border-t border-zinc-200/80 dark:border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <TypewriterHeading
              text="Gurme Lezzet Seçkisi"
              as="h2"
              speed={22}
              className="text-3xl sm:text-5xl font-heading font-light sm:font-normal text-[#1D1D1F] dark:text-white tracking-tight mb-2"
            />
            <p className="text-xs sm:text-sm font-sans font-light text-[#86868B] max-w-lg">
              7/24 açık mutfağımızdan kahvaltıdan etlere, tatlılardan premium nargileye uzanan seçkin lezzetler.
            </p>
          </div>

          <Link
            href="/menu"
            prefetch={true}
            className="apple-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D1D1F] hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-[#1D1D1F] font-heading font-medium text-xs tracking-tight shadow-sm self-start md:self-auto group"
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Tüm Menüyü İncele (120+ Lezzet)</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 4 Compact Signature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHT_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-[#F5F5F7]/70 dark:bg-zinc-900/60 flex flex-col justify-between hover:border-black/[0.18] dark:hover:border-white/[0.2] transition-all shadow-apple-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded-full bg-white dark:bg-zinc-800 text-[#1D1D1F] dark:text-white border border-black/[0.04] dark:border-white/[0.06]">
                    {item.badge}
                  </span>
                  <span className="font-sans font-semibold text-sm text-[#1D1D1F] dark:text-white">
                    {item.price} ₺
                  </span>
                </div>

                <h3 className="font-heading font-normal text-base text-[#1D1D1F] dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-[11px] font-sans text-zinc-500 mb-2 font-light">
                  {item.subtitle}
                </p>
                <p className="text-xs font-sans font-light text-[#86868B] dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-sans text-zinc-400">
                  {item.tag}
                </span>
                <Link
                  href="/menu"
                  className="text-xs font-sans font-medium text-[#1D1D1F] dark:text-white inline-flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity"
                >
                  Detay <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
