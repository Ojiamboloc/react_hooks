import React, { useRef } from "react";

const Uref = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
    inputRef.current.value="";
    //console.log(inputRef.current.value);
  };
  return (
    <div>
      <h1>Ojiambo Felix</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default Uref;
