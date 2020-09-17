import React, { useEffect, useRef, useContext } from 'react'
import { Canvas , Container, Button } from './styles'
import { MainContext } from '../../context'
import { v4 as uuidv4 } from 'uuidv4'
const EditImage = () => {

  const { cart, setCart,images, setImages } = useContext(MainContext)
  const canvas = useRef(null)
  useEffect(() => {
    const selectImage = () => {
      const c = canvas.current
      const ctx = c.getContext('2d')
      const img = document.getElementById('scream')
      ctx.drawImage(img, 20, -90)
      ctx.clearRect(0, 0, 50, 50);
    }
    selectImage()
  })

const drop = e => {
  
    e.preventDefault()
    const cardId = e.dataTransfer.getData('card_id')
    const card = document.getElementById(cardId)
    const c = canvas.current
    const ctx = c.getContext('2d')
    ctx.drawImage(card, 168, 160, 120, 120)
    ctx.clearRect(0, 0, 50, 50);
  }

  const dragOver = e => {
    e.preventDefault()
  }
  const handleClick = () => {
    const c = canvas.current
    const dataUrl = c.toDataURL('image/png')
    setImages({
      url: dataUrl,
      price: 100
     })
    setCart([
      ...cart,
        images
    ])
  
  }



  return (
    
    <Container>
    
    <img alt ="canvas" 
    id="scream"
    width="100px" 
    style={{ display: 'none' }} 
    src={require('../../assets/img/playera-canvas.png')} />
    <Canvas 
    id="canvas"
    ref={canvas}
    height="450px" 
    width="450px" 
    onDrop={drop}
    onDragOver={dragOver} />
    <Button onClick={() => handleClick()}>Agregar</Button>
    </Container>
  )
}


export default EditImage
