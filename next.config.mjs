/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', '@radix-ui/react-*'],
  },
  output: 'standalone',
  distDir: '.next',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

export default nextConfig
