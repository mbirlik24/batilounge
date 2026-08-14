'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import BentoGallery from '@/components/BentoGallery';
import StoryAtmosphere from '@/components/StoryAtmosphere';
import InstagramFeed from '@/components/InstagramFeed';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import ReservationSection from '@/components/ReservationSection';
import ContactFooter from '@/components/ContactFooter';
import ReservationModal from '@/components/ReservationModal';

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-200">
      {/* Fixed / Floating Navbar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Hero Section */}
      <Hero onOpenReservation={handleOpenReservation} />

      {/* Verified Google Ratings & Guest Testimonials (Placed Right After Hero) */}
      <Testimonials />

      {/* Bento Gallery with Fullscreen Lightbox (Placed Right Under Google Ratings) */}
      <BentoGallery />

      {/* Brand Story & 24/7 Atmosphere (Moved Down) */}
      <StoryAtmosphere />

      {/* Elfsight Instagram Feed */}
      <InstagramFeed />

      {/* About Us Section */}
      <AboutSection />

      {/* Complete Interactive Menu Section (Right above Reservation) */}
      <MenuSection onOpenReservation={handleOpenReservation} />

      {/* Interactive WhatsApp Reservation Section at Bottom */}
      <ReservationSection />

      {/* Contact, Google Maps & Footer */}
      <ContactFooter />

      {/* Global Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
      />
    </main>
  );
}
