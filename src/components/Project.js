import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import routes from '../routes'

const Project = ({ project }) => {
    const { name, coverImage, description } = project
  return (
    <Link to={routes.projects(name)} className="project-preview">
      <Img
        className="project-preview--cover"
        style={{ width: "100%" }}
        fixed={coverImage.fixed}
        alt={description}
      />
      <h1 className="project-preview--title">{name}</h1>
    </Link>
  )
}

export default Project
