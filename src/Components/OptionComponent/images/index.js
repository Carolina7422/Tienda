import React from 'react'
import { Container, ContentImage, Image } from './styles'
// import PropTypes from 'prop-types'

const Images = ({ img }) => {
  return (
      <ContentImage>
        <Image width="100px" src={img.url}/>
      </ContentImage>

  )
}

export default Images
