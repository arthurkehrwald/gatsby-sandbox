/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Sandbox`,
    description: `To learn how to use Gatsby`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
    lang: `en`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
