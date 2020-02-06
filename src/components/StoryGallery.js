import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

const StoryGallery = ({ images }) => {
  const params = {
    slidesPerView: 1.8,
    loop: true,
    speed: 900,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  return (
    <Swiper {...params}>
      {images.map(image => (
        <div key={image.title}>
          <h4>{image.title}</h4>
          <p>{image.model}</p>
          <PreviewCompatibleImage imageInfo={image} />
        </div>
      ))}
    </Swiper>
  )
}

StoryGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      model: PropTypes.string
    })
  )
}

export default StoryGallery
