import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import HeroSwiper from '../components/HeroSwiper'
import GallerySwiper from '../components/GallerySwiper'
import '../components/GallerySwiper.css'
import ContactForm from '../components/ContactForm'

export const IndexPageTemplate = ({ heroSwiper, gallerySwiper, biography }) => (
  <div>
    <section id="home" className="section">
      <h1>David Alioth</h1>
      <HeroSwiper slides={heroSwiper.images} />
    </section>
    <section id="stories" className="section">
      <h1>Stories</h1>
      <GallerySwiper slides={gallerySwiper.images} />
    </section>
    <section id="biography" className="section">
      <h1>Biography</h1>
      <p>{biography}</p>
    </section>
    <section id="inquiries" className="section">
      <h1>Inquiries</h1>
      <ContactForm />
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  heroSwiper: PropTypes.shape({
    images: PropTypes.array
  }),
  gallerySwiper: PropTypes.shape({
    images: PropTypes.array
  }),
  biography: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        heroSwiper={frontmatter.heroSwiper}
        gallerySwiper={frontmatter.gallerySwiper}
        biography={frontmatter.biography}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heroSwiper {
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 64) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            title
            model
          }
        }
        gallerySwiper {
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 64) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            title
            model
          }
        }
        biography
      }
    }
  }
`
