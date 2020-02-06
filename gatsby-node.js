const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        stories: edge.node.fields.stories,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      })
    })

    // story pages:
    let stories = []
    // Iterate through each post, putting all found stories into `stories`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.stories`)) {
        stories = stories.concat(edge.node.frontmatter.stories)
      }
    })
    // Eliminate duplicate stories
    stories = _.uniq(stories)

    // Make story pages
    stories.forEach(story => {
      const storyPath = `/stories/${_.kebabCase(story)}/`

      createPage({
        path: storyPath,
        component: path.resolve(`src/templates/stories.js`),
        context: {
          story
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
