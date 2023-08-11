import React from "react";
import Seo from "../../componentes/Seo";
import LayoutDefault from "../../layouts/LayoutDefault";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const queryProjetos = graphql`
  query {
    projetos: allProjetosJson {
      nodes {
        id
        title
        tags
        slug
        images {
          childImageSharp {
            gatsbyImageData(sizes: "400", placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default function ProjetosPage() {
  const { projetos } = useStaticQuery(queryProjetos);
  const [allProjetos, setAllProjetos] = React.useState(projetos);

  const [filtro, setFiltro] = React.useState(["html"]);
  const [projetosFiltrados, setProjetosFiltrados] = React.useState();

  React.useEffect(()=>{
    
  }, [filtro])

  console.log("projetos no use state", allProjetos);

  return (
    <LayoutDefault>
      <h1>Meus projetos</h1>
      <ul>
        {allProjetos &&
          allProjetos.nodes.map((projeto) => (
            <li key={projeto.id}>
              <GatsbyImage
                image={projeto.images[0].childImageSharp.gatsbyImageData}
                alt={`thumb do projeto ${projeto.title}`}
              />
              <h2>{projeto.title}</h2>
              <ul>
                {projeto.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link to={`/projetos/${projeto.slug}`}>Ver projeto</Link>
            </li>
          ))}
      </ul>
    </LayoutDefault>
  );
}

export const Head = () => <Seo title="Página dos projetos" />;
