import React, { useLayoutEffect, useRef, useEffect } from "react";

const Ulayouteffect = () => {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    inputRef.current.value = "Hello Ojiambo";
  }, []);
  return (
    <div>
      <input ref={inputRef} value="Felix" style={{ width: 400, height: 400 }} />
    </div>
  );
};

export default Ulayouteffect;
