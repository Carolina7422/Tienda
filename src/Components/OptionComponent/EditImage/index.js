import React, { useEffect, useRef } from 'react'
import { Image } from './styles'
import PropTypes from 'prop-types'

const EditImage = ({ id }) => {
  const canvas = useRef(null)
  useEffect(() => {
    const selectImage = () => {
      const c = canvas.current
      const ctx = c.getContext('2d')
      const img = document.getElementById('scream')
      ctx.drawImage(img, 50, -60)
    }
    selectImage()
  })

  const drop = e => {
    e.preventDefault()
    const cardId = e.dataTransfer.getData('card_id')

    const card = document.getElementById(cardId)
    const c = canvas.current
    const ctx = c.getContext('2d')
    ctx.drawImage(card, 0, 0, 150, 150)
  }

  const dragOver = e => {
    e.preventDefault()
  }
  return (

    <div style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
      <img id="scream" width="300px" style={{ display: 'none' }} src={require('../../../assets/img/playera-canvas.png')} />
      <Image id="canvas" ref={canvas} height="500px" width="500px" onDrop={drop} onDragOver={dragOver} />
      {/* <div
        id={id}
        onDrop={drop}
        onDragOver={dragOver}
        style={{
          border: '1px solid black',

          position: 'absolute',
          bottom: 200,
          left: 180,
          height: 150,
          width: 150
        }}
      >
        Drop Zone
      </div> */}
    </div>
  )
}

EditImage.propTypes = {
  id: PropTypes.string.isRequired
}
export default EditImage
/* <Container id={id} onDrop={drop} onDragOver={dragOver}>
    <img id="scream" width="100px" src={require('../../../assets/img/playera-canvas.png')} />
    <Image id="canvas" height="500px" width="500px">

    </Image>
    <Button>Agregar al carrito</Button>
</Container> */
