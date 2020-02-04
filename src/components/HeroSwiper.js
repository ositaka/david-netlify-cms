import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

const HeroSwiper = ({ slides }) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 3800,
      disableOnInteraction: false
    },
    effect: 'fade',
    speed: 3200
  }

  return (
    <Swiper {...params}>
      {slides.map(image => (
        <div key={image.title}>
          <PreviewCompatibleImage imageInfo={image} />
        </div>
      ))}
    </Swiper>
  )
}

HeroSwiper.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string
    })
  )
}

export default HeroSwiper
