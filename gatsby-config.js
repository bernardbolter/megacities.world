module.exports = {
  siteMetadata: {
      title: `MEGACITIES - composite country portraits`,
    siteUrl: `https://www.megacities.world`
  },
  plugins: ["gatsby-plugin-sass", 
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-52011615-3 "
    }
  }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-react-helmet", 
  "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/globe.svg"
    }
  }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/data/`,
    },
  }]
};