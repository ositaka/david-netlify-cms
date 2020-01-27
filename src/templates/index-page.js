import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'

export const IndexPageTemplate = ({
  slideshow,
  gallery,
  biography,
}) => (
  <div>
    <section id="home" className="section">
      <h1>David Alioth</h1>
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
