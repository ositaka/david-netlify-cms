import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

import '../../components/GallerySwiper.css'

const IndexPagePreview = ({ entry /*, getAsset */ }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <>
        <IndexPageTemplate
          // heroSwiper={data.heroSwiper || { images: [] }}
          gallerySwiper={data.gallerySwiper || { images: [] }}
          biography={data.biography}
        />
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

  // heroSwiper: PropTypes.shape({
  //   images: PropTypes.array
  // }),
  gallerySwiper: PropTypes.shape({
    images: PropTypes.array
  }),
  biography: PropTypes.string

  // test
  // getAsset: PropTypes.func
}

export default IndexPagePreview
