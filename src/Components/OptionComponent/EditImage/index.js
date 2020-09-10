import React, { useEffect } from 'react'
import { Image, Container, Button } from './styles'

const EditImage = (props) => {


useEffect(() => {
    const selectImage = () => {
      let c = document.getElementById("canvas")
      let ctx = c.getContext("2d")
      let img = document.getElementById("scream")
      ctx.drawImage(img, 50, -60)
      img.style.display='none'
      }
 selectImage()
  
  })

  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id')
    
    const card = document.getElementById(card_id);
    card.style.display= 'block';
    
    e.target.appendChild(card)
    }
  
  
  const dragOver = e => {
    e.preventDefault();
  }
return (
  
 <div style={{ position:"relative", justifyContent:"center", alignItems:"center"}}>
    <img id="scream" width="300px" src={require('../../../assets/img/playera-canvas.png')} />
    <Image id="canvas" height="500px" width="500px"
    >

</Image>
  <div
    id={props.id}
    onDrop={drop}
    onDragOver={dragOver}
    style={{ border: "1px solid black", 
    
    position:"absolute",
    bottom:200,
    left:180,
    height:150,
    width:150,
  }}
    >
    Drop Zone
  </div>
  </div>
  )
}

export default EditImage
  {/*<Container id={id} onDrop={drop} onDragOver={dragOver}>
    <img id="scream" width="100px" src={require('../../../assets/img/playera-canvas.png')} />
     <Image id="canvas" height="500px" width="500px">

      </Image>
      <Button>Agregar al carrito</Button>
</Container>*/}
