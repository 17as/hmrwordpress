/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hmr.schanda.org.uk'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
