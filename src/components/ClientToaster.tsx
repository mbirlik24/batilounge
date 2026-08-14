'use client';

import { Toaster } from 'sonner';

export function ClientToaster() {
  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        className:
          'border border-black/[0.08] dark:border-white/[0.12] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md text-xs font-sans shadow-apple-md',
      }}
    />
  );
}
