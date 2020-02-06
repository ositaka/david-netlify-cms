import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import StoryGallery from '../components/StoryGallery'

export const StoryGalleryTemplate = ({ storyGallery }) => (
  <>
    <StoryGallery slides={stories.images} />
  </>
)

StoryGalleryTemplate.propTypes = {
  stories: PropTypes.shape({
    images: PropTypes.array
  })
}

const StoryGallery = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <StoryGalleryTemplate images={frontmatter.stories} />
    </Layout>
  )
}

StoryGallery.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default StoryGallery

export const pageQuery = graphql`
  query StoryGalleryByID($id: String!) {
    markdownRemark(
      id: { eq: $id }
      frontmatter: { templateKey: { eq: "story-gallery" } }
    ) {
      frontmatter {
        stories {
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            model
          }
        }
      }
    }
  }
`
