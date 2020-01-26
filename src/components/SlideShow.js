import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const SlideShow = ({ gridItems }) => (
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
        </section>
      </div>
    ))}
  </div>
)

SlideShow.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
}

export default SlideShow
