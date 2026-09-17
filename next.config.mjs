/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react', 'framer-motion', 'sonner'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
