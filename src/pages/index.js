import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"

const IndexPage = ({ data }) => {
  const {
    takeshape: {
      projects: { items },
    }
  } = data

  return (
    <Layout>
      <SEO title="Home" />
      <div className="project-container">
        {items.map(project => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    takeshape {
      projects: getProjectList {
        items {
          _id
          name
          startDate
          coverImage {
            description
            path
            fixed(width: 300, height: 200) {
              ...GatsbyTakeShapeImageFixed
            }
          }
        }
      }
    }
  }
`
