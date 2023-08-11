import React from "react";
import { Link, graphql } from "gatsby";
import LayoutDefault from "../../layouts/LayoutDefault";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ProjetoPage({ data }) {
  console.log(data);
  return (
    <>
      <LayoutDefault>
        <h1>{data.projeto.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: data.projeto.descricao }} />

        {data.projeto.tags && (
          <ul>
            {data.projeto.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        {data.projeto.images && (
          <section>
            {data.projeto.images.map((img, index) =>
              img ? (
                index > 0 ? (
                  <GatsbyImage
                    image={img.childImageSharp.gatsbyImageData}
                    alt={`imagem do projeto ${data.projeto.title} ${index}`}
                  />
                ) : (
                  ""
                )
              ) : (
                ""
              )
            )}
          </section>
        )}
        <Link to="/">Back to home</Link>
      </LayoutDefault>
    </>
  );
}

export const query = graphql`
  query ($slug: String) {
    projeto: projetosJson(slug: { eq: $slug }) {
      title
      slug
      tags
      descricao
      images {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
