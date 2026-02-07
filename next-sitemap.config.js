/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: 'https://zekhoi.dev',
  generateRobotsTxt: false, // We have robots.txt manually
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 50000,
  exclude: ['/admin', '/.next'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/.next']
      }
    ],
    additionalSitemaps: []
  },
  alternateRefs: []
};

module.exports = config;
