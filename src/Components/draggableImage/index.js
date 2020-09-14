import React from 'react'
import PropTypes from 'prop-types'
import { Img } from './styles'
function ImageDraggable({ src, id, draggable }) {
  const dragStart = e => {
    const target = e.target

    e.dataTransfer.setData('card_id', target.id)

    setTimeout(() => {
      target.style.display = 'none'
    }, 0)
  }

  const dragOver = e => {
    e.stopPropagation()
  }

  return (
    <Img
        src={src}
        id={id}
        draggable={draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
      />


  )
}

ImageDraggable.propTypes = {
  id: PropTypes.string.isRequired,
  draggable: PropTypes.bool.isRequired,
  src: PropTypes.any
}

export default ImageDraggable
