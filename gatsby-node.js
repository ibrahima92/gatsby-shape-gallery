const path = require(`path`)
const routes = require(`./src/routes`)

exports.createPages = async ({actions, graphql}) => {
  const {data} = await graphql(`
    query {
      takeshape {
        projects: getProjectList {
          items {
            _id
            name
          }
        }
      }
    }
  `)

  data.takeshape.projects.items.forEach(({_id, name}) => {
    actions.createPage({
      path: routes.projects(name),
      component: path.resolve(`./src/templates/project-template.js`),
      context: {
        projectId: _id,
      },
    })
  })
}
