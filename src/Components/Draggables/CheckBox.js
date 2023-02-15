import React from "react";

const CheckBox = (props) => {
  const checkBoxOnclick = () =>{
    console.log('clicked')
  }
  const checkBoxOnDrag = () => {
    console.log('dragged')
  }
  return(
    <button style={{width:'55px',height:'45px'}} onClick={checkBoxOnclick} draggable={true} onDragEnd={checkBoxOnDrag}>
      <label>Check Box</label>
    </button>
  )
}

export default CheckBox;