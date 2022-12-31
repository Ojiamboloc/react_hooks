import React, { useEffect, useState } from "react";
import axios from "axios";
const Ueffect = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    console.log("Felix");
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  });
  return <div>How is the data {data}</div>;
};

export default Ueffect;
