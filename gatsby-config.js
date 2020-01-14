module.exports = {
  siteMetadata: {
    title: `Darren Hall`,
    description: `Freelance frontend developer based in Manchester`,
    author: `frontendbeast`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`${__dirname}/src/sass`],
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-sharp`
    },
  ],
}
