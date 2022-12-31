import React, { useState } from "react";

const Ustate = () => {
  const[inputValue,setInputValue]=useState("Pedro");
 
  let onChange=(event)=>{
    const newValue=event.target.value
    setInputValue(newValue)
  };
  return (
    <div>
        <input placeholder="Enter something..." onChange={onChange}/>
         {inputValue}
        </div>
  );
};

export default Ustate;
