import React, { useState, createContext } from "react";
//import App from "../App";
import Login from "./Login";
import User from "./User";
export const AppContext = createContext(null);
const Ucontext = () => {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{username,setUsername}}>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default Ucontext;
