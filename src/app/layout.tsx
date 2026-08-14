import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ClientToaster } from '@/components/ClientToaster';

export const metadata: Metadata = {
  title: 'Batı Lounge — Zekeriyaköy 7/24 Gastronomi & Lounge',
  description:
    'Batı Lounge Zekeriyaköy; 7/24 kesintisiz lezzet, artisan kahvaltı, şef imzalı etler, açık balkon terası, okey & oyun salonu ve nargile keyfiyle hizmetinizde.',
  keywords: [
    'Batı Lounge',
    'Zekeriyaköy Cafe Restoran',
    '7/24 Açık Restoran Sarıyer',
    'Zekeriyaköy Balkon Teras',
    'Oyun Salonu Okey',
    'Cafe de Paris Bonfile',
    'Serpme Kahvaltı Zekeriyaköy',
    'Nargile Lounge',
  ],
  authors: [{ name: 'Batı Lounge' }],
  openGraph: {
    title: 'Batı Lounge — Zekeriyaköy 7/24 Gastronomi & Lounge',
    description: 'Zekeriyaköy’de 24 saat kesintisiz mutfak, balkon terası ve oyun salonu.',
    url: 'https://batilounge.com',
    siteName: 'Batı Lounge',
    locale: 'tr_TR',
    type: 'website',
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
