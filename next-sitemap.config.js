/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL, 
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/admin"], 

  transform: async (config, path) => {
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
    };
  },
};
