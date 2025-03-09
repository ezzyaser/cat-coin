// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ["coin-images.coingecko.com"],
//   },
// };


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['coin-images.coingecko.com'], // أضف النطاق هنا
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        pathname: '/coins/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
