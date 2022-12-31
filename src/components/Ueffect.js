import React, { useEffect, useState } from "react";
import axios from "axios";
const Ueffect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Felix");
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, [count]);
  return (
    <div>
      How is the data?
      <h1>{data}</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Ueffect;
