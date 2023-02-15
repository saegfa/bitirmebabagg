import React from "react";

const Input = (props) => {
  const inputOnclick = () =>{
    console.log('clicked')
  }
  const inputOnDrag = () => {
    console.log('dragged')
  }
  return(
    <button style={{width:'55px',height:'45px'}} onClick={inputOnclick} draggable={true} onDragEnd={inputOnDrag}>
      <label>Input</label>
    </button>
  )
}

export default Input;