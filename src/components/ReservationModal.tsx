'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({
  isOpen,
  onClose,
}: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2',
    zone: 'balkon',
    notes: '',
  });

  const zonesMap: Record<string, string> = {
    balkon: 'Balkon & Açık Teras',
    oyun: 'Oyun Salonu (Okey & Masa Oyunları)',
    'ic-salon': 'Ana İç Salon',
    nargile: 'Nargile & Kafe Alanı',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error('Lütfen ad ve telefon bilginizi giriniz.');
      return;
    }

    const zoneName = zonesMap[formData.zone] || 'Masa';
    const text = encodeURIComponent(
      `Merhaba Batı Lounge Zekeriyaköy, masa rezervasyonu yaptırmak istiyorum.\n\n👤 İsim Soyad: ${formData.name}\n📞 Telefon: ${formData.phone}\n📅 Tarih: ${formData.date}\n⏰ Saat: ${formData.time}\n👥 Kişi Sayısı: ${formData.guests} Kişi\n📍 Alan Tercihi: ${zoneName}\n📝 Not: ${formData.notes || 'Yok'}`
    );
    const whatsappUrl = `https://wa.me/905418284342?text=${text}`;

    toast.success('WhatsApp’a yönlendiriliyorsunuz...', {
      description: `${formData.date} - ${formData.time} için ${formData.guests} kişilik rezervasyon mesajınız hazırlandı.`,
    });

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 w-full max-w-md rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-7 shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Kapat"
              className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <div className="mb-5">
                <h3 className="text-xl font-heading font-semibold text-zinc-950 dark:text-white tracking-tight">
                  WhatsApp ile Masa Rezervasyonu
                </h3>
                <p className="text-xs font-sans font-light text-zinc-500 mt-1">
                  Batı Lounge Zekeriyaköy • Masa ücreti alınmaz
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-sans text-zinc-500 mb-1 font-medium">
                    Alan Tercihi
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'balkon', name: 'Balkon / Teras' },
                      { id: 'oyun', name: 'Oyun Salonu' },
                      { id: 'ic-salon', name: 'Ana İç Salon' },
                      { id: 'nargile', name: 'Nargile Alanı' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, zone: item.id })}
                        className={`p-2 rounded-xl border text-xs font-sans text-center transition-all ${
                          formData.zone === item.id
                            ? 'border-zinc-950 dark:border-white bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium'
                            : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-sans text-zinc-500 mb-1 font-medium">
                      Tarih
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-xs font-sans focus:outline-none"
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
                      className="w-full px-2.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-xs font-sans focus:outline-none"
                    >
                      {[
                        '09:00', '11:00', '13:00', '15:00', '18:00', '19:30', '20:30', '21:30', '23:00', '01:00', '03:00',
                      ].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-zinc-500 mb-1 font-medium">
                      Kişi
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-xs font-sans focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 15].map((n) => (
                        <option key={n} value={n}>
                          {n} Kişi
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-sans text-zinc-500 mb-1 font-medium">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Adınız"
                      className="w-full px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-xs font-sans focus:outline-none"
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
                      className="w-full px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-xs font-sans focus:outline-none"
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
                    placeholder="Balkon kenar masa, okey masası vb..."
                    className="w-full px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-xs font-sans focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-heading font-medium text-xs tracking-tight shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-emerald-600" />
                    <span>WhatsApp ile Masanızı Ayırtın</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
