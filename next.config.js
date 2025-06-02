/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/aleeza45/unsw-entsoc/**',
      },
    ],
  },
}

module.exports = nextConfig
