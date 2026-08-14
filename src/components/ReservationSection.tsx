'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Clock, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import TypewriterHeading from '@/components/TypewriterHeading';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2',
    zone: 'balkon',
    notes: '',
  });

  const zones = [
    { id: 'balkon', name: 'Balkon & Açık Teras' },
    { id: 'oyun', name: 'Oyun Salonu (Okey & Oyun)' },
    { id: 'ic-salon', name: 'Ana İç Salon (Lounge)' },
    { id: 'nargile', name: 'Nargile & Kafe Alanı' },
  ];

  const timeSlots = [
    '08:30', '10:00', '11:30', '13:00', '14:30', '16:00',
    '18:00', '19:30', '20:00', '21:00', '22:30',
    '23:30', '01:00', '02:30', '04:00',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error('Lütfen ad ve telefon bilginizi giriniz.');
      return;
    }

    const zoneName = zones.find((z) => z.id === formData.zone)?.name || 'Masa';
    const text = encodeURIComponent(
      `Merhaba Batı Lounge Zekeriyaköy, masa rezervasyonu yaptırmak istiyorum.\n\n👤 İsim Soyad: ${formData.name}\n📞 Telefon: ${formData.phone}\n📅 Tarih: ${formData.date}\n⏰ Saat: ${formData.time}\n👥 Kişi Sayısı: ${formData.guests} Kişi\n📍 Alan Tercihi: ${zoneName}\n📝 Not: ${formData.notes || 'Yok'}`
    );
    const whatsappUrl = `https://wa.me/905418284342?text=${text}`;

    toast.success('WhatsApp’a yönlendiriliyorsunuz...', {
      description: `${formData.date} - ${formData.time} için ${formData.guests} kişilik rezervasyon mesajınız hazırlandı.`,
    });

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="rezervasyon" className="py-10 sm:py-20 bg-[#F5F5F7] dark:bg-[#08080A] border-t border-zinc-200/80 dark:border-zinc-800/80 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Info Text */}
          <div className="lg:col-span-5 text-center sm:text-left">
            <TypewriterHeading
              lines={['Masanızı WhatsApp ile', 'Anında Ayırtın.']}
              as="h2"
              speed={20}
              className="text-3xl sm:text-5xl font-heading font-light sm:font-normal text-zinc-950 dark:text-white tracking-tight leading-[1.08] mb-4"
            />
            <p className="text-xs sm:text-sm font-sans font-light text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Zekeriyaköy’ün huzurlu atmosferinde açık hava balkonu, oyun salonu (okey & masa oyunları) veya iç salonumuz için form bilgilerini doldurup tek tıkla doğrudan WhatsApp üzerinden rezervasyon yapabilirsiniz.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md space-y-2.5 text-xs font-sans text-zinc-600 dark:text-zinc-400 shadow-apple-sm">
              <div className="flex items-center justify-between text-zinc-950 dark:text-white font-medium font-heading">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> 7/24 Kesintisiz Hizmet
                </span>
                <span className="text-[11px] font-sans text-amber-600 dark:text-amber-400 font-normal">
                  Masa / Oyun Ücreti Yoktur
                </span>
              </div>
              <p className="font-light">Masanız rezervasyon saatinden itibaren 20 dakika adınıza opsiyonlanır.</p>
              <p className="pt-1 border-t border-zinc-100 dark:border-zinc-800">
                Doğrudan WhatsApp İletişim Hattı:{' '}
                <a href="https://wa.me/905418284342" target="_blank" rel="noopener noreferrer" className="font-sans text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
                  0541 828 43 42
                </a>
              </p>
            </div>
          </div>

          {/* Right: Clean WhatsApp-Direct Reservation Form */}
          <div className="lg:col-span-7 rounded-3xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/95 p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-5 pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-zinc-950 dark:text-white tracking-tight">
                WhatsApp Masa Rezervasyonu
              </h3>
              <p className="text-xs font-sans font-light text-zinc-500 mt-1">
                Formu doldurun, tüm bilgileriniz hazır bir şekilde WhatsApp'a iletilsin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Zone Select */}
              <div>
                <label className="block text-xs font-sans text-zinc-500 mb-1.5 font-medium">
                  Alan Tercihi
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {zones.map((z) => (
                    <button
                      key={z.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, zone: z.id })}
                      className={`p-2.5 sm:p-3 rounded-xl border text-xs font-sans text-left transition-all ${
                        formData.zone === z.id
                          ? 'border-zinc-950 dark:border-white bg-zinc-950 dark:bg-white font-medium text-white dark:text-zinc-950 shadow-apple-sm'
                          : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      }`}
                    >
                      {z.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-sans text-zinc-500 mb-1 font-medium">
                    Tarih
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-950 dark:text-white text-xs font-sans focus:outline-none focus:border-zinc-950 dark:focus:border-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-zinc-500 mb-1 font-medium">
                    Saat
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-950 dark:text-white text-xs font-sans focus:outline-none focus:border-zinc-950 dark:focus:border-white"
                  >
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans text-zinc-500 mb-1 font-medium">
                    Kişi Sayısı
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-950 dark:text-white text-xs font-sans focus:outline-none focus:border-zinc-950 dark:focus:border-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 15].map((n) => (
                      <option key={n} value={n}>
                        {n} Kişi
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-sans text-zinc-500 mb-1 font-medium">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Adınız Soyadınız"
                    className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-950 dark:text-white text-xs font-sans focus:outline-none focus:border-zinc-950 dark:focus:border-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-zinc-500 mb-1 font-medium">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0541 828 43 42"
                    className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-950 dark:text-white text-xs font-sans focus:outline-none focus:border-zinc-950 dark:focus:border-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans text-zinc-500 mb-1 font-medium">
                  Özel Not (Opsiyonel)
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Balkon kenar masa, okey masası, doğum günü vb..."
                  className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-950 dark:text-white text-xs font-sans focus:outline-none focus:border-zinc-950 dark:focus:border-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-heading font-medium text-xs sm:text-sm tracking-tight shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                  <span>WhatsApp ile Masanızı Ayırtın (0541 828 43 42)</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
