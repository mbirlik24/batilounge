/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-geist)', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['var(--font-poppins)', 'Poppins', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Geist Mono', 'monospace'],
      },
      colors: {
        apple: {
          bg: '#FFFFFF',
          section: '#F5F5F7',
          card: '#FFFFFF',
          dark: '#1D1D1F',
          gray: '#86868B',
          lightGray: '#F5F5F7',
          border: 'rgba(0, 0, 0, 0.08)',
          borderDark: 'rgba(255, 255, 255, 0.12)',
          blue: '#0071E3',
          blueHover: '#0077ED',
          pill: '#E5E5EA',
        },
      },
      borderRadius: {
        'apple-sm': '12px',
        'apple-md': '18px',
        'apple-lg': '24px',
        'apple-xl': '32px',
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'apple-md': '0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
        'apple-lg': '0 16px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
      },
      transitionTimingFunction: {
        'apple-ease': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'apple-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.1)',
      },
    },
  },
  plugins: [],
};
