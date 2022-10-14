/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['my-portfolio-pi-murex.vercel.app'],
  },
}

module.exports = nextConfig
