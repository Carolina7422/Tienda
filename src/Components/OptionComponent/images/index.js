import React from 'react'

function Image(props) {

const dragStart = e =>{
  const target = e.target;

  e.dataTransfer.setData('card_id', target.id);

  setTimeout(() => {
    target.style.display ="none";

  }, 0)
} 

const dragOver = e => {
  e.stopPropagation();
}

  return (
    <img
      id={props.id}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    />
 
   
  )
}

export default Image

