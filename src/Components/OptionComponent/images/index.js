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
    <div
    style={{ border: "1px solid black", 
    margin: "0em",
    padding: "2em" }}
    >
    <img
      width="100px"
      src={props.src}
      id={props.id}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    />
    </div>
 
   
  )
}

export default Image

