module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-157902376-1",
        head: true,
        anonymize: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "blog.lucasviana.dev",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Blog do baú`,
    author: `Lucas Viana`,
    description: `Um blog sobre tecnologia, produtividade e cotidiano. Produzido e mantido por Lucas Viana © 2019`,
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
