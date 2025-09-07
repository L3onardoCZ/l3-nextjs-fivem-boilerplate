/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  assetPrefix: './', // uncomment when building for production, comment for live changes in developmnent
  basePath: '', // uncomment when building for production, comment for live changes in developmnent
  images: {
    unoptimized: true,
  },
  experimental: {
    reactCompiler: true,
  },
}

module.exports = nextConfig  // CommonJS export