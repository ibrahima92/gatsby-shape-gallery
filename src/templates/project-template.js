import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ProjectTemplate = ({ data }) => {
  const {
    takeshape: {
      project: { coverImage, name, description },
    },
  } = data
  return (
    <Layout>
    <SEO title={name} />
      <article className="project">
        <header>
          {coverImage ? (
            <Img style={{height: '22rem'}} fluid={coverImage.fluid} />
          ) : (
            ``
            )}
            <h1 className="project--title">{name}</h1>
            </header>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </article>
    </Layout>
  )
}

export default ProjectTemplate;

export const query = graphql`
  query($projectId: ID!) {
    takeshape {
      project: getProject(_id: $projectId) {
        name
        coverImage {
          description
          path
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyTakeShapeImageFluid
          }
        }
        description: descriptionHtml
      }
    }
  }
`
