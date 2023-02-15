import React from "react";

const Text = (props) => {
  const textOnclick = () =>{
    console.log('clicked')
  }
  const textOnDrag = () => {
    console.log('dragged')
  }
  return(
    <button style={{width:'55px',height:'45px'}} onClick={textOnclick} draggable={true} onDragEnd={textOnDrag}>
      <label>Text</label>
    </button>
  )
}

export default Text;