import React from "react";
import { Router, Routes } from "react-router-dom";
import { Responsif } from "./Responsif";


const App = () => {
  return (
    <Routes>
      <Router path ="/" element={<Responsif/>}/>
    </Routes>
  )
}

export default App