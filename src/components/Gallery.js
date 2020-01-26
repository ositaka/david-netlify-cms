import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Gallery = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(image => (
      <div key={image.title} className="column is-3">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '360px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={image} />
            </div>
          </div>
          <h4>{image.title}</h4>
          <p>{image.model}</p>
        </section>
      </div>
    ))}
  </div>
)

Gallery.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      model: PropTypes.string,
    })
  ),
}

export default Gallery
