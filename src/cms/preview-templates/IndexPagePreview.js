import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import { HeroSwiper } from '../../components/HeroSwiper'
import { GallerySwiper } from '../../components/GallerySwiper'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <>
        <IndexPageTemplate
          heroSwiper={data.heroSwiper || { images: [] }}
          gallerySwiper={data.gallerySwiper || { images: [] }}
          biography={data.biography}
        />
        <HeroSwiper heroSwiper={data.heroSwiper || { images: [] }} />
        <GallerySwiper heroSwiper={data.gallerySwiper || { images: [] }} />
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
}

export default IndexPagePreview
