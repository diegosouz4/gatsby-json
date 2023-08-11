import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          icon
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
