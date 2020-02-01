import React from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

const HeroSlider = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    spaceBetween: 30,
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
      <div>
        <img src="/img/blog-index.jpg" />
      </div>
      <div>
        <img src="/img/home-jumbotron.jpg" />
      </div>
      <div>
        <img src="/img/jumbotron.jpg" />
      </div>
    </Swiper>
  )
}

export default HeroSlider
