import React, { useEffect, useRef,useContext } from 'react'
import { Canvas , Container, Button } from './styles'
import { MainContext } from '../../context'
import { v4 as uuid4 } from 'uuid'

const EditImage = ({ createNewProduct }) => {

  const { newProduct, setNewProduct } = useContext(MainContext)
  const canvas = useRef(null)
  useEffect(() => {
    const selectImage = () => {
      const c = canvas.current
      const ctx = c.getContext('2d')
      const img = document.getElementById('scream')
      img.crossOrigin = "anonymous";
      ctx.drawImage(img, 20, -90)
      ctx.clearRect(0, 0, 50, 50);
    }
    selectImage()
  })

const drop = e => {
  
    e.preventDefault()
    debugger
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

  /*const handleClick = e => {
    e.preventDefault() 
    const c = canvas.current
    const dataUrl = c.toDataURL('image/png')
    const cross = dataUrl.crossOrigin="anonymous"
   setNewProduct({
      ...newProduct,
      img: dataUrl,
      price:200
    })
  newProduct.id = uuid4()
    console.log(newProduct)
  
  }*/
  /*const handleChange = () => {
    const c = canvas.current
    c.crossOrigin = "anonymous";
    const dataUrl = c.toDataURL('image/png');
    setNewProduct({
      ...newProduct,
      img: dataUrl,
      price:200
    })
  }*/


  return (
    
    <Container>
    
      <img id="scream" width="100px" style={{ display: 'none' }} src={require('../../assets/img/playera-canvas.png')} />
    <Canvas 
    id="canvas"
    ref={canvas}
    height="450px" 
    width="450px" 
    onDrop={drop}
    onDragOver={dragOver} />
      <Button>Agregar</Button>
    </Container>
  )
}


export default EditImage
