import React from "react";
import Seo from "../componentes/Seo";
import LayoutDefault from "../layouts/LayoutDefault";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../assets/css/style.scss";

export default function HomePage() {
  const { projetos } = useStaticQuery(queryProjetos);

  console.log(projetos);

  return (
    <LayoutDefault>
      <h1>home page</h1>
      <nav>
        <ul>
          {projetos &&
            projetos.nodes.map(({ id, title, slug, images }) => (
              <li key={id}>
                <GatsbyImage
                  image={images[0].childImageSharp.gatsbyImageData}
                  alt="teste"
                />
                <Link to={`/projetos/${slug}`}>{title}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </LayoutDefault>
  );
}

export const Head = () => <Seo title="Home page" />;

const queryProjetos = graphql`
  query {
    projetos: allProjetosJson {
      nodes {
        title
        slug
        id
        images {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 450)
          }
        }
      }
    }
  }
`;
