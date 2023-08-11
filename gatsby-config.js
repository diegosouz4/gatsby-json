/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Diego Souza | desenvolvedor front-end`,
    description:
      "Olá, me chamo Diego Souza. Um desenvolvedor front-end carioca e apaixonado por tecnologia.",
    siteUrl: `https://dsouza.com.br`,
    image: `/og-diego-souza.jpg`,
    icon: `/favicon.svg`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/img/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projetos`,
        path: `${__dirname}/data/projetos/`,
      },
    },
  ],
};
