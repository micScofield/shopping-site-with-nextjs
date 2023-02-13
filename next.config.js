/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { i18n } = require('./i18n.config')

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
  productionBrowserSourceMaps: true, // removing this entry won't allow source maps to be downloaded in prod
  output: 'standalone', // https://nextjs.org/docs/advanced-features/output-file-tracing
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

4. Known Browser Bugs
Safari 15+ displays a gray border while loading. Possible solutions:
Use CSS @supports (font: -apple-system-body) and (-webkit-appearance: none) { img[loading="lazy"] { clip-path: inset(0.6px) } }
Use priority if the image is above the fold

Firefox 67+ displays a white background while loading. Possible solutions:
Enable AVIF formats (See point 2)
Use placeholder="blur" (See example in Card component)

5. next-compose-plugins is a prod dependency as it is used in next config which runs on prod
*/
