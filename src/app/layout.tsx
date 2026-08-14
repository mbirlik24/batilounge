import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ClientToaster } from '@/components/ClientToaster';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://batilounge.com'),
  title: {
    default: 'Batı Lounge — Zekeriyaköy 7/24 Gastronomi & Lounge',
    template: '%s | Batı Lounge Zekeriyaköy',
  },
  description:
    'Batı Lounge Zekeriyaköy; 7/24 kesintisiz mutfak, zengin serpme kahvaltı, özel et yemekleri, açık hava balkon terası, ücretsiz okey & oyun salonu ve nargile keyfiyle Alya Evleri Sarıyer’de hizmetinizde.',
  keywords: [
    'Batı Lounge',
    'Batı Lounge Zekeriyaköy',
    'Zekeriyaköy Cafe Restoran',
    '7/24 Açık Restoran Sarıyer',
    'Zekeriyaköy Balkon Teras',
    'Oyun Salonu Okey Zekeriyaköy',
    'Cafe de Paris Bonfile',
    'Serpme Kahvaltı Zekeriyaköy',
    'Nargile Lounge Sarıyer',
    'Alya Evleri Cafe Restoran',
  ],
  authors: [{ name: 'Batı Lounge', url: 'https://batilounge.com' }],
  creator: 'Batı Lounge Zekeriyaköy',
  publisher: 'Batı Lounge Zekeriyaköy',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://batilounge.com',
  },
  openGraph: {
    title: 'Batı Lounge — Zekeriyaköy 7/24 Gastronomi & Lounge',
    description:
      'Zekeriyaköy Alya Evleri’nde 7/24 kesintisiz mutfak, açık balkon terası, okey & oyun salonu ve nargile keyfi.',
    url: 'https://batilounge.com',
    siteName: 'Batı Lounge Zekeriyaköy',
    images: [
      {
        url: 'https://batilounge.com/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Batı Lounge Zekeriyaköy İç Mekan & Teras Atmosferi',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batı Lounge — Zekeriyaköy 7/24 Gastronomi & Lounge',
    description:
      'Zekeriyaköy Alya Evleri’nde 7/24 kesintisiz mutfak, açık balkon terası, oyun salonu ve nargile.',
    images: ['https://batilounge.com/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@300;400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* Preload Critical Hero Assets for Instant Clean Page Load */}
        <link rel="preload" as="image" href="/images/hero.jpg" />
        <link rel="preload" as="image" href="/images/logo-white.png" />
        <link rel="preload" as="image" href="/images/logo-dark.png" />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-black text-[#F5F5F7] overflow-x-hidden antialiased selection:bg-white selection:text-black">
        <ThemeProvider>
          {children}
          <ClientToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
