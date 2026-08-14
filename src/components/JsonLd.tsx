import React from 'react';

export default function JsonLd() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Restaurant', 'CafeOrCoffeeShop', 'BarOrPub'],
        '@id': 'https://batilounge.com/#restaurant',
        name: 'Batı Lounge Zekeriyaköy',
        alternateName: 'Batı Lounge',
        url: 'https://batilounge.com',
        logo: 'https://batilounge.com/images/logo-dark.png',
        image: 'https://batilounge.com/images/hero.jpg',
        description:
          'Zekeriyaköy Alya Evleri’nde 7 gün 24 saat kesintisiz mutfak, açık balkon terası, ücretsiz okey & oyun salonu, özel et yemekleri, serpme kahvaltı ve nargile keyfi.',
        telephone: '+905418284342',
        priceRange: '₺₺',
        servesCuisine: [
          'Serpme Kahvaltı',
          'Steak & Izgara',
          'Dünya Mutfağı',
          'Nargile & İçecekler',
          'Tatlı & Dondurma',
        ],
        hasMenu: 'https://batilounge.com/menu',
        acceptsReservations: 'True',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Alya Evleri, Tatar Sk. No:3',
          addressLocality: 'Zekeriyaköy, Sarıyer',
          addressRegion: 'İstanbul',
          postalCode: '34450',
          addressCountry: 'TR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 41.2003,
          longitude: 29.0289,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '5',
          bestRating: '5',
          worstRating: '1',
        },
        sameAs: [
          'https://instagram.com/batilounge',
          'https://www.google.com/maps/place/?q=place_id:ChIJU3RgEYvhn0ARRzRkoC05-vo',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://batilounge.com/#website',
        url: 'https://batilounge.com',
        name: 'Batı Lounge Zekeriyaköy',
        description: '7/24 Kesintisiz Gastronomi & Lounge Keyfi',
        publisher: {
          '@id': 'https://batilounge.com/#restaurant',
        },
        inLanguage: 'tr-TR',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
