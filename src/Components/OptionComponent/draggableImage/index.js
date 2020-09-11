import React from 'react'
import PropTypes from 'prop-types'
function ImageDraggable ({ src, id, draggable }) {
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
    <div
      style={{
        border: '1px solid black',
        margin: '0em',
        padding: '2em'
      }}
    >
      <img
        width="100px"
        src={src}
        id={id}
        draggable={draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
      />
    </div>

  )
}

ImageDraggable.propTypes = {
  id: PropTypes.string.isRequired,
  draggable: PropTypes.func.isRequired,
  src: PropTypes.any
}

export default ImageDraggable
