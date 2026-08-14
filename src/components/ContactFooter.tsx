'use client';

import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Instagram, Star } from 'lucide-react';

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="iletisim" className="bg-white dark:bg-[#09090B] text-zinc-900 dark:text-zinc-100 pt-20 pb-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-100 dark:border-zinc-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/images/logo-dark.png"
                  alt="Batı Lounge"
                  className="h-8 sm:h-9 w-auto object-contain dark:hidden"
                />
                <img
                  src="/images/logo-white.png"
                  alt="Batı Lounge"
                  className="h-8 sm:h-9 w-auto object-contain hidden dark:block"
                />
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-sans font-medium border border-amber-500/20">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>5.0 (Google)</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm font-sans font-light text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-md">
                Zekeriyaköy'ün huzurlu atmosferinde 7 gün 24 saat kesintisiz gastronomi, artisan kahvaltı, nargile, okey & oyun salonu ve açık balkon keyfi. Masa veya oyun ücreti alınmamaktadır.
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-sans text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Pazartesi — Pazar: 7/24 Açık</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-sans text-zinc-700 dark:text-zinc-300">
              <a
                href="https://instagram.com/batilounge"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1.5 font-medium"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@batilounge</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href="https://wa.me/905418284342"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1.5 font-medium"
              >
                <span>WhatsApp Rezervasyon</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href="mailto:loungebati@gmail.com"
                className="hover:underline flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>loungebati@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Location & Details */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-normal text-xs text-zinc-400 uppercase tracking-widest mb-4">
              Konum & İletişim
            </h4>

            <div className="space-y-3 text-xs font-sans font-light text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span>Alya Evleri, Zekeriyaköy, Tatar Sk. No:3, 34450 Sarıyer / İstanbul</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <a href="tel:05418284342" className="font-sans text-zinc-900 dark:text-white font-medium hover:underline">
                  0541 828 43 42
                </a>
              </p>
            </div>

            <p className="text-[11px] font-sans text-zinc-500 mb-4">
              Balkon & Açık Teras • Oyun Salonu • Ücretsiz Otopark
            </p>

            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJU3RgEYvhn0ARRzRkoC05-vo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-medium text-zinc-950 dark:text-white underline inline-flex items-center gap-1"
            >
              Google Haritalarda Aç <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Map Preview */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 h-[190px] relative bg-zinc-100 dark:bg-zinc-900 shadow-apple-sm">
              <iframe
                title="Batı Lounge Zekeriyaköy Tam Konum"
                src="https://maps.google.com/maps?q=Alya+Evleri,+Tatar+Sk.+No:3,+Zekeriyak%C3%B6y,+Sar%C4%B1yer,+%C4%B0stanbul&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-400">
          <span>© {new Date().getFullYear()} Batı Lounge Zekeriyaköy. Tüm hakları saklıdır.</span>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Yukarı Çık ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
