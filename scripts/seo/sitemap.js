const fs = require('fs-extra')
const formatDate = require('./formatDate')
const getPathsObject = require('./getPathsObject')
// const getPathsObject = require('scripts/seo/getPathsObject')

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://domain.com/sitemap_local.xml
Disallow:`

fs.writeFileSync('public/robots.txt', robotsTxt)
console.log('robots.txt saved!')

// SITEMAP.XML
const pathsObj = getPathsObject()
const today = formatDate(new Date())
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pathsObj)
    .filter((path) => path !== '/_document' && path !== '/_app')

    .map(
      (path) => `<url>
    ${
      path === '/index'
        ? `<loc>https://domain.com</loc>`
        : `<loc>https://domain.com${path}</loc>`
    }
    <lastmod>${
      pathsObj[path].lastModified
        ? formatDate(new Date(pathsObj[path].lastModified))
        : today
    }</lastmod>
  </url>`
    )}
</urlset>`

fs.writeFileSync('public/sitemap_local.xml', sitemapXml)
console.log('sitemap_local.xml saved!')
