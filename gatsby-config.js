module.exports = {
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-theme-blog`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-157902376-1`,
        head: true,
        anonymize: false,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://blog.lucasviana.dev",
        sitemap: "https://blog.lucasviana.dev/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Blog do Lucas`,
    author: `Lucas Viana`,
    description: `Um blog sobre tecnologia, produtividade e cotidiano. Produzido e mantido por Lucas Viana © 2020`,
    siteUrl: `https://blog.lucasviana.dev`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/mechamobau`,
      },
      {
        name: `github`,
        url: `https://github.com/mechamobau`,
      },
    ],
  },
}
