import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-pwa-poc`,
    siteUrl: `https://www.yourdomain.tld`
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
      precachePages: ['**/*']
    }
  }]
};

export default config;
