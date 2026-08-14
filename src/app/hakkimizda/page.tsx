'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import TypewriterHeading from '@/components/TypewriterHeading';
import ContactFooter from '@/components/ContactFooter';
import ReservationModal from '@/components/ReservationModal';

export default function HakkimizdaPage() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const values = [
    {
      title: '7/24 Kesintisiz Hizmet',
      desc: 'Günün 24 saati sıcak şef mutfağı, taze demlenmiş çay ve özel nargile harmanları ile kesintisiz konfor.',
    },
    {
      title: 'Masa Ücreti Alınmaz',
      desc: 'Okey ve masa oyunları salonumuzda arkadaşlarınızla vakit geçirirken ekstra masa ücreti talep edilmez.',
    },
    {
      title: 'Zekeriyaköy Teras & Balkon',
      desc: 'Doğanın huzurunda ferah açık hava balkonu ve özenle tasarlanmış sıcak ahşap iç mekanlar.',
    },
    {
      title: 'Samimi & Nezih Atmosfer',
      desc: 'Her detayında misafirlerimizin rahatını hedefleyen kaliteli, samimi ve içten hizmet anlayışı.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7]">
      {/* Sticky Header */}
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

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-20">
        
        {/* Page Hero Header */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-block px-3.5 py-1 rounded-full bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-sans font-medium mb-4">
            Hikayemiz & Değerlerimiz
          </div>

          <TypewriterHeading
            lines={['Batı Lounge Zekeriyaköy’e', 'Hoş Geldiniz.']}
            as="h1"
            speed={20}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-light sm:font-normal text-zinc-950 dark:text-white tracking-tight leading-[1.08] mb-4"
          />
          <p className="text-sm sm:text-base font-sans font-light text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Alya Evleri bünyesinde Temmuz 2026'da açılan mekanımız; Zekeriyaköy'ün doğasında günün 24 saati huzurlu bir yaşam alanı sunmaktadır.
          </p>
        </div>

        {/* 2-Column Master Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-black/[0.08] dark:border-zinc-800 shadow-2xl aspect-[4/3] bg-zinc-100 dark:bg-zinc-900">
              <img
                src="/images/hero.jpg"
                alt="Batı Lounge Ana Salon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm font-sans font-light text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-zinc-950 dark:text-white tracking-tight mb-2">
              Zekeriyaköy’ün Kalbinde Yeni Bir Soluk
            </h3>
            <p>
              Temmuz 2026 tarihinde Zekeriyaköy Alya Evleri lokasyonunda kapılarını açan Batı Lounge; sadece bir kafe veya restoran değil, günün her saatinde kendinizi evinizde hissedeceğiniz nezih bir buluşma noktasıdır.
            </p>
            <p>
              Doğayla iç içe açık hava balkonu, arkadaşlarınızla keyifli vakit geçirebileceğiniz masa ücreti olmayan özel oyun salonumuz, zengin nargile harmanlarımız ve şeflerimizin hazırladığı Cafe de Paris bonfileden taş fırın pizzalara kadar uzanan gurme lezzetlerimizle hizmet vermekteyiz.
            </p>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => setIsReservationOpen(true)}
                className="px-6 py-3 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-heading font-medium text-xs shadow-apple-sm"
              >
                Masanızı Ayırtın
              </button>
              <a
                href="https://wa.me/905418284342"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-xs font-sans font-medium text-zinc-800 dark:text-zinc-200 inline-flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                <span>WhatsApp İletişim</span>
              </a>
            </div>
          </div>
        </div>

        {/* Apple Style Sleek Minimalist Features List (No Cliché Icon-Stuffed Cards) */}
        <div className="mb-16 sm:mb-24">
          <div className="mb-8 pb-4 border-b border-black/[0.08] dark:border-white/[0.12]">
            <h3 className="text-2xl sm:text-4xl font-heading font-light sm:font-normal text-zinc-950 dark:text-white tracking-tight">
              Sizi Neler Bekliyor?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="pb-6 border-b border-black/[0.06] dark:border-zinc-800/80 flex flex-col justify-between"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-xs font-mono text-zinc-400 font-medium">0{i + 1}</span>
                  <h4 className="font-heading font-semibold text-lg sm:text-xl text-zinc-950 dark:text-white tracking-tight">
                    {v.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm font-sans font-light text-zinc-600 dark:text-zinc-400 leading-relaxed pl-7">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Real Photos Preview Gallery */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-zinc-950 dark:text-white">
                Mekanımızdan Gerçek Kareler
              </h3>
              <p className="text-xs font-sans text-zinc-500 font-light mt-0.5">
                Zekeriyaköy Batı Lounge atmosferinden bazı anlar
              </p>
            </div>
            <Link
              href="/#galeri"
              className="text-xs font-sans font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Tüm Galeriyi Gör ↗
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['/images/hero.jpg', '/images/vip.jpg', '/images/terrace.jpg', '/images/mixology.jpg'].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
                <img src={img} alt="Batı Lounge Görsel" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer & Reservation Modal */}
      <ContactFooter />
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
