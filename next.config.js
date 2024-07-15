/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pharmprom.ru',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
