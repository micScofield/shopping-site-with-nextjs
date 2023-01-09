/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

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
}

module.exports = nextConfig
