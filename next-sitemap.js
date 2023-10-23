module.exports = {
  siteUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/`,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  // exclude: ["/protected-page", "/awesome/secret-page"],

  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ? config.alternateRefs : [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      // {
      //   userAgent: "test-bot",
      //   allow: ["/path1", "/path2"],
      // },
      // {
      //   userAgent: "black-listed-bot",
      //   disallow: ["/sub-path-1", "/path-2"],
      // },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/server-sitemap.xml`,
    ],
  },
};
