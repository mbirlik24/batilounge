import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-heading font-light mb-4 text-pink-600 dark:text-pink-400">404</h1>
        <h2 className="text-2xl font-heading font-normal mb-2">Sayfa Bulunamadı</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
          Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-sans font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2 shadow-apple-sm"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}
