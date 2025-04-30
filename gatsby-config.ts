import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  //this should be undefined when running locally. Ran into issues while testing on device.
  pathPrefix: "gatsby-pwa-poc",
  siteMetadata: {
    title: `gatsby-pwa-poc`,
    siteUrl: `https://motorizedwandoffury.github.io/gatsby-pwa-poc/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "name": "Gatsby PWA POC",
      "icon": "src/images/icon.png",
      "start_url": "/",
      "display": "standalone"
    }
  }, {
    resolve: 'gatsby-plugin-offline',
    options: {
      precachePages: ['**/*','**/another_page/*', '**/404/*']
    }
  }]
};

export default config;
