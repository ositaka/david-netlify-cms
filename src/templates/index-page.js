import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import HeroSlider from '../components/HeroSlider'
import Gallery from '../components/Gallery'
import GallerySwiper from '../components/GallerySwiper'
import ContactForm from '../components/ContactForm'

export const IndexPageTemplate = ({
  slideshow,
  gallerySwiper,
  gallery,
  biography,
}) => (
  <div>
    <section id="home" className="section">
      <h1>David Alioth</h1>
      <HeroSlider />
    </section>
    <section id="dsjdshkdsjahdsalkjdasldsadsajlkdsajsadldasj" className="section">
      <h1>Stories</h1>
      <GallerySwiper gridItems={gallerySwiper.images} />
    </section>
    <section id="stories" className="section">
      <h1>Stories</h1>
      <Gallery gridItems={gallery.images} />
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
  slideshow: PropTypes.shape({
    slides: PropTypes.array,
  }),
  gallerySwiper: PropTypes.shape({
    images: PropTypes.array,
  }),
  gallery: PropTypes.shape({
    images: PropTypes.array,
  }),
  biography: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        slideshow={frontmatter.slideshow}
        gallerySwiper={frontmatter.gallerySwiper}
        gallery={frontmatter.gallery}
        biography={frontmatter.biography}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        gallerySwiper {
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 360, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            model
          }
        }
        gallery {
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 360, quality: 64) {
                  ...GatsbyImageSharpFluid
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
