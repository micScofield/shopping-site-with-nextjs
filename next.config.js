/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { i18n } = require('./next-i18next.config')

// Note - Below commented code needs to be used when analyzing bundle. It causes some warnings in the terminal which can be ignored. Command: ANALYZE=true npm run build

// add more plugins as required as a new array below
// const nextConfig = withPlugins([[withBundleAnalyzer]], {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'i.ibb.co',
//         // port: '',
//         pathname: '/**/**',
//       },
//     ],
//   },
//   // Treat SVG file imports as React Components
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [{ loader: '@svgr/webpack', options: { icon: true } }],
//     })

//     return config
//   },
//   // See note for more info on below commented block
//   /*
//     experimental: {
//       forceSwcTransforms: true,
//     },
//     */
//   compiler: {
//     // removeConsole: true,
//   },
// })

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        // port: '',
        pathname: '/**/**',
      },
    ],
  },
  // Treat SVG file imports as React Components
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    return config
  },
  // See note for more info on below commented block
  /*
  experimental: {
    forceSwcTransforms: true,
  },
  */
  compiler: {
    // removeConsole: true,
  },
  i18n,
}

module.exports = nextConfig

// Notes
/*
1. If you need to serve SVG images with the default Image Optimization API - 
images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

2. Enable AVIF support - 
images: {
    formats: ['image/avif', 'image/webp'],
  },

3. Specify device sizes - 
images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
*/
